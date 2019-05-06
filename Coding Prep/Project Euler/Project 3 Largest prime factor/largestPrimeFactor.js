// This function generates the prime factors in a number..
// The function returns the largest prime factor number.

// This is a stand-alone JavaScript file. It can be run in node.js.
// At the terminal prompt, type: node filename.js.
// Note: you must be in the subdirectory where the JavaScript file is located.


function largestPrimeFactor(number) {
  let prime = 2,
    max = 1;
  while (prime <= number) {
    if (number % prime == 0) {
      max = prime;
      number = number / prime;
    } else prime++; //Only increment the prime number if the number isn't divisible by it
  }
  return max;
}

console.log(largestPrimeFactor(2)); // returns 2
console.log(largestPrimeFactor(3)); // returns 3
console.log(largestPrimeFactor(5)); // returns 5
console.log(largestPrimeFactor(7)); // returns 7
console.log(largestPrimeFactor(13195)); // returns 29
console.log(largestPrimeFactor(600851475143)); // returns 6857
