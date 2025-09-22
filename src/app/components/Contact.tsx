"use client";

// components/Contact.js
import { motion } from "framer-motion";
import { useState } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaEnvelope,
} from "react-icons/fa";
import emailjs from "emailjs-com";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        "service_dftw55u", // from EmailJS
        "template_a8v5yxj", // from EmailJS
        formData, // must match template fields
        "K6JhncxtQYLjAz9Zl" // from EmailJS
      );

      setSubmitSuccess(true);
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setSubmitSuccess(false), 3000);
    } catch (err) {
      console.error("Failed to send:", err);
      alert("Something went wrong. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialLinks = [
    { icon: <FaGithub size={28} />, url: "https://github.com/sundayuchegbu" },
    {
      icon: <FaLinkedin size={28} />,
      url: "https://www.linkedin.com/in/chizoba-uchegbu-1525a51bb/",
    },
    { icon: <FaTwitter size={28} />, url: "https://x.com/uchegbu_chizoba" },
    {
      icon: <FaInstagram size={28} />,
      url: "https://www.instagram.com/deluxebluz/",
    },
    { icon: <FaEnvelope size={28} />, url: "mailto:techwithchizzy@gmail.com" },
  ];

  return (
    <section
      id="contact"
      className="py-20 px-6 bg-gradient-to-b from-[#05060fcc] to-[#05060f]"
    >
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-[#D8ECF8] to-[#7ab8eb]"
        >
          Get In Touch
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-bold">Let&apos;s collaborate</h3>
            <p className="text-lg text-[#D8ECF8]">
              Have a project in mind or want to discuss potential opportunities?
              Feel free to reach out through any of these channels.
            </p>

            <div className="flex flex-wrap gap-6">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 rounded-full bg-[#ffffff08] border border-[#D8ECF820] flex items-center justify-center hover:bg-[#D8ECF810] transition-colors relative group"
                >
                  {social.icon}
                  <div className="absolute inset-0 rounded-full bg-[#D8ECF8] opacity-0 group-hover:opacity-10 blur-md transition-opacity duration-300" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="bg-[#ffffff05] border border-[#D8ECF815] rounded-2xl p-8 backdrop-blur-sm relative overflow-hidden"
          >
            <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-[#D8ECF8] opacity-5 blur-3xl" />
            <div className="absolute -bottom-20 -left-20 w-40 h-40 rounded-full bg-[#7ab8eb] opacity-5 blur-3xl" />

            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                viewport={{ once: true }}
                className="space-y-1"
              >
                <label htmlFor="name" className="block text-sm font-medium">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-lg bg-[#ffffff08] border border-[#D8ECF820] focus:border-[#D8ECF8] focus:outline-none focus:ring-1 focus:ring-[#D8ECF840] transition-all"
                  required
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                viewport={{ once: true }}
                className="space-y-1"
              >
                <label htmlFor="email" className="block text-sm font-medium">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-lg bg-[#ffffff08] border border-[#D8ECF820] focus:border-[#D8ECF8] focus:outline-none focus:ring-1 focus:ring-[#D8ECF840] transition-all"
                  required
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 }}
                viewport={{ once: true }}
                className="space-y-1"
              >
                <label htmlFor="message" className="block text-sm font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5} // ✅ number, not string
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-lg bg-[#ffffff08] border border-[#D8ECF820] 
             focus:border-[#D8ECF8] focus:outline-none focus:ring-1 focus:ring-[#D8ECF840] 
             transition-all"
                  required
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.4 }}
                viewport={{ once: true }}
                className="pt-2"
              >
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  animate={isSubmitting ? { scale: [1, 1.05, 1] } : {}}
                  transition={
                    isSubmitting ? { repeat: Infinity, duration: 0.8 } : {}
                  }
                  className="w-full px-6 py-4 rounded-lg bg-gradient-to-r from-[#D8ECF8] to-[#7ab8eb] text-[#05060f] font-bold flex items-center justify-center gap-2 relative overflow-hidden"
                >
                  <span className="relative z-10">
                    {isSubmitting
                      ? "Sending..."
                      : submitSuccess
                      ? "Message Sent!"
                      : "Send Message"}
                  </span>
                  <div className="absolute inset-0 bg-white opacity-0 hover:opacity-10 transition-opacity" />
                </motion.button>
              </motion.div>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
