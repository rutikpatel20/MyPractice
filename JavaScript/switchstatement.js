//Switch Statement

var marks = 90;
switch (marks / 10) {
    case 10:
    case 9:
    case 8:
        console.log("Pass with First Class");
        break;
    case 7:
        console.log("Pass with Second Class");
        break;
    case 6:
        console.log("Pass with Third Class");
        break;
    case 5:
    case 4:
        console.log("Pass with Gracing");
        break; 

    default:
        console.log("Ohh, You Are Fail..");
        break;
}