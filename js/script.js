"use strict";

const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
};

const min_max = document.querySelector("#MinMax");
const scoreText = document.querySelector("#score");
const numberR = document.querySelector(".Rnumber");
const guessNumber = document.querySelector("#numberInput");
const aboutGame = document.querySelector("#btnAbout");
const num1 = 3;
const resultBox = document.querySelector(".result");

let RealNumber;
let score = 100;
let Mode = "light";

// Levels
// Level 1
const easyMode = () => {
  resetGame();
  resetStyle();

  document.querySelector("#easy").classList.add("holdbtn");

  RealNumber = getRandomNumber(0, 20);
  console.log(RealNumber);
  min_max.textContent = "Guess Number : 0 - 20";
};
// Level 2
const middleMode = () => {
  resetGame();
  resetStyle();
  // document.querySelector("#middel").style.backgroundColor = "black";
  document.querySelector("#middel").classList.add("holdbtn");

  RealNumber = getRandomNumber(0, 30);
  console.log(RealNumber);
  min_max.textContent = "Guess Number  : 0 - 30";
};
// Level 3
const hardMode = () => {
  resetGame();
  resetStyle();
  // document.querySelector("#hard").style.backgroundColor = "black";
  document.querySelector("#hard").classList.add("holdbtn");

  RealNumber = getRandomNumber(0, 50);
  console.log(RealNumber);
  min_max.textContent = "Guess Number : 0 - 50";
};

// Rest Game
const resetGame = () => {
  score = 100;
  scoreText.textContent = `Score : ${score}`;

  numberR.textContent = `??`;
  guessNumber.value = null;
};
// chang Style after win
const changStyleeInWin = () => {
  document.querySelector("body").classList.add("winGamebackground");
  document.querySelector("main").classList.add("winGamebackground");
  numberR.classList.add("winGame");

  // scoreText.style.fontSize = "50px";
  // scoreText.style.color = "black";
  // scoreText.style.fontWeight = "1000";
};
// reset Style
const resetStyle = () => {
  document.querySelector("#easy").classList.remove("holdbtn");
  document.querySelector("#middel").classList.remove("holdbtn");
  document.querySelector("#hard").classList.remove("holdbtn");
  numberR.classList.remove("winGame");
  document.querySelector("body").classList.remove("winGamebackground");
  document.querySelector("main").classList.remove("winGamebackground");
  // document.querySelector("body").style.backgroundColor = "#302e2e";
  // document.querySelector("main").style.backgroundColor = "#302e2e";
  // numberR.style.color = "beige";
  // scoreText.style.color = "beige";
  // document.querySelector("#easy").style.backgroundColor = "#302e2e";
  // document.querySelector("#middel").style.backgroundColor = "#302e2e";
  // document.querySelector("#hard").style.backgroundColor = "#302e2e";
};

function checkNumber() {
  const numberValue = parseInt(guessNumber.value, 10);

  console.log(`the Real Number = ${RealNumber}`);
  console.log(`the guess number = ${numberValue}`);

  if (!numberValue) {
    return;
  }
  // if win game
  else if (numberValue === RealNumber) {
    changStyleeInWin();
    document.querySelector("#number").textContent = ` \n\ Win `;
    return;
  } else if (numberValue > RealNumber) {
    numberR.textContent = `Down ↓`;
  } else {
    numberR.textContent = `UP ↑ `;
  }
  guessNumber.value = null;
  score -= 5;
  score < 60
    ? (scoreText.textContent = `Score : ${score} 😡`)
    : (scoreText.textContent = `Score : ${score}`);
}

import("./Events.js");

//
//

const checkbox = document.querySelector("#checkbox");
document.addEventListener("DOMContentLoaded", function () {
  checkbox.addEventListener("change", function () {
    if (checkbox.checked) {
      // dark mode
      setDarkMode();
      console.log("Checked");
    } else {
      // change to Light Mode
      removeDarkMode();
      // lightMode();
      console.log("Not checked");
    }
  });
});

// set Dark Mode
const header = document.querySelector("header");
const main = document.querySelector("main");
const setDarkMode = () => {
  Mode = "dark";

  // removeDarkMode then set dark mode

  header.classList.add("header-darkMode");
  main.classList.add("main-darkMode");
  document.querySelector("body").style.backgroundColor = "#302e2e";

  document.querySelector(".title").classList.add("title-darkMode");
  document.querySelector(".result").classList.add("result-dark");
  document.querySelector("#numberInput").classList.add("numberInput-dark");
  numberR.classList.add("RnumberDark");
  min_max.classList.add("MinMaxDark");
  document.querySelector(".texts").classList.add("textsDark");
  document.querySelector("#easy").classList.add("buttons-dark");
  document.querySelector("#middel").classList.add("buttons-dark");
  document.querySelector("#hard").classList.add("buttons-dark");
  document.querySelector("#check").classList.add("buttons-dark");
  document.querySelector("#btnAbout").classList.add("buttons-dark");
};

//
//Remove Dark mode
//
const removeDarkMode = () => {
  document.querySelector("body").style.backgroundColor = "#ffffff";
  header.classList.remove("header-darkMode");
  document.querySelector(".title").classList.remove("title-darkMode");
  main.classList.remove("main-darkMode");
  document.querySelector(".result").classList.remove("result-dark");
  document.querySelector(".numberInput").classList.remove("numberInput-dark");
  numberR.classList.remove("RnumberDark");
  min_max.classList.remove("MinMaxDark");
  document.querySelector(".texts").classList.remove("textsDark");
  document.querySelector("#easy").classList.remove("buttons-dark");
  document.querySelector("#middel").classList.remove("buttons-dark");
  document.querySelector("#hard").classList.remove("buttons-dark");
  document.querySelector("#check").classList.remove("buttons-dark");
  document.querySelector("#btnAbout").classList.remove("buttons-dark");
};

easyMode();
