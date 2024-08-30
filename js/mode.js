console.log("new file mode ");

const checkbox = document.querySelector("#checkbox");
document.addEventListener("DOMContentLoaded", function () {
  checkbox.addEventListener("change", function () {
    if (checkbox.checked) {
      // dark mode
      darkMode();
      console.log("Checked");
    } else {
      // change to Light Mode
      removeDarkMode();
      // lightMode();
      console.log("Not checked");
    }
  });
});

//
//
console.log("new file mode ");
//
//
//
//
//
//

const header = document.querySelector("header");
const main = document.querySelector("main");
const darkMode = () => {
  // remove light mode
  removeLightMode();

  //
  //
  // set the darke mode
  //

  header.classList.add("header-darkMode");
  main.classList.add("main-darkMode");
  document.querySelector(".title").classList.add("title-darkMode");
  document.querySelector(".result").classList.add("result-dark");
  document.querySelector("#numberInput").classList.add("numberInput-dark");
  document.querySelectorAll(".buttons").classList.add("buttons-dark");
  document.querySelectorAll(".Rnumber").classList.add("numberR-darkMode");
};

//
//
//
//
//
//

const removeDarkMode = () => {
  header.classList.remove("header-darkMode");
  document.querySelector(".title").classList.remove("title-darkMode");
  main.classList.remove("main-darkMode");
  document.querySelector(".result").classList.remove("result-dark");
  document.querySelector(".numberInput").classList.remove("numberInput-dark");
  document.querySelector(".buttons").classList.remove("buttons-dark ");
  document.querySelectorAll(".Rnumber").classList.remove("numberR-darkMode");
};
