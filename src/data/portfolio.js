const portfolioData = {
  personal: {
    name: "Dax Patel",
    firstName: "Dax",
    lastName: "Patel",
    role: "Full Stack Developer",
    email: "daxpatel@163gmail.com",
    location: "Surat, Gujarat, India",
    bio: "I build modern, responsive and user-focused web applications with clean code, powerful technologies and thoughtful UI.",
    availability: "Available for opportunities",
  },

  social: {
    github: "https://github.com/daxpatel20",
    linkedin: "https://www.linkedin.com/",
    instagram: "https://www.instagram.com/",
  },

  navigation: [
    { label: "About", href: "#about" },
    { label: "Stack", href: "#skills" },
    { label: "Work", href: "#projects" },
    { label: "Journey", href: "#journey" },
    { label: "Contact", href: "#contact" },
  ],

  roles: ["Full Stack Developer", "React.js Engineer", "MERN Stack Builder", "UI Craftsman"],

  stats: [
    { value: 6, suffix: "+", label: "Shipped projects" },
    { value: 12, suffix: "", label: "Technologies" },
    { value: 2, suffix: "+", label: "Years building" },
    { value: 100, suffix: "%", label: "Responsive" },
  ],

  experience: [
    {
      period: "2025 — Present",
      title: "Full Stack Developer",
      place: "Professional & Freelance Projects",
      description:
        "Building production web applications with React.js, Node.js, Express.js and MongoDB — focused on responsive UI, clean architecture and secure REST APIs.",
      tags: ["React.js", "Node.js", "Express.js", "MongoDB"],
    },
    {
      period: "2024 — 2025",
      title: "Frontend Developer",
      place: "Web Development Projects",
      description:
        "Created responsive interfaces, reusable React component systems and interactive applications with modern frontend tooling.",
      tags: ["React.js", "JavaScript", "Tailwind", "CSS3"],
    },
    {
      period: "2022 — Present",
      title: "Computer / Software Development",
      place: "Education & Technical Learning",
      description:
        "Strong foundations in programming, web development, databases and software engineering — learned by shipping real projects.",
      tags: ["Programming", "Databases", "Engineering"],
    },
  ],

  services: [
    {
      title: "Frontend Engineering",
      description: "Pixel-perfect, animated and responsive interfaces in React.js with reusable component systems.",
    },
    {
      title: "Full Stack Apps",
      description: "End-to-end MERN applications — frontend, backend APIs, authentication and database integration.",
    },
    {
      title: "REST API Development",
      description: "Secure, scalable REST APIs with Node.js & Express — CRUD, auth and clean data modelling.",
    },
    {
      title: "Performance & UI/UX",
      description: "Fast loading, optimized components and interfaces that feel smooth on every device.",
    },
  ],
};

export default portfolioData;
