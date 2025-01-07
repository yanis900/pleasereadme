# Greeting Application

This is a simple TypeScript application that demonstrates how to create a greeting message for a person using an interface.

## Table of Contents

- [Introduction](#introduction)
- [Installation](#installation)
- [Usage](#usage)
- [Code Explanation](#code-explanation)
- [License](#license)

## Introduction

This project defines a `Person` interface and a function `greet` to generate a personalized greeting message. A sample `Person` object is created, and the greeting is logged to the console.

## Installation

To run this project, you need to have Node.js and TypeScript installed on your machine. Follow these steps to set it up:

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/greeting-app.git
   ```

2. Navigate to the project directory:

   ```bash
   cd greeting-app
   ```

3. Install TypeScript globally (if not already installed):

   ```bash
   npm install -g typescript
   ```

4. Compile the TypeScript code into JavaScript:

   ```bash
   tsc src/greeting.ts
   ```

5. Run the compiled JavaScript:

   ```bash
   node src/greeting.js
   ```

## Usage

Once you run the application, it will output a greeting message based on the details of the `Person` object defined in the `greeting.ts` file. You can modify the `firstName`, `lastName`, and `age` attributes in the `person` object to see different messages.

## Code Explanation

- **Person Interface**: Defines the structure of a person with `firstName`, `lastName`, and `age` properties.

    ```typescript
    interface Person {
        firstName: string;
        lastName: string;
        age: number;
    }
    ```

- **greet Function**: Takes a `Person` object as a parameter and returns a greeting string.

    ```typescript
    function greet(person: Person): string {
        return `Hello, ${person.firstName} ${person.lastName}! You are ${person.age} years old.`;
    }
    ```

- **Creating a Person Object**: An example `Person` object is created with sample data.

    ```typescript
    const person: Person = {
        firstName: "John",
        lastName: "Doe",
        age: 30,
    };
    ```

- **Console Log**: The greeting message is logged to the console.

    ```typescript
    console.log(greet(person));
    ```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Feel free to modify the code as you wish or create more complex greetings by expanding the `Person` interface or adding more functionality!