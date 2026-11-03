/* Phone menu, shared by every page.
   Below 720px the nav collapses behind .menu-toggle and drops down under the
   header. The open state lives only in the button's aria-expanded. The menu
   closes on a link tap, a tap outside, Escape (focus returns to the button)
   or widening past the breakpoint. Without JavaScript the header never gets
   .has-menu, so the nav simply stays visible. */

(function () {
  'use strict';

  var header = document.querySelector('.site-header');
  var toggle = document.querySelector('.menu-toggle');
  var nav = document.getElementById('site-nav');
  if (!header || !toggle || !nav) return;

  var phone = window.matchMedia('(max-width: 720px)');
  header.classList.add('has-menu');

  function isOpen() {
    return toggle.getAttribute('aria-expanded') === 'true';
  }

  function setOpen(open) {
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    toggle.setAttribute('aria-label', open ? 'Close menu' : 'Menu');
  }

  toggle.addEventListener('click', function () {
    setOpen(!isOpen());
  });

  nav.addEventListener('click', function (event) {
    if (event.target.closest('a')) setOpen(false);
  });

  document.addEventListener('click', function (event) {
    if (isOpen() && !header.contains(event.target)) setOpen(false);
  });

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && isOpen()) {
      setOpen(false);
      toggle.focus();
    }
  });

  phone.addEventListener('change', function (event) {
    if (!event.matches) setOpen(false);
  });
})();
