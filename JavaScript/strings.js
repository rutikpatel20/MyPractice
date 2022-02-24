const name1 = "Rutik";
const sname = "Patel";
const myStr = "Hi How are you?"

console.log(name1 + sname); // without space
console.log(name1 + " " +sname); // with space

// concat
concatVar = name1.concat(' is'," ","an"," ","Engineer");
console.log(concatVar);

console.log(name1.length); // length of Rutik
console.log(name1.toUpperCase());
console.log(name1.toLowerCase());
console.log(name1[2]); // value at index 2
console.log(name1.indexOf("i")); // index of i
console.log(name1.indexOf("R")); // index of R
console.log(name1.indexOf("r")); // r is not available in string so return -1
console.log(sname.charAt(1)); // character at 1
console.log(sname.charAt(3)); // character at 3
console.log(myStr);
console.log(myStr.lastIndexOf("H")); // Last occurance of H
console.log(myStr.endsWith("u?"));
console.log(myStr.includes("are"));
console.log(myStr.includes("Rutik"));
console.log(myStr.substring(0,7));
console.log(name1.slice(0,3));
console.log(name1.slice(-3));
console.log(myStr.split('')); // one letter array
console.log(myStr.split(' ')); // one word array
console.log(myStr.split('  ')); // entire string as array

const newStr = "Hai Hoaw arae yaou?"
console.log(myStr.split('a')); // split a to a

console.log(myStr.replace("Hi","Hello"));



