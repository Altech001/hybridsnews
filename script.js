"use strict";

/**
 * Mobile Navigation Toggle
 */
const nav = document.querySelector(".mobile-nav");
const navMenuBtn = document.querySelector(".nav-menu-btn");
const navCloseBtn = document.querySelector(".nav-close-btn");

const navToggleFunc = () => {
  if (nav) nav.classList.toggle("active");
};

if (navMenuBtn) navMenuBtn.addEventListener("click", navToggleFunc);
if (navCloseBtn) navCloseBtn.addEventListener("click", navToggleFunc);

/**
 * Theme Toggle
 */
const themeBtns = document.querySelectorAll(".theme-btn");

const toggleTheme = () => {
  document.body.classList.toggle("dark-theme");
  document.body.classList.toggle("light-theme");

  const isDark = document.body.classList.contains("dark-theme");
  localStorage.setItem("theme", isDark ? "dark" : "light");
};

themeBtns.forEach(btn => {
  btn.addEventListener("click", toggleTheme);
});

// Load persisted theme
window.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark-theme");
    document.body.classList.remove("light-theme");
  } else {
    document.body.classList.add("light-theme");
    document.body.classList.remove("dark-theme");
  }
});
