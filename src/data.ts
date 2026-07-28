import { DeveloperProfile, Skill, Service, Project, Experience, Testimonial } from './types';

export const developerProfile: DeveloperProfile = {
  name: "Muhammad Abdullah Reza",
  title: "Information Technology Leader & Software Solution Architect",
  tagline: "Architecting high-performance enterprise applications, driving digital transformation, and leading engineering teams.",
  bio: "Results-driven Information Technology Leader and Software Solution Architect with over 20 years of professional experience in designing, developing, and delivering enterprise-scale software solutions. Proven expertise in software architecture, team leadership, web application development, digital transformation, and enterprise HRMS solutions.",
  journey: "Throughout his career, he has worked with renowned organizations including Banglalink, Accenture, GPIT, BRAC IT Services, COCOSOFT, Arena Phone Bangladesh Ltd., and Symcynet Limited, successfully leading cross-functional teams and delivering high-impact software products for telecom, banking, and enterprise organizations.",
  yearsOfExperience: 20,
  projectsCompleted: 100,
  happyClients: 24,
  technologiesCount: 20,
  resumeUrl: "#",
  email: "mdabdullah@gmail.com",
  phone: "01962424629",
  location: "Dhaka, Bangladesh (Available for Remote Work)",
  socials: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
    facebook: "https://facebook.com"
  }
};

export const skillsData: Skill[] = [
  // Core Engineering & Frameworks
  { name: "PHP", category: "backend", icon: "Server", proficiency: 96 },
  { name: "Symfony", category: "backend", icon: "Cpu", proficiency: 92 },
  { name: "CodeIgniter", category: "backend", icon: "Combine", proficiency: 88 },
  { name: "JavaScript", category: "frontend", icon: "Braces", proficiency: 90 },
  { name: "jQuery / jQuery UI", category: "frontend", icon: "Layers", proficiency: 90 },
  { name: "HTML / CSS", category: "frontend", icon: "FileCode", proficiency: 95 },

  // Databases
  { name: "MySQL", category: "database", icon: "Database", proficiency: 95 },
  { name: "Oracle SQL", category: "database", icon: "Database", proficiency: 90 },

  // Architecture & Methodologies
  { name: "Solution Architecture", category: "tools", icon: "Wand2", proficiency: 96 },
  { name: "Enterprise HRMS", category: "tools", icon: "Cpu", proficiency: 98 },
  { name: "REST API & Web Services", category: "backend", icon: "Webhook", proficiency: 94 },
  { name: "SDLC & Agile", category: "tools", icon: "Sparkles", proficiency: 95 },
  { name: "DevOps & Linux Shell", category: "tools", icon: "Terminal", proficiency: 88 },
  { name: "Python", category: "backend", icon: "Code2", proficiency: 85 },
  { name: "Git & Source Control", category: "tools", icon: "GitBranch", proficiency: 92 }
];

export const servicesData: Service[] = [
  {
    id: "solution-architecture",
    title: "Software Solution Architecture",
    description: "Architecting scalable, resilient, and enterprise-grade software solutions with clean code, solid design patterns, and robust databases.",
    icon: "Cpu",
    features: ["Enterprise Architecture", "System Design", "Database Modeling", "Performance Tuning"]
  },
  {
    id: "hrms-solutions",
    title: "Enterprise HRMS Solutions",
    description: "Designing and deploying complete Human Resource Management Systems including Payroll, Attendance, Leave Management, and Travel Modules.",
    icon: "LayoutDashboard",
    features: ["Employee Management", "Payroll & Attendance", "HR Operations", "Enterprise Reporting"]
  },
  {
    id: "tech-leadership",
    title: "Technical Leadership & Team Mentoring",
    description: "Leading cross-functional engineering teams, task planning, CMMI process execution, and mentoring developers for quality delivery.",
    icon: "Monitor",
    features: ["Sprint Planning", "Code Reviews", "Cross-Functional Collaboration", "Crisis Management"]
  },
  {
    id: "digital-transformation",
    title: "Digital Transformation & Telecom Services",
    description: "Driving digital innovation, customer self-service applications, mobile content solutions, and API integrations for enterprise telecommunications.",
    icon: "Globe",
    features: ["Self-Care Apps", "RAFM Solutions", "Mobile Content Engine", "Telecom VAS"]
  },
  {
    id: "fullstack-enterprise",
    title: "Enterprise Web Development",
    description: "Building robust, secure backend and frontend architectures using PHP, Symfony, CodeIgniter, JavaScript, MySQL, and Oracle.",
    icon: "Server",
    features: ["LAMP Stack", "RESTful Web Services", "Secure Payment/VAS Pipelines", "Legacy Code Optimization"]
  }
];

