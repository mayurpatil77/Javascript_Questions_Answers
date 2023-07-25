// array-utils.js

// Function to calculate the sum of elements in an array
exports.sum = (arr) => {
    return arr.reduce((acc, curr) => acc + curr, 0);
  };
  
  // Function to calculate the average of elements in an array
  exports.average = (arr) => {
    return exports.sum(arr) / arr.length;
  };
  
  // Function to find the maximum value in an array
  exports.max = (arr) => {
    return Math.max(...arr);
  };
  
  // Function to find the minimum value in an array
  exports.min = (arr) => {
    return Math.min(...arr);
  };
  
  // Function to remove duplicates from an array
  exports.removeDuplicates = (arr) => {
    return arr.filter((value, index, self) => self.indexOf(value) === index);
  };
  
  // Function to find unique elements in an array
  exports.uniqueElements = (arr) => {
    return [...new Set(arr)];
  };
  
  // Function to merge two arrays without duplicates
  exports.mergeArraysWithoutDuplicates = (arr1, arr2) => {
    return [...new Set([...arr1, ...arr2])];
  };
  