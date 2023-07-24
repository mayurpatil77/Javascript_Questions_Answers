// Import lodash
const _ = require('lodash');

// Your original function that you want to debounce
function doSomething() {
  // Your code here
  console.log('Doing something...');
}

// Create a debounced version of the function with a specified wait time (in milliseconds)
const debouncedFunction = _.debounce(doSomething, 500);

// Now you can call the debounced function, and it will only execute after a delay of 500ms
debouncedFunction();
