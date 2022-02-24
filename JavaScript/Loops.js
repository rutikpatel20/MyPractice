
// while Loop
console.log("while Loop");
var num = 0;
while (num <= 10) {
    console.log(num);
    num++;
}

// do while Loop
console.log("\n do while Loop");
var num1 = 0;
do {
    debugger;
    console.log(num1);
    num1++;
} while (num1 <= 10);

// For Loop
console.log("\n for loop")
for(var i =0; i<=10; i++){
    console.log(i);
}

//Nested for loop
// console.log("for loop")
// for(var i =0; i<=10; i++){
//     for(var j=0;j<=i;j++){
//         console.log("value of i "+i+" j is "+j);
//     }
// }

//Table of 5 using for loop
console.log("\n Table of 5 using for loop")
const myNum = 5;
for(var i = 1; i<=10; i++){
    console.log(myNum+" * "+i+ " = " +myNum*i);
}

// forEach loop
const districts = ["Ahmedabad", "Gandhinagar", "Mehsana", "Vadodara", "Junagadh", "Rajkot", "Surat"]

districts.forEach(function myFun(elements){
    console.log(elements+" is in Gujarat");
});

// for of Loop
for(elements of districts){
    console.log(elements+" is in Gujarat in india");
}

// for in loop
let player = {
    name: "Messi",
    'main game' : "football",
    isPresent : true,
    goals : [3,2,3,4]
}

for(key1 in player){
    console.log("The " +key1+ " of Player is "+player[key1]);
}