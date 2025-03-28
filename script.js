let slideIndex = 0;

function showSlides() {
    let slides = document.querySelectorAll(".slide");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 3000); // Slide changes every 3 seconds
}

// Initialize slideshow on load
document.addEventListener("DOMContentLoaded", showSlides);
/*
© 2025 Priyanjal, Promptoria. All rights reserved.
Unauthorized copying, modification, or distribution is strictly prohibited.
*/

