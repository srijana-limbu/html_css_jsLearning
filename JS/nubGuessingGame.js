//2.Create a game where you start with  anny randam game number. Ask the user to keep
// guessing the game number until the user enters correct value.

let gameNum = 25;

let userNum = prompt("Guess the number");

while (userNum !== gameNum) {
    userNum = prompt("you entered wrong number, guess again:")
}
console.log("congratulations!! you entered the right number.")