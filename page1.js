"use strict";

/**
 * Tab Switching Logic
 */
const tabBtns = document.querySelectorAll(".tab-btn");
const tabContents = document.querySelectorAll(".tab-content");

tabBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    const targetTab = btn.getAttribute("data-tab");

    // Remove active class from all buttons and contents
    tabBtns.forEach(b => b.classList.remove("active"));
    tabContents.forEach(c => c.classList.remove("active"));

    // Add active class to current button and target content
    btn.classList.add("active");
    const targetContent = document.getElementById(targetTab);
    if (targetContent) {
      targetContent.classList.add("active");
    }
  });
});
