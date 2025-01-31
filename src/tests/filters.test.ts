import { parseQuery } from "../filters"  
import { matchesFilters } from "../filters"  
import { properties } from "../data"  
import { Filters } from "../types"  

describe("Real Estate Filters", () => {
    test("parseQuery should correctly parse multiple filters", () => {
        const query = "price < 3000, lighting = high, must include pool"  
        const filters= {
            price: { "<": 3000 },
            lighting: "high",
            amenities: {pool: true}
        } as Filters
        expect(parseQuery(query)).toEqual(filters)
    })  
    test("parseQuery should correctly parse filters for price, rooms, and bathrooms", () => {
        const query = "price < 1000000, rooms > 3, bathrooms = 2" 
        const filters = {
            price: { "<": 1000000 },
            rooms: { ">": 3 },
            bathrooms:  { "=": 2 },
        } as Filters 
        expect(parseQuery(query)).toEqual(filters) 
    }) 
    test("should correctly apply equal, less than, and greater than operators", () => {
        const query = "price = 1500000, squareFootage < 1200, rooms > 2" 
        const filters = {
            price: { "=": 1500000 },
            squareFootage: { "<": 1200 },
            rooms: { ">": 2 },
        } 
        expect(parseQuery(query)).toEqual(filters) 
    }) 
    test("parseQuery should correctly parse multiple amenities filters", () => {
        const query = "must include pool, garage" 
        const filters = {
            amenities: { pool: true, garage: true },
        } as Filters 
        expect(parseQuery(query)).toEqual(filters) 
    }) 
    test("matchesFilters should return correct properties based on multiple amenities filters", () => {
        const filters = {
            amenities: { pool: true, garage: true },
        } as Filters 
        const matchingProperties = properties.filter(p => matchesFilters(p, filters)) 
        expect(matchingProperties.length).toBeGreaterThan(0) 
        matchingProperties.forEach(property => {
            expect(property.amenities.pool).toBe(true) 
            expect(property.amenities.garage).toBe(true) 
        }) 
    }) 

    test("parseQuery should handle distance filters", () => {
        const query = "Distance < 10km from 34.0522 -118.2437"  
        const filters = parseQuery(query)  

        expect(filters.location).toEqual({
            distance: [34.0522, -118.2437],
            maxDistance: 10,
            operator: "<"
        })  
    })  

    test("matchesFilters should correctly filter by distance", () => {
        const filters = {
            location: {
                distance: [34.0522, -118.2437],
                maxDistance: 10,
                operator: "<"
            }
        } as Filters

        const matchingProperties = properties.filter(p => matchesFilters(p, filters))  

        expect(matchingProperties.length).toBeGreaterThan(0)  
    })  
})  
