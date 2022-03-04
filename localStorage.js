const fullName = document.getElementById('name');
const email = document.getElementById('Email');
const form = document.querySelector('.contact-us');
const reset = document.querySelector('.reset-btn');
const errorMsg = document.querySelector('.error-msg');

const storeUserData = () => {
  const data = {
    userName: fullName.value,
    userEmail: email.value,
  };
  localStorage.setItem('userData', JSON.stringify(data));
};

const getUserData = () => JSON.parse(localStorage.getItem('userData'));

form.addEventListener('focusout', () => {
  storeUserData();
});

reset.addEventListener('click', (e) => {
  e.preventDefault();
  email.value = '';
  fullName.value = '';
  storeUserData();
  errorMsg.style.display = 'none';
});

const dataObj = getUserData();
fullName.value = dataObj.userName;
email.value = dataObj.userEmail;
