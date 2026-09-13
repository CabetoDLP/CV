const svgs = [
  './BackgroundIcons/blacksquaretags.svg',
  './BackgroundIcons/brackets.svg',
  './BackgroundIcons/db.svg',
  './BackgroundIcons/filecss.svg',
  './BackgroundIcons/filehtml.svg',
  './BackgroundIcons/filejava.svg',
  './BackgroundIcons/filejs.svg',
  './BackgroundIcons/filejson.svg',
  './BackgroundIcons/filejsx.svg',
  './BackgroundIcons/filetags.svg',
  './BackgroundIcons/rectangletags.svg',
  './BackgroundIcons/squaretags.svg',
  './BackgroundIcons/tags.svg',
  './BackgroundIcons/tagsslash.svg'
];

async function createSVG() {
  const randomPath = svgs[Math.floor(Math.random() * svgs.length)];

  const div = document.createElement("div");
  div.classList.add("svg-item");

  try {
    const response = await fetch(randomPath);
    if (!response.ok) throw new Error("Error al obtener el SVG");
    const svgContent = await response.text();
    div.innerHTML = svgContent;
  } catch (error) {
    console.error(`No se pudo cargar el SVG desde ${randomPath}:`, error);
    return;
  }

  const container = document.getElementById("svg-container");
  div.style.top = Math.random() * 100 + "%";
  div.style.left = Math.random() * 100 + "%";

  container.appendChild(div);

  setTimeout(() => {
    if (container.contains(div)) {
      container.removeChild(div);
    }
  }, 3000);
}

setInterval(createSVG, 500);

let themeMode = `light-mode`;
let body = document.querySelector(`body`);
let themeButton = document.getElementById(`toggle-theme`);

function changeTheme (){

  const bulbUse = document.getElementById('bulb-use');

  if(themeMode === `light-mode`)
  {
    themeMode = `dark-mode`;
    bulbUse.setAttribute('href', 'Icons/themedark.svg');
  }
  else{
    themeMode = `light-mode`;
    bulbUse.setAttribute('href', 'Icons/themelight.svg');
  }

  document.getElementById(`bulb-icon`).classList.toggle('rotated');
  body.classList = themeMode;
}

themeButton.addEventListener(`click`, changeTheme);

let language = `spanish`;
let languageButton = document.getElementById(`toggle-language`);

