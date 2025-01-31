// Define a Property type which represents the structure of a real estate property.
export type Property = {
    squareFootage: number
    lighting: 'low' | 'medium' | 'high'
    price: number
    rooms: number
    bathrooms: number
    location: [number, number]
    description: string
    amenities: Record<string, boolean>
}

// Define a FilterCondition type which is used for numeric filters (e.g., price, square footage).
export type FilterCondition = {
    '='?: number
    '<'?: number
    '>'?: number
}

// Define a LocationFilterCondition type which allows specifying location-based filters.
export type LocationFilterCondition = {
    distance?: [number, number] //lat, lon
    maxDistance?: number
    operator?: "<" | ">" | "="
    '='?: [number, number] // The exact location to compare properties against (lat, lon).
}

// Define the Filters type as collection of filter conditions to be applied to filter properties.
// It uses Partial<> to allow each filter field to be optional, 
// meaning that the user may not provide all filters in a query.
export type Filters = Partial<{
    squareFootage?: FilterCondition  
    lighting?: FilterCondition | string
    price?: FilterCondition  
    rooms?: FilterCondition  
    bathrooms?: FilterCondition  
    location?: LocationFilterCondition  
    description?: string  
    amenities?: Record<string, boolean>
}>  