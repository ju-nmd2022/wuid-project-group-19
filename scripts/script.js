function assignLocation(page) {
  location.assign(page)
}


//Used this tutorial to make hamburger menu https://www.youtube.com/watch?v=flItyHiDm7E

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLink = document.querySelectorAll(".nav-link");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
  document.querySelector("main").classList.toggle("active");
});

navLink.forEach((item) => {
  item.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  });
});


const inputNumber = document.querySelector("input");
const totalPrice = document.querySelector(".total-price");

function changePrice() {
  if (inputNumber.value > 0) {
    totalPrice.innerHTML = "€ " + inputNumber.value + "0"
  } else {
    totalPrice.innerHTML = "€ 0"
  }
}