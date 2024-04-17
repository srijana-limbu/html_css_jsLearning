// let promise = new Promise((resolve, reject) => {
//     console.log("I am a promise");
//     //resolve("success");
//     reject(" some error occurred");
// });



function geData(dataId, getNextData) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("success");
            console.log("data", dataId);
            if (getNextData) {
                getNextData();
            }
        }, 5000);
    });
}

/*  
let finalVal = getData(123) 
undefined

promise
Promise {<pending>}
[[Prototype]]: Promise
[[PromiseState]]: "fulfilled"
[[PromiseResult]]: "success"

data 1223

finalVal
Promise {<fulfilled>: 'success'}
[[Prototype]]: Promise
[[PromiseState]]: "fulfilled"
[[PromiseResult]]: "success" */

//.then() and .catch()

const getPromise = () => {
    return new Promise((resolve, reject) => {
    console.log("I am a promise"); 
    //resolve("success"); 
    reject(" network error ");  
    });
};

let promise = getPromise();
promise.then((res) => {
    console.log("promise fulfilled", res);
});

promise.catch((err) => {
    console.log("rejected", err);
});


