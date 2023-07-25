/* Arrays */
console.log("ARRAYS----------------------");
let listOfNumbers = [2, 3, 5, 7, 11];
console.log(listOfNumbers[2]);
// --> 5
console.log(listOfNumbers[0]);
// --> 2
console.log(listOfNumbers[2-1]);
// --> 3
console.log("METHODS----------------------");
/* Methods */
let sequence = [1, 2, 3];
sequence.push(4);
sequence.push(5);
console.log(sequence);
// --> [1, 2, 3, 4, 5]
console.log(sequence.pop());
// --> 5
console.log(sequence);
// [1, 2, 3, 4]
console.log("OBJECTS----------------------");
/* Objects */
// inside the braces, there is a list of properties seperated by commas. Each property has a name followed by a colon and a value.
// Properties whose names aren't valid binding names or valid numbers have to be quoted. 
let day1 = {
    squirrel: false, 
    events: ["work", "touched tree", "pizza", "running"]
};
console.log(day1.squirrel);
// --> false
console.log(day1.wolf);
// --> undefined
day1.wolf = false;
console.log(day1.wolf);
// --> false

// This means braces have two meanings in JS. At the start of a statement, they start a block of statements. IN any other position, they describe an object
let descriptions = {
    work: "Went to work",
    "touched tree": "Touched a tree"
};
let anObject = {left: 1, right: 2};
console.log(anObject.left);
// --> 1
delete anObject.left;
console.log(anObject.left);
// --> undefined
console.log("left" in anObject);
// --> false
console.log("right" in anObject);
// --> true

console.log(Object.keys({x:0, y:0, z:2}));
// --> ["x", "y", "z"]

console.log("----------------------");

let objectA = ({a: 1, b: 2});
Object.assign(objectA, {b: 3, c: 4});
console.log(objectA);
// --> {a: 1, b: 3, c: 4}

 console.log("IMMUTABILITY----------------");
/* Immuatability */

let object1 = {value: 10};
let object2 = object1;
let object3 = {value: 10};

console.log(object1 === object2);
// true, because there are two references to the same object
console.log(object1 === object3);
// false because two different objects are assigned the same properties
// Note: object1 and object2 bindings grasp the same object, which is why changing object1 also changes the value of object2. They would be said to have the same identity. The binding3 object contains the same properties as object1 but lives a separate life. 
// Let binding keeps track of a changing number by changing the value the binding points at. 
// const binding to an object can itself not be changed and will continue to point at the same project, the __contents__ of that object might change 
console.log(object2);
// {value: 10}
object1.value = 15;
console.log(object2.value);
// 15
console.log(object3.value);
// 10
