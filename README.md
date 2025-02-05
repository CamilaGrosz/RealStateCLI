# Real Estate CLI 🏡
Real Estate CLI is a command-line tool (CLI) designed to filter real estate properties based on multiple 
attributes, supporting advanced filtering with comparison operators, inclusion filters, and keyword-based 
searches.

🔹 Approach: I decided to use TypeScript to ensure type safety and maintainability of the code. 
Additionally, I utilized Jest for unit testing, ensuring code quality and reliability.


Features ✨

✅ Advanced Filtering
Filter properties by price, size, number of rooms, bathrooms, etc.
Comparison operators: "<", ">", "=" for numeric values.

✅ Search by Amenities
Allows searching for properties with specific features typing include pool, jacuzzi, etc accepting 
natural language or equal operator.

✅ Geographical Distance Filtering
Search for properties within a specific radius from a given location typing "Distance >numkm from coor 
coor", or exact location by equal operator(=) coor coor

✅ Search by Description
Find properties that include specific keywords in their description.


Installation and Setup ⚙️


📌 Prerequisites
Before you begin, make sure you have the following installed:

🔹Node.js (>= 18.x)
🔹npm or yarn


🚀 Installation
1️⃣ Clone the repository:

🔹git clone https://github.com/CamilaGrosz/RealStateCLI
🔹cd RealStateCLI

2️⃣ Install dependencies:

🔹npm install

3️⃣ Run the application:

🔹npx ts-node src/cli.ts
🔹Alternatively, you can run it with npm start


📌 Usage

The CLI allows you to perform filtering queries with various parameters.

Example usage: Price < 30000, lighting = low, must include pool, garage and garden, Distance = 2437, Nice 
view.



🛠️ Approach and Architecture

Simple and efficient CLI ✅

Allows for easy interaction via the terminal.



Modularity 🔄

Filters are designed as independent functions to ease maintainability.

Search Efficiency 🏎️

Optimized search to filter properties quickly and without unnecessary overhead.

TypeScript as the main choice 📌

Type safety helps prevent errors and ensures code scalability.



Testing with Jest 🧪

Unit tests are implemented with Jest to ensure the reliability of the system.


🧪 Testing

📌 This project uses Jest with ts-jest for unit testing in TypeScript.

📌 Installation of testing tools

If Jest is not yet installed, you can install it with:

🔹npm install --save-dev jest ts-jest @types/jest


Running tests

To run the tests:
🔹npm test


Test Code Structure
Tests are located in the src/tests/ folder and include validations for:

✅ Filtering properties by price, rooms, and location.

✅ Including amenities.

✅ Handling errors for invalid inputs.

📝 Possible improvements

📌 Some improvements could be:

Add user interface.

Support for JSON or CSV files as data sources.

Implement a REST API server to extend functionality further.


📄 Conclusion

In this project I developed a CLI tool in TypeScript, showcasing key practices like modular programming, 
efficient filtering, error handling, and testing.

I hope this tool and its documentation reflect my skills and demonstrate my ability to develop robust and 
scalable solutions.

💡 Contact:

Email: grosz.camila@gmail.com

Phone: (+54)112166-8405

GitHub: https://github.com/CamilaGrosz
