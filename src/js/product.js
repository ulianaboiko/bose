// const button1 = document.getElementById('button1');
// const button2 = document.getElementById('button2');
// const image = document.getElementById('image');

// button1.addEventListener('click', function () {
//   image.src = './images/products/headphones-black.jpg';
// });

// button2.addEventListener('click', function () {
//   image.src = './images/products/headphones-white.jpg';
// });

document.addEventListener('DOMContentLoaded', function () {
  const button1 = document.getElementById('button1');
  const button2 = document.getElementById('button2');
  const image = document.getElementById('image');

  button1.addEventListener('click', function () {
    image.src = './images/products/headphones-black.jpg';
  });

  button2.addEventListener('click', function () {
    image.src = './images/products/headphones-white.jpg';
  });
});
