//asynchronous
console.log("one");
console.log("two");

setTimeout( () => {
    console.log("hello");
}, 4000);

console.log("three");
console.log("four");

//callbacks
function sum (a, b) {
    console.log(a + b);
}

function calculator(a, b, sumCallback) {
    sumCallback(a, b);
}

calculator(1, 9, sum);
//or
calculator(1, 7, (a, b) => {
    console.log(a+b);
})

const hello = () => {
    console.log("good afternoon!");
};

setTimeout(hello, 5000);

