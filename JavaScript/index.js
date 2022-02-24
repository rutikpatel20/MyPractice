// Swap value of two variables
var a = 20;
var b = 28;
// output => a = 28, b = 20

// Swap value of two variables with using third variable
// var c = b; // c = 28
// b = a; // b = 20
// a = c; // a = 28

// Swap value of two variables without using third variable
a = a + b; // a = 48
b = a - b; // b = 20
a = a - b; // a = 28

console.log("Value of a is : " + a);
console.log("Value of b is : " + b);


