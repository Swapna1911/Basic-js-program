// function
var a=5
var b=6
function sum (a,b){
    return a+b;
}
console.log(sum(5,10));
function sum (a,b){
    return a+b;
}

// function declaration

function xyz (name){
    console.log("hello" + name)
}
xyz ("swapna")
 
function xyz (name){
    console.log("hello" + name + "gd morning")
}
xyz("name")

// function expression
const add= function(a,b) {
    return a+b;
}
console.log (add(10 , 5));

// arrow function
const multiplicationArrow = (a,b) => a*b;
console.log(multiplicationArrow(5,6));

// arrow=>
const square = num => num * num;
console.log(square(5));
const substractArrow = (a,b) => a-b;
console.log(substractArrow(5,6));
const addArrow = (a,b) =>  a+b;
console.log(addArrow(5,6));

// arrow
const sum = (a,b) => a+b;
console.log(sum(5,3))

// function declaration
   function substract(a,b) {
    return a-b;
}
console.log (substract(10 , 5));

// function expression
const add= function(a,b) {
    return a+b;
}
console.log (add(10 , 5));