export const projectsData: Project[] = [
  {
    id: "mybl-app",
    title: "MyBL App",
    description: "A complete self-service mobile application enabling Banglalink customers to access services including balance checking, usage history, latest offers, account management, and digital services.",
    category: "fullstack",
    tags: ["Banglalink", "Digital Transformation", "Self-Care", "REST API"],
    liveUrl: "#",
    githubUrl: "https://github.com",
    image: "https://picsum.photos/seed/mybl/800/600",
    featured: true
  },
  {
    id: "city-bank-hrms",
    title: "City Bank HRMS",
    description: "A complete Human Resource Management System (HRMS) developed for The City Bank Limited featuring Employee Management, Leave Management, Payroll Support, Attendance, and Enterprise Reporting.",
    category: "backend",
    tags: ["GPIT", "HRMS", "Oracle", "PHP", "Enterprise Reporting"],
    liveUrl: "#",
    githubUrl: "https://github.com",
    image: "https://picsum.photos/seed/cityhrms/800/600",
    featured: true
  },
  {
    id: "gplife-2",
    title: "GPLife 2.0",
    description: "Enterprise HRMS platform used by Grameenphone employees. Led technical team, backend modules, Travel Management Module, and stakeholder coordination.",
    category: "fullstack",
    tags: ["Accenture", "HRMS", "Grameenphone", "Symfony", "MySQL"],
    liveUrl: "#",
    githubUrl: "https://github.com",
    image: "https://picsum.photos/seed/gplife/800/600",
    featured: true
  }
];

