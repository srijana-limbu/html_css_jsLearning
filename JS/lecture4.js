//for loop
// let words = ["nature", "calm", "mind"," health", "wealth", "smart", "yoga", "love", "indepent", "blessed", "spoiled", "universe"];
// for (i = 0; i< word.length; i++) {
//   console.log(words[i]);
// }

//for of
// let words = ["nature", "calm", "mind"," health", "wealth", "smart", "yoga", "love", "indepent", "blessed", "spoiled", "universe"];
// for (let word of words) {
//   console.log(word);
// }

// let cities = ["Lalitpur","ktm", "Dharan", "Bhaktapur"];
// for (let city of cities) {
//   console.log(city); // console.log(city.toUpperCase());
// }

//1. For a given array with marks of students-> [85, 99, 70, 78, 80, 90]
//Find the agerage marks of the entire class

// let marks = [85, 99, 70, 78, 80, 90];
// let sum = 0;

//  for(let val of marks) {
//     sum += val;
//  }

//  let avg = sum/6;
//  console.log("average marks: ", avg);

//2.For a given array with prices of 5 items -> [250, 645, 300, 900, 50];
// All items have an offer of 10% off on them. Change the array to store final price atfer applying offer.


// let items = [250, 645, 300, 900, 50];

// for (let i = 0; i < items.length; i++) {
//   let offer = items[i] / 10;
//   items[i] -= offer;
// }

// console.log(items);