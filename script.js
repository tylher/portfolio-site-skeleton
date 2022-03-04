import { data } from './data.js';

const body = document.querySelector('body');
const seeProject = document.querySelectorAll('.see-project');
const goBack = document.querySelector('.cancel-icon-desktop');
const projectTitle = document.querySelector('.modal-text-box h2');
const projectDescription = document.querySelector('.modal-text-box p');
const projectImage = document.querySelector('.project-image-desktop');
const tecnologiesArr = document.querySelector('.modal-tech');
const source = document.querySelector('.seeSource');
const live = document.querySelector('.seeLive');

function createChildItem(item) {
  const li = document.createElement('li');
  li.textContent = item;
  return li;
}

function deleteChildListItems(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

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

seeProject.forEach((btn) => {
  btn.addEventListener('click', () => {
    document.querySelector('.container').classList.toggle('blur');
    deleteChildListItems(tecnologiesArr);
    const Title = btn.parentElement.childNodes[1].textContent;
    const project = data.find((i) => i.name === Title);
    projectTitle.textContent = project.name;
    projectDescription.textContent = project.description;
    projectImage.src = project.imageUrl;
    /* eslint-disable */
    project.tecnologies.map((tech) => {
      tecnologiesArr.appendChild(createChildItem(tech));
    });
    live.href = project.ProjectUrls.seeLive;
    source.href = project.ProjectUrls.seeSource;

    document.querySelector('.modal-wrapper').style.display = 'flex';
  });
});

goBack.addEventListener('click', () => {
  document.querySelector('.container').classList.toggle('blur');
  document.querySelector('.modal-wrapper').style.display = 'none';
});

const email = document.getElementById("Email");
const form = document.querySelector(".contact-us");
const errorMsg = document.querySelector(".error-msg");

form.addEventListener("submit", (e) => {
  const reg1 = /[a-z]/g;
  const reg2 = /[A-Z]/g;
  if (reg1.test(email.value.trim())&& !reg2.test(email.value.trim()) == false) {
    e.preventDefault();
    errorMsg.textContent = "Your email should be in lowercase";
    errorMsg.style.display = "inline";
    email.value = email.value.toLowerCase();
  }
});



