function arrayToObject(arr) {
    let obj = {};
    arr.forEach(([key, value]) => {
        obj[key] = value;
    });
    return obj;
}

// Example 2D array
const data = [
    ["name", "Alice"],
    ["age", 25],
    ["city", "New York"]
];

// Convert to object
const result = arrayToObject(data);
console.log(result);
