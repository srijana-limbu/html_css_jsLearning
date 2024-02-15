
let btn1 = document.querySelector("#btn1");
//event access in btn1
btn1.onclick = () => {
    console.log("btn1 was clicked");
    let a = 15;
    a++;
    console.log(a);//16

};
let div = document.querySelector("div");
div.onmouseover = () => {
    console.log("you are inside div");
};
// event object 
 btn2.onclick = (e) => {
    console.log(e);
    
};

btn2.onclick = (evt) => {
    console.log(evt);
    console.log(evt.type);
    console.log(evt.target);
    console.log(evt.clientX,evt.clientY);
};

div.onmouseover = (evt) => {
    console.log(evt);
    console.log(evt.type);
    console.log(evt.target);
    console.log(evt.clientX,evt.clientY);   
};

//event listener
btn3.addEventListener("click", (e) => {
    console.log("button3 was clicked");
    console.log(e);
    console.log(e.type);

});

btn3.addEventListener("click", () => {
    console.log("button3 was clicked - handler2");
});

//remove event Listener
btn4.addEventListener("click", (e) => {
    console.log("button3 was clicked - handler1");
});

btn4.addEventListener("click", (e) => {
    console.log("button3 was clicked - handler2");
});

//
const handler3 = (e) => {
    console.log("button3 was clicked - handler3");
};
btn4.addEventListener("click", handler3); 

btn4.addEventListener("click", (e) => {
    console.log("button3 was clicked - handler4");
});

//
btn4.removeEventListener("click", handler3);

//1. Create a toggle button that changes the screen to dark-mode when clicked and light-mode
//When clicked again.
let modeBtn = document.querySelector("#mode");
let body = document.querySelector("body");
let currentMode = "light";//dark

modeBtn.addEventListener("click", () => {
   if (currentMode === "light") {
    currentMode = "dark";

   body.classList.add("dark");
   body.classList.remove("light");


   }else {
    currentMode = "light";
    //document.querySelector("body").style.backgroundColor = "white";
    //document.querySelector("body").classList.add("light");
   body.classList.add("light");
   body.classList.remove("dark");


   }
   
   console.log(currentMode);
});