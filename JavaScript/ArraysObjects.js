// ***Arrays***
const country = ["Africa", "USA", "UK", "Nepal", "Australia", "China", "India"];
const age = [25, 23, 26, 31, 29, 33, 5];
const myArr = ["Hi", 1, "Hello", "Hey", 2, 5, [7, "rutik"]];

console.log(country);
console.log(age);
console.log(myArr);
console.log(myArr[3]);
console.log(country.length)
console.log(Array.isArray(myArr));
country[5] = "Russia"; // Change element at index 5 in country array
console.log(country);

console.log(age.indexOf(31));

console.log("\n push(),unshift() method");
console.log(age.push(50)); // Add Element in the End
console.log(age.unshift(10)); // Add element in Starting
console.log(age);

console.log("\n pop(),shift() method");
console.log(age.pop()); // Remove Element from the End
console.log(age.shift()); // Remove element from Starting
console.log(age);

console.log("\n splice method");
console.log(country.splice(1,3)); // Remove 3 item from index 1
console.log(country);

console.log(country.splice(3,0,"Ukraine","Japan")); // Add 2 item from index 3
console.log(country);

console.log("\n reverse method");
console.log(country.reverse()); // Reverse an Array
console.log(country);

console.log("\n concat method");
console.log(country.concat(age)); // Concat two arrays

console.log("\n sort() method");
console.log(country.sort()); // works for string only

// Ascending and Descending Numeric Array
console.log("\n sort() method for ascending and descending of numeric values");
const ageAscend = age.sort(function(a,b){return a - b});
console.log(ageAscend);

const ageDescend = age.sort(function(a,b){return b - a});
console.log(ageDescend);
console.log("\n");
 
// Array iteration using forEach Loop
console.log("\n Array iteration using forEach");
country.forEach(function(element,index,array){
    console.log(element + " index : " +index);
});


// ****objects****
console.log("\n Objects");
let player = {
    name: "Messi",
    'main game' : "football",
    isActive : true,
    goals : [3,2,3,4]
}

console.log(player);
console.log(player.name);
console.log(player['main game']);
console.log(player.goals);
console.log(player.goals[1]);

// Object iteration
console.log("\n Object iteration using for in loop");
for(key1 in player){
    console.log(`The ${key1} of Player is ${player[key1]}`);
}
