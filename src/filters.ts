import { FilterCondition, LocationFilterCondition, Property, Filters } from "./types"
import { calculateDistance } from "./utils"

//List of possible amenities as key
const amenitiesKeywords = ['pool', 'garage', 'yard', 'balcony', 'gym', 'garden', 'spa']

// Function to parse the query and generate the filter conditions
export function parseQuery(query: string): Filters {
    const filters: Filters = {}
    const regex = /(\w+)\s*(=|>|<)\s*([\w.\-\s]+)/g // Regular expression to match filter conditions if > | < | =
    let match: RegExpExecArray | null 

    //Check if the query includes specific amenities to filter
    const includeMatch = query.match(/include\s+([\w,\s]+)/i)  
    if (includeMatch) {
    const requestedAmenities = includeMatch[1].split(",").map(a => a.trim().toLowerCase())  
    filters.amenities = {}  
        for (const amenity of requestedAmenities) { //Add each valid amenity to the filter
            if (amenitiesKeywords.includes(amenity)) {
                (filters.amenities as Record<string, boolean>)[amenity] = true  
            }
        }
    }

    //Process each condition in the query string using regex
    while ((match = regex.exec(query)) !== null) {
        let key = match[1].toLowerCase()
        let operator = match[2] as "<" | ">" | "="
        let value = match[3].trim().toLowerCase()
        
        //Add filter for distance if it's in the query
        if (key.toLowerCase() === "distance") {
            const distanceRegex = /([\d.]+)km from ([\d.\-]+) ([\d.\-]+)/ // Regex for matching "distance"
            const distanceMatch = value.match(distanceRegex)
            if (distanceMatch) {
                filters.location = {
                    distance: [parseFloat(distanceMatch[2]), parseFloat(distanceMatch[3])], //Location coordinates
                    maxDistance: parseFloat(distanceMatch[1]),
                    operator: operator
                } as LocationFilterCondition
            }

    // Add filter for exact "location" if specified in the query.
    } else if (key.toLowerCase() === "location") {
            const locationValues = value.split(" ").map(Number) // Parse location as latitude and longitude
            if (locationValues.length === 2) {
                filters.location = { '=': locationValues as [number, number] }
            }
            
        //Add filter for Square Footage
        } else if (key.toLowerCase() === "squarefootage") {
            filters.squareFootage = { [operator]: Number(value) }
            
        //Add filter for "description" field
        } else if (key === "description") {
            filters.description = value 
        
        //Add filter for "lighting"
        } else if (key.toLowerCase() === "lighting") { //Add filter by Lighting
            if (["low", "medium", "high"].includes(value.toLowerCase())) {
                filters.lighting = value.toLowerCase() 
            }

        // Add filter for other keys (e.g., price, rooms, bathrooms)
        } else if(typeof filters[key as keyof Filters] === "string"){
            (filters as any)[key] = value
        } else {
            (filters as any)[key] = isNaN(Number(value)) ? value : { [operator]: Number(value) } //Add numeric filter conditions
        }
    }

    //If no filters were set (apart from amenities) and the query is not empty, 
    // assume it's a free-text search on description.
    if (Object.keys(filters).length === 0 && query.trim().length > 0) {
        filters.description = query.trim().toLowerCase() //Use the entire query as a description search term 
    }
    return filters
}

// Function to check if a property matches the specified filters.
export function matchesFilters(property: Property, filters: Filters): boolean {
    // Check if the description matches the filter.
    if (filters.description) {
        const regex = new RegExp(`\\b${filters.description}\\b`, 'i')
        if (!regex.test(property.description)) {
            return false
        }
    }

    //Loop through each filter and check if the property matches
    for (const key in filters) {
        const filter = filters[key as keyof Filters]
        if (!filter) return false        
        if (typeof filter === "object" && !Array.isArray(filter)) { //Check if the filter is an object and apply
            
            //Handle distance filter using the provided location
            if (key === "distance" && "from" in filter) {
                const locationFilter = filter as LocationFilterCondition
                const distance = calculateDistance(property.location, locationFilter.distance!)
                if (locationFilter.operator === ">") {
                    if (distance <= locationFilter.maxDistance!) return false
                } else if (locationFilter.operator === "=") {
                    if (distance !== locationFilter.maxDistance!) return false
                } else {
                    return false
                }
                if (distance === 0) return false

            // Check if location matches the filter.            
            } else if (key === "location" && filter['=']) {
                const locationFilter = filter as LocationFilterCondition
                if(Array.isArray(locationFilter['=']) && locationFilter['='].length === 2){
                    if (!compareLocations(property.location, locationFilter['='])) return false
                } else {
                    return false
                }

            //Check if amenities match the filter
            } else if (key === "amenities" && typeof filter === "object") {
                for (const amenity of Object.keys(filter)) {
                    if (property.amenities[amenity] !== true) {
                        return false  
                    }
                }

            //Check if lighting matches the filter
            }else if (key === 'lighting' && filter['=']) {
                if (typeof filter["="] === "string") {
                    if (property.lighting !== filter["="]) {
                        return false
                    }
                }

            //For numeric filters check if the property meets the condition
            } else {
                const propertyValue = property[key as keyof Property]  
                if (typeof propertyValue === "number" && typeof filter === "object") {
                    if (!compareValues(propertyValue, filter as FilterCondition)) return false
                }
            }
        
        //Handle simple string or array-based filters
        }else{
            if (key === "lighting" && typeof filter === "string") {
                if (property.lighting !== filter) {
                    return false
                }
            } else {
                const propertyValue = property[key as keyof Property]
                if (Array.isArray(propertyValue)) {
                    if (typeof filter === typeof propertyValue[0]) {
                        return propertyValue.includes(filter as any)//Check if the array contains the filter value
                    }
                }          
            }
        }
    }
    //Return true if the property matches all filters
    return true
}

//Function to compare values based on filter conditions
function compareValues(value: any, condition: FilterCondition | LocationFilterCondition): boolean {
    if (typeof value === "number") {
        if ('=' in condition && value !== condition['=']) return false // Exact match check
        if ('>' in condition && value <= condition['>']!) return false // Greater-than check
        if ('<' in condition && value >= condition['<']!) return false // Less-than check
    } else if (typeof value === "string" && '=' in condition) {
        if (typeof condition['='] === "string" && value.toLowerCase() !== condition['=']) {
            return false // String match check
        }
    }
    // Return true if value matches condition
    return true
}

// Function to filter properties based on the given filters.
export function filterProperties(properties: Property[], filters: Filters): Property[]{
    // Apply filters to properties
    const results = properties.filter((property) => matchesFilters(property, filters))
    if (results.length === 0) {
        console.log("No matching properties found. Please refine your search criteria.")
    }
    // Return filtered properties
    return results 
}

// Function to compare locations (latitude and longitude).
function compareLocations(loc1: [number, number], loc2: [number, number]): boolean {
    if (!Array.isArray(loc1) || !Array.isArray(loc2)) return false
    return loc1[0] === loc2[0] && loc1[1] === loc2[1]
}

