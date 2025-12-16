"use client";

import { motion } from "framer-motion";
import { FaExternalLinkSquareAlt, FaTimes } from "react-icons/fa";
import { useState, useEffect } from "react";

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
];

export default function Gallery() {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleItemClick = (item: GalleryItem) => {
    setSelectedItem(item);
    document.body.style.overflow = "hidden";
  };

  const handleClosePreview = () => {
    setSelectedItem(null);
    document.body.style.overflow = "unset";
  };

  return (
    <section
      id="gallery"
      className="py-12 md:py-20 px-4 sm:px-6 md:px-12 overflow-hidden"
    >
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 md:mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-[#D8ECF8] to-[#7ab8eb]"
        >
          Design Gallery
        </motion.h2>

        <div className="relative">
          {/* Mobile Layout - Grid */}
          {isMobile ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
              {galleryItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  className="relative group cursor-pointer rounded-xl overflow-hidden"
                  onClick={() => handleItemClick(item)}
                >
                  <div className="aspect-square relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#D8ECF8]/10 to-[#7ab8eb]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <h3 className="text-lg font-bold text-white mb-1">
                        {item.title}
                      </h3>
                      <p className="text-sm text-[#D8ECF8]">{item.category}</p>
                    </div>

                    <div className="absolute top-3 right-3 bg-white/20 backdrop-blur-sm p-2 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110">
                      <FaExternalLinkSquareAlt
                        size={16}
                        className="text-white"
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            /* Desktop Layout - Horizontal Scroll */
            <div className="relative">
              <div className="overflow-x-auto scrollbar-thin scrollbar-thumb-[#D8ECF8]/30 scrollbar-track-transparent pb-6 md:pb-8 -mx-4 md:-mx-12 px-4 md:px-12">
                <div className="flex gap-4 md:gap-6 min-w-max">
                  {galleryItems.map((item, index) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true, margin: "-100px" }}
                      className="flex-shrink-0 w-72 md:w-80 h-[28rem] md:h-96 relative group cursor-pointer"
                      onClick={() => handleItemClick(item)}
                    >
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#D8ECF8] to-[#7ab8eb] opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
                      <div className="absolute inset-0 rounded-2xl border-2 border-[#D8ECF8]/40 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-[1.02]" />
                      <div className="relative w-full h-full overflow-hidden rounded-2xl">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                        />
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 via-black/50 to-transparent rounded-b-2xl">
                        <h3 className="text-xl font-bold text-white">
                          {item.title}
                        </h3>
                        <p className="text-sm text-[#D8ECF8] mt-1">
                          {item.category}
                        </p>
                      </div>
                      <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm p-3 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110 group-hover:rotate-12">
                        <FaExternalLinkSquareAlt
                          size={20}
                          className="text-white"
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Fullscreen Preview - Mobile Optimized */}
        {selectedItem && (
          <div className="fixed inset-0 bg-[#05060f] z-50 flex items-center justify-center p-4 backdrop-blur-md animate-fadeIn">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-6xl h-full flex flex-col justify-center"
            >
              <button
                onClick={handleClosePreview}
                className="absolute top-4 right-4 md:-top-12 md:right-0 p-3 md:p-2 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-all duration-300 z-10"
                aria-label="Close preview"
              >
                <FaTimes size={isMobile ? 20 : 24} className="text-white" />
              </button>

              <div className="flex-1 overflow-auto flex items-center justify-center py-4">
                <img
                  src={selectedItem.image}
                  alt={selectedItem.title}
                  className="w-auto h-auto max-w-full max-h-[70vh] md:max-h-[80vh] object-contain rounded-lg"
                />
              </div>

              <div className="mt-4 md:mt-6 text-center p-4 bg-gradient-to-r from-white/5 to-transparent rounded-xl">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                  {selectedItem.title}
                </h3>
                <p className="text-[#D8ECF8] text-sm md:text-base">
                  {selectedItem.category}
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </div>

      {/* Custom Scrollbar Styles */}
      <style jsx global>{`
        .scrollbar-thin::-webkit-scrollbar {
          height: 6px;
        }
        .scrollbar-thin::-webkit-scrollbar-track {
          background: transparent;
        }
        .scrollbar-thin::-webkit-scrollbar-thumb {
          background: rgba(216, 236, 248, 0.3);
          border-radius: 3px;
        }
        .scrollbar-thin::-webkit-scrollbar-thumb:hover {
          background: rgba(216, 236, 248, 0.5);
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </section>
  );
}
