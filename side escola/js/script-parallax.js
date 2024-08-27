const parallaxContainer = document.querySelector('.parallax-container');
const parallaxImage = document.querySelector('.parallax-image');

window.addEventListener('scroll', () => {
  const scrollTop = window.scrollY;
  const containerTop = parallaxContainer.offsetTop;
  const offset = scrollTop - containerTop;
  const imageHeight = parallaxImage.offsetHeight;
  const containerHeight = parallaxContainer.offsetHeight;
  const scrollPercentage = (offset / (imageHeight - containerHeight)) * 100;
  parallaxImage.style.transform = `translateY(${scrollPercentage}%`;
});