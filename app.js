const hamburger_menu = document.querySelector(".hamburger-menu");
const container = document.querySelector(".container");
const home = document.querySelector(".home");
const services = document.querySelector(".about");
const contact = document.querySelector(".contact");
const main = document.querySelector(".main");
const main1 = document.querySelector(".main1");
const main2 = document.querySelector(".main2");

hamburger_menu.addEventListener("click", () => {
  container.classList.toggle("active");
});

services.addEventListener("click", () => {
  main.style.display = "none";
  main1.style.display = "block";
  main2.style.display = "none";
  container.classList.toggle("active");
})

// services.addEventListener("click", () => {
//   main.addClass("noe").removeClass("displ");
//   main1.addClass("displ").removeClass("noe");
//   container.classList.toggle("active");
// })

contact.addEventListener("click", () => {
  main.style.display = "none";
  main1.style.display = "none";
  main2.style.display = "block";
  container.classList.toggle("active");
})

home.addEventListener("click", () => {
  main.style.display = "block";
  main1.style.display = "none";
  main2.style.display = "none";
  container.classList.toggle("active");
})


