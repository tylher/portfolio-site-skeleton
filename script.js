const data = [
  {
    name: 'Events price calculator',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    imageUrl: 'images/Snapshoot-Portfolio.svg',
    tecnologies: ['Ruby on rails', 'css', 'JavScript', 'React'],
    ProjectUrls: {
      seeLive: 'https://tylher.github.io/portfolio-site-skeleton/',
      seeSource: 'https://github.com/tylher/portfolio-site-skeleton',
    },
  },
  {
    name: 'Reaching for the stars',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    imageUrl: './images/Snapshoot-Portfolio.svg',
    tecnologies: ['Ruby on rails', 'css', 'JavScript'],
    ProjectUrls: {
      seeLive: 'https://tylher.github.io/portfolio-site-skeleton/',
      seeSource: 'https://github.com/tylher/portfolio-site-skeleton',
    },
  },
  {
    name: 'Technology meetup website',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    imageUrl: 'images/Snapshoot-Portfolio.svg',
    tecnologies: ['Ruby on rails', 'css', 'JavScript'],
    ProjectUrls: {
      seeLive: 'https://tylher.github.io/portfolio-site-skeleton/',
      seeSource: 'https://github.com/tylher/portfolio-site-skeleton',
    },
  },
  {
    name: 'Multi-Post Stories Gain+Glory',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    imageUrl: 'images/Snapshoot-Portfolio.svg',
    tecnologies: ['Ruby on rails', 'css', 'JavScript'],
    ProjectUrls: {
      seeLive: 'https://tylher.github.io/portfolio-site-skeleton/',
      seeSource: 'https://github.com/tylher/portfolio-site-skeleton',
    },
  },
  {
    name: 'Keeping track of hundreds of components',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    imageUrl: 'images/Snapshoot-Portfolio.svg',
    tecnologies: ['Ruby on rails', 'css', 'JavScript'],
    ProjectUrls: {
      seeLive: 'https://tylher.github.io/portfolio-site-skeleton/',
      seeSource: 'https://github.com/tylher/portfolio-site-skeleton',
    },
  },
  {
    name: 'Daily Task Saver',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    imageUrl: 'images/Snapshoot-Portfolio.svg',
    tecnologies: ['Ruby on rails', 'css', 'JavScript'],
    ProjectUrls: {
      seeLive: 'https://tylher.github.io/portfolio-site-skeleton/',
      seeSource: 'https://github.com/tylher/portfolio-site-skeleton',
    },
  },
];

const body = document.querySelector('body');
const seeProject = document.querySelectorAll('.see-project');
const goBack = document.querySelector('.cancel-icon-desktop');
const projectTitle = document.querySelector('.modal-text-box h2');
const projectDescription = document.querySelector('.modal-text-box p');
const projectImage = document.querySelector('.project-image-desktop');
const tecnologiesArr = document.querySelector('.modal-tech');
const source = document.querySelector('.seeSource');
const live = document.querySelector('.seeLive');
const mobileNav = document.querySelector('.mobile-header-container>a');
const navLinks = document.querySelectorAll('.nav-links');
const exitNav = document.querySelector('.exit-nav');
const nextProj = document.querySelector('.next-proj');
const prevProj = document.querySelector('.prev-proj');

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

const displayNav = () => {
  document.body.getElementsByClassName('header-not-visible')[0].style.display = 'none';
  document.body.getElementsByClassName('mobile-menu')[0].style.top = 0;
  body.style.height = '100vh';
  body.style.overflowY = 'hidden';
};

const closeNav = () => {
  document.body.getElementsByClassName('header-not-visible')[0].style.display = 'flex';
  document.body.getElementsByClassName('mobile-menu')[0].style.top = '-100%';
  body.style.height = 'auto';
  body.style.overflowY = 'scroll';
};

