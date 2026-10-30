import adminPanel from '../projects/admin.webp'
import swiggyp from '../projects/swiggy.png'
import peperdrop from '../projects/peper.png'
import googlec from '../projects/googlec.png'
import moviep from '../projects/moviep.png'
import erdiagram from '../projects/erdiagram.png'

const projects = [
  {
    id: 1,
    title: "Admin Dashboard",
    category: "Full Stack",
    year: "2025",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB"],
    description:
      "A clean, responsive admin dashboard for managing application data and analytics, backed by a MongoDB REST API.",
    image: adminPanel,
    github: "https://github.com/daxpatel20/ADMIN-MAIN-PROJETS",
    live: "#",
  },
  {
    id: 2,
    title: "Swiggy Partner",
    category: "Full Stack",
    year: "2025",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB"],
    description:
      "A food-delivery partner platform with restaurant & menu management, authentication and a role-based admin panel.",
    image: swiggyp,
    github: "https://github.com/daxpatel20/Swiggy-api",
    live: "#",
  },
  {
    id: 3,
    title: "PaperDrop E-Commerce",
    category: "React",
    year: "2025",
    technologies: ["React.js", "JavaScript", "CSS3"],
    description:
      "A complete e-commerce experience with product listing, cart, authentication and role-based access.",
    image: peperdrop,
    github: "https://github.com/daxpatel20/PaperDrop",
    live: "#",
  },
  {
    id: 4,
    title: "ER Diagram System",
    category: "Backend",
    year: "2024",
    technologies: ["Node.js", "MongoDB", "Database Design"],
    description:
      "Database architecture and entity-relationship modelling for a scalable backend, mapping collections and relations.",
    image: erdiagram,
    github: "https://github.com/",
    live: "#",
  },
  {
    id: 5,
    title: "Google Contacts Clone",
    category: "React",
    year: "2024",
    technologies: ["React.js", "JavaScript", "CSS3"],
    description:
      "A contact manager inspired by Google Contacts with add, edit, search and delete built from reusable components.",
    image: googlec,
    github: "https://github.com/daxpatel20/google-Contacts",
    live: "#",
  },
  {
    id: 6,
    title: "Movie Explorer",
    category: "React",
    year: "2024",
    technologies: ["React.js", "REST API", "CSS3"],
    description:
      "A responsive movie discovery app that consumes a public movie API with search, details and dynamic rendering.",
    image: moviep,
    github: "https://github.com/daxpatel20/Movie-Api",
    live: "#",
  },
];

export default projects;
