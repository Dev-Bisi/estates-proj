import React from "react";
import { motion } from "framer-motion";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <div
      className="relative min-h-screen mb-4 bg-cover bg-center flex items-center justify-center w-full overflow-hidden"
      style={{ backgroundImage: "url('/image4.jpg')" }}
      id="Header"
    >
      {/* Background overlay */}
      <motion.div
        className="bg-black opacity-40 w-full h-screen absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ duration: 1 }}
      />

      {/* Navbar with slight slide-down */}
      <motion.div
        className="absolute top-0 left-0 right-0 z-30"
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <Navbar />
      </motion.div>

      {/* Header Content */}
      <motion.div
        className="container text-center mx-auto py-4 px-6 md:px-20 lg:px-32 text-white z-20"
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        {/* Heading */}
        <motion.h2
          className="text-5xl sm:text-6xl md:text-[82px] inline-block max-w-3xl font-semibold pt-20"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          Explore homes that fit your dreams
        </motion.h2>

        {/* Buttons */}
        <motion.div
          className="space-x-6 mt-16"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
        >
          <motion.a
            href="#Project"
            className="border border-white px-8 py-3 rounded hover:bg-white hover:text-black transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Projects
          </motion.a>

          <motion.a
            href="#Contact"
            className="bg-blue-500 px-8 py-3 rounded hover:bg-blue-600 transition-all duration-300"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact us
          </motion.a>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Header;