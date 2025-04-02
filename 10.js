function createObject(keys, values) {
    let obj = {};
    keys.forEach((key, index) => {
        obj[key] = values[index] || null; // Assign values, default to null if missing
    });
    return obj;
}

// Example usage:
const keysArray = ["name", "age", "city"];
const valuesArray = ["Alice", 25, "New York"];

const result = createObject(keysArray, valuesArray);
console.log(result);