const languages = {
  spanish: {
    aPresentationText: `Presentación`,
    aSkillsText: `Habilidades`,
    aExperienceText: `Experiencia`,
    aStudiesText: `Formación`,
    aProjectsText: `Proyectos`,
    aContactText: `Contacto`,
    aFilesText: `Anexos`,
    descriptionText: `Ingeniero de sistemas enfocado en el desarrollo de proyectos web. Con experiencia de programación tanto en el apartado del front-end como back-end, dispuesto a colaborar en equipos de trabajo o desarrollo de proyectos web independientes.`,
    skillsTitle: `Habilidades`,
    skillsText: `Presento experiencia practica en fundamentos de programación, POO, bases de datos relacionales y servidores web (APIs) en ASP.net, .NET core y Spring Boot, ademas del manejo del DOM con HTML, CSS y Javascript`,
    experienceTitle: `Experiencia`,
    experienceText: `Trabajé de programador web como auxiliar de desarrollo en <a href="https://www.smitco.com.co/" target="_blank">SMITCO</a>. Desarrollé una plataforma para la gestión de daños de los contenedores de la compañia usando asp.net y deje en desarrollo una plataforma de usuarios utilizando .NET core.`,
    htmlDescription: `Desarrollo estructuras semánticas y accesibles para los proyectos. A través de mi experiencia he trabajado con etiquetas semánticas, formularios interactivos, integración de multimedia, enlaces y navegación, metadatos y optimización, compatibilidad y accesibilidad.`,
    cssDescription: `Diseño responsivo, animaciones y sistemas de temas claros y oscuros. Utilizo media queries, Flexbox y CSS Grid para crear layouts adaptables y eficientes. Implemento animaciones fluidas con @keyframes y transition, y aplico efectos visuales como gradientes y sombras para diseños modernos.`,
    javascriptDescription: `Manipulación del DOM, creación de interfaces dinámicas y uso de eventos para mejorar la interactividad del usuario. Implementación de lógica del lado del cliente, manejo de peticiones asíncronas (AJAX, Fetch API) y uso de librerías y frameworks modernos para desarrollo web. Conocimientos en programación funcional y orientada a objetos, así como en la integración de APIs y servicios externos.`,
    typescriptDescription: `Desarrollo de aplicaciones backend con TypeScript, utilizando interfaces y tipos para garantizar la seguridad y consistencia del código. Implementación de validaciones de tipos, manejo de errores y estructuras de datos bien definidas. Uso de TypeScript en conjunto con Express para crear APIs robustas y escalables, integrando bases de datos y servicios externos con tipado seguro.`,
    reactDescription: `Desarrollo de aplicaciones web modernas y responsivas con React. Uso de componentes funcionales, hooks (como useState, useEffect, y useContext), y manejo de estado global con Context API. Implementación de rutas dinámicas con React Router, integración con APIs RESTful, y creación de interfaces interactivas.`,
    nodejsDescription: `Desarrollo de aplicaciones backend con Node.js, utilizando Express para crear APIs RESTful y WebSockets para comunicación en tiempo real. Implementación de autenticación basada en tokens (JWT), manejo de bases de datos PostgreSQL, y uso de middlewares para validación y seguridad. Desarrollo de sistemas escalables y eficientes, con enfoque en la gestión de rutas, controladores y servicios.`,
    springDescription: `Desarrollo de aplicaciones backend robustas con Spring Boot, enfocándome en la creación de APIs RESTful y la integración con bases de datos como PostgreSQL. Manejo del sistema de dependencias con Spring Data JPA. Implementación de patrones de diseño como MVC y uso de controladores, servicios y repositorios para garantizar una arquitectura escalable y mantenible.`,
    netcoreDescription: `Desarrollo de aplicaciones backend con .NET Core, implementando APIs RESTful y conectándolas a bases de datos relacionales como PostgreSQL y SQL Server. Uso de Entity Framework para realizar consultas eficientes a la base de datos. Creación de controladores, servicios y repositorios siguiendo buenas prácticas de diseño.`,
    posgreDescription: `Modelado y administración de bases de datos relacionales utilizando PostgreSQL. Diseño de esquemas eficientes, creación de relaciones entre tablas y optimización de consultas mediante índices y técnicas avanzadas de SQL. Experiencia con proyectos backend desarrollados en Spring Boot, .NET Core y Node.js.`,
    sqlserverDescription: `Gestión de bases de datos relacionales con SQL Server, incluyendo diseño de tablas, índices y procedimientos almacenados. Uso de herramientas de administración como SQL Server Management Studio (SSMS) para realizar tareas de mantenimiento y optimización. Integración de SQL Server en proyectos desarrollados con .NET Core.`,
    projectsTitle: `Proyectos`,
    contactTitle: `Contactame`,
    formName: `Tu nombre`,
    formEmail: `Tu correo`,
    formMessage: `Escribe tu mensaje`,
    sendButton: `Enviar`,
    filesTitle: `Anexos`,
    curriculum: `Hoja de vida`,
    curriculumPath: './Resources/CarlosDeLaPeña_HV.pdf',
    sendMessage: `Mensaje enviado exitosamente`,
    sendErrorMessage: `Ocurrio un error al enviar su mensaje, por favor intentelo nuevamente`
  },
  english: {
    aPresentationText: `Presentation`,
    aSkillsText: `Skills`,
    aExperienceText: `Experience`,
    aStudiesText: `Studies`,
    aProjectsText: `Projects`,
    aContactText: `Contact`,
    aFilesText: `Files`,
    descriptionText: `Systems engineer focused on the development of web projects. With programming experience in both the front-end and back-end technologies, willing to collaborate in work teams or independently managing web projects.`,
    skillsTitle: `Skills`,
    skillsText: `I present practical experience in programming fundamentals, OOP, relational databases and web servers (APIs) in ASP.net, .NET core and Spring Boot, in addition to managing the DOM with HTML, CSS and Javascript.`,
    experienceTitle: `Experience`,
    experienceText: `I worked as a web developer as a development assistant at <a href="https://www.smitco.com.co/" target="_blank">SMITCO</a>. I developed a platform for damage management of the company's containers using asp.net and left a user platform in development using .NET core.`,
    htmlDescription: `Development of semantic and accessible structures for projects. Through my experience, I have worked with semantic tags, interactive forms, multimedia integration, links and navigation, metadata and optimization, compatibility, and accessibility.`,
    cssDescription: `Responsive design, animations, and light/dark theme systems. I use media queries, Flexbox, and CSS Grid to create adaptable and efficient layouts. I implement smooth animations with @keyframes and transition, and apply visual effects like gradients and shadows for modern designs.`,
    javascriptDescription: `DOM manipulation, creation of dynamic interfaces, and use of events to enhance user interactivity. Implementation of client-side logic, handling of asynchronous requests (AJAX, Fetch API), and use of modern libraries and frameworks for web development. Knowledge of functional and object-oriented programming, as well as integration with APIs and external services.`,
    typescriptDescription: `Development of backend applications with TypeScript, using interfaces and types to ensure code safety and consistency. Implementation of type validations, error handling, and well-defined data structures. Use of TypeScript alongside Express to create robust and scalable APIs, integrating databases and external services with secure typing.`,
    reactDescription: `Development of modern and responsive web applications with React. Use of functional components, hooks (such as useState, useEffect, and useContext), and global state management with Context API. Implementation of dynamic routes with React Router, integration with RESTful APIs, and creation of interactive interfaces.`,
    nodejsDescription: `Development of backend applications with Node.js, using Express to create RESTful APIs and WebSockets for real-time communication. Implementation of token-based authentication (JWT), PostgreSQL database management, and use of middlewares for validation and security. Development of scalable and efficient systems, focusing on route, controller, and service management.`,
    springDescription: `Development of robust backend applications with Spring Boot, focusing on creating RESTful APIs and integrating with databases like PostgreSQL. Management of dependency systems with Spring Data JPA. Implementation of design patterns like MVC and use of controllers, services, and repositories to ensure a scalable and maintainable architecture.`,
    netcoreDescription: `Development of backend applications with .NET Core, implementing RESTful APIs and connecting them to relational databases like PostgreSQL and SQL Server. Use of Entity Framework for efficient database queries. Creation of controllers, services, and repositories following best design practices.`,
    posgreDescription: `Modeling and administration of relational databases using PostgreSQL. Design of efficient schemas, creation of table relationships, and query optimization through indexes and advanced SQL techniques. Experience with backend projects developed in Spring Boot, .NET Core, and Node.js.`,
    sqlserverDescription: `Management of relational databases with SQL Server, including table design, indexes, and stored procedures. Use of administration tools like SQL Server Management Studio (SSMS) for maintenance and optimization tasks. Integration of SQL Server in projects developed with .NET Core.`,
    projectsTitle: `Projects`,
    contactTitle: `Contact me`,
    formName: `Your name`,
    formEmail: `Your mail`,
    formMessage: `Write your message`,
    sendButton: `Submit`,
    filesTitle: `Files`,
    curriculum: `Curriculum`,
    curriculumPath: './Resources/CarlosDeLaPeña_CV.pdf',
    sendMessage: `Message sent successfully`,
    sendErrorMessage: `An error ocurred while sending the message, please try again`
  }
}

