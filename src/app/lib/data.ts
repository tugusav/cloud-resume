import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import awsLogo from "../../../public/aws.png"
import kyndrylLogo from "../../../public/Kyndryl_logo.svg.png"
import prosaLogo from "../../../public/prosa icon.png"
import itbLogo from "../../../public/itb.jpeg"
import hiredTodayLogo from "../../../public/hiredtoday.png"


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
    name: "Skills",
    hash: "#skills",
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
    title: "Cloud Engineer",
    company: "Kyndryl",
    date: "October 2023 - Present",
    tags: ["GCP", "Kubernetes", "Terraform", "Kubernetes Config Connector", "Python", "Bash"],
    description:"Managed and maintained managed Google Cloud Infrastructure for a large telecomunication company. Created and maintained Kubernetes Config Connector and Python scripts for GCP resources.",
    icon: React.createElement(CgWorkAlt), // Empty for now
  },
  {
    title: "Solutions Architect Intern",
    company: "Amazon Web Services",
    date: "May 2023 - August 2023",
    tags: ["AWS", "Generative AI", "Next.js", "React", "Typescript", "Tailwind", "AWS Amplify"],
    description:
      "Built and presented a demo-ready web application focused on image-to-image generative AI using a range of AWS services including Sagemaker, Lambda, Cognito, Amplify, API Gateway, and Rekognition. Creating architecture diagram to address company problems.",
    icon: React.createElement(CgWorkAlt)
  },
  {
    title: "Speech AI Engineer Intern",
    company: "Prosa.ai",
    date: "June 2022 - August 2022",
    tags: ["C++", "gRPC", "Kaldi", "Python"],
    description:
      "Optimized speaker diarizer engine processing time by up to 21% through parallel i-vector extraction method. Enhanced memory utilization within the speaker diarizer engine by modifying server configuration, resulting in a remarkable 63% reduction in memory usage.",
    icon: React.createElement(CgWorkAlt)
  },
  {
    title: "Database Modeling Coordinating Assistant",
    company: "STEI ITB",
    date: "September 2021 - December 2021",
    tags: ["SQL", "Database Modeling", "Database Design"],
    description:
      "Managed 3 class assistants and assisted 121 class participants. Wrote 10+ practical SQL questions and 3 database modeling projects and evaluated 28 final projects.",
    icon: React.createElement(CgWorkAlt)
  },
  {
    title: "Data Analyst Intern",
    company: "HiredToday",
    date: "June 2021 - September 2021",
    tags: ["SQL"],
    description:
      "Provided insights and reports for the sales team about ad posting, jobseeker growth, and employer growth. Created database documentation for Hired Today production database containing more than 50 tables and created more than 15 queries to help the team make data-driven decisions.",
    icon: React.createElement(CgWorkAlt)
  },
] as const;

export const projectsData = [
  {
    title: "Gambarin Gue!",
    description: "Customer demo program for Generative AI using AWS.",
    date: "2023",
    tags: ["Typescript", "Next.js", "AWS"],
    link: "https://github.com/tugusav/gambarin-gue"
  },
  {
    title: "Fraud Detection System",
    description:
      "Fraud detection system using artificial neural network algorithm.",
    date: "2023",
    tags: ["Tensorflow", "GCP"],
    link: "https://github.com/tugusav/fraud-detection-system-ann"
  },
  {
    title: "MFCC Extractor",
    description: "API to extract MFCC features of an audio file.",
    date: "2022",
    tags: ["Python", "FastAPI"],
    link: "https://gitlab.com/tugusav/mfcc-extractor"
  },
  {
    title: "Rumah123 Data Analysis",
    description: "Data Scraping and Analysis of Rumah123.com.",
    date: "2021",
    tags: ["Python", "MongoDB", "MongoDB Atlas"],
    link: "https://github.com/tugusav/Rumah123-Data-Analysis"
  },
] as const;

export const skillsList = [
  "AWS",
  "Python",
  "SQL",
  "Tableau",  
  "PowerBI",
  "React",
  "Next.js",
  "Typescript",
  "Javascript",
  "gRPC",
  "C++",
  "MongoDB",
  "FastAPI",
  "Java",
  "C",
  "Javascript",
  "Flutter",
] as const;
