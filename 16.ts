// Base class: Car
class Car {
    protected make: string;
    protected model: string;

    constructor(make: string, model: string) {
        this.make = make;
        this.model = model;
    }

    public getCarInfo(): string {
        return `Car: ${this.make} ${this.model}`;
    }
}

// Derived class: SportsCar (inherits Car)
class SportsCar extends Car {
    private topSpeed: number;

    constructor(make: string, model: string, topSpeed: number) {
        super(make, model); // Calls the Car constructor
        this.topSpeed = topSpeed;
    }

    public getSportsCarInfo(): string {
        return `${this.getCarInfo()}, Top Speed: ${this.topSpeed} km/h`;
    }
}

// Example usage:
const car1 = new Car("Toyota", "Corolla");
console.log(car1.getCarInfo()); // Output: Car: Toyota Corolla

const car2 = new SportsCar("Ferrari", "488 GTB", 330);
console.log(car2.getSportsCarInfo()); // Output: Car: Ferrari 488 GTB, Top Speed: 330 km/h
