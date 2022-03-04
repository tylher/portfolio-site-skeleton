const fullName = document.getElementById('name');
const Email = document.getElementById('Email');
const Form = document.querySelector('.contact-us');
const reset = document.querySelector('.reset-btn');
const ErrorMsg = document.querySelector('.error-msg');

const storeUserData = () => {
  const data = {
    userName: fullName.value,
    userEmail: Email.value,
  };
  localStorage.setItem('userData', JSON.stringify(data));
};

const getUserData = () => JSON.parse(localStorage.getItem('userData'));

Form.addEventListener('focusout', () => {
  storeUserData();
});

reset.addEventListener('click', (e) => {
  e.preventDefault();
  Email.value = '';
  fullName.value = '';
  storeUserData();
  ErrorMsg.style.display = 'none';
});

const dataObj = getUserData();
fullName.value = dataObj.userName;
Email.value = dataObj.userEmail;
