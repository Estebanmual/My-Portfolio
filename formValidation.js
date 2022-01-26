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
 
});