seeProject.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    deleteChildListItems(tecnologiesArr);
    const Title = btn.parentElement.childNodes[1].textContent;
    const project = data.find((i) => i.name === Title);
    projectTitle.textContent = project.name;
    projectDescription.textContent = project.description;
    projectImage.src = project.imageUrl;
    project.tecnologies.map((tech) => {
      tecnologiesArr.appendChild(createChildItem(tech));
      return '';
    });
    live.href = project.ProjectUrls.seeLive;
    source.href = project.ProjectUrls.seeSource;
    document.querySelector('.modal-wrapper').style.display = 'flex';
    document.querySelector('.cover').style.display = 'block';
    document.body.style.overflowY = 'hidden';
  });
});

goBack.addEventListener('click', (e) => {
  e.preventDefault();
  document.querySelector('.modal-wrapper').style.display = 'none';
  document.querySelector('.cover').style.display = 'none';
  document.body.style.overflowY = 'auto';
});

const email = document.getElementById('Email');
const form = document.querySelector('.contact-us');
const errorMsg = document.querySelector('.error-msg');

form.addEventListener('submit', (e) => {
  const reg1 = /[a-z]/g;
  const reg2 = /[A-Z]/g;
  if (reg1.test(email.value.trim()) && !reg2.test(email.value.trim()) === false) {
    e.preventDefault();
    errorMsg.textContent = 'Your email should be in lowercase';
    errorMsg.style.display = 'inline-flex';
    setTimeout(() => {
      errorMsg.style.display = 'none';
    }, 5000);
    email.value = email.value.toLowerCase();
  }
});

window.addEventListener('scroll', () => {
  const Header = document.querySelector('header');
  if (window.scrollY > 10) {
    Header.classList.add('fixed-nav');
  } else { Header.classList.remove('fixed-nav'); }
});

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    closeNav();
  });
});

mobileNav.addEventListener('click', () => {
  displayNav();
});

exitNav.addEventListener('click', () => {
  closeNav();
});

prevProj.addEventListener('click', () => {
  const currentProj = data.find((proj) => proj.name === projectTitle.textContent);
  const currentPos = data.indexOf(currentProj);
  const prevPos = currentPos - 1;
  if (prevPos >= 0) {
    nextProj.disabled = false;
    deleteChildListItems(tecnologiesArr);
    projectTitle.textContent = data[prevPos].name;
    projectDescription.textContent = data[prevPos].description;
    projectImage.src = data[prevPos].imageUrl;
    data[prevPos].tecnologies.map((tech) => {
      tecnologiesArr.appendChild(createChildItem(tech));
      return '';
    });
    live.href = data[prevPos].ProjectUrls.seeLive;
    source.href = data[prevPos].ProjectUrls.seeSource;
  } else {
    prevProj.disabled = true;
  }
});

nextProj.addEventListener('click', () => {
  const currentProj = data.find((proj) => proj.name === projectTitle.textContent);
  const currentPos = data.indexOf(currentProj);
  const nextPos = currentPos + 1;
  if (nextPos < data.length) {
    prevProj.disabled = false;
    deleteChildListItems(tecnologiesArr);
    projectTitle.textContent = data[nextPos].name;
    projectDescription.textContent = data[nextPos].description;
    projectImage.src = data[nextPos].imageUrl;
    data[nextPos].tecnologies.map((tech) => {
      tecnologiesArr.appendChild(createChildItem(tech));
      return '';
    });
    live.href = data[nextPos].ProjectUrls.seeLive;
    source.href = data[nextPos].ProjectUrls.seeSource;
  } else {
    nextProj.disabled = true;
  }
});

window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section');
  sections.forEach((sec) => {
    const top = window.scrollY;
    const offset = sec.offsetTop - 100;
    const height = sec.offsetHeight;
    const id = sec.getAttribute('id');

    if (top >= offset && top < (offset + height)) {
      navLinks.forEach((link) => {
        link.classList.remove('activePage');
        document.querySelector(`.nav-links[href*=${id}]`).classList.add('activePage');
      });
    }
  });
});