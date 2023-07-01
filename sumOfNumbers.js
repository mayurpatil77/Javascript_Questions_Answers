// Write a function that returns the sum of all numbers in a given array. For example, if the input array is [1, 2, 3, 4, 5], the output should be 15.


let array = [1, 2, 3, 4, 5];
let sum = array.reduce((acc, currentValue) => {
  return acc + currentValue;
});

console.log(sum); // Output: 15


// How it works ? 

// In this code, the reduce() method is called on the array array. It takes a callback function with two parameters: acc (accumulator) and currentValue (the current element being processed).

// The callback function is executed for each element in the array, and the acc variable keeps track of the running sum. On each iteration, the currentValue is added to the acc, and the updated sum is returned.

// Finally, the console.log() statement outputs the sum, which in this case is 15.





