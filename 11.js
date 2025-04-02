function findObjectById(array, id) {
    return array.find(obj => obj.id === id) || "Object not found";
}

// Example array of objects
const users = [
    { id: 1, name: "Alice", age: 25 },
    { id: 2, name: "Bob", age: 30 },
    { id: 3, name: "Charlie", age: 22 }
];

// Example usage
const idToFind = 2;
console.log(findObjectById(users, idToFind));
