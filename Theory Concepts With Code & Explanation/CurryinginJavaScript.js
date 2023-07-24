// Currying in JavaScript is a functional programming technique where a function that takes multiple arguments is transformed into a series of functions, each taking a single argument. The curried function returns a new function for each argument until all the arguments are provided, and then it executes the original function.

// Currying is used to partially apply a function, allowing you to create specialized versions of the original function with some of its arguments pre-set. This can make the code more readable, reusable, and concise.

// Here's a simple example to illustrate how currying works in JavaScript:

// Normal function
function add(a, b) {
  return a + b;
}

// Curried version of add function
function curriedAdd(a) {
  return function(b) {
    return a + b;
  };
}

// Usage of curriedAdd
const addFive = curriedAdd(5); // Partially applying 'a' with 5
console.log(addFive(3)); // Output: 8 (5 + 3)
console.log(addFive(7)); // Output: 12 (5 + 7)


// In this example, we create a curried version of the add function called curriedAdd. The curriedAdd function takes the first argument a and returns a new function that takes the second argument b. When we partially apply curriedAdd with 5, it returns a new function addFive, which can then be used to add 5 to any number. This allows us to create specialized versions of the add function with different preset values, making our code more flexible and modular.



// ************************************


// Currying is used in real projects for various reasons as it offers several benefits and helps improve the code structure and maintainability. Here are five common use cases for currying in real-world projects:

// Partial Function Application: Currying allows you to create specialized functions by partially applying certain arguments. This can be useful when dealing with functions that have many parameters, and you want to create variations of the function with some arguments pre-set. It simplifies function calls and reduces repetitive code.

// Modularity and Reusability: By currying functions, you can create smaller, more focused functions that can be reused in different contexts. This improves code modularity, as you can compose functions together to create complex behavior from simpler units.

// Asynchronous Operations: Currying can be beneficial in handling asynchronous operations, such as promises or async/await, where you need to pass additional data to a function but want to defer its execution until the data is available.

// Configuration and Defaults: Currying can be used to create configuration functions that set default values for certain parameters in an application. This can make the code more flexible and allow for easy customization without modifying the original function.

// Functional Composition: Currying enables function composition, where you can chain multiple functions together in a series of transformations. Each curried function can serve as a step in the transformation pipeline, allowing for more declarative and readable code.

// Here's a brief code example demonstrating some of these use cases:


// Use Case 1: Partial Function Application
function add(a, b, c) {
  return a + b + c;
}

const addFiveAndTen = add.bind(null, 5, 10); // Partially applying 'a' and 'b'
console.log(addFiveAndTen(3)); // Output: 18 (5 + 10 + 3)

// Use Case 2: Modularity and Reusability
function multiply(a) {
  return function(b) {
    return a * b;
  };
}

const double = multiply(2);
const triple = multiply(3);

console.log(double(5)); // Output: 10
console.log(triple(5)); // Output: 15

// Use Case 4: Configuration and Defaults
function createLogger(level) {
  return function(message) {
    console.log(`[${level}] ${message}`);
  };
}

const logInfo = createLogger('INFO');
const logError = createLogger('ERROR');

logInfo('This is an informational message.'); // Output: [INFO] This is an informational message.
logError('An error occurred.'); // Output: [ERROR] An error occurred.

// By utilizing currying in these use cases, developers can create more maintainable and expressive code, making it easier to understand and manage complex logic in their projects.



// *******************************

