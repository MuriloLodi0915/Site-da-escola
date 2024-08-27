const page1Image = document.querySelector('.page1-image');
const page1ImageContainer = document.querySelector('.page1-image-container');

window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY;
  const containerHeight = page1ImageContainer.offsetHeight;
  const imageHeight = page1Image.offsetHeight;
  const maxScroll = imageHeight - containerHeight;

  if (scrollPosition <= maxScroll) {
    page1Image.style.transform = `translateY(-${scrollPosition / 5}px)`;
  }
});