// var = function scope
// let, const = Block scope 

function myData(){
    // var myName = "Rutik";
    // const myName = "Rutik";
    let myName = "Rutik";
    console.log(myName);

    if(true){
        // var mySurname = "Patel";
        // const mySurname = "Patel";
        let mySurname = "Patel";
        console.log("inner " + mySurname);
        console.log("inner " + myName);
    }
    console.log("innerOuter " + mySurname); // let const give error here
}

myData();