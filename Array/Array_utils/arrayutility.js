const arrayUtils = require('array-utils-mayur');

const arr = [1, 2, 3, 4, 5];

console.log('Sum:', arrayUtils.sum(arr));
console.log('Average:', arrayUtils.average(arr));
console.log('Max:', arrayUtils.max(arr));
console.log('Min:', arrayUtils.min(arr));
console.log('Without Duplicates:', arrayUtils.removeDuplicates(arr));
console.log('Unique Elements:', arrayUtils.uniqueElements(arr));
console.log('Merged Arrays:', arrayUtils.mergeArraysWithoutDuplicates(arr, [4, 5, 6]));

// Output 

// Sum: 15
// Average: 3
// Max: 5
// Min: 1
// Without Duplicates: [ 1, 2, 3, 4, 5 ]
// Unique Elements: [ 1, 2, 3, 4, 5 ]
// Merged Arrays: [ 1, 2, 3, 4, 5, 6 ]