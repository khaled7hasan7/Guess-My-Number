"use strict";

const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
};

const min_max = document.querySelector("#MinMax");
const scoreText = document.querySelector("#score");
const numberR = document.querySelector("#number");
const guessNumber = document.querySelector("#numberInput");
const num1 = 3;

let RealNumber;
let score = 100;

const easyMode = () => {
  resetGame();
  RealNumber = getRandomNumber(0, 20);
  min_max.textContent = "0 - 20";
};
const middleMode = () => {
  resetGame();
  RealNumber = getRandomNumber(0, 30);
  console.log(RealNumber);
  min_max.textContent = "0 - 30";
};
const hardMode = () => {
  resetGame();
  RealNumber = getRandomNumber(0, 50);
  min_max.textContent = "0 - 50";
};

const resetGame = () => {
  score = 100;
  scoreText.textContent = `Score : ${score}`;
  document.querySelector("#number").textContent = `??`;
  numberR.textContent = `?? `;
};

function checkNumber() {
  const numberValue = parseInt(guessNumber.value, 10);

  console.log(`the Real Number = ${RealNumber}`);
  console.log(`the guess number = ${numberValue}`);

  if (numberValue === RealNumber) {
    return (document.querySelector("#number").textContent = `${RealNumber}`);
  } else if (numberValue > RealNumber) {
    numberR.textContent = `Down  `;
  } else {
    numberR.textContent = `UP ^ `;
  }
  score -= 5;
  scoreText.textContent = `Score : ${score}`;
}

easyMode();
