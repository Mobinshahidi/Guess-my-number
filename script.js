"use strict";
//DEFINE A SECRET NUMBER
let number = Math.trunc(Math.random() * 20 + 1);
console.log(number);
let score = 10;
let highScore = 0;
const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};
//event listeners
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  //when there is no number entered
  if (!guess) {
    displayMessage("please enter a value ðª");
  }
  //when player win
  else if (guess === number) {
    displayMessage("ð Correct number!");
    document.querySelector(".number").textContent = number;
    document.querySelector("body").style.backgroundColor = "#27FF1D";
    document.querySelector(".number").style.width = "30rem";
    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
  }
  //when player enter a higher and lower number than secret number
  else if (guess !== number) {
    if (score > 0) {
      displayMessage(guess > number ? "ðº high..." : "ð»low...");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("ð¢ You lost the game...");
      document.querySelector("body").style.backgroundColor = "#FF0400";
    }
  } else {
    displayMessage("â Wrong Number...");
  }
  //document.querySelector(".highscore").textContent = score;
  document.querySelector(".again").addEventListener("click", function () {
    score = 10;
    number = Math.trunc(Math.random() * 20 + 1);
    displayMessage("Start guessing...");
    document.querySelector(".score").textContent = score;
    document.querySelector(".number").textContent = "?";
    document.querySelector(".guess").textContent = " ";
    document.querySelector("body").style.backgroundColor = " #222";
    document.querySelector(".number").style.width = "15rem";
  });
});
// document.getElementsByClassName(".guess").addEventListener("keyup", function(event){
//     event.preventDefault();
//     if(event.keyCode === 13){
//         document.getElementsByClassName(".check").click()
//     }
// });
