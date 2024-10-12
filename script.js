// NatureCamp – dropdown, mobile menu and on-load reveal
const dropdown = document.querySelector(".dropdown");
const toggle = document.querySelector(".dropdown-toggle");
const menu = document.getElementById("menu");

toggle.addEventListener("click", (e) => {
  e.stopPropagation();
  const open = dropdown.classList.toggle("open");
  toggle.setAttribute("aria-expanded", open);
});

document.addEventListener("click", () => {
  dropdown.classList.remove("open");
  toggle.setAttribute("aria-expanded", false);
});

document.getElementById("burger").addEventListener("click", () => {
  menu.classList.toggle("open");
});

window.addEventListener("load", () => {
  document.querySelectorAll(".reveal").forEach((el, i) => {
  });
});
