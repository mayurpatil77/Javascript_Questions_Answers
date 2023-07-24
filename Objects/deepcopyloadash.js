const _ = require('lodash');

// Original object with functions and Date objects
const originalObject = {
  name: "John",
  age: 30,
  birthday: new Date("1992-07-20"),
  sayHello: function() {
    console.log("Hello!");
  },
  address: {
    city: "New York",
    country: "USA"
  }
};

// Deep copy using _.cloneDeep()
const deepCopyObject = _.cloneDeep(originalObject);

// Modifying the deep copy
deepCopyObject.name = "Alice";
deepCopyObject.address.city = "San Francisco";
deepCopyObject.birthday.setFullYear(1990);

console.log(originalObject);
// Output: { name: 'John', age: 30, birthday: 1992-07-20T00:00:00.000Z, sayHello: [Function: sayHello], address: { city: 'New York', country: 'USA' } }

console.log(deepCopyObject);
// Output: { name: 'Alice', age: 30, birthday: 1990-07-20T00:00:00.000Z, sayHello: [Function: sayHello], address: { city: 'San Francisco', country: 'USA' } }
