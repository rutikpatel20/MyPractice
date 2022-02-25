const name1 = "Rutik";
const sname = "Patel";
const myStr = "Hi How are you?"

console.log(name1 + sname); // without space
console.log(name1 + " " +sname); // with space

// concat
console.log("\n Concatation")
concatVar = name1.concat(' is'," ","an"," ","Engineer");
console.log(concatVar);

console.log("\n Length of String");
console.log(name1.length); // length of Rutik
console.log("\n Upper Lowercase method ");
console.log(name1.toUpperCase());
console.log(name1.toLowerCase());

console.log("\n element at index");
console.log(name1[2]); // element at index 2

console.log("\n indexof() method ");
console.log(name1.indexOf("i")); // index of i
console.log(name1.indexOf("R")); // index of R
console.log(name1.indexOf("r")); // r is not available in string so return -1

console.log("\n charAt() method");
console.log(sname.charAt(1)); // character at 1
console.log(sname.charAt(3)); // character at 3

console.log("\n charCodeAt() method");
console.log(sname.charCodeAt(1)); // character unicode at 1
console.log(sname.charCodeAt(3)); // character unicode at 3

console.log("\n lastIndexof() method");
console.log(myStr);
console.log(myStr.lastIndexOf("H")); // Last occurance of H

console.log("\n endsWith() method");
console.log(myStr.endsWith("u?"));

console.log("\n includes() method");
console.log(myStr.includes("are"));
console.log(myStr.includes("Rutik"));

console.log("\n substring() method");
console.log(myStr.substring(0,7));
console.log(myStr.substring(7,-3)); // cannot accept negative index so count from 0 to 7

console.log("\n slice() method");
console.log(name1.slice(0,3));
console.log(name1.slice(-3));
console.log(myStr.slice(5,-3));

console.log("\n substr() method");
console.log(name1.substr(-3)); // 3 characters from end
console.log(myStr.substr(-6));

console.log("\n split() method");
// convert string into array
console.log(myStr.split('')); // one letter array
console.log(myStr.split(' ')); // one word array
console.log(myStr.split('  ')); // entire string as array

console.log("\n split from particular letter");
const newStr = "Hai, Hoaw arae yaou?"
console.log(myStr.split('a')); // split a to a
console.log(myStr.split(',')); // split at , comma

console.log("\n replace() method");
console.log(myStr.replace("Hi","Hello")); // not do any changes in original string
console.log(myStr);


// trim() method
// removes whitespaces from start and end not from between
console.log("\n trim() method")
let myArr2 = "      Hello, this contain lots of whitespaces    ";
console.log(myArr2.trim());