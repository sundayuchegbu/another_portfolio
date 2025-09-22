"use client";

import { motion } from "framer-motion";
import { FaExternalLinkSquareAlt, FaTimes } from "react-icons/fa";
import { useState } from "react";

type GalleryItem = {
  id: number;
  title: string;
  image: string;
  category: string;
};

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    title: "Cyber Interface",
    image: "/assets/cyber.jpg",
    category: "UI Design",
  },
  {
    id: 2,
    title: "Neon Grid",
    image: "/assets/gallary2.jpg",
    category: "3D Art",
  },
  {
    id: 3,
    title: "Data Flow",
    image: "/assets/gallery3.jpg",
    category: "Visualization",
  },
  {
    id: 4,
    title: "Quantum Nodes",
    image: "/assets/gallery3.jpeg",
    category: "Concept",
  },
  //   {
  //     id: 5,
  //     title: "Hologram UI",
  //     image: "/assets/gallery3.jpeg",
  //     category: "Prototype",
  //   },
];

export default function Gallery() {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  return (
    <section id="gallery" className="py-20 px-12 overflow-hidden">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-[#D8ECF8] to-[#7ab8eb]"
        >
          Design Gallery
        </motion.h2>

        <div className="relative">
          <div className="flex overflow-x-auto pb-8 -mx-6 px-6 scrollbar-hide">
            <div className="flex gap-6">
              {galleryItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className="flex-shrink-0 w-80 h-96 relative group cursor-pointer"
                  onClick={() => setSelectedItem(item)}
                >
                  <div className="absolute inset-0 rounded-2xl bg-[#D8ECF8] opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                  <div className="absolute inset-0 rounded-2xl border border-[#D8ECF840] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover rounded-2xl"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black to-transparent rounded-b-2xl">
                    <h3 className="text-xl font-bold">{item.title}</h3>
                    <p className="text-sm text-[#D8ECF8]">{item.category}</p>
                  </div>
                  <div className="absolute top-4 right-4 bg-[#ffffff20] backdrop-blur-sm p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <FaExternalLinkSquareAlt size={20} />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Fullscreen Preview */}
        {selectedItem && (
          <div className="fixed inset-0 bg-[#05060fcc] z-50 flex items-center justify-center p-6 backdrop-blur-md">
            <div className="relative max-w-6xl w-full max-h-screen">
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute -top-12 right-0 p-2 rounded-full bg-[#ffffff20] hover:bg-[#ffffff30] transition-colors"
              >
                <FaTimes size={24} />
              </button>
              <img
                src={selectedItem.image}
                alt={selectedItem.title}
                className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
              />
              <div className="mt-4 text-center">
                <h3 className="text-2xl font-bold">{selectedItem.title}</h3>
                <p className="text-[#D8ECF8]">{selectedItem.category}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
