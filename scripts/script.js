function assignLocation(page) {
  location.assign(page)
}


//Used this tutorial to make hamburger menu https://www.youtube.com/watch?v=flItyHiDm7E


//get your HTML elements to use in javascript
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLink = document.querySelectorAll(".nav-link");


//to listen to an event happing on the part mentioned before (changing hamburger menu to cross)
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
  document.querySelector("main").classList.toggle("active");
});

//listens to each item in the hamburger menu
navLink.forEach((item) => {
  item.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  });
});

//to change the total price regarding the number of items
const inputNumber = document.querySelector("input");
const totalPrice = document.querySelector(".total-price");

function changePrice() {
  totalPrice.innerHTML = "€ " + inputNumber.value * 10
}


//to make the basket shake
const addToCart = document.querySelector(".add-button");
const basketLogo = document.querySelector(".basketlogo");

addToCart.addEventListener("click", () => {
  basketLogo.classList.add("shake"); //add the shake class
  setTimeout(function () { //make the shake class be removed after 1sec so you can shake it again 
    basketLogo.classList.remove('shake');
  }, 1100);
})

