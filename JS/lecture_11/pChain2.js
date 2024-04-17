function getData(dataId, getNextData) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data", dataId);
            resolve("success");
            
        }, 4000);
    });
}

// promise chain

// getData(1).then((res) => {
//     console.log(res);

//     getData(2).then((res) => {
//         console.log(res);
//     })
// });

console.log("getting data1....");

getData(1)
    .then((res) => {
        console.log("getting data2....");

        return getData(2);
    })
    .then((res) => {
        console.log("getting data3....");

        return getData(3);
    })
    .then((res) => {
        console.log(res);
    });
