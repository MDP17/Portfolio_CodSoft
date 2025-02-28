// Sticky Navigation & Scroll Button
let nav = document.querySelector("nav");
let scrollBtn = document.querySelector(".scroll-button a");

window.addEventListener("scroll", () => {
  if (document.documentElement.scrollTop > 20) {
    nav.classList.add("sticky");
    scrollBtn.style.display = "block";
  } else {
    nav.classList.remove("sticky");
    scrollBtn.style.display = "none";
  }
});

// Smooth Scroll for Scroll Button
scrollBtn.addEventListener("click", (e) => {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Side Navigation Menu
let body = document.querySelector("body");
let navBar = document.querySelector(".navbar");
let menuBtn = document.querySelector(".menu-btn");
let cancelBtn = document.querySelector(".cancel-btn");

// Function to toggle navigation menu
const toggleNavMenu = () => {
  let isActive = navBar.classList.toggle("active");
  menuBtn.style.opacity = isActive ? "0" : "1";
  menuBtn.style.pointerEvents = isActive ? "none" : "auto";
  body.style.overflow = isActive ? "hidden" : "auto";
  scrollBtn.style.pointerEvents = isActive ? "none" : "auto";
};

// Open side navigation
menuBtn.onclick = toggleNavMenu;

// Close side navigation
cancelBtn.onclick = toggleNavMenu;

// Close side navigation when a menu link is clicked
document.querySelectorAll(".menu li a").forEach((link) => {
  link.addEventListener("click", toggleNavMenu);
});
