import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
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
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
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
    name: "Redux Toolkit",
    icon: redux,
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
    title: "Full Stack Software Engineer",
    company_name: "FooDoo",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Jan 2023 - Present",
    points: [
      "Revised, modularized, and updated old code bases to modern development standards, reducing operating costs, and improving functionality.",
      "Collaborated with project managers to select ambitious, but realistic coding milestones on prerelease software project development.",
      "Collaborated on stages of the systems development lifecycle from requirement gathering to production releases.",
      "Built databases and table structures for web applications.",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "BetConstruct",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Dec 2021 - Jan 2023",
    points: [
      "Sorted and organized files, spreadsheets, and reports. Analyzed problems and worked with teams to develop solutions.",
      "Interacted with customers by phone, email, or in person to provide information.",
      "Proved successful working within tight deadlines and a fast-paced environment.",
      "Used critical thinking to break down problems, evaluate solutions, and make decisions",
    ],
  },
  {
    title: "Junior Software Engineer",
    company_name: "Booking App",
    icon: shopify,
    iconBg: "#383E56",
    date: "Sep 2021 - Dec 2021",
    points: [
      "I've mostly had experience working on the frontend side and used Angular",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Contributed ideas and suggestions in team meetings and delivered updates on deadlines, designs, and enhancements.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Intern",
    company_name: "Peter Pazmany University",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Oct 2020 - Jul 2021",
    points: [
      "I worked with faculty students on creating a web application using Angular and Express.js. ",
      "Demonstrated a high level of initiative and creativity while tackling difficult tasks. Passionate about learning and committed to continual improvement.",
      "Cultivated interpersonal skills by building positive relationships with others.",
      "Used strong analytical and problem-solving skills to develop effective solutions for challenging situations",
      "Proven ability to learn quickly and adapt to new situations",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

const projectText = `
Following projects showcases my skills and experience through real-world examples
of my work. Each project is briefly described with links to code repositories and live
demos in it. It reflects my ability to solve complex problems, work with different
technologies, and manage projects effectively.
`;

const aboutText = `
I am an experienced full-stack JavaScript software engineer with a robust three-year
 track record in the field. My passion for programming and problem-solving has propelled
me to excel in both front-end and back-end development. Over the course of my career,
I have had the privilege of working on diverse projects, ranging from crafting dynamic 
and responsive user interfaces with modern JavaScript frameworks like React, to 
architecting robust server-side applications using Node.js.
`;

export {
  services,
  technologies,
  experiences,
  testimonials,
  projects,
  projectText,
  aboutText,
};
