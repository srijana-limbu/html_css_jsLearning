//dom manipulation
// let myClass = document.getElementsByClassName("krishna");//access class
// console.dir(myClass);
// console.log(myClass);

// let firstElement = document.querySelector("p");
// console.dir(firstElement);

// let allElement = document.querySelectorAll("p");
// console.dir(allElement);


// let k = document.querySelector(".krishna");
// console.dir(k);
// document.dir(document.body.firstChild);

//dom properties
// let div = document.querySelector("div");
// console.dir("div");

//1.Create a h2 heading element with text -"hello javaScript". Append "from students" 
//to this text using js.
// let h2 = document.querySelector("h2");
// console.dir(h2.innerText);
//to change text >> innerText propperty
//h2.innerText += " from students";

//2. Create 3 divs common class name - "box". Access them and add some unique text 
//to each of them
let divs = document.querySelectorAll(".box");
let idx = 1;
for (div of divs) {
   // console.log(div.innerText);  
div.innerText = `new value ${idx}`;
idx++;

}
//console.log(divs[0]);
// divs[0].innerText = "osho";
// divs[1].innerText = "guru";




