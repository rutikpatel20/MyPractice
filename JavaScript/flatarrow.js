// Normal Function

// console.log(mul(3,4));
// function mul(a, b){
//     return `Multiplication of ${a} and ${b} is = ${a*b}`
// }


// Flat Arrow Function

const mul = (a,b) =>{
    return `Multiplication of ${a} and ${b} is = ${a * b}`;
}
console.log(mul(3,4));

// Example 2
const sum = () => `Addition of two num is ${(x=2)+(y=3)}`

console.log(sum());
// No need to write curly braces and return if we have one line of code

// "this" argument not supported in flat arrow function