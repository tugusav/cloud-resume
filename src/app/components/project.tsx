"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { ProjectProps } from "../lib/types";

export default function Project({
  title,
  description,
  date,
  tags,
  link,
}: ProjectProps) {
  return (
    <motion.div 
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
    >
      <Link href={link} target="_blank">
        <section
          className="flex flex-col mb-8 bg-gray-100 max-w-[42rem] px-8 py-5 border border-black/5 relative rounded-xl shadow-lg 
          focus:scale-110 hover:scale-110 hover:bg-gray-150 active:scale-105 dark:bg-white/10 dark:hover:bg-white/20 transition
          dark:text-white"
        >
          <h3 className="text-exl font-semibold">{title}</h3>
          <p className="text-gray-500 mt-2 leading-relaxed">{date}</p>
          <p className="text-gray-700 mt-2 leading-relaxed dark:text-white/70">{description}</p>
          <ul className="flex flex-wrap mt-4 mb-4 gap-2">
            {tags.map((tag, index) => (
              <li
                className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase rounded-full text-white"
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
        </section>
      </Link>
    </motion.div>
  );
}
