function sumfun(a,b) {
    res = a + b;
    console.log(res);
}

sumfun(20,30);
sumfun(200,400);
sumfun();

function minusfun(a,b) {
    res = a - b;
    return;
    console.log(res); // not executed
}

minusfun(900,10)

// Anonymous Function = function without name
var anoFun = function(x,y){
    return total = x + y;
}
// console.log(anoFun(10,12));
var add = anoFun(10,12);
var add1 = anoFun(130,122);
console.log("Sum of two numbers = "+add);
console.log("Sum of two numbers = "+add1);

