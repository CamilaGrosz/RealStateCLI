import { Property } from "./types"


//Example data for testing
export const properties: Property[] = [
    {
        squareFootage: 2100,
        lighting: "medium",
        price: 3700,
        rooms: 4,
        bathrooms: 3,
        location: [36.1699, -115.1398], // Las Vegas, NV
        description: "Luxury condo with incredible views of the strip.",
        amenities: { pool: true, garage: true, yard: false, balcony: true, gym: true },
    },
    {
        squareFootage: 1800,
        lighting: "high",
        price: 4900,
        rooms: 5,
        bathrooms: 4,
        location: [42.3601, -71.0589], // Boston, MA
        description: "Spacious family home with modern finishes and a garden.",
        amenities: { pool: true, garage: true, yard: true, garden: true },
    },
    {
        squareFootage: 1500,
        lighting: "low",
        price: 2800,
        rooms: 3,
        bathrooms: 2,
        location: [39.7392, -104.9903], // Denver, CO
        description: "Cozy house with mountain views and easy access to the city.",
        amenities: { pool: false, garage: true, yard: true, spa: true },
    },
    {
        squareFootage: 2200,
        lighting: "medium",
        price: 4300,
        rooms: 6,
        bathrooms: 5,
        location: [47.6062, -122.3321], // Seattle, WA
        description: "Beautiful waterfront home with a private dock and spa.",
        amenities: { pool: true, garage: true, yard: true, balcony: true, spa: true },
    },
    {
        squareFootage: 2000,
        lighting: "high",
        price: 5500,
        rooms: 4,
        bathrooms: 3,
        location: [33.7490, -84.3880], // Atlanta, GA
        description: "Modern townhouse with luxury finishes and an open floor plan.",
        amenities: { pool: false, garage: true, yard: false, gym: true },
    },
    {
        squareFootage: 2400,
        lighting: "low",
        price: 4200,
        rooms: 5,
        bathrooms: 4,
        location: [34.0522, -118.2437], // Los Angeles, CA
        description: "Spacious home with a private pool and large backyard.",
        amenities: { pool: true, garage: true, yard: true, garden: true, gym: true },
    },
    {
        squareFootage: 1700,
        lighting: "medium",
        price: 3300,
        rooms: 3,
        bathrooms: 2,
        location: [40.7306, -73.9352], // Brooklyn, NY
        description: "Stylish apartment with access to a private garden.",
        amenities: { pool: false, garage: true, yard: true, balcony: true },
    },
    {
        squareFootage: 1900,
        lighting: "high",
        price: 4700,
        rooms: 4,
        bathrooms: 3,
        location: [38.9072, -77.0369], // Washington, D.C.
        description: "Charming house near downtown with a garden and balcony.",
        amenities: { pool: true, garage: true, yard: true, balcony: true, gym: true },
    },
    {
        squareFootage: 1600,
        lighting: "low",
        price: 3200,
        rooms: 3,
        bathrooms: 2,
        location: [32.7157, -117.1611], // San Diego, CA
        description: "Charming home with a large garden and spa.",
        amenities: { pool: true, garage: false, yard: true, spa: true },
    },
    {
        squareFootage: 2100,
        lighting: "high",
        price: 3800,
        rooms: 4,
        bathrooms: 3,
        location: [39.9526, -75.1652], // Philadelphia, PA
        description: "Renovated townhouse with a large balcony and garden.",
        amenities: { pool: false, garage: true, yard: true, balcony: true },
    },
    {
        squareFootage: 2800,
        lighting: "medium",
        price: 5500,
        rooms: 5,
        bathrooms: 4,
        location: [34.0522, -118.2437], // Los Angeles, CA
        description: "Stunning penthouse with panoramic views of the city skyline.",
        amenities: { pool: true, garage: true, yard: false, balcony: true, gym: true },
    },
    {
        squareFootage: 2300,
        lighting: "high",
        price: 4200,
        rooms: 4,
        bathrooms: 3,
        location: [36.7783, -119.4179], // Fresno, CA
        description: "Elegant farmhouse with large front and back yard.",
        amenities: { pool: false, garage: true, yard: true, garden: true },
    },
    {
        squareFootage: 1800,
        lighting: "low",
        price: 3000,
        rooms: 4,
        bathrooms: 2,
        location: [41.8781, -87.6298], // Chicago, IL
        description: "Beautiful brick home with hardwood floors and modern appliances.",
        amenities: { pool: false, garage: true, yard: true, gym: false },
    },
    {
        squareFootage: 2500,
        lighting: "medium",
        price: 5000,
        rooms: 5,
        bathrooms: 4,
        location: [40.7128, -74.0060], // New York, NY
        description: "Spacious loft with exposed beams and large windows.",
        amenities: { pool: true, garage: false, yard: true, balcony: true },
    },
    {
        squareFootage: 2200,
        lighting: "high",
        price: 4500,
        rooms: 4,
        bathrooms: 3,
        location: [33.4484, -112.0740], // Phoenix, AZ
        description: "Modern ranch-style home with incredible desert views.",
        amenities: { pool: true, garage: true, yard: true, spa: true },
    },
    {
        squareFootage: 3100,
        lighting: "low",
        price: 7000,
        rooms: 6,
        bathrooms: 5,
        location: [29.7604, -95.3698], // Houston, TX
        description: "Luxury estate with a home theater, bar, and wine cellar.",
        amenities: { pool: true, garage: true, yard: true, gym: true, spa: true },
    },
    {
        squareFootage: 2000,
        lighting: "high",
        price: 3500,
        rooms: 4,
        bathrooms: 3,
        location: [42.3314, -83.0458], // Detroit, MI
        description: "Charming home near downtown with renovated kitchen and backyard.",
        amenities: { pool: false, garage: true, yard: true, garden: true },
    },
    {
        squareFootage: 1700,
        lighting: "medium",
        price: 3200,
        rooms: 3,
        bathrooms: 2,
        location: [39.9612, -82.9988], // Columbus, OH
        description: "Cozy home with a private backyard and patio area.",
        amenities: { pool: false, garage: false, yard: true, gym: true },
    },
    {
        squareFootage: 2400,
        lighting: "low",
        price: 6000,
        rooms: 5,
        bathrooms: 4,
        location: [34.0522, -118.2437], // Los Angeles, CA
        description: "Contemporary home with a heated pool and private theater.",
        amenities: { pool: true, garage: true, yard: true, balcony: true, gym: true },
    },
    {
        squareFootage: 1600,
        lighting: "high",
        price: 2800,
        rooms: 3,
        bathrooms: 2,
        location: [39.1031, -84.5120], // Cincinnati, OH
        description: "Updated bungalow with a gorgeous kitchen and large backyard.",
        amenities: { pool: false, garage: true, yard: true, spa: true },
    },
    {
        squareFootage: 2900,
        lighting: "medium",
        price: 7500,
        rooms: 6,
        bathrooms: 5,
        location: [25.7617, -80.1918], // Miami, FL
        description: "Elegant waterfront estate with luxurious amenities and a pool.",
        amenities: { pool: true, garage: true, yard: true, garden: true, gym: true, spa: true },
    }
]
