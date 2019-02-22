'use strict';

var button = document.querySelector('.button-up');

//
window.addEventListener('scroll', function () {
  if (window.scrollY > 1000) {
    button.classList.add('show-button');
  } else {
    button.classList.remove('show-button');
  }
});

// По клику на кнопку страница плавно прокрутится к началу
button.addEventListener('click', function () {
  var scroller = setInterval(function() {
    if (scrollY !== 0) {
      window.scrollBy(0, -50);
    } else {
      clearInterval(scroller);
    }
  }, 10);
});

