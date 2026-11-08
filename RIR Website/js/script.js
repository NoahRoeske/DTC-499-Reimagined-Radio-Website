// Slides
const slides = document.querySelector(".slides");
const slideItems = document.querySelectorAll(".slide");

// Slider container and next/previous buttons
const sliderContainer = document.querySelector(".slider-container")
const previousButton = document.querySelector(".previous");
const nextButton = document.querySelector(".next");

let currentIndex = 0;
let autoRotation;

// Show a slide and fill in the dot
function showSlide(index) {
    currentIndex = index;
    slides.style.transform = "translateX(-" + (index * 100) + "%)";
}

// Move slides forward or backward
function nextSlide() {
    currentIndex = currentIndex + 1;
    if (currentIndex >= slideItems.length) {
        currentIndex = 0;
    }
    showSlide(currentIndex);
}

function previousSlide() {
    currentIndex = currentIndex - 1;
    if (currentIndex < 0) {
        currentIndex = slideItems.length - 1;
    }
    showSlide(currentIndex);
}

// Arrow buttons
nextButton.addEventListener("click", nextSlide);
previousButton.addEventListener("click", previousSlide);

// Automatic rotation
function startAutoRotation() {
    stopAutoRotation();
    autoRotation = setInterval(nextSlide, 4000);
}

function stopAutoRotation() {
    clearInterval(autoRotation);
}

// Pause while hovering over the slider
sliderContainer.addEventListener("mouseenter", stopAutoRotation);
sliderContainer.addEventListener("mouseleave", startAutoRotation);

// Start the slider
showSlide(0);
startAutoRotation();