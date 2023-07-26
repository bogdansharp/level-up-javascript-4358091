// Write your code here
const factorial = (n) => n < 2 ? 1 : n * factorial(n - 1);

// test
console.log(factorial("Hello world".length));
console.log(factorial("Scrabble".length));