//swapping
let a= 50;
let b= 30;
console.log("Before swapping:");
console.log("a=", a, "b=", b);
a = a+b;
b = a-b;
a = a-b;
console.log("after swapping:");
console.log("a=", a, "b=", b);

// swap arrow
const swap = (a,b) => [b,a];
let x= 10, y=4;
[x,y] = swap(x,y);
console.log("x=",x);
console.log("y=",y);

// without using third variable