let aPresentationText = document.getElementById(`a-presentation-text`);
let aSkillsText = document.getElementById(`a-skills-text`);
let aExperienceText = document.getElementById(`a-experience-text`);
let aStudiesText = document.getElementById(`a-studies-text`);
let aProjectsText = document.getElementById(`a-projects-text`);
let aContactText = document.getElementById(`a-contact-text`);
let aFilesText = document.getElementById(`a-files-text`);
let descriptionText = document.getElementById(`description-text`);
let skillsTitle = document.getElementById(`skills-title`);
let skillsText = document.getElementById(`skills-text`);
let experienceTitle = document.getElementById(`experience-title`);
let experienceText = document.getElementById(`experience-text`);
let projectsTitle = document.getElementById(`projects-title`);
let contactTitle = document.getElementById(`contact-title`);
let formName = document.getElementById(`form-name`);
let formEmail = document.getElementById(`form-email`);
let formMessage = document.getElementById(`form-message`);
let sendButton = document.getElementById(`send`);
let filesTitle = document.getElementById(`files-tittle`);
let curriculum = document.getElementById(`curriculum`);

function alterLanguage(){
  if(language === `english`)
    language = `spanish`;
  else{
    language = `english`;
  }

  aPresentationText.innerHTML = languages[language].aPresentationText;
  aSkillsText.innerHTML = languages[language].aSkillsText;
  aExperienceText.innerHTML = languages[language].aExperienceText;
  aProjectsText.innerHTML = languages[language].aProjectsText;
  aContactText.innerHTML = languages[language].aContactText;
  aFilesText.innerHTML = languages[language].aFilesText;
  descriptionText.innerHTML = languages[language].descriptionText;
  skillsTitle.innerHTML = languages[language].skillsTitle;
  skillsText.innerHTML = languages[language].skillsText;
  experienceTitle.innerHTML = languages[language].experienceTitle;
  experienceText.innerHTML = languages[language].experienceText; 
  projectsTitle.innerHTML = languages[language].projectsTitle;
  contactTitle.innerHTML = languages[language].contactTitle;
  formName.placeholder = languages[language].formName;
  formEmail.placeholder = languages[language].formEmail;
  formMessage.placeholder = languages[language].formMessage;
  sendButton.innerHTML = languages[language].sendButton;
  filesTitle.innerHTML = languages[language].filesTitle;
  curriculum.innerHTML = languages[language].curriculum;
}

