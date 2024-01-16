"use client";
import React, { useEffect } from "react";
import SectionHeading from "./section_heading";
import { motion } from "framer-motion";
import { useSectionInView } from "../lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About", 0.5);

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.125,
      }}
      id="about"
    >
      <SectionHeading>About Me</SectionHeading>
      <p className="mb-3 justify-center">
        <span className="font-medium">Tugus</span> is a dedicated engineering
        student with a fervent passion for{" "}
        <span className="font-medium">data</span> and{" "}
        <span className="font-medium">cloud computing</span>. Currently holds a
        Bachelor's degree in{" "}
        <span className="font-medium">Information System and Technology</span>{" "}
        at <span className="font-medium">Institut Teknologi Bandung</span>,
        Tugus has consistently excelled academically with a remarkable
        cumulative GPA of <span className="font-medium">3.85/4.00</span>. As a
        data enthusiast, Tugus delved into{" "}
        <span className="font-medium">machine learning</span>, culminating in a
        final project titled "Implementation of{" "}
        <span className="font-medium">Artificial Neural Network Algorithm</span>{" "}
        in <span className="font-medium">Fraud Detection System</span>.
        <br />
        In addition to academic achievements, Tugus has gained hands-on
        experience through internships, including a{" "}
        <span className="font-medium">Solutions Architect Intern</span> role at{" "}
        <span className="font-medium">Amazon Web Services</span>. During this
        internship, Tugus actively contributed to the development of a web
        application focused on{" "}
        <span className="font-medium">image-to-image generative AI</span> using
        various <span className="font-medium">AWS services</span>. Tugus
        successfully collaborated with clients, participated in customer
        meetings, and delivered compelling presentations, showcasing adept{" "}
        <span className="font-medium">communication skills</span>. Tugus also
        applied <span className="font-medium">software engineering</span>{" "}
        expertise as a{" "}
        <span className="font-medium">Speech AI Engineer Intern</span> at{" "}
        <span className="font-medium">Prosa.ai</span>, optimizing processing
        time and memory utilization for a{" "}
        <span className="font-medium">
          speaker diarizer engine using C++ and gRPC
        </span>
        .
        <br />
        Tugus' proficiency extends to{" "}
        <span className="font-medium">professional certifications</span>,
        including two <span className="font-medium">AWS certifications</span> (
        <span className="font-medium">Solutions Architect Associate</span> and{" "}
        <span className="font-medium">Cloud Practitioner</span>) and a{" "}
        <span className="font-medium">Tensorflow Developer Certificate</span>.
        Tugus has further demonstrated their skills through various projects,
        such as the customer demo program "
        <span className="font-medium">Gambarin Gue!</span>" for{" "}
        <span className="font-medium">Generative AI</span> using{" "}
        <span className="font-medium">AWS</span> and the development of a{" "}
        <span className="font-medium">Fraud Detection System</span> using{" "}
        <span className="font-medium">Tensorflow</span> and{" "}
        <span className="font-medium">GCP</span>. With a diverse skill set
        encompassing <span className="font-medium">AWS</span>,{" "}
        <span className="font-medium">Python</span>,{" "}
        <span className="font-medium">SQL</span>,{" "}
        <span className="font-medium">Tableau</span>,{" "}
        <span className="font-medium">PowerBI</span>, and more, Tugus is poised
        to make a significant impact in the ever-evolving landscape of{" "}
        <span className="font-medium">data and cloud computing</span>.
      </p>
    </motion.section>
  );
}
