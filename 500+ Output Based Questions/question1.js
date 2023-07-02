What does the code snippet to the right output by console.log?

const a = 'BFE.dev'
const b = 1

console.log(Number.isNaN(a))
console.log(Number.isNaN(b))
console.log(isNaN(a))
console.log(isNaN(b))

Output : 

false
false
true
false

Explanation : 

console.log(Number.isNaN(a)): The variable a is assigned a string value 'BFE.dev'. Since it's a non-numeric value, Number.isNaN() returns false.

console.log(Number.isNaN(b)): The variable b is assigned the numeric value 1. Since it's a valid number, Number.isNaN() returns false.

console.log(isNaN(a)): The global isNaN() function is used with the variable a, which is a string value. The isNaN() function first coerces the parameter to a number and then checks if it is NaN. Since 'BFE.dev' cannot be converted to a valid number, the isNaN() function returns true.

console.log(isNaN(b)): The global isNaN() function is used with the variable b, which is a number. Since b is a valid number, the isNaN() function returns false.

