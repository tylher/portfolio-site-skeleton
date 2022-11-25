const data = [
  {
    name: 'SHOWNET',
    description:
      'A movie database website that displays all the information about a show including the discription and the rating of the show. You can search for a show, like and also comment on any of your favourite show. This project consumed TVmaze api.',
    imageUrl: 'images/projects/SHOWNET.jpg',
    tecnologies: ['HTML', 'css', 'JavScript'],
    ProjectUrls: {
      seeLive: 'https://tylher.github.io/Javascript-capstone/',
      seeSource: 'https://github.com/tylher/Javascript-capstone',
    },
  },
  {
    name: 'To-do App',
    description:
      'This project lets you create a to-do list for activities you need to do for some time. Each activity has a box that can be checked when completed',
    imageUrl: './images/projects/To-do-app.png',
    tecnologies: ['HTML', 'css', 'JavScript'],
    ProjectUrls: {
      seeLive: 'https://tylher.github.io/portfolio-site-skeleton/',
      seeSource: 'https://github.com/tylher/To-do-List',
    },
  },
  {
    name: 'Space travelers Hub',
    description:
      'space-travelers-hub is web application for a company that provides commercial and scientific space travel services. The application will allow users to book rockets and join selected space missions.',
    imageUrl: 'images/projects/space-rocket.png',
    tecnologies: ['React', 'Redux', 'JSX', 'css'],
    ProjectUrls: {
      seeLive: 'https://627d39b107b3bf0f75556474--dazzling-travesseiro-1e9711.netlify.app/',
      seeSource: 'https://github.com/IfzaRasool/space-travelers-hub',
    },
  },
  {
    name: 'BookStore App',
    description:
      'The Bookstore is a book register website that stores books using the title and author. It is an MVP version of it that allows you to: Display a list of books, Add a book, Remove a selected book',
    imageUrl: 'images/projects/Bookstore.png',
    tecnologies: ['React', 'Redux', 'css', 'JavScript'],
    ProjectUrls: {
      seeLive: 'https://dev--tylher-bookstore.netlify.app/',
      seeSource: 'https://github.com/tylher/bookstore-react',
    },
  },
  {
    name: 'Covid-19 Stat App',
    description:
      'This app is a react app that consumes a covid-19 stat API and manipulates the data to display the vaccination metrics country based on continent and country category',
    imageUrl: 'images/projects/covid19-vaccination.jpg',
    tecnologies: ['React', 'CSS', 'JavScript', 'Redux'],
    ProjectUrls: {
      seeLive: 'https://covid-19-stat-web-app.netlify.app/',
      seeSource: 'https://github.com/tylher/covid-19-stat-web-app',
    },
  },

];

const body = document.querySelector('body');
const goBack = document.querySelector('.cancel-icon-desktop');
const projectTitle = document.querySelector('.modal-text-box h2');
const projectDescription = document.querySelector('.modal-text-box p');
const projectImage = document.querySelector('.project-image-desktop');
const tecnologiesArr = document.querySelector('.modal-tech');
const source = document.querySelector('.seeSource');
const live = document.querySelector('.seeLive');
const projects = document.querySelector('.Works');
const mobileNav = document.querySelector('.mobile-header-container>a');
const navLinks = document.querySelectorAll('.nav-links');
const exitNav = document.querySelector('.exit-nav');
const nextProj = document.querySelector('.next-proj');
const prevProj = document.querySelector('.prev-proj');

data.map((sample) => {
  const projectBody = `<div>
<div class="image-box">
  <img src="${sample.imageUrl}"/>
</div>
<div class="text-box">
  <h2>${sample.name}</h2>
  <ul class="tech">
    ${sample.tecnologies.map((tech) => `<li>${tech}</li>`).join('')}
  </ul>
  <div class="see-project"><a>See Project</a></div>
</div>
</div>`;

  projects.innerHTML += projectBody;

  return '';
});

const seeProject = document.querySelectorAll('.see-project');

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
  if (currentPos === 1) {
    prevProj.disabled = true;
  }
  if (currentPos >= 1) {
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
  }
});

nextProj.addEventListener('click', () => {
  const currentProj = data.find((proj) => proj.name === projectTitle.textContent);
  const currentPos = data.indexOf(currentProj);
  const nextPos = currentPos + 1;
  if (currentPos < data.length - 1) {
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
  }
  if (nextPos === data.length - 1) {
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