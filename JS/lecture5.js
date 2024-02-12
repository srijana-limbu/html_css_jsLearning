//function in js
// function sum(x, y) {//parameter >> input
//     console.log(x + y);
//   }
//   sum(100, 23);//argument
  

// function sum(x, y) {
//     result = x + y;
//     return result;
//   }
//   let val = sum(100, 23);
//   console.log(val);//123
  

// arrow function
// const sum = (a, b) => {
//   console.log(a + b);//return a+b
// };
// sum(100, 23);

//const mul = (a, b) => {
//     return a * b;
// };
// mul(100, 23);

//1. Create a function using the 'function' keyword that takes a string as an argument and 
// return the number of vowels in the string.
// function countVowels(str) {
//     let count = 0;
//     for (const char of str) {
//          if(char === "a" || char === "e" || char === "i"|| char === "o"|| char === "u") {
//         count++;
//       }
//     }
//     console.log(count);//return count;
//   }
//   countVowels("OSHO GURU");


//2. Create an arrow function to perform the same task
// const countVowels = (str) => {
//     let count = 0;
//     for (const char of str) {
//          if(char === "a" || char === "e" || char === "i"|| char === "o"|| char === "u") {
//          count++;
//        }
//      }
//       return count;
//   }
//   console.log("osho");

//forEach loop in arrays
// let arr = [1, 2, 3, 4, 5, 6, 7];

// arr.forEach(function printVal(val) {
//   console.log(val);
// });

// output $_*
// > 1
// > 2
// > 3
// > 4
// > 5
// > 6
// > 7

// let arr = [1, 2, 3, 4, 5, 6, 7];

// arr.forEach((val) => {
//   console.log(val);
// });

// let colors = ['purple', 'white', 'blue'];

// colors.forEach((val) => {
//   console.log(val.toUpperCase());
// });

// output $_*
// > "PURPLE"
// > "WHITE"
// > "BLUE"

// let colors = ['purple', 'white', 'blue'];

// colors.forEach((val, idx, arr) => {
//   console.log(val.toUpperCase(), idx, arr);
// });
// output $_*
// > "PURPLE" 0 Array ["purple", "white", "blue"]
// > "WHITE" 1 Array ["purple", "white", "blue"]
// > "BLUE" 2 Array ["purple", "white", "blue"]

//1. For a given array of numbers, print the square of each value using the forEach loop.
// let numbs = [1, 2, 3, 4];

// numbs.forEach((num) => {
//   console.log(num * num);//num ** 2
// })//1, 4, 9, 16

// let numbs = [1, 2, 3, 4];
// let calSquare = (num) => {
//   console.log(num ** 2);
// }
// numbs.forEach(calSquare);

//map in array methods
// let nums = [1, 2, 6, 5];
// let newArr = nums.map((val) => {
// 	return(val ** 3);  
// });
// console.log(newArr);

// filter method in array
// let nums = [1, 2, 6, 5, 33, 44, 55, 68];
// let even = nums.filter((val) => {
// 	return(val % 2 === 0);  
// });
// console.log(even);

//reduce method in arrays
// let nums = [1, 2, 6, 5, 33, 44, 55, 68];
// let sum = nums.reduce((prev, curr) => {
// 	return prev + curr;  
// });
// console.log(sum);//10

// let nums = [1, 2, 6, 100, 33, 44, 55, 68];
// let large = nums.reduce((prev, curr) => {
// 	return prev > curr? prev : curr;  
// });
// console.log(large);//100

//1. We are given array of marks of students. Filter our of the marks of students that scored 90+;
// let marks = [88, 60, 90, 91, 93];
// let output = marks.filter((val) =>{
//   return val > 90;
// });
// console.log(output);

//2. Take a number n as input from user. Create an array of numbers from 1 to n.
//Use the reduce method to calculate sum of all numbers in the array.
//Use the reduce method to calculate product of all numbers in the array.
// let n = prompt("enter a number: ");
// let arr = [];
// if (let i = 1; i<= n; i++) {
//   arr[i-1] = i;
// }
// let sum = n.reduce((res, curr) => {
//   return res + curr;
// });

// let factorial = n.reduce((res, curr) => {
//   return res * curr;
// })
// console.log("sum =", sum);
// console.log("factorial = ", factorial);