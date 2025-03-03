const slides = document.querySelectorAll('.slides');
let currentSlide = 0;
let slideshowInterval;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}

function playSlideshow() {
    slideshowInterval = setInterval(nextSlide, 1000); 
}

function stopSlideshow() {
    clearInterval(slideshowInterval);
}

document.querySelector('.next').addEventListener('click', nextSlide);
document.querySelector('.prev').addEventListener('click', prevSlide);
document.querySelector('.play').addEventListener('click', playSlideshow);
document.querySelector('.stop').addEventListener('click', stopSlideshow);

showSlide(currentSlide);
