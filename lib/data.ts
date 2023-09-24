import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/streetgood.png";
import { BiCodeBlock } from "react-icons/bi";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
import { FaConnectdevelop } from "react-icons/fa";



export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
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
    title: "Globerg:Digital - Front-End developer",
    location: "Bratislava, Slovakia",
    description:
      "In this job, I have been coding websites and e-shop for large variety of clients using Next.js and custom technologies or wordpress",
    icon: React.createElement(BiCodeBlock),
    date: "2023 - 2023",
  },
  {
    title: "Freelance web developer",
    location: "Bratislava, Slovakia",
    description:
      "Right now I am unemployed, but I code websites for businesses or individuals according to their requirements and I seek every opportunity to learn ! ",
    icon: React.createElement(FaConnectdevelop),
    date: "Present",
  },
] as const;

export const projectsData = [
  {
    title: "Street Good",
    description:
      "I created this website from scratch for a business that offers the best smoothie bowls in town",
    tags: ["React", "Next.js", "Framer-motion", "Tailwind", "Figma"],
    imageUrl: corpcommentImg,
    popis: "Ja som projekt číslo 1",
  },
  {
    title: "Tepovaničko",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
    popis: "Ja som projekt číslo 2",
  },
  {
    title: "Portfolio web",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
    popis: "Ja som projekt číslo 3",
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