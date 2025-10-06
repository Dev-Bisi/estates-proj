import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div
      className="flex flex-col items-center justify-center container mx-auto p-14 md:px-20 lg:px-32 w-full overflow-hidden"
      id="About"
    >
      {/* Title Section */}
      <motion.h1
        className="text-2xl sm:text-4xl font-bold mb-2"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        About{" "}
        <span className="underline underline-offset-4 decoration-1 font-light">
          Our Brand
        </span>
      </motion.h1>

      <motion.p
        className="text-gray-500 max-w-80 text-center mb-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        Passionate About Properties, Dedicated to Your Vision
      </motion.p>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row items-center md:items-start md:gap-20">
        {/* Image Section */}
        <motion.img
          alt="logo"
          src="/image3.jpg"
          className="w-full sm:w-50 max-w-lg rounded-bl-full shadow-lg"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />

        {/* Text + Stats Section */}
        <motion.div
          className="flex flex-col items-center md:items-start mt-10 text-gray-600"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
        >
          {/* Stats Grid */}
          <div className="grid grid-cols-3 gap-6 md:gap-10 w-full 2xl:pr-28">
            {[
              { value: "10+", label: "Years Of Excellence" },
              { value: "12+", label: "Projects Completed" },
              { value: "20+", label: "Mn. Sq. Ft. Delivered" },
              { value: "25+", label: "Ongoing Projects" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.7 }}
                className="text-center md:text-left"
              >
                <p className="text-4xl font-semibold text-gray-800">
                  {stat.value}
                </p>
                <p>{stat.label}</p>
              </motion.div>
            ))}
          </div>

          {/* Description */}
          <motion.p
            className="my-10 max-w-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
            blanditiis obcaecati cupiditate excepturi aperiam, et sapiente nihil
            minus molestiae dolore magni dolorum totam esse pariatur nam iste,
            ea quam ex.
          </motion.p>

          {/* Button */}
          <motion.button
            className="bg-blue-600 text-white px-8 py-2 rounded hover:bg-blue-700 transition duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Learn More
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default About;