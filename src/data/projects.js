import adminPanel from '../projects/admin.webp'
import swiggyp from '../projects/Swiggy.png'
import peperdrop from '../projects/peper.png'
import googlec from '../projects/googlec.png'
import moviep from '../projects/moviep.png'
import erdiagram from '../projects/erdiagram.png'

const projects = [
  {
    id: 3,
    title: "Admin Dashboard [ mongoDB ]",
    category: "Node.js",
    technologies: ["React.js", "JavaScript", "CSS3"],
    description:
      "A clean and responsive dashboard interface designed for managing application data and analytics.",
    image: adminPanel,
    github: "https://github.com/daxpatel20/ADMIN-MAIN-PROJETS",
    live: "#",
    featured: true,
  },

    {
    id: 6,
    title: "Er-Diagram-Project",
    category: "Node.js",
    technologies: ["JavaScript", "HTML5", "CSS3"],
    description:
      "A simple and interactive task management application for creating, completing and removing tasks.",
    image: erdiagram,
    github: "https://github.com/",
    live: "#",
    featured: false,
  },

  {
    id: 1,
    title: "Swiggy Partner",
    category: "React",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB"],
    description:
      "A modern tour and travel platform with packages, user authentication, admin management and responsive UI.",
    image: swiggyp,
    github: "https://github.com/daxpatel20/Swiggy-api",
    live: "#",
    featured: true,
  },

  {
    id: 2,
    title: "E-Commerce Platform ",
    category: "React",
    technologies: ["React.js", "JavaScript",],
    description:
      "A complete e-commerce application with authentication, products, cart functionality and role-based access.",
    image : peperdrop,  
    github: "https://github.com/daxpatel20/PaperDrop",
    live: "#",
    featured: true,
  },

  

  {
    id: 4,
    title: "Google Contacts Clone",
    category: "React",
    technologies: ["React.js", "JavaScript", "CSS3"],
    description:
      "A note-taking application inspired by Google Keep with a clean interface and interactive note management.",
    image: googlec,
    github: "https://github.com/daxpatel20/google-Contacts",
    live: "#",
    featured: false,
  },

  {
    id: 5,
    title: "Movie API",
    category: "React",
    technologies: ["React.js", "JavaScript", "CSS3"],
    description:
      "A responsive contact management application with reusable React components and interactive UI.",
    image: moviep,
    github: "https://github.com/daxpatel20/Movie-Api",
    live: "#",
    featured: false,
  },



  // {
  //   id: 7,
  //   title: "Password Generator",
  //   category: "JavaScript",
  //   technologies: ["JavaScript", "HTML5", "CSS3"],
  //   description:
  //     "A lightweight password generator with customizable password length and character options.",
  //   image: "/projects/project-07.png",
  //   github: "https://github.com/",
  //   live: "#",
  //   featured: false,
  // },

  // {
  //   id: 8,
  //   title: "Modern Landing Page",
  //   category: "UI Design",
  //   technologies: ["HTML5", "CSS3", "JavaScript"],
  //   description:
  //     "A modern landing page focused on clean typography, responsive layouts and polished visual design.",
  //   image: "/projects/project-08.png",
  //   github: "https://github.com/",
  //   live: "#",
  //   featured: false,
  // },
];

export const projectCategories = [
  "All",
  "Node.js",
  "React",
  // "JavaScript",
 
];

export default projects;