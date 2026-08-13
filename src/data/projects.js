import adminPanel from '../projects/admin.webp'
import swiggyp from '../projects/Swiggy.png'
import peperdrop from '../projects/peper.png'
import googlkeep from '../projects/googlkeep.png'


const projects = [
  {
    id: 1,
    title: "Swiggy Partner",
    category: "Full Stack",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB"],
    description:
      "A modern tour and travel platform with packages, user authentication, admin management and responsive UI.",
    image: swiggyp,
    github: "https://github.com/daxpatel20/ADMIN-MAIN-PROJETS",
    live: "#",
    featured: true,
  },

  {
    id: 2,
    title: "E-Commerce Platform ",
    category: "Full Stack",
    technologies: ["React.js", "JavaScript",],
    description:
      "A complete e-commerce application with authentication, products, cart functionality and role-based access.",
    image : peperdrop,  
    github: "https://github.com/",
    live: "#",
    featured: true,
  },

  {
    id: 3,
    title: "Admin Dashboard",
    category: "React",
    technologies: ["React.js", "JavaScript", "CSS3"],
    description:
      "A clean and responsive dashboard interface designed for managing application data and analytics.",
    image: adminPanel,
    github: "https://github.com/",
    live: "#",
    featured: true,
  },

  {
    id: 4,
    title: "Google Keep Clone",
    category: "React",
    technologies: ["React.js", "JavaScript", "CSS3"],
    description:
      "A note-taking application inspired by Google Keep with a clean interface and interactive note management.",
    image: googlkeep,
    github: "https://github.com/",
    live: "#",
    featured: false,
  },

  {
    id: 5,
    title: "Google Contacts Clone",
    category: "React",
    technologies: ["React.js", "JavaScript", "CSS3"],
    description:
      "A responsive contact management application with reusable React components and interactive UI.",
    image: "/projects/project-05.png",
    github: "https://github.com/",
    live: "#",
    featured: false,
  },

  {
    id: 6,
    title: "To-Do Application",
    category: "JavaScript",
    technologies: ["JavaScript", "HTML5", "CSS3"],
    description:
      "A simple and interactive task management application for creating, completing and removing tasks.",
    image: "/projects/project-06.png",
    github: "https://github.com/",
    live: "#",
    featured: false,
  },

  {
    id: 7,
    title: "Password Generator",
    category: "JavaScript",
    technologies: ["JavaScript", "HTML5", "CSS3"],
    description:
      "A lightweight password generator with customizable password length and character options.",
    image: "/projects/project-07.png",
    github: "https://github.com/",
    live: "#",
    featured: false,
  },

  {
    id: 8,
    title: "Modern Landing Page",
    category: "UI Design",
    technologies: ["HTML5", "CSS3", "JavaScript"],
    description:
      "A modern landing page focused on clean typography, responsive layouts and polished visual design.",
    image: "/projects/project-08.png",
    github: "https://github.com/",
    live: "#",
    featured: false,
  },
];

export const projectCategories = [
  "All",
  "Full Stack",
  "React",
  "JavaScript",
  "UI Design",
];

export default projects;