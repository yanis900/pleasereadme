// greeting.ts

// Define an interface for a person
interface Person {
    firstName: string;
    lastName: string;
    age: number;
  }
  
  // A function to create a greeting message
  function greet(person: Person): string {
    return `Hello, ${person.firstName} ${person.lastName}! You are ${person.age} years old.`;
  }
  
  // Create a Person object
  const person: Person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
  };
  
  // Log the greeting message to the console
  console.log(greet(person));
  