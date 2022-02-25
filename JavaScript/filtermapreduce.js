const myArr = [1, 6, 3, 4, 7, 8];

// filter() method 
console.log("filter() method")
let newArr = myArr.filter((curreuntElem, index, arr) => {
    return curreuntElem > 5;
})
console.log(myArr)
console.log(newArr)

// map() method
// returns newarray without changing/mutating main array 
console.log("\n map() method");
let newArr2 = myArr.map((curreuntElem, index, arr) => {
    return curreuntElem > 5;
})
console.log(myArr);
console.log(newArr2);

console.log("\n values using map()");

let newArr3 = myArr.map((curElem, index, arr) => {
    return `Index = ${index} and value is ${curElem}`;
})
console.log(newArr3);

// Reduce method 
console.log("\n reduce() method");
let sum = myArr.reduce((accumulator, currElem, index, arr) => {
    return accumulator += currElem;
})

console.log(sum);

//flatten 2d-3d array using reduce
console.log("Flat Array");
const arrMulti = [
    ['val1', 'val2'], 
    ['val3', 'val4'], 
    ['val5', 'val6'], 
    ['val7', 'val8']
];

let flatArr = arrMulti.reduce((accum,currVal)=>{
    return accum.concat(currVal);
})
console.log(flatArr);