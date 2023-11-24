"use strict";

const slider = document.querySelector(".slider");
const prevButton = document.querySelector(".prev-button");
const nextButton = document.querySelector(".next-button");
const slides = Array.from(slider.querySelectorAll("img"));
const btns = Array.from(document.querySelectorAll(".btn-dot"));

const slideCount = slides.length;
let slideIndex = 0;
let sliderWidth;

// Адаптивность
window.addEventListener("resize", adaptiveSlider);
prevButton.addEventListener("click", showPreviousSlide);
nextButton.addEventListener("click", showNextSlide);

function adaptiveSlider() {
  // offsetWidth - числовое значене ширины без пиксилей
  sliderWidth = document.querySelector(".slider-container").offsetWidth;
  slider.style.width = sliderWidth * slides.length + "px";
  slides.forEach((slideImg) => (slideImg.style.width = sliderWidth + "px"));
  updateSlider();
}

function showPreviousSlide() {
  slideIndex = (slideIndex - 1 + slideCount) % slideCount;
  removeActiveClass();
  btns[slideIndex].classList.add("active");
  updateSlider();
}

function showNextSlide() {
  slideIndex = (slideIndex + 1) % slideCount;
  removeActiveClass();
  btns[slideIndex].classList.add("active");
  updateSlider();
}

function removeActiveClass() {
  const activeEls = document.querySelectorAll(".active");
  activeEls.forEach((activeEl) => activeEl.classList.remove("active"));
}


function updateSlider() {
  slides.forEach((slide, index) => {
    if (index === slideIndex) {
      slide.style.display = "block";
    } else {
      slide.style.display = "none";
    }
  });
}


btns.forEach((btn, index) => {
  btn.addEventListener("click", (e) => {
    slideIndex = index;
    const activeEl = document.querySelector(".active");
    if (activeEl) {
      activeEl.classList.remove("active");
    }
    if (e.target.tagName === "DIV") {
      e.target.classList.add("active");
    }
    updateSlider();
  });
});

adaptiveSlider();

setInterval(() => {
  showNextSlide();
}, 3000);