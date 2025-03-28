"use client";

import { motion } from "framer-motion";
import duck from "@/app/img/duck.avif";

const Card = () => {
  return (
    <motion.div
      className="relative bg-white border border-orange-400 rounded-2xl p-12 shadow-lg w-full max-w-5xl mx-auto flex flex-col md:flex-row items-center overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Background Image */}
      <div
        className="absolute inset-y-0 right-0 w-[400px] mr-2 bg-cover opacity-20  md:opacity-90"
        style={{ backgroundImage: `url(${duck.src})` }}
      ></div>

      {/* Left Content */}
      <div className="md:w-1/2 space-y-4 relative z-10 p-6">
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
    </motion.div>
  );
};

export default Card;
