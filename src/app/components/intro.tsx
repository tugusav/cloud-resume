"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import profileImage from "/public/profile.jpeg";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { useSectionInView } from "../lib/hooks";
import { useActiveSectionContext } from "../context/active-section-context";

export default function Intro() {
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  const {ref} = useSectionInView("Home", 0.5);
  return (
    <section className="mb-20 max-w-[50rem] scroll-mt-[100rem]" id="home" ref={ref}>
      <div className="flex items-center justify-center">
        {/* Image */}
        <div className="relative">
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              duration: 0.7,
              delay: 0.1,
            }}
          >
            <Image
              src={profileImage}
              alt="Tugus"
              width={400}
              height={400}
              quality={95}
              className="w-60 h-60 rounded-full border-white border-[0.35rem] object-cover"
            />
          </motion.div>
        </div>
      </div>
      {/* Hero text */}
      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl text-center"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 125,
          duration: 0.7,
          delay: 0.2,
        }}
      >
        <span className="font-bold">Hello, I'm Tugus.</span> I'm a{" "}
        <span className="font-bold">Cloud and Data Enthusiast.</span> I enjoy
        building
        <span className="font-bold"> cloud architectures</span> and
        experimenting with <span className="font-bold">AI tools</span>. I build
        with <span className="underline">Python, AWS, and GCP</span>.
      </motion.h1>
      <motion.div
        className="flex sm:flex-row flex-col items-center gap-4 px-4 text-lg font-medium justify-center"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href="#contact"
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact me here{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1" />
        </Link>
        <a
          className="group bg-white text-black px-7 py-3 flex items-center gap-2 rounded-full dark:bg-white/10 dark:text-white/60 outline-none focus:scale-110 hover:scale-110 active:scale-105 border-black/10 transition"
          href="CV_Tugus.pdf"
          download={true}
        >
          Download CV{" "}
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>
        <a
          className="bg-white text-gray-700 p-4 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 border-black/10 dark:bg-white/10 dark:text-white/60 transition"
          href="https://www.linkedin.com/in/tugusav/"
          target="_blank"
        >
          {" "}
          <BsLinkedin />{" "}
        </a>
        <a
          className="bg-white text-gray-700 p-4 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 border-black/10 dark:bg-white/10 dark:text-white/60 transition"
          href="https://github.com/tugusav"
          target="_blank"
        >
          <FaGithub />
        </a>
      </motion.div>
    </section>
  );
}
