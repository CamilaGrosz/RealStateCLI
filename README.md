# Real State CLI

Introduction
This is a command-line tool built with TypeScript that filters real estate properties based on various attributes. It allows users to query data using different filtering options, making it a practical tool for searching specific property listings.

Features
Quantifier operations: Supports filtering by equal, less than, and greater than conditions.
Inclusion filters: Allows filtering properties that include specific amenities (e.g., pool, garage).
Text matching: Filters properties based on keywords in their description.
Distance filtering: Uses geographical coordinates to find properties within a given radius.


Installation
To set up the project locally, follow these steps:

Prerequisites
Install Node.js (>= 18.x)
Install npm or yarn


Setup
Clone the repository:
git clone https://github.com/CamilaGrosz/RealStateCLI

Install dependencies:
npm install


Run the CLI tool:
npx ts-node src/cli.ts


Usage
The CLI allows users to filter properties using different parameters. Example usage:
npx ts-node src/cli.ts --rooms=3 --priceLessThan=500000 --hasGarage=true

Assumptions & Design Choices
Simple CLI interface: Designed for easy testing using command-line arguments.
Flexible filtering: Allows multiple filters at once.
Scalability: The filtering logic is modular and can be extended.


Testing
To run tests:
npm test
