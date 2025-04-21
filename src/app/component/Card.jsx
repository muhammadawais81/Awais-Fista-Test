"use client";

import { motion } from "framer-motion";
import duck from "@/app/img/duck.avif";

const Card = () => {
  return (
    <motion.div
      className="relative bg-white border mx-4 md:mx-8 border-orange-400 rounded-2xl p-8  md:p-12 shadow-lg w-[95%] h-[500px] md:w-[98%] max-w-[1200px] mt-20 md:mt-0 flex flex-col md:flex-row items-start md:items-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Background Image */}
      <div
        className="absolute bottom-0 right-0 w-[400px] md:top-52 h-[250px] md:h-full md:w-[550px] mr-0 md:mr-2 bg-contain md:bg-cover opacity-80 md:opacity-90 bg-no-repeat bg-right-bottom md:bg-right"
        style={{ backgroundImage: `url(${duck.src})` }}
      ></div>

      {/* Left Content */}
      <div className="w-full md:w-1/2 space-y-10 md:space-y-8 md:-top-14 md:ml-82 relative z-10">
        <div className="flex flex-row md:flex-row items-start md:items-center gap-4 md:gap-3">
          <h2 className="text-4xl md:text-3xl text-[#ff4000] cursor-pointer hover:scale-105 transition-transform duration-300">
            Pricing
          </h2>
          <button className="w-fit px-6 py-2 md:py-4 md:px-8 bg-[#ff4000] text-white rounded-lg text-sm hover:bg-orange-700 transition-all">
            Calculator
          </button>
        </div>
        <p className="text-[#ff4000] text-lg leading-relaxed md:leading-loose group cursor-pointer">
          <span className="group-hover:bg-[#ff4000] group-hover:text-white px-2 py-1 rounded-md transition-all duration-300">
            SAMMY charges per automated action – like finding a bug or generating a piece of
            documentation – starting at <span className="font-bold">$0.30</span> each.
          </span>
        </p>
        <p className="text-[#ff4000] text-base md:leading-loose group cursor-pointer">
          <span className="group-hover:bg-[#ff4000] group-hover:text-white px-2 py-1 rounded-md transition-all duration-300">
            Whether you're an enterprise or a new startup – you pay the same.
          </span>
        </p>
        <p className="text-[#ff4000] text-base md:leading-loose group cursor-pointer">
          <span className="group-hover:bg-[#ff4000] group-hover:text-white px-2 py-1 rounded-md transition-all duration-300">
            No BS. That's the SAMMY way.
          </span>
        </p>
      </div>
    </motion.div>
  );
};

export default Card;
