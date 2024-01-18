'use client';
import { motion } from "framer-motion";
import React from "react";
import SectionHeading from "./section_heading";
import { useSectionInView } from "../lib/hooks";

export default function ContactMe() {
  const { ref } = useSectionInView("Contact", 0.5);
  return (
    <motion.section
      id="contact"
      className="scroll-mt-28 mb-20 sm:mb-40 w-[min(100%, 38rem)] text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      ref={ref}
    >
      <SectionHeading>Contact me!</SectionHeading>
      <p className="text-center text-gray-500 -mt-1 dark:text-white/80  ">
        I'm actively looking for new opportunities, so my inbox is always open.
        <br />
        Please contact me directly at{" "}
        <a className="underline" href="mailto:tugus.ibram@gmail.com">
          tugus.ibram@gmail.com
        </a> <br /> Whether you have a question or just want to
        say hi, I'll try my best to get back to you!
      </p>
    </motion.section>
  );
}
