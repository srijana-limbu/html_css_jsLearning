//1. get user to input a number using prompt ("enter a number:").check if the numbur is 
//multiple of 5 or not.
let number = prompt("Enter a number:");

if (number%5===0) {
    console.log(number,"is multiple of 5");
}
else {
    console.log(number,"is not multiple of 5");
1
}

//2. Write a code which can give grades to students according to their scores:
//80-100=>A 70-89=B 60-69=C 50-59=D 0-49=F
let numb= prompt("Enter your marks number");
if (numb>80 && numb<100) {
    console.log(numb,"is grade 'A' ");
}
else if (numb>70 && numb<79) {
    console.log(numb,"is grade 'B' ");
}
else if (numb>60 && numb<69) {
    console.log(numb,"is grade 'C' ");
}else if (numb>50 && numb<59) {
    console.log(numb,"is grade 'D' ");
}
else {
    console.log(numb,"is 'fail' ");
}


