async function hello() {
    console.log("good morning!");
}
//hello()



function api() {
    return new Promise((resolve, reject) => {
        setTimeout((res) => {
            console.log("weather data");
        resolve(200);
        }, 4000);
    });
}

async function getWeatherData() {
    await api();//1st
    await api();//2nd

}
//getweatherData()


function getData(dataId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data", dataId);
            resolve("success");
        }, 3000);
    });
}

// async function getAllData() {
//     console.log("getting data1......");
//     await getData(1);

//     console.log("getting data2......");
//     await getData(2);

//     console.log("getting data3......");
//     await getData(3);

// }


//IIFE:Immediately Invoked Funtion Expression
(async function() {
    console.log("getting data1......");
    await getData(1);

    console.log("getting data2......");
    await getData(2);

    console.log("getting data3......");
    await getData(3);

})();  

(async function() {
    console.log("getting data1......");
    await getData(1);

    console.log("getting data2......");
    await getData(2);

    console.log("getting data3......");
    await getData(3);

})();  