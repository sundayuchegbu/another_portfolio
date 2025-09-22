"use client";

// components/Layout.js
import { useState, useEffect } from "react";
import Head from "next/head";
import {
  HouseIcon,
  UserIcon,
  BriefcaseIcon,
  ImageIcon,
  ChatsIcon,
  EnvelopeIcon,
} from "@phosphor-icons/react";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Head>
        <title>Chizoba | Developer Portfolio</title>
        <meta name="description" content="Futuristic portfolio of Chizoba" />
      </Head>

      {/* Sticky Blurred Header */}
      <header
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#05060f99] backdrop-blur-md py-2"
            : "bg-transparent py-4"
        }`}
      >
        <nav className="container mx-auto px-6 flex justify-between items-center">
          <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#D8ECF8] to-[#7ab8eb]">
            Chizoba
          </span>
          <div className="hidden md:flex space-x-8">
            {[
              "Home",
              "About",
              "Projects",
              "Gallery",
              // "Testimonials",
              "Contact",
            ].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-[#D8ECF8] hover:text-white transition-colors flex items-center gap-2"
              >
                {item === "Home" && <HouseIcon size={18} />}
                {item === "About" && <UserIcon size={18} />}
                {item === "Projects" && <BriefcaseIcon size={18} />}
                {item === "Gallery" && <ImageIcon size={18} />}
                {/* {item === "Testimonials" && <ChatsIcon size={18} />} */}
                {item === "Contact" && <EnvelopeIcon size={18} />}
                {item}
              </a>
            ))}
          </div>
        </nav>
      </header>

      <main className="bg-[#05060f] text-white">{children}</main>

      <footer className="bg-[#05060f] border-t border-[#ffffff10] py-8">
        <div className="container mx-auto px-6 text-center text-[#D8ECF8]">
          <p>© {new Date().getFullYear()} Chizoba. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}
