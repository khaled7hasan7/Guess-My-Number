"use strict";

const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
};

const min_max = document.querySelector("#MinMax");
const scoreText = document.querySelector("#score");
const numberR = document.querySelector("#number");
const guessNumber = document.querySelector("#numberInput");
const num1 = 3;

const resultBox = document.querySelector(".result");

let RealNumber;
let score = 100;

// Levels

// Level 1
const easyMode = () => {
  resetGame();
  resetStyle();
  document.querySelector("#easy").style.backgroundColor = "black";
  RealNumber = getRandomNumber(0, 20);
  console.log(RealNumber);
  min_max.textContent = "Guess Number : 0 - 20";
};
// Level 2
const middleMode = () => {
  resetGame();
  resetStyle();
  document.querySelector("#middel").style.backgroundColor = "black";
  RealNumber = getRandomNumber(0, 30);
  console.log(RealNumber);
  min_max.textContent = "Guess Number  : 0 - 30";
};
// Level 3
const hardMode = () => {
  resetGame();
  resetStyle();
  document.querySelector("#hard").style.backgroundColor = "black";
  RealNumber = getRandomNumber(0, 50);
  console.log(RealNumber);
  min_max.textContent = "Guess Number : 0 - 50";
};

// Rest Game
const resetGame = () => {
  score = 100;
  scoreText.textContent = `Score : ${score}`;
  document.querySelector("#number").textContent = `??`;
  numberR.textContent = `?? `;
  guessNumber.value = null;
};
// chang Style after win
const changStyleeInWin = () => {
  document.querySelector("body").style.backgroundColor = "#08da19";
  numberR.style.color = "#08da19";
  scoreText.style.fontSize = "50px";
  scoreText.style.color = "black";
  scoreText.style.fontWeight = "1000";
};
// reset Style
const resetStyle = () => {
  document.querySelector("body").style.backgroundColor = "#302e2e";
  numberR.style.color = "beige";
  scoreText.style.fontSize = "26px";
  scoreText.style.color = "beige";

  document.querySelector("#easy").style.backgroundColor = "#302e2e";
  document.querySelector("#middel").style.backgroundColor = "#302e2e";
  document.querySelector("#hard").style.backgroundColor = "#302e2e";
};
//
//
//
//

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

document
  .getElementById("numberInput")
  .addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      checkNumber();
    }
  });

easyMode();
