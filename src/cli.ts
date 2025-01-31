import * as readline from "readline"
import { parseQuery, filterProperties } from "./filters"
import { properties } from "./data"

// Config CLI interface (to allow interaction with the user)
const read = readline.createInterface({
    input: process.stdin, // Read from the standard input (keyboard)
    output: process.stdout // Write to the standard output (console)
})

// Display the welcome message and provide instructions to the user on how to use the tool.
async function main() {
    console.log("=========================================")
    console.log("🏡 Welcome to the Real Estate CLI! 🏡")
    console.log("=========================================")
    console.log("This tool helps you find Real States based on specific filters.")
    console.log("You can filter by more than one attributes by separating between commas.")
    console.log("You can also add to the Quantity values greater(>), less(<) or equal(=) operator to find your match.\n")
    console.log("List of possible attributes:")
    console.log("-SquareFootage(Quantity)")
    console.log("-Lighting(low | medium | high)")
    console.log("-Price(Quantity)")
    console.log("-Rooms(Quantity)")
    console.log("-Bathrooms(Quantity)")
    console.log("-Location('=' operator for exact coordinates or see the Format example for Distance)")
    console.log("-Description(Feel free to describe)")
    console.log("-Amenities(Use the word include)\n")
    console.log("Format Example: Price < 30000, lighting = low, must include pool, garden, Distance > 10km from 34.0522 -118.2437, Nice view")
    console.log("=========================================\n")

    // Prompt the user to input their property search query
    read.question("Write your real state expectations: ", (query: string)=>{
        try{
            const filters = parseQuery(query) // Parse the user's query into filters using the parseQuery function
            console.log("Parsed filters: ", filters) // Display the parsed filters for verification
            const results = filterProperties(properties, filters) // Filter the properties based on the parsed filters
            console.log("Matching States: ", results) // Display the properties that match the filters
        }catch(error){
            const e = error as Error
            console.error("Error processing query:", e.message)
        }
        read.close() // Close the readline interface after the query has been processed
    })
}     

// Call the main function to start the CLI interaction
main()