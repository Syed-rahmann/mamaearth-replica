
//   const slider = document.querySelector('.zoro-product-slider');
//   const next = document.querySelector('.zoro-next');
//   const prev = document.querySelector('.zoro-prev');

//   let scrollAmount = 0;
//   const cardWidth = document.querySelector('.zoro-product-card').offsetWidth + 20;

//   next.addEventListener('click', () => {
//     scrollAmount += cardWidth * 2;
//     slider.style.transform = `translateX(-${scrollAmount}px)`;
//   });

//   prev.addEventListener('click', () => {
//     scrollAmount = Math.max(0, scrollAmount - cardWidth * 2);
//     slider.style.transform = `translateX(-${scrollAmount}px)`;
//   });

document.querySelectorAll('.zoro-best-sellers').forEach(section => {
  const slider = section.querySelector('.zoro-product-slider');
  const next = section.querySelector('.zoro-next');
  const prev = section.querySelector('.zoro-prev');

  let scrollAmount = 0;
  const cardWidth = section.querySelector('.zoro-product-card').offsetWidth + 20;

  next.addEventListener('click', () => {
    scrollAmount += cardWidth * 2;
    slider.style.transform = `translateX(-${scrollAmount}px)`;
  });

  prev.addEventListener('click', () => {
    scrollAmount = Math.max(0, scrollAmount - cardWidth * 2);
    slider.style.transform = `translateX(-${scrollAmount}px)`;
  });
});

