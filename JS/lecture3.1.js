// 1. prompt the user to enter their full name. Generate a username for them based on the input.
// Start username  with @,follwed by their full name  and ending with the fullname length.
let fullName = prompt("Enter your username without spaces:");

let username = "@" + fullName;
console.log(username);// "@lolimbu"