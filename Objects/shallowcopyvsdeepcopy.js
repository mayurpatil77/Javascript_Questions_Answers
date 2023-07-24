// Shallow Copy Example:
// Shallow copy creates a new object that is a duplicate of the original object, but it only copies the references to nested objects or arrays. It means that changes to nested objects will be reflected in both the original and copied objects.

// Original object
const originalObj = {
  name: "John",
  age: 30,
  address: {
    city: "New York",
    country: "USA"
  }
};

// Shallow copy using Object.assign()
const shallowCopyObj = Object.assign({}, originalObj);

// Modifying the shallow copy
shallowCopyObj.name = "Alice";
shallowCopyObj.address.city = "San Francisco";

console.log(originalObj);
// Output: { name: 'John', age: 30, address: { city: 'San Francisco', country: 'USA' } }

console.log(shallowCopyObj);
// Output: { name: 'Alice', age: 30, address: { city: 'San Francisco', country: 'USA' } }


// As you can see, both originalObj and shallowCopyObj have the same address object, so changes made to the address.city property in the shallow copy are also reflected in the original object.

// Deep Copy Example:
// Deep copy creates a new object that is entirely independent of the original object, including all nested objects or arrays. Changes made to the deep copy will not affect the original object.


// Original object
const originalObj = {
  name: "John",
  age: 30,
  address: {
    city: "New York",
    country: "USA"
  }
};

// Deep copy using JSON.parse() and JSON.stringify()
const deepCopyObj = JSON.parse(JSON.stringify(originalObj));

// Modifying the deep copy
deepCopyObj.name = "Alice";
deepCopyObj.address.city = "San Francisco";

console.log(originalObj);
// Output: { name: 'John', age: 30, address: { city: 'New York', country: 'USA' } }

console.log(deepCopyObj);
// Output: { name: 'Alice', age: 30, address: { city: 'San Francisco', country: 'USA' } }


// In this example, the deepCopyObj is an independent copy of the originalObj, and changes to the deepCopyObj do not affect the original object.




