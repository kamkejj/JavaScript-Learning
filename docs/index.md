# JavaScript Learning

[View Docs](https://kamkejj.github.io/JavaScript-Learning/)

## Delcaring Variables.
let, const and var

```let variable = 123;```
Defining with let you can later change the value (mutable). Has block scope.

```const var = 321;```
Defining with const the value can not be changed later (immutable).

let vs. const
Use const in most cases unless the value of the variable will in fact be changed at some point in the program.

```var variable = 456;```
Usr var should be avoided in modern ES6+ JavaScript.
Has global scope.

## Strings

Template literale.
In s string translate the variable to its value.

const name = "Bob";
```const bob = `${name}`;``` (use back ticks)

## Type Conversion vs Coercion
Type copnversion is when we explicitly change a type from one to another type.
Example:
const birthYear = "2020"; // year is a string.
console.log(typeof birthYear);
const age = Number(birthYear) + 21; // Number function converts to a number.

## Enabling Strict Mode 
``` 'use strict';``` // Fist line of code
Helps us write secure code by helping us to avoid erros. Forbids us from doing certain things and showing visible errors that would otherwise be invisible. For example, mistyping a variable will throw an error in the console with strict mode enabled.

## Functions
### Function Declaration And Expression

**Function declaration**
```
function calcAge(year) {
  // calculate and return something.
}
```
**Function expression**

```
const calcAgeVar = function (year) { // a.k.a anonyumous function
  // calculate and return something.
}

*Note:* No function name is defined
```

### Arrow Functions
```
year => 2020 - year; // <parameter> => <return statement>;
const age = year => 2020 - year; // <variable> = <parameter> => <return statement>;
```

