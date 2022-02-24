// JavaScript has 5 falsy values => 0, "", undefined, null, NaN, False is always false
// if we pass any falsy value in condition it always invoke else part 

// 0
if(marks = 0){
    console.log("Sorry, You are Fail");
}
else{
    console.log("Congratulations, You are pass");
}

// undefined
if(marks = undefined){
    console.log("Sorry, You are Fail");
}
else{
    console.log("Congratulations, You are pass");
}

// null
if(null){
    console.log("Sorry, You are Fail");
}
else{
    console.log("Congratulations, You are pass");
}

// empty String ""
if(marks = ""){
    console.log("Sorry, You are Fail");
}
else{
    console.log("Congratulations, You are pass");
}

// NaN
if(marks = NaN){
    console.log("Sorry, You are Fail");
}
else{
    console.log("Congratulations, You are pass");
}

// False
if(marks = false){
    console.log("Sorry, You are Fail");
}
else{
    console.log("Congratulations, You are pass");
}