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
          className="rounded-lg shadow-lg w-full max-w-xs sm:max-w-md md:max-w-lg h-auto"
          controls
          autoPlay
          muted
        >
          <source src="/v1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </motion.div>

      {/* Text Section */}
      <motion.div
        className="flex flex-col justify-center px-4 sm:px-10 py-10 text-center sm:text-left"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <div className="sm:w-1/3">
          <h3 className="text-orange-500 text-lg sm:text-xl font-semibold">
            What is SAMMY though, really?
          </h3>
          <h2 className="text-gray-900 text-2xl sm:text-3xl font-bold mt-3">
            The Future of PLG
          </h2>
        </div>
        <div className="sm:w-2/3 text-black text-base sm:text-lg mt-3">
          <p>
            SAMMY is an AI that explores your app like a real user, mapping every
            possible click to generate content, onboard users, and spot issues.
            It updates automatically with every product change, keeping
            everything running smoothly. It may feel like magic, but it’s just
            powerful technology at work.
          </p>
        </div>
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