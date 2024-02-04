// const num = 0; 

// if (num > 0) { 
// 	console.log("Given number is positive."); 
// } else if (num < 0) { 
// 	console.log("Given number is negative."); 
// } else { 
// 	console.log("Given number is zero."); 
// };

let day=6;

switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case  6:
    day = "Saturday";
}
console.log("today:",day);