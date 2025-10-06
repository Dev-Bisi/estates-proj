import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const Caroussels = () => {
  const cards = [
    { id: 1, img: "/image3.jpg", title: "Modern Villa" },
    { id: 2, img: "/image5.jpg", title: "Family Bungalow" },
    { id: 3, img: "/image6.jpg", title: "City Apartment" },
    { id: 4, img: "/image7.jpg", title: "Cozy Cottage" },
    { id: 5, img: "/image3.jpg", title: "Luxury Mansion" },
    { id: 6, img: "/image2.jpg", title: "Beach House" },
    { id: 7, img: "/image1.jpg", title: "Duplex House" },
  ];

  const [startIndex, setStartIndex] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(null);

  const visibleCards = cards.slice(startIndex, startIndex + 4);

  const handleNext = () => {
    if (startIndex + 4 < cards.length) {
      setStartIndex(startIndex + 1);
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  const openImage = (index) => setSelectedIndex(index);
  const closeImage = () => setSelectedIndex(null);
  const showPrev = () =>
    setSelectedIndex((prev) => (prev === 0 ? cards.length - 1 : prev - 1));
  const showNext = () =>
    setSelectedIndex((prev) => (prev === cards.length - 1 ? 0 : prev + 1));

  return (
    <div className="w-full" id="Projects">
      {/* Title */}
      <motion.h1
        className="text-2xl sm:text-4xl text-center font-bold mb-2"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Projects{" "}
        <span className="underline underline-offset-4 decoration-1 font-light">
          Completed
        </span>
      </motion.h1>

      <motion.p
        className="text-gray-500 text-center mb-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        Crafting Spaces, Building Legacies —
        <br /> explore our Portfolio
      </motion.p>

      {/* Navigation Arrows */}
      <div className="flex justify-end items-center mb-8">
        <button
          className={`p-3 rounded mr-2 ${
            startIndex === 0
              ? "bg-gray-200 cursor-not-allowed"
              : "bg-gray-400 hover:bg-gray-500"
          } transition`}
          aria-label="Previous Project"
          onClick={handlePrev}
          disabled={startIndex === 0}
        >
          <FaArrowLeft />
        </button>

        <button
          className={`p-3 rounded ${
            startIndex + 4 >= cards.length
              ? "bg-gray-200 cursor-not-allowed"
              : "bg-gray-400 hover:bg-gray-500"
          } transition`}
          aria-label="Next Project"
          onClick={handleNext}
          disabled={startIndex + 4 >= cards.length}
        >
          <FaArrowRight />
        </button>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 overflow-hidden">
        <AnimatePresence mode="wait">
          {visibleCards.map((card, idx) => (
            <motion.div
              key={card.id}
              className="bg-white rounded-2xl shadow-md cursor-pointer hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ scale: 1.03 }}
              onClick={() => openImage(startIndex + idx)}
            >
              <motion.img
                src={card.img}
                alt={card.title}
                className="w-full h-72 object-cover rounded-2xl"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
              <div className="p-4 text-center">
                <h2 className="text-lg font-semibold text-gray-800">
                  {card.title}
                </h2>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Modal (Lightbox) */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="relative max-w-4xl w-full flex items-center">
              {/* Prev Button */}
              <button
                className="absolute left-4 text-white text-4xl font-bold bg-black bg-opacity-50 px-3 py-1 rounded-full hover:bg-opacity-80"
                onClick={showPrev}
              >
                &#10094;
              </button>

              {/* Close Button */}
              <button
                className="absolute top-4 right-4 text-white text-3xl font-bold hover:text-gray-300"
                onClick={closeImage}
                aria-label="Close"
              >
                &times;
              </button>

              {/* Animated Image */}
              <motion.img
                key={cards[selectedIndex].id}
                src={cards[selectedIndex].img}
                alt={cards[selectedIndex].title}
                className="w-full max-h-[80vh] object-contain rounded-xl"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.5 }}
              />

              {/* Next Button */}
              <button
                className="absolute right-4 text-white text-4xl font-bold bg-black bg-opacity-50 px-3 py-1 rounded-full hover:bg-opacity-80"
                onClick={showNext}
              >
                &#10095;
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Caroussels;