"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const HoldText = () => {
  return (
    <div 
    style={{ backgroundImage: "url('/bg1.png')"}}
    className="relative bg-center flex items-center justify-center h-[300px] md:h-[400px] w-full bg-orange-50">
      
      <motion.h1
        className="text-center text-3xl text-black md:text-5xl font-bold leading-snug group relative"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        Focus on making an amazing <br />
        product,{" "}
        <span className="text-orange-600">automate the annoyances</span> <br />
        <span className="text-orange-600">away</span>
      </motion.h1>
    </div>
  );
};

export default HoldText;
