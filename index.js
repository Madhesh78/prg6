// Find the sum of an array using reduce()

const numbers = [10, 20, 30, 40, 50];

let sum = 0;

// Use reduce() to find the sum
sum = numbers.reduce((total, num) => total + num, 0);

// Do not modify this line
module.exports = sum;
