/* Menu navBar */

export const navbar = [
  {
    menuFr: "ACCUEIL",
    menuEn: "HOME",
    route: "Portfolio",
  },
  {
    menuFr: "A PROPOS",
    menuEn: "ABOUT",
    route: "About",
  },
  {
    menuFr: "PROJETS",
    menuEn: "PROJECTS",
    route: "Projects",
  },
  {
    menuFr: "CONTACTEZ MOI",
    menuEn: "CONTACT ME",
    route: "Contact",
  },
];

/* home data */

export const homeData = {
  titleFr: "ACCUEIL",
  titleEn: "HOME",
  salutationFr: "Salut ! Je suis",
  salutationEn: "Hello ! I'm am",
  presentationFr: "je suis developpeur front-end junior",
  presentationEn: "I'm developer front-end junior",
};

/* about data */

export const aboutData = {
  titleFr: "A PROPOS",
  titleEn: "ABOUT",
  aboutTxtFr:
    "Après de nombreuses années d'exercice dans le secteur de la vente, j’ai pris la décision d’effectuer une reconversion dans le domaine du développement web. J’ai pour cela intégré la formation de la Wild Code School de Mars 2021 à Aout 2021 en développement web et mobile (ReactJS / NodeJS) J'ai obtenu mon titre professionnel développeur web et d'application mobile en Octobre 2022.",
  aboutTxtEn:
    "After many years of working in the sales sector, I decided to retrain in the field of web development. To do this, I joined the Wild Code School training from March 2021 to August 2021 in web and mobile development (ReactJS / NodeJS). I obtained my professional title as web and mobile application developer in October 2022.",
  skillTitleFr: "Langages et outils que j'utilise :",
  skillTitleEn: " Languages and tools I use:",
  skillImg: ["HTML", "CSS", "JS", "SASS", "REACT", "NODE", "GITHUB"],
};

/* skills data */

export const skillsTitle = {
  titleFr: "COMPETENCES",
  titleEn: "SKILLS",
};

/* contact data */

export const contactData = {
  titleFr: "CONTACTEZ MOI",
  titleEn: "CONTACT ME",
  placeholderNameFr: "Votre nom",
  placeholderNameEn: "Your name",
  placeholderEmailFr: "votre email",
  placeholderEmailEn: "Your email",
  txtAreaFr: "Votre Message",
  txtAreaEn: "your message",
  btnFr: "Soumettre",
  btnEn: "Submit",
};

/* Project title */

export const projectTitle = {
  titleFr: "PROJET",
  titleEn: "PROJECT",
};

/* project card data */

