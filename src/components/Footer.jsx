import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <div
      className="pt-10 px-4 md:px-20 lg:px-32 bg-gray-900 w-full overflow-hidden"
      id="Footer"
    >
      {/* Container with fade-in animation */}
      <motion.div
        className="container mx-auto flex flex-col md:flex-row justify-between items-start"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        {/* Logo + Description */}
        <motion.div
          className="w-full md:w-1/3 mb-20 md:mb-0"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.img
            alt="logo"
            src="/image3.jpg"
            className="w-24 sm:w-32 max-w-lg rounded-bl-full shadow-lg hover:scale-105 transition-transform duration-300"
            whileHover={{ rotate: 3 }}
          />
          <p className="text-gray-400 mt-4 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
            architecto iure magnam perferendis totam vero hic rem voluptatum
            incidunt, sunt reiciendis ea omnis quasi blanditiis modi natus,
            accusamus autem adipisci.
          </p>
        </motion.div>

        {/* Company Links */}
        <motion.div
          className="w-full md:w-1/5 mb-8 md:mb-0"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <h3 className="text-white text-lg font-bold mb-4">Company</h3>
          <ul className="flex flex-col gap-2 text-gray-400">
            {["Home", "About Us", "Contact Us", "Privacy"].map((item, i) => (
              <motion.a
                key={i}
                href={`#${item.replace(/\s/g, "")}`}
                className="hover:text-white transition-colors"
                whileHover={{ x: 5 }}
              >
                {item}
              </motion.a>
            ))}
          </ul>
        </motion.div>

        {/* Newsletter */}
        <motion.div
          className="w-full md:w-1/3"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.9 }}
        >
          <h3 className="text-white text-lg font-bold mb-4">
            Subscribe to our newsletter
          </h3>
          <p className="text-gray-400 mb-4 max-w-80">
            The latest news, articles, and resources, sent to your inbox weekly.
          </p>
          <motion.div
            className="flex gap-2"
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <input
              type="email"
              placeholder="Enter your email"
              className="p-2 rounded bg-gray-800 text-gray-400 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full md:w-auto"
            />
            <motion.button
              className="py-2 px-4 rounded bg-blue-500 text-white hover:bg-blue-600 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Subscribe
            </motion.button>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Footer Bottom Text */}
      <motion.div
        className="border-t border-gray-700 py-4 mt-10 text-center text-gray-500"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        Copyright 2025 <span className="text-blue-400">OGTechHub</span>. All
        Rights Reserved.
      </motion.div>
    </div>
  );
};

export default Footer;