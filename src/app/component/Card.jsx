"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const Card = () => {
  return (
    <motion.div
      className="bg-white border border-orange-400 rounded-2xl p-18 flex flex-col md:flex-row items-center shadow-lg w-full max-w-5xl mx-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
        <div className="md:w-1/2 flex justify-center mt-6 md:mt-0">
       
      </div>
      {/* Left Content */}
      <div className="md:w-1/2 space-y-4">
        <h2 className="text-3xl font-semibold text-orange-600 flex items-center">
          Pricing
          <button className="ml-3 bg-orange-600 text-white px-5 py-2 rounded-lg text-sm hover:bg-orange-700 transition-all">
            Calculator
          </button>
        </h2>
        <p className="text-orange-600 text-lg leading-relaxed">
          SAMMY charges per automated action – like finding a bug or generating a piece of
          documentation – starting at <span className="font-bold">$0.30</span> each.
        </p>
        <p className="text-orange-600 text-lg">
          Whether you're an enterprise or a new startup – you pay the same.
        </p>
        <p className="text-orange-600 font-semibold text-lg">No BS. That's the SAMMY way.</p>
      </div>

      {/* Right Image */}
    
    </motion.div>
  );
};

export default Card;
