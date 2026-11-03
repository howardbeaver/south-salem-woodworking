/* Gallery lightbox, shared by every gallery page.
   Each link in .gallery points at a full-size photo. Clicking one opens it in
   the <dialog class="lightbox">, where arrows, the keyboard (left/right,
   Escape) and swiping move through the photos. Without JavaScript, or in a
   browser without <dialog>, the links simply open the image. */

(function () {
  'use strict';

  var links = Array.prototype.slice.call(document.querySelectorAll('.gallery a'));
  var dialog = document.querySelector('.lightbox');
  if (!links.length || !dialog || typeof dialog.showModal !== 'function') return;

  var img = dialog.querySelector('.lightbox-img');
  var count = dialog.querySelector('.lightbox-count');
  var current = 0;
  var swiped = false;

  function photoAt(i) {
    return (i + links.length) % links.length;
  }

  function preload(i) {
    var pre = new Image();
    pre.src = links[photoAt(i)].getAttribute('href');
  }

  function show(i) {
    current = photoAt(i);
    var link = links[current];
    var thumb = link.querySelector('img');

    img.classList.add('is-loading');
    img.src = link.getAttribute('href');
    img.alt = thumb ? thumb.alt : '';
    count.textContent = (current + 1) + ' / ' + links.length;

    preload(current + 1);
    preload(current - 1);
  }

  function open(i) {
    show(i);
    document.documentElement.classList.add('lightbox-open');
    dialog.showModal();
  }

  img.addEventListener('load', function () {
    img.classList.remove('is-loading');
  });

  links.forEach(function (link, i) {
    link.addEventListener('click', function (event) {
      event.preventDefault();
      open(i);
    });
  });

  dialog.querySelector('.lightbox-prev').addEventListener('click', function () {
    show(current - 1);
  });

  dialog.querySelector('.lightbox-next').addEventListener('click', function () {
    show(current + 1);
  });

  dialog.querySelector('.lightbox-close').addEventListener('click', function () {
    dialog.close();
  });

  dialog.addEventListener('keydown', function (event) {
    if (event.key === 'ArrowLeft') {
      event.preventDefault();
      show(current - 1);
    } else if (event.key === 'ArrowRight') {
      event.preventDefault();
      show(current + 1);
    }
    // Escape is handled by <dialog> itself.
  });

  // A click on the dark area around the photo closes it.
  dialog.addEventListener('click', function (event) {
    if (swiped) {
      swiped = false;
      return;
    }
    if (event.target === dialog || event.target.classList.contains('lightbox-figure')) {
      dialog.close();
    }
  });

  // Return focus to the photo that was last shown, so keyboard users land there.
  dialog.addEventListener('close', function () {
    document.documentElement.classList.remove('lightbox-open');
    links[current].focus();
  });

  // Swipe left or right on touch screens.
  var startX = 0;
  var startY = 0;

  dialog.addEventListener('touchstart', function (event) {
    startX = event.changedTouches[0].clientX;
    startY = event.changedTouches[0].clientY;
  }, { passive: true });

  dialog.addEventListener('touchend', function (event) {
    var dx = event.changedTouches[0].clientX - startX;
    var dy = event.changedTouches[0].clientY - startY;
    if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy)) {
      // Ignore the click some browsers send after a swipe, so it doesn't close the viewer.
      swiped = true;
      setTimeout(function () { swiped = false; }, 400);
      show(dx < 0 ? current + 1 : current - 1);
    }
  }, { passive: true });
})();
