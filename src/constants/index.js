import {
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  php,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  kebchi,
  lasource,
  medasys,
  technomis,
  digitsell,
  digitselll,
  calculator,
  texttovoice,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "À propos",
  },
  {
    id: "work",
    title: "Travaux",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "DEVELOPPEUR FRONT-END",
    icon: web,
  },
  {
    title: "DEVELOPPEUR BACK-END",
    icon: backend,
  },
  {
    title: "CREATEUR DE CONTENU",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "PHP",
    icon: php,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Développeur Full-Stack",
    company_name: "DIGIT-SELL",
    icon: digitsell,  // Remplace par l'icône de ton projet
    iconBg: "#50C878",
    date: "Octobre 2024 - Mars 2025",
    points: [
      "Développement de la plateforme e-commerce DIGIT-SELL en utilisant React.js pour le frontend et Node.js pour le backend.",
      "Conception de l'architecture de la base de données MongoDB et mise en place des API avec Express.js.",
      "Implémentation de l'intégration Stripe pour les paiements en ligne.",
      "Optimisation pour le référencement (SEO) et suivi des performances via Google Analytics."
    ],
  },
  {
    title: "Développeur Full-Stack",
    company_name: "Kebchi",
    icon: kebchi,  // Remplace par l'icône de ton projet
    iconBg: "#800080",
    date: "Septembre 2022 - Octobre 2024",
    points: [
      "Développement du site de collecte de dons et gestion des actions solidaires avec PHP pour le backend et JavaScript pour le frontend.",
      "Utilisation de MySQL pour la gestion des données et création de l'interface utilisateur avec Tailwind CSS.",
      "Mise en place de fonctionnalités pour les dons en ligne et suivi des actions solidaires.",
      "Réalisation des tests et optimisation de la performance du site."
    ],
  },
  {
    title: "Développeur Full-Stack (Stage)",
    company_name: "Technomis SARL",
    icon: technomis,  // Remplace par l'icône de ton projet
    iconBg: "#FFFFFF",
    date: "Février 2020 - Juin 2020",
    points: [
      "Développement d'un site vitrine en utilisant PHP et SQL pour le backend, et HTML5 et Tailwind CSS pour le frontend.",
      "Implémentation de bases de données relationnelles pour optimiser la gestion des informations.",
      "Création de pages responsive adaptées à tous les types d'écrans.",
      "Réalisations de tests pour garantir la performance et la stabilité du site."
    ],
  },
  {
    title: "Assistant Consultant Informatique (Stage)",
    company_name: "MEDAFRICA SYSTEMS (MEDASYS)",
    icon: medasys,  // Remplace par l'icône de ton stage
    iconBg: "#FFFFFF",
    date: "Janvier 2021 - Juillet 2021",
    points: [
      "Assistance dans l'analyse des besoins et la conception des systèmes d'information.",
      "Réflexion sur l'optimisation des processus et l'assurance qualité des projets informatiques.",
      "Collaboration avec les équipes techniques pour le suivi et le débogage des systèmes existants.",
      "Rédaction de rapports sur les performances et les recommandations pour améliorer les outils informatiques."
    ],
  },
];


const testimonials = [
  {
    testimonial:
      "Je pensais qu’il était impossible de créer un site Web aussi beau que notre produit, mais BAHAE-EDDINE m’a prouvé le contraire.",
    name: "Sara Lee",
    designation: "CFO",
    company: "BEYTOUN",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "Après l'optimisation de notre site web par BAHAE-EDDINE, notre trafic a augmenté de 50 %. Nous les en remercions chaleureusement !",
    name: "Chris Brown",
    designation: "COO",
    company: "KEBCHI",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "Je n'ai jamais rencontré un développeur Web qui se soucie vraiment du succès de ses clients comme BAHAE-EDDINE le fait.",
    name: "Lisa Wang",
    designation: "CTO",
    company: "SEDATUS",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "DIGIT-SELL",
    description:
      "DIGIT-SELL est une plateforme e-commerce innovante dédiée à la vente de ebooks et de formations en ligne. Ce projet me permet de développer une solution robuste permettant aux utilisateurs de faire leurs achats facilement, tout en offrant aux administrateurs un tableau de bord complet pour gérer les produits, suivre les ventes et analyser les performances via des statistiques avancées.",
      tags: [
        {
          name: "React",
          color: "react-text-color", // Bleu pour React
        },
        {
          name: "MongoDB",
          color: "mongodb-text-color", // Vert pour MongoDB
        },
        {
          name: "Tailwind",
          color: "tailwind-text-color", // Cyan pour Tailwind
        },
        {
          name: "Node.js",
          color: "nodejs-text-color", // Vert pour Node.js
        },
        {
          name: "Express.js",
          color: "expressjs-text-color", // Gris pour Express.js
        },
        {
          name: "Stripe",
          color: "stripe-text-color", // Violet pour Stripe
        },
      ],
    image: digitselll,
    source_code_link: "https://github.com/bahaeeddine27/E-COMMERCE-STORE",
  },
  {
    name: "CALCULATOR",
    description:
      "CALCULATOR est une application web intuitive permettant d’effectuer des calculs rapides et précis grâce à une interface simple et ergonomique. Ce projet a été conçu pour offrir une expérience utilisateur fluide, avec des fonctionnalités telles que l’addition, la soustraction, la multiplication, la division, ainsi que des options avancées comme l'effacement et la suppression des entrées. Développée en HTML, CSS et JavaScript, cette calculatrice est un excellent exemple de la création d’une application front-end interactive et réactive",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: calculator,
    source_code_link: "https://github.com/bahaeeddine27/Calculator",
  },
  {
    name: "TEXT TO VOICE CONVERTER",
    description:
      "TEXT TO VOICE CONVERTER est une application web simple et efficace qui permet de convertir du texte écrit en discours audio. Ce projet offre une interface utilisateur intuitive où il suffit d'entrer du texte, de sélectionner la voix désirée, puis d'écouter la conversion. Développée en HTML, CSS et JavaScript, cette application utilise l'API SpeechSynthesis pour offrir une expérience fluide et interactive, idéale pour les personnes ayant des besoins d'accessibilité ou pour toute personne souhaitant écouter du contenu textuel.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: texttovoice,
    source_code_link: "https://github.com/bahaeeddine27/Text-To-Voice/",
  },
];

export { services, technologies, experiences, testimonials, projects };
