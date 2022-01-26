const projectsInfo = [
  {
    id: 1,
    name: 'Project name goes here',
    technologies: ['HTML/CSS', 'Ruby on rails', 'JavaScript'],
    img: '04_Mockups/project1-mockup.png',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi <br> Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
    linkLive: 'https://estebanmual.github.io/My-Portfolio/',
    linkSource: 'https://github.com/Estebanmual/My-Portfolio',
  },
  {
    id: 2,
    name: 'Project name goes here',
    technologies: ['HTML/CSS', 'Ruby on rails', 'JavaScript'],
    img: '04_Mockups/project2-mockup.png',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi <br> Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
    linkLive: 'https://estebanmual.github.io/My-Portfolio/',
    linkSource: 'https://github.com/Estebanmual/My-Portfolio',
  },
  {
    id: 3,
    name: 'Project name goes here',
    technologies: ['HTML/CSS', 'Ruby on rails', 'JavaScript'],
    img: '04_Mockups/project3-mockup.png',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi <br> Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
    linkLive: 'https://estebanmual.github.io/My-Portfolio/',
    linkSource: 'https://github.com/Estebanmual/My-Portfolio',
  },
  {
    id: 4,
    name: 'Project name goes here',
    technologies: ['HTML/CSS', 'Ruby on rails', 'JavaScript'],
    img: '04_Mockups/project4-mockup.png',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi <br> Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
    linkLive: 'https://estebanmual.github.io/My-Portfolio/',
    linkSource: 'https://github.com/Estebanmual/My-Portfolio',
  },
  {
    id: 5,
    name: 'Project name goes here',
    technologies: ['HTML/CSS', 'Ruby on rails', 'JavaScript'],
    img: '04_Mockups/project5-mockup.png',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi <br> Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
    linkLive: 'https://estebanmual.github.io/My-Portfolio/',
    linkSource: 'https://github.com/Estebanmual/My-Portfolio',
  },
  {
    id: 6,
    name: 'Project name goes here',
    technologies: ['HTML/CSS', 'Ruby on rails', 'JavaScript'],
    img: '04_Mockups/project6-mockup.png',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi <br> Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
    linkLive: 'https://estebanmual.github.io/My-Portfolio/',
    linkSource: 'https://github.com/Estebanmual/My-Portfolio',
  },
];

function makeScrollable() {
  const body = document.querySelector('body');
  body.classList.remove('notScrollable');
  body.classList.add('scrollable');
}

function makeNotScrollable() {
  const body = document.querySelector('body');
  body.classList.remove('scrollable');
  body.classList.add('notScrollable');
}

function getProjectHTML(project) {
  let technologies = '';
  for (let i = 0; i < project.technologies.length; i += 1) {
    technologies += `<li>${project.technologies[i]}</li>`;
  }

  return `             
    <img src="${project.img}" alt="Mockup project ${project.id}" class="mockup-projects mockup-project${project.id}">
    <div class="information-project information-project${project.id}">
        <h3 class="name-project projectname${project.id}">${project.name}</h3>
        <ul class="languages-project languages-project${project.id}">
        ${technologies}
        </ul>
        <div class="wrapper-see-project-btn wrapper-see-project-btn${project.id}">
            <button type="button" data-id=${project.id} class="see-project-button see-project-button${project.id}">See this project <img
            src="03_Resources/01_Graphics/02_Stock/right-white-arrow.svg"
            alt="Right white arrow"
            class="arrow-see-project-btn"
            /> </button>
        </div>
     </div>`;
}

function loadProjectsInfo() {
  const worksContainer = document.querySelector('.wrapper-projects');
  for (let i = 0; i < projectsInfo.length; i += 1) {
    const htmlProject = getProjectHTML(projectsInfo[i]);
    const workCard = document.createElement('div');
    workCard.classList.add(`project${projectsInfo[i].id}-section`, 'projects-index');
    workCard.innerHTML = htmlProject;
    worksContainer.appendChild(workCard);
  }
}

function getDetailHTML(project) {
  let technologies = '';
  for (let i = 0; i < project.technologies.length; i += 1) {
    technologies += `<li>${project.technologies[i]}</li>`;
  }

  return `
      
      <button type="button" id="close-button">X</button>
      <h2>${project.name}</h2>
      <ul>
        ${technologies}
      </ul>
      <img src="${project.img}" alt="">
      <p>${project.description}</p>
      <div class="details-buttons">
        <button class="details-footer-btn" onclick="window.open('${project.linkLive}', '_blank')" >See live <img src="03_Resources/01_Graphics/02_Stock/ic_link.svg" alt=""></button>
        <button class="details-footer-btn" onclick="window.open('${project.linkSource}', '_blank')" >See source <img src="03_Resources/01_Graphics/02_Stock/Group.svg" alt=""></button>
      </div>
      `;
}

function getProjectData(index) {
  for (let i = 0; i < projectsInfo.length; i += 1) {
    if (projectsInfo[i].id === Number(index)) return projectsInfo[i];
  }
  return undefined;
}
document.addEventListener('click', (e) => {
  if (e.target.matches('.information-project button')) {
    const projectInfo = getProjectData(e.target.dataset.id);
    const html = getDetailHTML(projectInfo);
    const worksContainer = document.querySelector('.wrapper-projects');
    const div = document.createElement('div');
    div.classList.add('work-detail');
    div.style.position = 'absolute';
    div.style.top = `${window.scrollY}px`;
    div.innerHTML = html;
    worksContainer.appendChild(div);
    makeNotScrollable();
    const closeButton = document.querySelector('#close-button');
    closeButton.addEventListener('click', () => {
      const pop = document.querySelector('.work-detail');
      const worksContainer = document.querySelector('.wrapper-projects');
      worksContainer.removeChild(pop);
      makeScrollable();
    });
  }
});

loadProjectsInfo();
