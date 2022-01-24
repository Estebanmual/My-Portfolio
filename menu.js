

/*
  Close mobile menu
*/
function closeMenu() {
  let menuOptions = document.querySelector('.mobile-menu');
  menuOptions.classList.remove('visible');
  menuOptions.classList.add('invisible');
  makeScrollable();
}

function makeScrollable() {
  let body = document.querySelector('body');
  body.classList.remove('notScrollable');
  body.classList.add('scrollable');
}

function makeNotScrollable() {
  let body = document.querySelector('body');
  body.classList.remove('scrollable');
  body.classList.add('notScrollable');
}


/*
  Open the mobile menu
*/
let btnMenu = document.getElementById('menu-options');
btnMenu.addEventListener('click', e => {
  let menuOptions = document.querySelector('.mobile-menu');
  menuOptions.classList.remove('invisible');
  menuOptions.classList.add('visible');
  window.scrollTo(0,0);
  makeNotScrollable()
});

let closeBtn = document.querySelector('.mobile-menu button');
closeBtn.addEventListener('click', e => {
  closeMenu();
});

document.addEventListener('click', e => {
  if (e.target.matches('.mobile-menu ul li a')) {
    closeMenu();
    makeScrollable();
  }
});