"use client";

import { motion, animate, inView } from "motion/react";
import { useEffect, useRef } from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact } from "react-icons/fa";
import {
  SiNextdotjs,
  SiAmazon,
  SiMongodb,
  SiPostgresql,
  SiStripe,
  SiMysql,
  SiNodedotjs,
  SiTailwindcss,
} from "react-icons/si";
import PaystackIcon from "./PaystackIcon";

export default function About() {
  const imageRef = useRef(null);
  const textRef = useRef(null);

  const skills = [
    { icon: <FaHtml5 size={32} />, name: "HTML" },
    { icon: <FaCss3Alt size={32} />, name: "CSS" },
    { icon: <FaJs size={32} />, name: "JavaScript" },
    { icon: <FaReact size={32} />, name: "React" },
    { icon: <SiNextdotjs size={32} />, name: "Next.js" },
    { icon: <SiAmazon size={32} />, name: "AWS" },
    { icon: <SiMongodb size={32} />, name: "MongoDB" },
    { icon: <SiPostgresql size={32} />, name: "PostgrSQL" },
    { icon: <SiStripe size={32} />, name: "Stripe" },
    { icon: <SiMysql size={32} />, name: "MysQL" },
    { icon: <SiNodedotjs size={32} />, name: "Node" },
    { icon: <PaystackIcon size={32} />, name: "Paystack" },
    { icon: <SiTailwindcss size={32} />, name: "TailwindCSS" },
  ];

  // Animate when image enters viewport
  useEffect(() => {
    const el = imageRef.current;
    if (el) {
      const stop = inView(el, (element, entry) => {
        if (entry.isIntersecting) {
          animate(element, { opacity: [0, 1], y: [20, 0] }, { duration: 0.6 });
          stop(); // <- stops observing after first run
        }
      });
    }
  }, []);

  // Animate when text block enters viewport
  useEffect(() => {
    const el = textRef.current;
    if (el) {
      const stop = inView(el, (element, entry) => {
        if (entry.isIntersecting) {
          animate(
            element,
            { opacity: [0, 1], y: [20, 0] },
            { duration: 0.6, delay: 0.2 }
          );
          stop(); // stop observing after first animation
        }
      });
    }
  }, []);

  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* Image block */}
        <motion.div
          ref={imageRef}
          initial={{ opacity: 0, y: 20 }}
          className="relative flex justify-center"
        >
          <div className="absolute inset-0 rounded-full bg-[#D8ECF8] blur-2xl opacity-20 animate-pulse" />
          <img
            src="/assets/me.jpeg"
            alt="Chizoba"
            className="relative z-10 w-64 h-64 rounded-full object-cover border-4 border-[#D8ECF8] hover:-translate-y-2 transition-transform duration-300"
          />
        </motion.div>

        {/* Text + skills */}
        <motion.div ref={textRef} initial={{ opacity: 0, y: 20 }}>
          <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#D8ECF8] to-[#7ab8eb]">
            About Me
          </h2>
          <p className="text-lg mb-8 leading-relaxed">
            I'm a passionate developer with expertise in creating immersive web
            experiences. With 3 years in the industry, I blend technical skills
            with creative vision to build applications that are both functional
            and visually stunning.
          </p>

          <div className="flex flex-wrap gap-4">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                ref={(el) => {
                  if (el) {
                    const stop = inView(el, (element, entry) => {
                      if (entry.isIntersecting) {
                        animate(
                          element,
                          { opacity: [0, 1], x: [-20, 0] },
                          { duration: 0.4, delay: 0.1 * index }
                        );
                        stop(); // stop observing after first animation
                      }
                    });
                  }
                }}
                initial={{ opacity: 0, x: -20 }}
                className="flex flex-col items-center p-4 rounded-lg bg-[#ffffff08] hover:bg-[#D8ECF810] transition-colors"
              >
                {skill.icon}
                <span className="mt-2 text-sm">{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
