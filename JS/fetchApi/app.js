const URL = "https://cat-fact.herokuapp.com/facts";
const factP = document.querySelector("#fact");
const btn = document.querySelector("#btn");


//using async await

const getFacts = async () => {
    console.log("getting data.........")
    let response = await fetch(URL);
    console.log(response);//jason format

    let data = await response.json();
    console.log(data);
    console.log(data[0].text);

    factP.innerText = data[0].text;  
    factP.innerText = data[1].text;
  
};


// using promise chaining

// function getFacts() {
// fetch(URL).then((Response) => {
//    return Response.json(); 
// })
// .then((data) => {
//     console.log(data);
//     factP.innerText = data[2].text;  
// })

// };

btn.addEventListener("click", getFacts);
