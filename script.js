const body = document.querySelector('body');
/* eslint-disable */
const displayNav = () => {
/* eslint-enable */
  document.body.getElementsByClassName('header-not-visible')[0].style.display = 'none';
  document.body.getElementsByClassName('mobile-menu')[0].style.display = 'block';
  body.style.height = '100vh';
  body.style.overflowY = 'hidden';
};
/* eslint-disable */
const closeNav = () => {
/* eslint-enable */
  document.body.getElementsByClassName('header-not-visible')[0].style.display = 'flex';
  document.body.getElementsByClassName('mobile-menu')[0].style.display = 'none';
  body.style.height = 'auto';
  body.style.overflowY = 'scroll';
};
