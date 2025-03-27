"use client";

import { motion } from "framer-motion";

const Design = () => {
  const features = [
    "Automates product exploration",
    "Generates content & documentation",
    "Seamless user onboarding",
    "Detects issues instantly",
    "Updates automatically with changes",
  ];

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Video Section */}
      <motion.div
        className="flex justify-center items-center py-10 px-4 sm:px-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <video
          className="rounded-lg shadow-lg w-full max-w-xs sm:max-w-md md:max-w-2xl h-auto"
          controls
          autoPlay
          loop
          muted
        >
          <source src="/v1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </motion.div>

      {/* Text Section */}
      <motion.div
        className="flex flex-col md:ml-56 text-start px-4 sm:px-10 py-10 max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <h3 className="text-orange-500 text-lg sm:text-xl font-semibold">
          What is SAMMY though, really?
        </h3>
        <h2 className="text-gray-900 text-2xl sm:text-3xl font-bold mt-2">
          The Future of PLG
        </h2>
        <p className="text-black text-base sm:text-lg mt-3 max-w-2xl">
          SAMMY is an AI that explores your app like a real user, mapping every
          possible click to generate content, onboard users, and spot issues.
          It updates automatically with every product change, keeping
          everything running smoothly. It may feel like magic, but it’s just
          powerful technology at work.
        </p>
      </motion.div>

      {/* Features Section */}
      <div className="w-full px-4 sm:px-10 py-10">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="text-orange-600 text-xl sm:text-2xl py-4 border-b last:border-b-0 cursor-pointer"
            whileHover={{ scale: 1.05, backgroundColor: "#FF6600", color: "#FFFFFF" }}
            transition={{ duration: 0.2 }}
          >
            {feature}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Design;