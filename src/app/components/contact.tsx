"use client";
import React from "react";
import SectionHeading from "./section_heading";
import { FaPaperPlane } from "react-icons/fa";
import { motion } from "framer-motion";
import { useSectionInView } from "../lib/hooks";
import { sendEmail } from "../helpers/send_email";

export default function Contact() {
  const { ref } = useSectionInView("Contact", 0.5);

  return (
    <motion.section
      id="contact"
      className="mb-20 sm:mb-40 w-[min(100%, 38rem)] text-center"
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
        </a>{" "}
        or fill out the form. <br /> Whether you have a question or just want to
        say hi, I'll try my best to get back to you!
      </p>
      <form
        className="mt-10 flex flex-col dark:text-black"
        action={async(formData) => {
          await sendEmail(formData);
        }}
      >
        <input
          className="h-14 rounded-lg border border-black/10 p-4 dark:bg-white dark:bg-opacity-80 
          dark:focus:bg-opacity-100 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          type="email"
          name="senderEmail"
          placeholder="Your email"
          required
          maxLength={500}
        />
        <textarea
          className="h-52 my-3 rounded-lg border border-black/10 p-4 dark:bg-white dark:bg-opacity-80 
          dark:focus:bg-opacity-100 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          maxLength={5000}
          name="message"
          required
          placeholder="Your message"
        />
        <div className="flex justify-end">
          <button
            type="submit"
            className="group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 active:scale-105 border-black/10 dark:bg-white/80 dark:text-gray-950 dark:bg-opacity-10 transition"
          >
            Submit{" "}
            <FaPaperPlane className="text-xs opacity-70 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
          </button>
        </div>
      </form>
    </motion.section>
  );
}
