const controls = document.querySelector('[data-pagin]');
const slides = document.querySelector('[data-slides]');

const handleSlides = event => {
  const target = event.target;

  if (target.tagName === 'BUTTON') {
    const index = target.dataset.slid;
    slides.style.transform = `translateX(-${index}00%)`;

    document.querySelectorAll('[data-slid]').forEach(btn => {
      btn.classList.remove('active');
    });
    target.classList.add('active');
  }
};
controls.addEventListener('click', handleSlides);
