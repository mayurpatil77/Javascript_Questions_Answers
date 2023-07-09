function findLargestNumber(arr) {
    return Math.max(...arr);
  }
  
  const numbers = [3, 8, 2, 10, 5];
  const largestNumber = findLargestNumber(numbers);
  console.log(largestNumber); // Output: 10
  