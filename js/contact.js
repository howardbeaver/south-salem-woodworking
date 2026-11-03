/* Contact form. Until a form service is connected (M10), the form carries
   data-not-connected: the browser still checks the required fields, then this
   script stops the submit and explains that nothing was sent. Once the form's
   action points at the service and the attribute is removed, it submits
   normally. */

(function () {
  'use strict';

  var form = document.querySelector('.contact-form');
  if (!form) return;

  var status = form.querySelector('.form-status');

  form.addEventListener('submit', function (event) {
    if (!form.hasAttribute('data-not-connected')) return;

    event.preventDefault();
    status.textContent = 'Thank you. This form isn’t connected yet, so your message was not sent. ' +
      'Please call or email Jeff directly using the details on this page.';
    status.classList.add('is-visible');
  });
})();
