/*
  Close mobile menu
*/
function makeScrollable() {
  const body = document.querySelector('body');
  body.classList.remove('notScrollable');
  body.classList.add('scrollable');
}

function closeMenu() {
  const menuOptions = document.querySelector('.mobile-menu');
  menuOptions.classList.remove('visible');
  menuOptions.classList.add('invisible');
  makeScrollable();
}

function makeNotScrollable() {
  const body = document.querySelector('body');
  body.classList.remove('scrollable');
  body.classList.add('notScrollable');
}

/*
  Open the mobile menu
*/
const btnMenu = document.getElementById('menu-options');
btnMenu.addEventListener('click', () => {
  const menuOptions = document.querySelector('.mobile-menu');
  menuOptions.classList.remove('invisible');
  menuOptions.classList.add('visible');
  window.scrollTo(0, 0);
  makeNotScrollable();
});

const closeBtn = document.querySelector('.mobile-menu button');
closeBtn.addEventListener('click', () => {
  closeMenu();
});

document.addEventListener('click', (e) => {
  if (e.target.matches('.mobile-menu ul li a')) {
    closeMenu();
    makeScrollable();
  }
});