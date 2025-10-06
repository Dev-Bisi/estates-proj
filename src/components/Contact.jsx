import React, { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { motion, AnimatePresence } from "framer-motion";

const Contact = () => {
  const [state, handleSubmit] = useForm("xanbvnqv");
  const [showForm, setShowForm] = useState(true);

  return (
    <div
      className="text-center p-6 py-20 w-full overflow-hidden"
      id="Contact"
    >
      {/* Header Section */}
      <motion.h1
        className="text-2xl sm:text-4xl font-bold mb-2"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        Contact{" "}
        <span className="underline underline-offset-4 decoration-1 font-light">
          With Us
        </span>
      </motion.h1>

      <motion.p
        className="text-gray-500 text-center mb-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.7 }}
      >
        Real Stories, From Those Who <br /> Found Home With Us
      </motion.p>

      {/* Animate Form and Success Message */}
      <AnimatePresence mode="wait">
        {state.succeeded && !showForm ? (
          // ✅ Success Message Animation
          <motion.div
            key="success"
            className="text-center p-10"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-green-600 text-lg font-semibold mb-6">
              ✅ Thanks for contacting us! We’ll get back to you soon.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                setShowForm(true);
                window.location.reload();
              }}
              className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded transition duration-200"
            >
              Back to Contact Form
            </motion.button>
          </motion.div>
        ) : (
          // ✅ Contact Form Animation
          <motion.form
            key="form"
            className="max-w-2xl mx-auto text-grey-600 pt-8"
            onSubmit={(e) => {
              handleSubmit(e);
              setShowForm(false);
            }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex flex-cols-2 items-center gap-6">
              {/* Name Field */}
              <motion.div
                className="flex flex-wrap mb-4 w-full md:w-1/2 text-left"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <label className="block font-medium mb-1">Your Name</label>
                <input
                  className="w-full border border-gray-300 rounded py-3 px-4 mt-1 focus:ring-2 focus:ring-blue-400 outline-none"
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                />
                <ValidationError prefix="Name" field="name" errors={state.errors} />
              </motion.div>

              {/* Email Field */}
              <motion.div
                className="flex flex-wrap mb-4 w-full md:w-1/2 text-left"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <label className="block font-medium mb-1">Your Email</label>
                <input
                  className="w-full border border-gray-300 rounded py-3 px-4 mt-1 focus:ring-2 focus:ring-blue-400 outline-none"
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                />
                <ValidationError prefix="Email" field="email" errors={state.errors} />
              </motion.div>
            </div>

            {/* Message Field */}
            <motion.div
              className="my-6 text-left"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <label className="block font-medium mb-1">Message</label>
              <textarea
                className="w-full border border-gray-300 rounded py-3 px-4 mt-1 h-48 resize-none focus:ring-2 focus:ring-blue-400 outline-none"
                name="message"
                placeholder="Message"
                required
              ></textarea>
              <ValidationError prefix="Message" field="message" errors={state.errors} />
            </motion.div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              disabled={state.submitting}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-12 mb-10 rounded transition duration-200"
            >
              {state.submitting ? "Sending..." : "Send Message"}
            </motion.button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Contact;