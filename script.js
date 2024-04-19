"use strict";

// navbar variables
const nav = document.querySelector(".mobile-nav");
const navMenuBtn = document.querySelector(".nav-menu-btn");
const navCloseBtn = document.querySelector(".nav-close-btn");

// navToggle function
const navToggleFunc = function () {
  nav.classList.toggle("active");
};

navMenuBtn.addEventListener("click", navToggleFunc);
navCloseBtn.addEventListener("click", navToggleFunc);

// theme toggle variables
// const themeBtn = document.querySelectorAll(".theme-btn");

// for (let i = 0; i < themeBtn.length; i++) {
//   themeBtn[i].addEventListener("click", function () {
//     // toggle `light-theme` & `dark-theme` class from `body`
//     // when clicked `theme-btn`

//         document.body.classList.toggle("dark-theme");
//         document.body.classList.toggle("light-theme");
//     for (let i = 0; i < themeBtn.length; i++) {
//       // When the `theme-btn` is clicked,
//       // it toggles classes between `light` & `dark` for all `theme-btn`.
//           themeBtn[i].classList.toggle("light");
//           themeBtn[i].classList.toggle("dark");
//         }
//   });
// }

// Add active class to the current button (highlight it)
var header = document.getElementById("myDIV");
var btns = header.getElementsByClassName("nav-link");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active-nav");
    current[0].className = current[0].className.replace("active-nav", "");
    this.className += " active-nav";
  });
}
