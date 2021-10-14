const slides = (slides, next, prev, dir) => {
  let slideIndex = 1,
    paused = false, // add paused when mouseenter
    items = document.querySelectorAll(slides);


  function showSlides(n) {
    if (n > items.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = items.length;
    }
    items.forEach(item => {
      item.classList.add('animated');
      item.style.display = "none";
    });
    items[slideIndex - 1].style.display = 'block';
  }
  showSlides(slideIndex);

  function showPlus(n) {
    showSlides(slideIndex += n)
  }
  try { // excludes mistake when arrows disabled
    const nextBtn = document.querySelector(next),
      prevBtn = document.querySelector(prev);

    nextBtn.addEventListener('click', () => {
      showPlus(1);
      items[slideIndex - 1].classList.remove('slideInLeft');
      items[slideIndex - 1].classList.add('slideInRight');
    });
    prevBtn.addEventListener('click', () => {
      showPlus(-1);
      items[slideIndex - 1].classList.remove('slideInRight');
      items[slideIndex - 1].classList.add('slideInLeft');
    });
  } catch (e) {}

  activateAnimation();

  function activateAnimation() { // verical switch slides with interval
    if (dir == 'vertical') {
      paused = setInterval(() => {
        showPlus(1);
        items[slideIndex - 1].classList.add('slideInDown');
      }, 3000)
    } else {
      paused = setInterval(() => {
        showPlus(1);
        items[slideIndex - 1].classList.remove('slideInRight');
        items[slideIndex - 1].classList.add('slideInLeft');
      }, 3000)
    }
  }
  items[0].parentNode.addEventListener('mouseenter', () => {
    clearInterval(paused);
  })
  items[0].parentNode.addEventListener('mouseleave', () => {
    activateAnimation();
  })
}
export default slides;
