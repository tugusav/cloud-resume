"use client";
import React, { use } from "react";
import SectionHeading from "./section_heading";
import { experiencesData } from "../lib/data";
import { useSectionInView } from "../lib/hooks";
import { motion } from "framer-motion";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { useTheme } from "../context/theme-context";

export default function Experiences() {
  const { theme } = useTheme();
  const {ref} = useSectionInView("Experience", 0.5); 
  return (
    <section id="experience" className="scroll-mt-28 mb-28 sm:mb-40" ref={ref}>
      <SectionHeading>My Experiences</SectionHeading>
      <VerticalTimeline lineColor="">
        {experiencesData.map((item, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              visible={true}
              contentStyle={{
                background: theme === "light" ? "#f3f4f6" : "rgba(255,255,255,0.05)",
                boxShadow: "none",
                border: "1px solid rgba(0, 0, 0, 0.05)",
                textAlign: "left",
                padding: "1.3rem 2rem",
              }}
              contentArrowStyle={{
                borderRight: theme === "light" ? "0.4rem solid #9ca3af" : "0.4rem solid rgba(255,255,255,0.05)"
              }}
              date={item.date}
              icon={item.icon}
              iconStyle={{
                background: theme === "light" ? "white": "rgba(255,255,255,0.05)",
                fontSize: "1.5rem",
              }}
            >
              <h3 className="font-semibold capitalize dark:text-white/50">{item.title}</h3>
              <p className="font-normal !mt-0 text-gray-700 dark:text-white/30">{item.company}</p>
              <p className="text-gray-500 dark:text-white/80">{item.description}</p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
}
