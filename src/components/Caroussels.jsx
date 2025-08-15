import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

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

  const openImage = (index) => {
    setSelectedIndex(index);
  };

  const closeImage = () => {
    setSelectedIndex(null);
  };

  const showPrev = () => {
    setSelectedIndex((prev) =>
      prev === 0 ? cards.length - 1 : prev - 1
    );
  };

  const showNext = () => {
    setSelectedIndex((prev) =>
      prev === cards.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="w-full" id="Projects">
      <h1 className="text-2xl sm:text-4xl text-center font-bold mb-2">
        Projects{" "}
        <span className="underline underline-offset-4 decoration-1 font-light">
          Completed
        </span>
      </h1>
      <p className="text-gray-500 text-center mb-8">
        Crafting Spaces, Building Legacies -<br /> explore our Portfolio
      </p>

      
      <div className="flex justify-end items-center mb-8">
        <button
            className={`p-3 rounded mr-2 ${
              startIndex === 0 ? "bg-gray-200 cursor-not-allowed" : "bg-gray-400"
            }`}
            aria-label="Previous Project"
            onClick={handlePrev}
            disabled={startIndex === 0}
          >
            <FaArrowLeft />
        </button>

        <button
        className={`p-3 rounded ${
          startIndex + 4 >= cards.length ? "bg-gray-200 cursor-not-allowed" : "bg-gray-400"
        }`}
        aria-label="Next Project"
        onClick={handleNext}
        disabled={startIndex + 4 >= cards.length}
      >
        <FaArrowRight />
      </button>
      </div>

      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 overflow-hidden">
        {visibleCards.map((card, idx) => (
          <div  key={card.id} className="bg-white rounded-2xl shadow-md cursor-pointer">
            <img src={card.img}  alt={card.title} className="w-full h-100 object-cover rounded-2xl"  onClick={() => openImage(startIndex + idx)}  />           
            <div className="p-4 text-center">
              <h2 className="text-lg font-semibold text-gray-800"> {card.title} </h2>       
            </div>
          </div>
        ))}
      </div>

      
      {selectedIndex !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
          <div className="relative max-w-4xl w-full flex items-center">
           
            <button className="absolute left-4 text-white text-4xl font-bold bg-black bg-opacity-50 px-3 py-1 rounded-full hover:bg-opacity-80"  onClick={showPrev} >
              &#10094;
            </button>

            
            <button className="absolute top-4 right-4 text-white text-3xl font-bold"  onClick={closeImage}  aria-label="Close">
              &times;
            </button>

           
            <img src={cards[selectedIndex].img}  alt={cards[selectedIndex].title} className="w-full max-h-[80vh] object-contain rounded"  />
            
           
            <button className="absolute right-4 text-white text-4xl font-bold bg-black bg-opacity-50 px-3 py-1 rounded-full hover:bg-opacity-80" onClick={showNext} >
              &#10095;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Caroussels;