export const project = [


  {
    img: "horae",
    titleFr: "Horae",
    titleEn: "Horae",
    descriptionFr:
      "Application web de prévision météorologique réalisé à l'aide de l'api OpenWeather. ",
    descriptionEn:
      "Weather forecast web application created using the OpenWeather API.",
    github: true,
    githubLink: "https://github.com/David-Chazoule/Horae",
    live: true,
    liveLink: "https://david-chazoule.github.io/Horae/",
    tags: ["REACT", "TS", "JS", "CSS", "NODE"],
  },
  {
    img: "portefolio",
    titleFr: "Portfolio",
    titleEn: "Portfolio",
    descriptionFr:
      "Portfolio mettant en avant les divers projets réalisés dans le cadre personnel ou en cours de mon stage et de ma formation.",
    descriptionEn:
      "Portfolio highlighting the various projects carried out in the personal context or during my internship and training.",
    github: false,
    githubLink: "",
    live: false,
    liveLink: "",
    tags: ["REACT", "JS", "SASS", "NODE"],
  },

  {
    img: "MesureBody",
    titleFr: "Mesure Body",
    titleEn: "Mesure Body",
    descriptionFr:
      "Projet personnel d’une application web « from scratch » permettant de calculer votre indice de masse corporelle et de calculer votre besoin calorique.",
    descriptionEn:
      "Personal project of a web application “ from scratch ” allowing you to calculate your body mass index and calculate your caloric needs.",
    github: true,
    githubLink: "https://github.com/David-Chazoule/BodyMeasure",
    live: true,
    liveLink: "https://david-chazoule.github.io/BodyMeasure/",
    tags: ["REACT", "JS", "SASS", "NODE"],
  },

  {
    img: "technologeek",
    titleFr: "Technologeek",
    titleEn: "Technologeek",
    descriptionFr:
      "Projet d’application web d'e-commerce réalisé pour l'obtention du titre professionnel « développeur web et d'application mobile » Réalisation du projet  « from stretch » aussi bien du coté front-end que back-end.",
    descriptionEn:
      "E-commerce web application project carried out to obtain the professional title “web and mobile application developer” Realization of the “from stretch” project on both the front-end and back-end sides.",
    github: true,
    githubLink: "https://github.com/David-Chazoule/e-shop-front/tree/dev",
    githubLinkTwo: "https://github.com/David-Chazoule/e-shop-back",
    git: true,
    live: false,
    liveLink: "",
    tags: ["REACT", "JS", "SASS", "NODE"],
  },

  {
    img: "NumeroVert",
    titleFr: "Numero Vert",
    titleEn: "Green number",
    descriptionFr:
      "Pendant mon stage en tant que développeur web front-end chez ColorTélécom, j’ai participé à la réalisation de la page web d’abonnement pour l’obtention un numéro vert.",
    descriptionEn:
      "During my internship as a front-end web developer at ColorTélécom, I participated in the creation of the subscription web page to obtain a toll-free number.",
    github: false,
    githubLink: "",
    live: true,
    liveLink: "https://numerovert.standardenligne.fr/",
    tags: ["REACT", "JS", "CSS", "NODE"],
  },
  {
    img: "centrex",
    titleFr: "Téléphonie centrex",
    titleEn: "Centrex telephony",
    descriptionFr:
      "Pendant mon stage en tant que développeur web front-end chez ColorTélécom, j’ai participé à la réalisation de la page web d’abonnement pour l’obtention un abonnement en téléphonie centrex.",
    descriptionEn:
      "During my internship as a front-end web developer at ColorTélécom, I participated in the creation of the subscription web page to obtain a Centrex telephony subscription.",
    github: false,
    githubLink: "",
    live: true,
    liveLink: "https://telephonieip.standardenligne.fr/",
    tags: ["REACT", "JS", "CSS", "NODE"],
  },
  {
    img: "vert",
    titleFr: "Standard virtuel",
    titleEn: "Virtual switchboard",
    descriptionFr:
      "Pendant mon stage en tant que développeur web front-end chez ColorTélécom, j’ai participé à la réalisation de la page web d’abonnement pour l’obtention d’un standard virtuel.",
    descriptionEn:
      "During my internship as a front-end web developer at ColorTélécom, I participated in the creation of the subscription web page to obtain a virtual standard.",
    github: false,
    githubLink: "https://github.com/David-Chazoule",
    live: true,
    liveLink: "https://commande.standardenligne.fr/",
    tags: ["REACT", "JS", "CSS", "NODE"],
  },

  {
    img: "MarsWebSite",
    titleFr: "Mars Ma Zon",
    titleEn: "Mars Ma Zon",
    descriptionFr:
      "Application Web marketPlace de technologie développées par la Nasa. Réalisé au cours d'un hackathon en 24h lors de ma formation à la Wild code School avec deux camarades. Utilisation de l'API de la Nasa - TechTransfert.",
    descriptionEn:
      "Technology marketPlace web application developed by NASA. Carried out during a 24-hour hackathon during my training at the Wild Code School with two friends.Use of the NASA API - TechTransfert.",
    github: false,
    githubLink: "",
    live: true,
    liveLink: "https://pelegrand.github.io/earth_at_hack/",
    tags: ["REACT", "JS", "CSS", "NODE"],
  },
];
