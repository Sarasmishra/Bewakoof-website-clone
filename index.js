let currentSlide = 0;
const slides = document.querySelector('.slides');
const slideWidth = document.querySelector('.slide').offsetWidth;
const totalSlides = document.querySelectorAll('.slide').length;
const arrowPrev = document.querySelector('.arrow-prev');

function controller(direction) {
    currentSlide += direction;
    if (currentSlide < 0) {
        currentSlide = totalSlides-1; // Go to the last slide
    } else if (currentSlide >= totalSlides-1) {
        currentSlide = 0; // Start from the first slide again
    }
    updateSlides();

}

function updateSlides() {
    const offset = currentSlide * slideWidth * -1;
    slides.style.transform = `translateX(${offset}px)`;
}



// Handle manual navigation
document.querySelector('.arrow-prev span').addEventListener('click', () => {
    controller(-1); // Move to previous slide
});

document.querySelector('.arrow-next span').addEventListener('click', () => {
    controller(1); // Move to next slide
});

// Start automatic slideshow
let intervalId = setInterval(() => {
    controller(1); // Auto slide to the next image
}, 3000); // Change slide every 3 seconds (adjust as needed)

// Stop automatic slideshow when hovering over the slide container
document.querySelector('.slide-container').addEventListener('mouseenter', () => {
    clearInterval(intervalId);
});

// Restart automatic slideshow when mouse leaves the slide container
document.querySelector('.slide-container').addEventListener('mouseleave', () => {
    intervalId = setInterval(() => {
        controller(1); // Auto slide to the next image
    }, 3000); // Change slide every 3 seconds (adjust as needed)
});

// Duplicate slides to create an infinite loop without blank slides
const allSlides = document.querySelectorAll('.slide');
const firstSlideClone = allSlides[1].cloneNode(true);
const firstSlideClone2 = allSlides[2].cloneNode(true);

const lastSlideClone = allSlides[totalSlides-1].cloneNode(true);
slides.appendChild(firstSlideClone);
slides.insertBefore(lastSlideClone, allSlides[0]);

// Adjust initial position to show the first real slide
updateSlides();

// Second Slider
let currentSlide2 = 0;
const slides2 = document.querySelector('#second-slide .slides-2');
const slideWidth2 = document.querySelector('#second-slide .slide-2').offsetWidth;
const totalSlides2 = document.querySelectorAll('#second-slide .slide-2').length;
const arrowPrev2 = document.querySelector('#second-slide .arrow-prev-2');
const arrowNext2 = document.querySelector('#second-slide .arrow-next-2');

function controller2(direction) {
    currentSlide2 += direction;
    if (currentSlide2 < 0) {
        currentSlide2 = totalSlides2 - 1; // Go to the last slide
    } else if (currentSlide2 >= totalSlides2-1) {
        currentSlide2 = 0; // Start from the first slide again
    }
    updateSlides2();
}

function updateSlides2() {
    const offset = currentSlide2 * slideWidth2 * -1;
    slides2.style.transform = `translateX(${offset}px)`;
}

// Handle manual navigation for the second slider
arrowPrev2.addEventListener('click', () => {
    controller2(-1); // Move to previous slide
});

arrowNext2.addEventListener('click', () => {
    controller2(1); // Move to next slide
});

// Start automatic slideshow for the second slider
let intervalId2 = setInterval(() => {
    controller2(1); // Auto slide to the next image
}, 3000); // Change slide every 3 seconds (adjust as needed)

// Stop automatic slideshow when hovering over the second slide container
document.querySelector('#second-slide').addEventListener('mouseenter', () => {
    clearInterval(intervalId2);
});

// Restart automatic slideshow when mouse leaves the second slide container
document.querySelector('#second-slide').addEventListener('mouseleave', () => {
    intervalId2 = setInterval(() => {
        controller2(1); // Auto slide to the next image
    }, 3000); // Change slide every 3 seconds (adjust as needed)
});

// Duplicate slides to create an infinite loop without blank slides for the second slider
const allSlides2 = document.querySelectorAll('#second-slide .slide-2');
const firstSlideClone3 = allSlides2[0].cloneNode(true);
const lastSlideClone2 = allSlides2[totalSlides2 - 1].cloneNode(true);
slides2.appendChild(firstSlideClone3);
slides2.insertBefore(lastSlideClone2, allSlides2[0]);

// Adjust initial position to show the first real slide for the second slider
updateSlides2();

