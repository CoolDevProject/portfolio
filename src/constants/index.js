import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    html,
    css,
    bootstrap,
    reactjs,
    nodejs,
    mongodb,
    git,
    nextjs,
    docker,
    smartfooding,
    cadic,
    ocd,
    api,
    keibai,
    blog,
    threejs,
    vuejs,
    nuxtjs,
    php,
    laravel,
    mysql,
    bertille,
    sebastien,
    quentin,
    thomas
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Frontend Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Fullstack Developer",
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
      name: "PHP",
      icon: php,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
  
    {
      name: "Next JS",
      icon: nextjs,
    },
    {
      name: "Vue JS",
      icon: vuejs,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "Laravel",
      icon: laravel,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Mysql",
      icon: mysql,
    },
    {
      name: "git",
      icon: git,
    },
  ];
  
  const experiences = [
    {
      title: "Fullstack Developer",
      company_name: "Smartfooding",
      icon: smartfooding,
      iconBg: "#383E56",
      date: "Feb 2020 - Jul 2020",
      points: [
        "Development of the e-commerce platform using PHP, Javascript, HTML, CSS and Bootstrap.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
        "Installation of new Prestashop modules.",
      ],
    },
    {
      title: "Fullstack Developer",
      company_name: "Cadic Services",
      icon: cadic,
      iconBg: "#E6DEDD",
      date: "Jul 2020 - Sep 2022",
      points: [
        "Development of new widgets in PHP, Javascript, HTML, CSS, Webix.",
        "Interface redesign, unit tests, documentation writing, run trainings.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
        "Development of web services and REST APIs.",
      ],
    },
    {
      title: "Fullstack Developer",
      company_name: "Orange Cyberdéfense",
      icon: ocd,
      iconBg: "#383E56",
      date: "Feb 2023 - May 2023",
      points: [
        "Development of various features (dark mode,caching, redesign of interfaces, etc) in Laravel 9 and Vue JS 2",
        "Collaborating with cross-functional teams including  product managers, analysts, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
        "Participation in meetings, performance of unit and functional tests"
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "Nicolas is a young developer who has distinguished himself by his professional and personal skills. It is a pleasure to work with such an involved and attentive person.",
      name: "Bertille de Becdelievre",
      designation: "IT agency manager",
      company: "Karré",
      image: bertille,
    },
    {
      testimonial:
        "Highly motivated and willing collaborator. Quickly integrated into our teams with a very good ability to listen and understand user needs. Fullstack developers which is a strong advantage.",
      name: "Sebastien Mannino",
      designation: "Research and development manager",
      company: "Cadic Service",
      image: sebastien,
    },
    {
      testimonial:
        "Dynamic, involved and good communicator working with Nicolas is always a pleasure. His team spirit is matched only by his good humor. He knows how to be curious on all subjects, so no challenge scares him.",
      name: "Quentin Leclercq",
      designation: "DevSecOps",
      company: "EDF",
      image: quentin,
    },
    {
      testimonial:
        "His technical expertise, his ability to understand needs and his experience have greatly contributed to the success of our projects. He has always been professional and committed, working with him has been a very positive experience.",
      name: "Thomas Orard",
      designation: "Fullstack Developer",
      company: "Ika Conseil",
      image: thomas,
    },
  ];
  
  const projects = [
    {
      name: "Keibai API",
      description:
        "Auction website API REST developed from scratch. This API contains model management (users, orders, products), payment management with Stripe, sending confirmation emails and even crons",
      tags: [
        {
          name: "Node JS",
          color: "blue-text-gradient",
        },
        {
          name: "MongoDB",
          color: "green-text-gradient",
        },
        {
          name: "Express JS",
          color: "pink-text-gradient",
        },
      ],
      image: api,
      source_code_link: "https://github.com/Keibai-ynov/back-end",
    },
    {
      name: "Keibai Frontend",
      description:
        "Auctions web interface containing all the processes of a classic e-commerce website (Authentication, payment, creating an auction, contacting an administrator by email) but also a backoffice.",
      tags: [
        {
          name: "Next JS",
          color: "blue-text-gradient",
        },
        {
          name: "Stripe",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: keibai,
      source_code_link: "https://github.com/Keibai-ynov/front-end",
    },
    {
      name: "My Blog",
      description:
        "Development of a blog from scratch, allowing to authenticate, create articles, display articles, having secure routes allowing to display a blog administrator space.",
      tags: [
        {
          name: "Laravel",
          color: "blue-text-gradient",
        },
        {
          name: "Twig",
          color: "green-text-gradient",
        },
        {
          name: "MYSQL",
          color: "pink-text-gradient",
        },
      ],
      image: blog,
      source_code_link: "https://github.com/CoolDevProject/My-blog",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };