import React from "react";
import { FaStar } from "react-icons/fa";
import { motion } from "framer-motion";

const testimonials = [
  {
    id: 1,
    name: "Mr. Praise Larva",
    image: "/bukky 4.jpg",
    feedback:
      "Living in Harmony Estate has been a dream come true. The environment is peaceful and well-secured.",
  },
  {
    id: 2,
    name: "Mr. Saheed Larva",
    image: "/bukky 4.jpg",
    feedback:
      "I love the clean streets and constant power supply. The estate management is very responsive too.",
  },
  {
    id: 4,
    name: "Engr. Peculiar",
    image: "/bukky 4.jpg",
    feedback:
      "Buying property in this estate was the best investment decision I ever made. Highly recommended!",
  },
];

const Testifiers = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.8,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section
      id="Testimonials"
      className="py-16 px-6 bg-gradient-to-b from-white to-gray-50 overflow-hidden"
    >
      {/* Section Header */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h1 className="text-2xl sm:text-4xl font-bold mb-3">
          Customers{" "}
          <span className="underline underline-offset-4 decoration-1 font-light">
            Testimonials
          </span>
        </h1>
        <p className="text-gray-500">
          Real Stories, From Those Who <br /> Found Home With Us
        </p>
      </motion.div>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 container mx-auto">
        {testimonials.map((testimonial, i) => (
          <motion.div
            key={testimonial.id}
            className="bg-white rounded-2xl shadow-md hover:shadow-lg p-8 text-center border border-gray-100 hover:bg-amber-50 transition-all duration-500 ease-in-out"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            custom={i}
            viewport={{ once: true }}
            whileHover={{ scale: 1.03, y: -5 }}
          >
            {/* Profile Image */}
            <motion.img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-24 h-24 object-cover rounded-full mx-auto mb-4 shadow-md"
              whileHover={{ rotate: 2 }}
              transition={{ duration: 0.3 }}
            />

            {/* Name */}
            <motion.h3
              className="text-xl font-semibold text-gray-800 mb-2"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
            >
              {testimonial.name}
            </motion.h3>

            {/* Feedback */}
            <p className="text-gray-600 mb-4 italic leading-relaxed">
              “{testimonial.feedback}”
            </p>

            {/* Stars */}
            <motion.div
              className="flex justify-center text-yellow-500"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 + i * 0.2 }}
            >
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} />
              ))}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testifiers;