export const personalData = {
  name: "Piyush Patil",
  title: "Full Stack Developer",
  subTitle: "MERN Stack Specialist & Computer Science Engineering Student.",
  email: "piyushbpatil21@gmail.com",
  github: "https://github.com/PiyushPatil2105",
  linkedin: "https://www.linkedin.com/in/piyush-patil-89b503351",
  resumeUrl: "/resume.pdf",
  stats: [
    { label: "CGPA", value: "8.11" },
    { label: "Projects Deployed", value: "3+" },
    { label: "MERN Internship", value: "1" },
    { label: "Core Skills", value: "12+" }
  ]
};

export const aboutData = {
  description: "I am a Computer Science Engineering student with a CGPA of 8.11/10 and practical experience in Full Stack Web Development. I specialize in building scalable MERN stack web applications and integrating secure user authentications, cloud deployments, and NLP-based solutions. I possess a strong problem-solving mindset and thrive on turning user requirements into robust, high-performance applications.",
  bullets: [
    "Proficient in React.js, Node.js, Express.js, and MongoDB",
    "Hands-on experience in REST APIs, JWT, and Cloudinary",
    "Familiar with Java, Python, and spaCy NER for NLP applications",
    "Passionate about scalable systems, databases, and clean code"
  ],
  terminalCommands: [
    { command: "cat credentials.json", response: '{\n  "name": "Piyush Patil",\n  "education": "B.E. Computer Science & Engineering",\n  "college": "Shivajirao S. Jondhale College of Engg & Tech",\n  "graduation_year": "2027",\n  "current_cgpa": "8.11/10"\n}' },
    { command: "npm run skills --list", response: 'frontend: ["HTML", "CSS", "JS", "React.js", "Tailwind CSS", "Vite"]\nbackend: ["Node.js", "Express.js", "REST APIs", "Firebase Admin"]\ndatabase: ["MongoDB", "MySQL"]\nml_nlp: ["spaCy", "NER"]' }
  ],
  timeline: [
    {
      year: "Oct - Dec 2025",
      title: "Full Stack Developer Intern",
      company: "Sapphire Infocom Pvt. Ltd., Dombivli",
      description: "Conceptualised and developed a full-stack MERN project demonstrating proficiency in frontend and backend development. Implemented key functionalities using React, Node.js, Express.js, and MongoDB; showcased strong technical and problem-solving skills."
    },
    {
      year: "2023 - 2027",
      title: "B.E. — Computer Science & Engineering",
      company: "Shivajirao S. Jondhale College of Engg & Tech",
      description: "Currently pursuing engineering degree with a current cumulative CGPA of 8.11/10. Academic breakdown: Sem 1 (8.22), Sem 2 (8.55), Sem 3 (8.39), Sem 4 (8.13), Sem 5 (7.26)."
    },
    {
      year: "2022 - 2023",
      title: "HSC (12th)",
      company: "S.H.M College of Science, Kalyan",
      description: "Completed Higher Secondary Certificate (HSC) in Science stream with an aggregate score of 73.33%."
    },
    {
      year: "2020 - 2021",
      title: "SSC (10th)",
      company: "Don Bosco School, Kalyan",
      description: "Completed Secondary School Certificate (SSC) with a score of 90.40%."
    }
  ]
};

export const skillsData = [
  {
    category: "Frontend & Backend",
    skills: [
      { name: "React.js", level: 90 },
      { name: "Node.js", level: 85 },
      { name: "Express.js", level: 85 },
      { name: "JavaScript", level: 90 },
      { name: "HTML & CSS", level: 95 },
      { name: "Tailwind CSS", level: 90 }
    ]
  },
  {
    category: "Databases & Cloud",
    skills: [
      { name: "MongoDB / Mongoose", level: 88 },
      { name: "MySQL", level: 75 },
      { name: "Vercel / Render", level: 80 },
      { name: "Cloudinary", level: 85 },
      { name: "Firebase Admin SDK", level: 70 }
    ]
  },
  {
    category: "Languages & Tools",
    skills: [
      { name: "Java", level: 85 },
      { name: "Python", level: 80 },
      { name: "spaCy (NLP / NER)", level: 70 },
      { name: "Git & GitHub", level: 85 },
      { name: "Postman", level: 85 },
      { name: "Leaflet.js", level: 75 }
    ]
  }
];

