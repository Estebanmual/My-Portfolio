const formCtrl = document.getElementById('form');
const nameCtrl = document.getElementById('name');
const emailCtrl = document.getElementById('email');
const errorCtrl = document.getElementById('error');
const commentsCtrl = document.getElementById('message');

// Reset the error message
emailCtrl.addEventListener('input', () => {
  if (emailCtrl.validity.valid) {
    errorCtrl.textContent = '';
  }
});

// Check the validity of the fields
formCtrl.addEventListener('submit', (e) => {
  if (!nameCtrl.checkValidity()) {
    nameCtrl.reportValidity();
    e.preventDefault();
    return;
  }
  if (!commentsCtrl.checkValidity()) {
    commentsCtrl.reportValidity();
    e.preventDefault();
    return;
  }
  const email = emailCtrl.value;
  /*
    Check for uppercase letter within the email address
  */
  const regex = /([A-Z])/g;
  if (email.search(regex) !== -1) {
    emailCtrl.setCustomValidity('Not good');
    emailCtrl.reportValidity();
    errorCtrl.textContent = 'Expecting lowercase letters';
    emailCtrl.setCustomValidity('');
    e.preventDefault();
    return;
  }
  // Check if is a valid email address with just lowercase letters
  const regEmail = /^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9-]+(?:\.[a-z0-9-]+)*$/g;
  if (email.search(regEmail) === -1) {
    errorCtrl.textContent = 'Expecting a valid email address';
    e.preventDefault();
  }
});