//callback hell (nested)

// function getData(dataId) {
//     setTimeout(() => {
//         console.log("data", dataId);
//     }, 2000);
// }

// output:   getData(123)
// data 123


function getData(dataId, getNextData) {
    setTimeout(() => {
        console.log("data", dataId);
        if (getNextData) {
            getNextData();
        }
    }, 2000);
}

getData(1, () => {
    console.log("getting data 2......");
    getData(2, () => {
        console.log("getting data 3......");
        getData(3, () => {
            console.log("getting data 4......");

            getData(4);
        });
    });
});