languageButton.addEventListener('click', alterLanguage);

function openLink(link){
  window.open(link, `_blank`);
}

document.getElementById(`reactStore`).addEventListener(`click`, function() {openLink(`https://orange-grass-05a93b810.6.azurestaticapps.net/login`)});
document.getElementById(`cabetoArt`).addEventListener(`click`, function() {openLink(`https://cabeto-art.vercel.app/`)});
document.getElementById(`dinoLink`).addEventListener(`click`, function() {openLink(`https://dino-link.vercel.app/`)});
document.getElementById(`bazaarApp`).addEventListener(`click`, function() {openLink(`https://bazaar-app-frontend.vercel.app/`)});

document.querySelector(`.contact-form`).addEventListener(`submit`, function (event){
  event.preventDefault();

  emailjs.send("service_mwy96o9","template_lkgggnn", {
    from_name: document.getElementById(`form-name`).value,
    message: document.getElementById(`form-message`).value,
    email_id: document.getElementById(`form-email`).value
  })
  .then((response)=>{
    alert(languages[language].sendMessage);
  })
  .catch((error)=>{
    alert(languages[language].sendErrorMessage);
    console.error("Error al enviar el correo:", error);
  });
});

function openPDF (filePath){
  window.open(filePath, '_self');
}

function openPDFModal(pdfURL) {
  const modal = document.getElementById('pdfModal');
  const pdfViewer = document.getElementById('pdfViewer');
  
  pdfViewer.src = pdfURL;
  modal.style.display = 'flex';
}

function openSkillModal(event) {
  const modal = document.getElementById('skill-modal');
  const skillIcon = document.getElementById('skill-icon');
  const skillTitle = document.getElementById('skill-title');
  const skillInformation = document.getElementById('skill-information');
  const selectedSkillIcon = event.currentTarget;
  skillIcon.innerHTML = selectedSkillIcon.innerHTML;

  switch (event.currentTarget.id){
    case 'html-icon':
      skillTitle.innerHTML = 'HTML';
      skillInformation.innerHTML = languages[language].htmlDescription;
      break;
    case 'css-icon':
      skillTitle.innerHTML = 'CSS';
      skillInformation.innerHTML = languages[language].cssDescription;
      break;
    case 'javascript-icon':
      skillTitle.innerHTML = 'Javascript';
      skillInformation.innerHTML = languages[language].javascriptDescription;
      break;
    case 'typescript-icon':
      skillTitle.innerHTML = 'Typescript';
      skillInformation.innerHTML = languages[language].typescriptDescription;
      break;
    case 'react-icon':
      skillTitle.innerHTML = 'React';
      skillInformation.innerHTML = languages[language].reactDescription;
      break;
    case 'nodejs-icon':
      skillTitle.innerHTML = 'Node.JS';
      skillInformation.innerHTML = languages[language].nodejsDescription;
      break;
    case 'spring-icon':
      skillTitle.innerHTML = 'Spring Boot';
      skillInformation.innerHTML = languages[language].springDescription;
      break;
    case 'netcore-icon':
      skillTitle.innerHTML = '.NET Core';
      skillInformation.innerHTML = languages[language].netcoreDescription;
      break;
    case 'posgre-icon':
      skillTitle.innerHTML = 'Postgre';
      skillInformation.innerHTML = languages[language].posgreDescription;
      break;
    case 'sqlserver-icon':
      skillTitle.innerHTML = 'SQL Server';
      skillInformation.innerHTML = languages[language].sqlserverDescription;
      break;
  }

  modal.style.display = 'flex';
}

const skillContainers = document.querySelectorAll('.skill-container');
skillContainers.forEach(container => {
    container.addEventListener('click', openSkillModal);
});

function openWarningModal(componentId) {
  const modal = document.getElementById('warning-modal');
  const warningTitle = document.getElementById('warning-title');
  const warningInformation = document.getElementById('warning-information');

  const component = document.getElementById(componentId);

  if(language === `english`){
    warningTitle.innerHTML = component.getAttribute('data-title-en');
    warningInformation.innerHTML = component.getAttribute('data-information-en');
  }
  else if (language === `spanish`){
    warningTitle.innerHTML = component.getAttribute('data-title-es');
    warningInformation.innerHTML = component.getAttribute('data-information-es');
  }

  modal.style.display = 'flex';
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  modal.style.display = 'none';
  document.getElementById('pdfViewer').src = '';
}






