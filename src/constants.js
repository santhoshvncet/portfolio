// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import reduxLogo from './assets/tech_logo/redux.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import springbootLogo from './assets/tech_logo/springboot.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import cLogo from './assets/tech_logo/c.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import teamLease from './assets/company_logo/team_lease.png'
import advi from './assets/company_logo/advi.jpg'
import mbrdi from './assets/company_logo/mbrdi.jpg'

// Experience Section Logo's


// Education Section Logo's
import bel from './assets/education_logo/bel.png';
import nagarjuna from './assets/education_logo/nag.png'
import mill from './assets/education_logo/millen.jpg'
// Project Section Logo's
import ecom from './assets/work_logo/ecom.png';
import movie from './assets/work_logo/movie.png';
import shop from './assets/work_logo/shop.png';
import chat from './assets/work_logo/chat.png';
import plant from './assets/work_logo/plant.png'


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Material UI', logo: materialuiLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Springboot', logo: springbootLogo },
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: javascriptLogo },

    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: teamLease,
      serviceImg:mbrdi ,
      role: "Software Engineer Trainee",
      company: "Team Lease Digital(Mercedez Benz Research and Development of India)",
      date: "September 2024 - January 2025 ",
      desc: "Developed dynamic and scalable web applications using the MERN stack, handling both frontend and backend development. Collaborated with cross-functional teams to build responsive UI, implement RESTful APIs, and optimize application performance in an agile environment.",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React JS",
        "TypeScript",
        "Node JS",
        "Tailwind CSS",
        "MongoDb",

      ],
    },
    {
      id: 1,
      img: advi,
      role: "Software Engineer Intern",
      company: "Advi Group Of Companies",
      date: "Jan 2024 - Apr 2024",
      desc: "Contributed to innovative projects as a intern, leading both frontend and backend development using technologies such as HTML, CSS, JavaScript, Bootstrap, and ReactJS. Worked closely with the team to deliver responsive, high-performance web applications and improve user experience through seamless integration of various technologies.",
      skills: [
        "ReactJS",
        "Redux",
        "JavaScript",
        "Tailwind CSS",
        "HTML",
        "CSS",
        "SQL",
      ],
    },
  ];
  
  export const education = [
    {
      id: 0,
      img: nagarjuna,
      school: "Nagarjuna College of Engineering and Technology",
      date: "Dec 2020 - Sept 2024",
      grade: "7.4 CGPA",
      desc: "I have completed my Bachelor's degree (B.E) in ECE  from Nagarjuna College of Engineering and Technology , Banglore. During my time at NCET, I gained a strong foundation in programming, software development. I have studied courses such as Object-Oriented Programming, Database Management Systems, Web Development, and Software Engineering. I actively participated in various workshops and technical events, which enhanced my skills and knowledge. My experience at NCET University has been instrumental in shaping my technical abilities and professional growth.",
      degree: "Bachelor's of Engineering - ECE",
    },
    {
      id: 1,
      img: bel,
      school: "BEL PU composite college , Banglore",
      date: "Apr 2018 - june 2020",
      grade: "First class",
      desc: "I completed my class 12 education from BEL PU composite college , Banglore  under the state board, where I studied Physics, Chemistry, and Mathematics (PCM) with Electronics.",
      degree: "State(XII) - PCME",
    },
    {
      id: 2,
      img: mill,
      school: "Millenium public school ,banglore",
      date: "March 2018",
      grade: "First class",
      desc: "I completed my class 10 education from Millenium public school ,banglore under the state board.",
      degree: "state(X)",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "Mern-Chat-Application",
      description:"A real-time full-stack chat application built with the MERN stack to enable instant messaging between users. The platform supports one-on-one conversations with live message updates using Socket.IO for WebSocket communication.",
      image: chat,
      tags: ["HTML", "CSS", "JavaScript", "React JS", "API","Node.js","Expres.js", "Socket.io"],
      github: "https://github.com/santhoshvncet/Mern-Real-time-chat-Application",
    },
    {
      id: 1,
      title: "React-Ecommerce",
      description:"A dynamic and responsive e-commerce frontend built using React. This application simulates a real-world online store with product listings, detailed views, a shopping cart, and a checkout flow. Designed with scalability and performance in mind.",
      image: ecom,
      tags: ["React JS","HTML", "CSS", "JavaScript"],
      github: "https://github.com/santhoshvncet/REACT-E-COMMERCE-WEBSITE",
      webapp: "https://react-e-commerce-website-xi.vercel.app/",
    },
    {
      id: 2,
      title: "Movie Recommendation App",
      description:
        "A React-based web application that provides movie recommendations based on different criteria, such as genres, user preferences, and popular trends. The intuitive design and smooth experience make it a go-to app for movie enthusiasts.",
      image: movie,
      tags: ["React JS", "API", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/santhoshvncet/THE-MOVIE-CINEMA---movie-recommendation-system",
    },
    {
      id: 3,
      title: "Mern-Shopping-App",
      description:"A full-stack e-commerce application built with the MERN stack, offering a seamless shopping experience from product browsing to checkout. Includes real-time cart updates, user authentication, and order management.",
      image: shop,
      tags: ["React JS", "Node.js", "NPM", "Validation","Jwt"],
      github: "https://github.com/santhoshvncet/MERN-SHOPPING-APP",
    },
    {
      id: 4,
      title: "Plant-Leaf-Disease-Detection",
      description:"An AI-powered application that detects and classifies plant leaf diseases using image classification techniques. The model is trained on a dataset of diseased and healthy leaf images, providing farmers or researchers with a fast and reliable way to identify plant diseases early.",
      image: plant,
      tags: ["HTML", "CSS", "JavaScript", "Python","Django"],
      github: "https://github.com/santhoshvncet/PLANT-LEAF-DISEASE-DETECTION-USING-MACHINE-LEARNING",
    },
  ];  