import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/streetgood.png";
import { BiCodeBlock } from "react-icons/bi";
import rmtdevImg from "@/public/CRUD2.png";
import wordanalyticsImg from "@/public/portfolio-web.png";
import todo from "@/public/todo2.png";
import { FaConnectdevelop } from "react-icons/fa";
import tripple  from "@/public/tripple.png";



export const links = [
  {
    name: "Home",
    hash: "#home",
  },
/* {
    name: "About",
    hash: "#about",
  },*/
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Technologies",
    hash: "#technologies",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Business Academy",
    location: "Trebišov, Slovakia",
    description:
      "My secondary school was focused on information technology used in businesses therefor I had time to devote myself to programming this early",
    icon: React.createElement(LuGraduationCap),
    date: "2018-2022",
  },
  {
    title: "Deutsche Telekom IT Solutions",
    location: "Košice, Slovakia",
    description:
      "I worked there as an IT Assistant in the office in Košice, then I switched to home office, while I was still at school",
    icon: React.createElement(CgWorkAlt),
    date: "2021 - 2022",
  },
  {
    title: "Freelancer",
    location: "Bratislava, Slovakia",
    description:
      "Due to lack of time, I switched to freelance programming and focused mainly on personal websites, but also on smaller projects",
    icon: React.createElement(FaReact),
    date: "2022 - 2023",
  },
  {
    title: "FIIT STU",
    location: "Bratislava, Slovakia",
    description:
      "I commenced my studies at STU FIIT, however, I chose to suspend my education in order to prioritize my professional pursuits.",
    icon: React.createElement(LuGraduationCap),
    date: "2022 - 2023",
  },
  {
    title: "Globerg:Digital - Front-End developer",
    location: "Bratislava, Slovakia",
    description:
      "In this job, I have been coding websites and e-shop for large variety of clients using Next.js and custom technologies or wordpress",
    icon: React.createElement(BiCodeBlock),
    date: "2023",
  },
  {
    title: "Freelance web developer",
    location: "Bratislava, Slovakia",
    description:
      "In my free time I focused on coding websites/apps for businesses or individuals according to their requirements and seeking every opportunity to learn.",
    icon: React.createElement(FaConnectdevelop),
    date: "2023",
  },
  {
    title: "Full-Stack developer",
    location: "Bratislava, Slovakia - Opava, Czech Republic",
    description:
      "Full-Stack developer and UI/UX Designer. I acquired extensive experience as a Full-Stack developer and was entrusted with the responsibility of designing UI applications in Angular/Figma.",
    icon: React.createElement(FaConnectdevelop),
    date: "2023-2024",
  },
] as const;

export const projectsData = [
  {
    title: "Tripple App",
    description:
      "Introducing Tripple, the ultimate travel companion that transforms your trips into pure adventures!",
    description2: "With our app, your travel experience becomes a breeze. Effortless Planning, Interactive Trip Dashboard and more",
    odkaz: "",
    tags: ["React", "Next.js", "Express.js", "MongoDB", "FetchAPI", "Tailwind", "Figma", "AdobeXD"],
    imageUrl: tripple,
  },
  {
    title: "Street Good",
    description:
      "I created this website from scratch for a business that offers the best smoothie bowls in town",
    description2: "",
    odkaz: "",
    tags: ["React", "Next.js", "Framer-motion", "Tailwind", "Figma"],
    imageUrl: corpcommentImg,
  },
  {
    title: "To Do App",
    description:
      "The best To-Do app on the market. With the help of FETCHapi, you can store all your bags in a mockAPI",
    description2: "In this project, I use fetchapi, all CRUD operations and mockapi.io, all this in the Next.js framework using Typescript and custom React hooks and HTTP requests",
    odkaz: "https://to-do-app-git-main-dejvidem.vercel.app/",
    tags: ["React", "Next.js", "Mockapi.io", "Tailwind", "Formik", "Yup"],
    imageUrl: todo,
  },
  {
    title: "CRUD User management system",
    description:
      "On my journey of learning backend development I created this CRUD app with all the functionalities from scratch.",
    description2: "",
    odkaz: "",
    tags: ["Node.js", "Express.js", "React", "MongoDB", "Tailwind"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Portfolio web",
    description:
      "The project you are currently looking at, the web portfolio, is a must-have for any Front-End developer",
    description2: "",
    odkaz: "",
    tags: ["Next.js", "React", "Typescript", "Framer-Motion", "Tailwind"],
    imageUrl: wordanalyticsImg,
  },
]as const;

export const skillsData = [
  "HTML",
  "CSS",
  "SCSS",
  "JavaScript",
  "Python",
  "C",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "Express",
  "PostgreSQL",
  "Wordpress",
  "Figma",
  "Framer Motion",
] as const;
