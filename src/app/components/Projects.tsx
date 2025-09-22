"use client";

// components/Projects.tsx
import { motion, animate, inView } from "motion/react";
import { useEffect, useRef } from "react";
import { FaArrowRight, FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "React Ecommerce Store",
    description: "An Ecoommerce application with stripe payment",
    tech: ["React", "stripe", "Node", "Mongodb", "Redux"],
    image: "/assets/deluxe.jpeg",
    link: "https://techwithchizzy-ecommerce.onrender.com/",
  },
  {
    title: "Avante Consulting Solution",
    description: "Avante Consulting Solution is a consulting firm",
    tech: ["React", "Node.js", "Tailwind CSS", "Cloudinary"],
    image: "/assets/image.png",
    link: "https://avante-cs.com/",
  },
  {
    title: "Hook banking Appication",
    description:
      "Hook Banking application showcases my skilss in design and responsive application",
    tech: ["React", "Tailwind CSS", "Figma"],
    image: "/assets/project.png",
    link: "https://blue-app.vercel.app/",
  },
  {
    title: "Ticketr",
    description:
      "An event management application, for sales an purchase of event tickets",
    tech: ["Nextjs", "Tailwind CSS", "Stripe Connect"],
    image: "/assets/real.jpeg",
    link: "https://event-ticket-mu.vercel.app/",
  },
];

export default function Projects() {
  const headingRef = useRef<HTMLHeadingElement | null>(null);

  useEffect(() => {
    if (headingRef.current) {
      const stop = inView(headingRef.current, (el, entry) => {
        if (entry.isIntersecting) {
          animate(el, { opacity: [0, 1], y: [20, 0] }, { duration: 0.6 });
          stop();
        }
      });
    }
  }, []);

  return (
    <section
      id="projects"
      className="py-20 px-6 bg-gradient-to-b from-[#05060f] to-[#05060fcc]"
    >
      <div className="container mx-auto">
        {/* Heading */}
        <motion.h2
          ref={headingRef}
          initial={{ opacity: 0, y: 20 }}
          className="text-4xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-[#D8ECF8] to-[#7ab8eb]"
        >
          Featured Projects
        </motion.h2>

        <div className="space-y-32">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              ref={(el) => {
                if (el) {
                  const stop = inView(el, (element, entry) => {
                    if (entry.isIntersecting) {
                      animate(
                        element,
                        {
                          opacity: [0, 1],
                          x: [index % 2 === 0 ? -100 : 100, 0],
                        },
                        { duration: 0.8 }
                      );
                      stop();
                    }
                  });
                }
              }}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              className={`flex flex-col ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } gap-12 items-center`}
            >
              {/* Image */}
              <div className="md:w-1/2 relative group">
                <div className="absolute inset-0 rounded-xl bg-[#D8ECF8] opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500" />
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-auto rounded-xl border border-[#ffffff15] shadow-2xl shadow-[#D8ECF810] transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Text */}
              <div
                className={`md:w-1/2 text-center md:text-left ${
                  index % 2 !== 0 ? "md:text-right" : ""
                }`}
              >
                <h3 className="text-3xl font-bold mb-4">{project.title}</h3>
                <p className="text-lg mb-6 text-[#D8ECF8]">
                  {project.description}
                </p>

                {/* Tech stack badges */}
                <div
                  className={`inline-flex flex-wrap gap-3 mb-8 ${
                    index % 2 === 0
                      ? "justify-start text-left"
                      : "justify-end text-right"
                  } w-full`}
                >
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full bg-[#ffffff08] text-sm border border-[#D8ECF820]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div
                  className={`flex gap-4 justify-center ${
                    index % 2 === 0 ? "md:justify-start" : "md:justify-end"
                  }`}
                >
                  <motion.a
                    href={project.link}
                    className={`px-6 py-3 rounded-lg bg-gradient-to-r from-[#D8ECF8] to-[#7ab8eb] text-[#05060f] font-medium flex items-center gap-2 ${
                      index % 2 !== 0 ? "flex-row-reverse" : ""
                    }`}
                    onMouseEnter={(e) =>
                      animate(
                        e.currentTarget,
                        { scale: 1.05 },
                        { duration: 0.2 }
                      )
                    }
                    onMouseLeave={(e) =>
                      animate(e.currentTarget, { scale: 1 }, { duration: 0.2 })
                    }
                    onMouseDown={(e) =>
                      animate(
                        e.currentTarget,
                        { scale: 0.95 },
                        { duration: 0.1 }
                      )
                    }
                    onMouseUp={(e) =>
                      animate(
                        e.currentTarget,
                        { scale: 1.05 },
                        { duration: 0.1 }
                      )
                    }
                  >
                    View Project <FaArrowRight size={18} />
                  </motion.a>

                  <motion.a
                    href="#"
                    className={`px-6 py-3 rounded-lg bg-[#ffffff08] border border-[#D8ECF820] flex items-center gap-2 ${
                      index % 2 !== 0 ? "flex-row-reverse" : ""
                    }`}
                    onMouseEnter={(e) =>
                      animate(
                        e.currentTarget,
                        { scale: 1.05 },
                        { duration: 0.2 }
                      )
                    }
                    onMouseLeave={(e) =>
                      animate(e.currentTarget, { scale: 1 }, { duration: 0.2 })
                    }
                    onMouseDown={(e) =>
                      animate(
                        e.currentTarget,
                        { scale: 0.95 },
                        { duration: 0.1 }
                      )
                    }
                    onMouseUp={(e) =>
                      animate(
                        e.currentTarget,
                        { scale: 1.05 },
                        { duration: 0.1 }
                      )
                    }
                  >
                    <FaGithub size={18} /> Code
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
