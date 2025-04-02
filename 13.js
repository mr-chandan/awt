function countLetters(str) {
    let letterCount = {};

    for (let char of str) {
        if (char !== " ") { // Ignore spaces
            letterCount[char] = (letterCount[char] || 0) + 1;
        }
    }
    
    return letterCount;
}

// Example usage
const inputString = "hello world";
const result = countLetters(inputString);
console.log(result);
