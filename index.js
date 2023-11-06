import { renderRating, renderThankyou } from "./render.js";

// Body element
const bodyElement = document.querySelector("body");

bodyElement.innerHTML = renderRating();

let isRated = false; // To check if rated or not
let ratingClicked; // To capture the clicked rating
// Button element
const btnElement = document.querySelector("button");
// Rating array element
const ratingSelected = document.querySelectorAll("a");
let previousRating; // To keep track of previously selected rating

ratingSelected.forEach((rating) => {
  rating.addEventListener("click", function (evt) {
    evt.preventDefault();
    ratingClicked = evt.target.innerText;
    if (previousRating) {
      previousRating.classList.remove("active");
    }
    // Change the background color when active
    evt.target.classList.add("active");
    isRated = true;

    previousRating = evt.target;
  });
});

// Identify submit click and accordingly switch
btnElement.addEventListener("click", function (evt) {
  if (isRated) {
    bodyElement.innerHTML = "";
    bodyElement.innerHTML = renderThankyou(ratingClicked);
  }
});
