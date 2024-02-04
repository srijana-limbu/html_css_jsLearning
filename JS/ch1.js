
//1.create a variable of type string and try to add a number to it 
let a = "hello";
let b = 6;
console.log(a+b);

//2.use type of operator to find the datatype of the string in last question
console.log(typeof a , typeof b);
console.log(typeof(a+b));

//3.create a const object in js can you change it to hold a number latter
//=> we can't change it//can not store or add any data type 
// const o = {
//     name: "lo",
//     address: "ktm",
//     phone: 1,
//     isPrinciple: false
// }
// o="1";

//4.try to add new key to the const aspect object in problem 3 were
// you after to do it? 
const o1 = {
            name: "lo",
            address: "ktm",
            phone: 1,
            isPrinciple: false
}
o1['friend'] = "Elle"// add value in o1|\o1(const o1)and ojects({ name: "lo",address: "ktm",phone: 1,isPrinciple: falsev})=>relationship
// o1 is reference for objects
console.log(o1);

//5. write a js prgm to create a word-meaning dictionary o f5 words
const dict = {
    precision: "exact and accurate",   
    arbitrary: "based on random choice or personal whim,rather than any reason or system",
    arbitraryPricision: "bigNum airthmetic, multiple precision arithmetic",
    bigInt: "represent numbers greater than 253-1 which helps to perform operations on large numbers. The number is specified by writing ‘n’ at the end of the value",
    Object: " an entity having properties and methods. Everything is an object in javascript."
}
//console.log(dict);
console.log(dict['bigInt'])
