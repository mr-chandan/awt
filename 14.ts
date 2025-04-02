class Student {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age > 0 ? age : 0; // Validate age
    }

    display(): void {
        console.log(`Student Name: ${this.name}, Age: ${this.age}`);
    }
}

// Example usage:
const student1 = new Student("Alice", 20);
student1.display(); // Output: Student Name: Alice, Age: 20

const student2 = new Student("Bob", -5);
student2.display(); // Output: Student Name: Bob, Age: 0


// npm install -g typescript

// tsc student.ts

// node student.js
