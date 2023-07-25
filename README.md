# Resources for learning JavaScript
# Brad Traversy Udemy Course
[Brad Traversy Udemy Course]("https://gale.udemy.com/course/modern-javascript-from-the-beginning/learn/lecture/37191044#overview")
## Eloquent JS
[Eloquent Javascript](https://eloquentjavascript.net/)
## Brad Traversy Udemy Course
## Section 1: Getting Started
### 1. Course Introduction
### 2. What is JavaScript?

# Eloquent JS

## Part 1: Language
## Chapter 1: Values, Types, and Operators
## Chapter 2: Program Structure
## Chapter 3: Functions
## Chapter 4: Data Structures: Objects and Arrays 

### 4. Data Structures: Objects and Arrays
Numbers, Booleans, and strings are the atoms that data structures are built from.

__Objects__ and __Arrays__ are more complex and they are used to build more complex structures. 

__Objects__ allow us to group values, including other objects, together. 

#### Data Sets
__Arrays__ allow us to group values, including other arrays, together. JS provides a this data type specifically for storing sequences of values. Is written as a list of values between square brackets, separated by commas. 
- First index of an array is zero, not one. 
- Zero-based counting
- Think of the index as the amount of items to skip, counting from the start of the array. 

[04 Practice-Arrays](./04_Practice/04_exercise.js)

#### Properties
Almost all JS values have properties. 
Exceptions are null and undefined.
Example: Expressions that access a *property* of some value
   Example 1. myString.length (to get the length of a string) - we access the __length__ property of the value in myString. 
   Example 2. Math.max (the maximum function) - Access the property named __max__ in the __Math__ object. (which is a collection of mathematics-related constants and functions). 

Two main ways to access properties in JS
- With a dot . (when using a . the word after the dot is the literal name of the property)
  - value.x fetches the property of a value named "x"
- Sqaure Brackets [] (the expression is evaluated to get the property name).
  - value[x] tries to evaluate the expression x and uses the result, converted to a string, as the property name. 
Both value.x and value[x] access a property on value-- but not necessarily the same property. The difference is how x is interpreted.  
- Property names are strings, they can be any string. 
- dot notation works only with names that look like valid binding names. Can't use dot notation with numbers and usually want to use a binding that holds that index anyway this is when you have to use the bracket notation to get at them. 
- The elements in an array are stored as the array's properties, using numbers as property names. 
- The length property of an array tells us how many elements it has. 

#### Methods
Both string and array objects contain, in addition to the length property, a number of properties that hold function values. 
- Properties that contain fucntions are generally called *methods* of the value they belong to, as in "toUpperCase is a method of a string."
- The *push* method adds values to the end of an array, and 
- The *pop* method does the opposite, removing the last value in the array and returning it.
- These are traditional terms for operations on a *stack*
- A *stack*, in programming, is a data structure taht allows you to push values into it and pop them out again in the opposite order so that the thing that was added last is removed first. 
- 
[Methods Example](./04_Practice/04_exercise.js)

#### Objects 

A set of daily log entries can be represented as an array. 
- Values of the type *object* are arbitrary collections of properties. 
  - One way to create an object is by using braces as an expression.
- The binary *in* operator, when applied to a string and an object, tells you whether that object has a property with that name.
- Object.keys function can be used to find out what properties an object has. You give it an object, and it returns an array of strings––the object's property names.
- Object.assign function that copies all properties from one object to another. 
- Arrays, plainly put are just a kind of objects specialized for storing sequences of things. 
  - Evaluating *typeOf* produces "object". Visual when thinking about it is to imagine long flat octopus's with all their tentacles in a neat row, labeled with numbers.    

#### Mutability
Numbers, strings, and booleans are all immutable–– it is impossible to change the values those types. Object values can be modified. You can combine and derive new values from them, but when you take a specific string value, that value will always remain the same. The text inside of it cannot be changed. 
Objects work differently, you can change their properties, causing a single object value to have different content at different times. With objects there is a difference between having two references to the same object and haivng two different objects thats contain the same properties. 
[Objects](./04_Practice/04_exercise.js)