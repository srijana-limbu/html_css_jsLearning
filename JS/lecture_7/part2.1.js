//insert elements
let newBtn = document.createElement("button");
newBtn.innerText = "click me";
console.log(newBtn);

//add button inside div
let div = document.querySelector("div");
//div.append(newBtn);// adds at the end of node(inside)
//div.prepend(newBtn);// adds at the start of node(inside)

//div.before(newBtn);// adds before the node(outside)
div.after(newBtn);// adds after the node(outside)

let newHeading = document.createElement("h1");
newHeading.innerText = "Hope";

document.querySelector("body").prepend(newHeading);

//delete element
let pagh = document.querySelector("p");
pagh.remove();




