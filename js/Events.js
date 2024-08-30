const aboutText = document.querySelector("#aboutText");
const blur = document.querySelector(".blur");
const close = document.querySelector("#close");

aboutGame.addEventListener("click", function () {
  rmHeddin();
});

close.addEventListener("click", function () {
  addHeddin();
});
blur.addEventListener("click", function () {
  addHeddin();
});

const rmHeddin = () => {
  aboutText.classList.remove("heddin");
  blur.classList.remove("heddin");
};

const addHeddin = () => {
  aboutText.classList.add("heddin");
  blur.classList.add("heddin");
};

document
  .getElementById("numberInput")
  .addEventListener("keydown", function (event) {
    if (event.key == "Enter") {
      checkNumber();
    }
  });

document.addEventListener("keydown", function (e) {
  // console.log(aboutText.className.includes("heddin"));
  e.key === "Escape" && aboutText.className.includes("heddin")
    ? rmHeddin()
    : addHeddin();
});
