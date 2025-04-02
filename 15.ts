// Base class: Animal
class Animal {
    name: string;
    species: string;

    constructor(name: string, species: string) {
        this.name = name;
        this.species = species;
    }

    display(): void {
        console.log(`${this.name} is a ${this.species}.`);
    }
}

// Derived class: Tiger (extends Animal)
class Tiger extends Animal {
    constructor(name: string) {
        super(name, "Tiger"); // Calls the Animal constructor
    }

    roar(): void {
        console.log(`${this.name} the tiger roars! 🐅`);
    }
}

// Example usage:
const tiger1 = new Tiger("Sheru");
tiger1.display(); // Output: Sheru is a Tiger.
tiger1.roar();    // Output: Sheru the tiger roars! 🐅
