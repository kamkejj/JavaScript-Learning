'use strict';

// Type Conversion vs Coercion
const birthYear = "2020"; // year is a string.
console.log(typeof birthYear); // returns "string"
const age = Number(birthYear) + 21; // Number function converts to a number.
console.log(age); // return 2041
console.log(typeof age); // returns "number"

// Ternary operator (conditional). Same as many C style languages like PHP.
age >= 18 ? 'wine' : 'milk'; // ? = true : = false

// Strict Mode
// 'use strict';
