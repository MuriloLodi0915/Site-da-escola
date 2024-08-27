let slideshow = document.querySelector('.slideshow');
let images = slideshow.querySelectorAll('img');
let texts = slideshow.querySelectorAll('.text-box');
let currentImage = 0;
let dots = document.querySelectorAll('.dot');

images.forEach((img, index) => {
  img.style.opacity = 0;
  if (index === currentImage) {
    img.style.opacity = 1;
  }
});

texts.forEach((text, index) => {
  text.style.opacity = 0;
  if (index === currentImage) {
    text.style.opacity = 1;
  }
});

dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    currentImage = index;
    updateSlideshow();
  });
});

document.querySelector('.prev').addEventListener('click', () => {
  currentImage--;
  if (currentImage < 0) {
    currentImage = images.length - 1;
  }
  updateSlideshow();
});

document.querySelector('.next').addEventListener('click', () => {
  currentImage++;
  if (currentImage >= images.length) {
    currentImage = 0;
  }
  updateSlideshow();
});

function updateSlideshow() {
  images.forEach((img) => {
    img.style.opacity = 0;
  });
  images[currentImage].style.opacity = 1;
  texts.forEach((text) => {
    text.style.opacity = 0;
  });
  texts[currentImage].style.opacity = 1;
  dots.forEach((dot) => {
    dot.classList.remove('active');
  });
  dots[currentImage].classList.add('active');
}