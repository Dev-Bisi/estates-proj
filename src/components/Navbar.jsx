import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  useEffect(() => {
    document.body.style.overflow = showMobileMenu ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [showMobileMenu]);

  // Animation Variants
  const navItemVariant = {
    hidden: { opacity: 0, y: -10 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
    }),
  };

  const mobileMenuVariant = {
    hidden: { x: "100%" },
    visible: { x: 0, transition: { duration: 0.5, ease: "easeInOut" } },
    exit: { x: "100%", transition: { duration: 0.4 } },
  };

  return (
    <motion.div
      className="absolute top-0 left-0 w-full z-20"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="container mx-auto flex justify-between items-center py-4 px-6 md:px lg:px-32 bg-transparent">
        {/* Logo */}
        <motion.img
          alt="logo"
          src="/reactLogo.jpg"
          className="object-cover w-14 h-14 rounded-full shadow-md"
          initial={{ rotate: -15, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        />

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-white font-medium">
          {["Home", "About", "Projects", "Testimonials"].map((item, i) => (
            <motion.a
              key={item}
              href={`#${item}`}
              custom={i}
              variants={navItemVariant}
              initial="hidden"
              animate="visible"
              className="cursor-pointer hover:underline hover:decoration-white hover:decoration-2 transition-all duration-500 ease-in-out"
            >
              {item}
            </motion.a>
          ))}
        </ul>

        {/* Desktop Button */}
        <motion.button
          className="hidden md:block bg-white px-8 py-2 rounded-full text-black font-semibold hover:bg-blue-500 hover:text-white transition-all duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Sign Up
        </motion.button>

        {/* Mobile Menu Button */}
        <motion.img
          onClick={() => setShowMobileMenu(true)}
          src="/react.svg"
          className="md:hidden w-7 cursor-pointer"
          alt="menu"
          whileHover={{ rotate: 90 }}
          transition={{ duration: 0.3 }}
        />
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {showMobileMenu && (
          <motion.div
            className="fixed top-0 right-0 bottom-0 w-full bg-white flex flex-col justify-center items-center shadow-2xl md:hidden"
            variants={mobileMenuVariant}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <motion.img
              onClick={() => setShowMobileMenu(false)}
              src="/react.svg"
              className="absolute top-6 right-6 w-6 cursor-pointer"
              alt="close"
              whileHover={{ rotate: 90 }}
              transition={{ duration: 0.3 }}
            />

            <ul className="flex flex-col items-center gap-6 text-gray-800 text-lg font-semibold">
              {["Home", "About", "Projects", "Testimonials"].map((item, i) => (
                <motion.a
                  key={item}
                  href={`#${item}`}
                  onClick={() => setShowMobileMenu(false)}
                  custom={i}
                  variants={navItemVariant}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  className="hover:text-blue-600 transition-colors duration-300"
                >
                  {item}
                </motion.a>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Navbar;