export const experienceData: Experience[] = [
  {
    id: "exp-bl-1",
    role: "Digital Solution & Service Chartered Engineer",
    company: "Banglalink",
    duration: "April 2023 – Present",
    description: [
      "Responsible for designing and delivering enterprise digital solutions, driving innovation, and supporting digital transformation initiatives."
    ],
    type: "experience",
    tags: ["Digital Transformation", "Solution Architecture", "Telecom Solutions"]
  },
  {
    id: "exp-bl-2",
    role: "Information Technology Lead Engineer",
    company: "Banglalink",
    duration: "February 2018 – Present",
    description: [
      "Leading software engineering teams and guiding enterprise application architecture.",
      "Spearheading digital product development and technical delivery (e.g., MyBL App).",
      "Mentoring engineers and facilitating cross-functional stakeholder collaboration."
    ],
    type: "experience",
    tags: ["Software Architecture", "Team Leadership", "MyBL App", "Agile"]
  },
  {
    id: "exp-accenture-1",
    role: "Software Engineer Team Lead",
    company: "Accenture",
    duration: "July 2014 – November 2017",
    description: [
      "Led technical teams responsible for developing enterprise applications using LAMP technologies.",
      "Managed software architecture, task planning, project delivery, and client communication."
    ],
    type: "experience",
    tags: ["LAMP", "Team Leadership", "Software Architecture", "Mentoring"]
  },
  {
    id: "exp-accenture-2",
    role: "Software Engineering Senior Analyst",
    company: "Accenture",
    duration: "January 2014 – June 2014",
    description: [
      "Responsible for the complete Software Development Life Cycle (SDLC), task distribution, project monitoring, and reporting project progress to management."
    ],
    type: "experience",
    tags: ["SDLC", "Project Management", "Reporting"]
  },
  {
    id: "exp-bracit",
    role: "Consultant",
    company: "BRAC IT Services Ltd.",
    duration: "2016",
    description: [
      "Worked as a software consultant for enterprise-level solution development."
    ],
    type: "experience",
    tags: ["Consulting", "Enterprise Solutions"]
  },
  {
    id: "exp-gpit-1",
    role: "Solution Specialist",
    company: "GPIT",
    duration: "September 2012 – December 2013",
    description: [
      "Led the development of enterprise HRMS applications (e.g., City Bank HRMS).",
      "Architected application and database design following CMMI-based software development process."
    ],
    type: "experience",
    tags: ["HRMS", "Database Design", "CMMI Process", "Technical Leadership"]
  },
  {
    id: "exp-gpit-2",
    role: "Specialist – RAFM & IT Consultant",
    company: "GPIT",
    duration: "March 2011 – September 2012",
    description: [
      "Worked on Revenue Assurance and Fraud Management (RAFM) solutions.",
      "Led software development teams utilizing PHP, MySQL, Oracle, and Symfony Framework."
    ],
    type: "experience",
    tags: ["RAFM", "PHP", "Oracle", "Symfony"]
  },
  {
    id: "exp-cocosoft",
    role: "Senior Software Engineer",
    company: "COCOSOFT",
    duration: "March 2010 – March 2011",
    description: [
      "Managed development teams and crafted enterprise web applications as well as BlackBerry applications."
    ],
    type: "experience",
    tags: ["PHP", "BlackBerry Apps", "Web Applications"]
  },
  {
    id: "exp-arena",
    role: "Senior Software Engineer",
    company: "Arena Phone Bangladesh Ltd.",
    duration: "June 2007 – February 2010",
    description: [
      "Delivered mobile content solutions for global telecom operators (Airtel, Etisalat, Reliance, BSNL, Claro, Proximus, etc.).",
      "Utilized PHP, Python, Linux Shell, FFmpeg, ImageMagick, and Java ME."
    ],
    type: "experience",
    tags: ["Telecom Content", "PHP", "Python", "FFmpeg", "Linux Shell"]
  },
  {
    id: "exp-symcynet",
    role: "Web Developer",
    company: "Symcynet Limited",
    duration: "December 2006 – June 2007",
    description: [
      "Started professional software development career as a Web Developer."
    ],
    type: "experience",
    tags: ["Web Development", "PHP", "HTML/CSS"]
  },
  {
    id: "edu-sust",
    role: "Bachelor of Science (B.Sc.) in Computer Science & Engineering",
    company: "Shahjalal University of Science and Technology (SUST)",
    duration: "2001 – 2006",
    description: [
      "Major Courses: C, C++, Java, Assembly, Algorithms, Database Systems, Artificial Intelligence, Operating Systems, Computer Networks, Data Communications, Image Processing."
    ],
    type: "education",
    tags: ["SUST", "CSE", "Algorithms", "Software Engineering"]
  },
  {
    id: "edu-bogura",
    role: "Higher Secondary Certificate (HSC)",
    company: "Govt. Azizul Haque College, Bogura",
    duration: "1998 – 2000",
    description: [
      "Science background with excellence in Mathematics, Physics, and Chemistry."
    ],
    type: "education",
    tags: ["HSC", "Science"]
  }
];

export const testimonialsData: Testimonial[] = [
  {
    id: "rec-1",
    name: "Monwar Hussain",
    role: "Strategy, Research & Business Development",
    company: "Telecom / Tech Enterprise",
    content: "Recognized Muhammad Abdullah Reza for outstanding delivery quality, leading teams of 3–6 engineers, managing complex enterprise modules, excellent stakeholder communication, strong ownership and crisis management, high integrity, and empowering engineering teams.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop"
  },
  {
    id: "rec-2",
    name: "Shuvankar Halder",
    role: "Full Stack Developer | Zend Certified PHP Engineer",
    company: "Software Industry",
    content: "A perfect technical leader with a strong professional personality.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop"
  }
];