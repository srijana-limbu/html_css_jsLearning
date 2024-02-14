/* 1. Create a new button element. Give it text "click me", background color of red And text color
of white
insert the button as the first element inside the body tag */

let newBtn = document.createElement("button");
newBtn.innerText = "click me";
newBtn.style.backgroundColor = "yellow";
newBtn.style.color = "black";
console.log(newBtn);

let add = document.querySelector("body");
add.prepend(newBtn);

/* 2. Create a <p> tag in html, give it a class and some styling. 
now create a new class in css and try to append this class to th <p> element.
Did you notice , how you overwrite the class name when you add a new one?
Solve this problem using 'classList'. */
let pagh = document.querySelector("p");
// at console
// pagh
// pagh.classList
//pagh.classList.add("newClass1")
//pagh.classList.remove("newClass1")
