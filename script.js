// NatureCamp – dropdown, mobile menu and on-load reveal
const dropdown = document.querySelector(".dropdown");
const toggle = document.querySelector(".dropdown-toggle");
const menu = document.getElementById("menu");

toggle.addEventListener("click", (e) => {
  e.stopPropagation();
});