export const projectsData = [
  {
    id: 1,
    title: "AutoDev",
    category: "MERN Stack",
    shortDescription: "Vehicle Catalog & Comparison Portal with 3-way spec diffing and interactive maps.",
    fullDescription: "Built a full-stack MERN vehicle portal featuring JWT authentication, role-based admin dashboard, and Cloudinary image uploads. It includes a custom 3-way specification comparison engine with diff-toggling, dynamic multi-criteria filtering over a MongoDB catalog, and a dealer locator using Leaflet.js.",
    features: [
      "JWT-based role authentication & custom admin panel",
      "Dynamic comparison matrix comparing up to 3 vehicles with visual diff indicators",
      "Leaflet.js map integration showing dealer locations across 4 cities",
      "Robust MongoDB pagination and filtering (brand, fuel, price) with seed scripts"
    ],
    tech: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS", "Cloudinary", "Leaflet.js"],
    demoLink: "https://autodev-vehicle-portal.vercel.app/",
    codeLink: "https://github.com/PiyushPatil2105/autodev-vehicle-portal"
  },
  {
    id: 2,
    title: "Upskillr",
    category: "MERN Stack",
    shortDescription: "Online learning platform featuring role-based portals and secure authentication.",
    fullDescription: "A collaborative skill development platform supporting protected routes for Instructor and Learner roles. Built with React, Express, and Firebase Auth verification middleware. The platform supports course creation, assignments, and detailed progress tracking.",
    features: [
      "Firebase Token Verification backend middleware",
      "Role-based UI flows for Instructors (course management) and Learners (course enrollment)",
      "Interactive course viewer and assignment progress dashboard",
      "Responsive UI built using custom CSS and Tailwind"
    ],
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Firebase Auth", "Tailwind CSS"],
    demoLink: "https://upskillr-theta.vercel.app/",
    codeLink: "https://github.com/PiyushPatil2105/Upskillr"
  },
  {
    id: 3,
    title: "Resume Checker",
    category: "Machine Learning / NLP",
    shortDescription: "ATS resume analyzer powered by spaCy NLP and entity extraction.",
    fullDescription: "A Python-based ATS analysis tool that extracts resume information and grades it against a job description. Uses spaCy NER (Named Entity Recognition) to parse work experiences, skills, education, and calculates key phrase matching percentages.",
    features: [
      "spaCy Custom NER model for structured parsing of resume details",
      "ATS compatibility rating system comparing skills weightings",
      "Keyword matching highlighting missing industry buzzwords",
      "Lightweight Flask web interface for instant uploads and analysis"
    ],
    tech: ["Python", "spaCy", "NLP", "Flask", "Tailwind CSS"],
    demoLink: "https://resume-checker-q80h.onrender.com",
    codeLink: "https://github.com/PiyushPatil2105/resume-checker"
  },
  {
    id: 4,
    title: "Developer Portfolio & Resume",
    category: "Frontend",
    shortDescription: "Premium interactive developer portfolio website with a print-optimized PDF resume.",
    fullDescription: "Built a custom, responsive developer portfolio featuring particle physics, a theme customizer, and custom cursors. Includes a print-optimized interactive HTML resume template compile-ready for single-page PDF exporting.",
    features: [
      "Headless Chromium PDF printing pipeline suppressing browser margins",
      "Dynamic theme panels and custom fluid mouse physics",
      "Interactive credentials verification linking to hosted public assets"
    ],
    tech: ["React", "Vite", "Framer Motion", "CSS3", "Headless Chrome"],
    demoLink: "https://portfolio-eta-nine-10wun0jnrm.vercel.app/",
    codeLink: "https://github.com/PiyushPatil2105/portfolio"
  }
];

export const certificatesData = [
  {
    id: 1,
    title: "Machine Learning & NLP Certification",
    issuer: "Success Classes of Engineering",
    date: "2025–2026",
    credentialId: "SC-ML-2025",
    verificationLink: "/ml-nlp-cert.pdf"
  },
  {
    id: 2,
    title: "MERN Stack Development",
    issuer: "Success Classes",
    date: "2024–2025",
    credentialId: "SC-MERN-2024",
    verificationLink: "/mern-cert.pdf"
  },
  {
    id: 3,
    title: "Java Programming",
    issuer: "Success Classes",
    date: "2024–2025",
    credentialId: "SC-JAVA-2024",
    verificationLink: "/java-cert.pdf"
  },
  {
    id: 4,
    title: "Full Stack Developer Internship Certificate",
    issuer: "Sapphire Infocom Pvt. Ltd.",
    date: "Dec 2025",
    credentialId: "SI-MERN-2025",
    verificationLink: "/internship-cert.pdf"
  }
];
