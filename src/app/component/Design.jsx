"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import box1 from "@/app/img/bx1.avif";
import box2 from "@/app/img/bx2.avif";
import box3 from "@/app/img/bx3.avif";
import box4 from "@/app/img/bx4.avif";
import Image from "next/image";
import styles from "@/app/component/font.module.css"

const Design = () => {
  const [expandedIndex, setExpandedIndex] = useState();

  const features = [
    {
      text: "Automates product exploration",
      image: box1,
      expandedContent: "DOC & VIDEO TUTORIAL GENERATION\n\nCreate or enrich docs with clickable screenshots and step-by-step videos\n\nGenerate new content as Sammy learns your software and user needs\n\nAuto-refresh everything so your docs always match the latest release"
    },
    {
      text: "Generates content & documentation",
      image: box2,
      expandedContent: "DOC & VIDEO TUTORIAL GENERATION\n\nCreate or enrich docs with clickable screenshots and step-by-step videos\n\nGenerate new content as Sammy learns your software and user needs\n\nAuto-refresh everything so your docs always match the latest release"
    },
    {
      text: "Seamless user onboarding",
      image: box3,
      expandedContent: "DOC & VIDEO TUTORIAL GENERATION\n\nCreate or enrich docs with clickable screenshots and step-by-step videos\n\n Generate new content as Sammy learns your software and user needs\n\n.Auto-refresh everything so your docs always match the latest release"
    },
    {
      text: "Detects issues instantly",
      image: box4,
      expandedContent: "DOC & VIDEO TUTORIAL GENERATION\n\nCreate or enrich docs with clickable screenshots and step-by-step videos\n\nGenerate new content as Sammy learns your software and user needs\n\nAuto-refresh everything so your docs always match the latest release"
    }

  ];

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

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
        className="flex flex-col md:ml-56 items-center px-4 sm:px-10 py-10 max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <div className="w-full max-w-2xl items-center text-start">
          <h3 className="text-orange-500 text-lg sm:text-xl font-semibold">
            What is SAMMY though, really?
          </h3>
          <h2 className="text-gray-900 text-2xl sm:text-3xl font-bold mt-2">
            The Future of PLG
          </h2>
          <p className="text-black text-base sm:text-lg mt-3">
            SAMMY is an AI that explores your app like a real user, mapping every
            possible click to generate content, onboard users, and spot issues.
            It updates automatically with every product change, keeping
            everything running smoothly. It may feel like magic, but it's just
            powerful technology at work.
          </p>
        </div>
      </motion.div>

      {/* Features Section */}
      <div className="w-full px-4 sm:px-10 py-10">
        {features.map((feature, index) => (
          <div key={index}>
            {/* Mobile Version */}
            <motion.div
              className="md:hidden mb-4"
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.1 }}
            >
              <div className="border-2 border-gray-300 rounded-lg p-3">
                <div className="relative mb-3">
                  <button
                    onClick={() => toggleExpand(index)}
                    className="absolute top-0 right-0 text-orange-500 text-xs font-bold py-1 px-3 rounded-lg border-2 border-orange-600"
                  >
                    Press Me
                  </button>
                </div>

                <AnimatePresence>
                  {expandedIndex === index ? (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="bg-white p-4 rounded-lg ">
                        {feature.expandedContent.split('\n\n').map((paragraph, i) => (
                          <div key={i} className="text-[#ff4000]  text-xs mb-2">
                            <ul>
                              <li>

                                {paragraph}
                              </li>
                            </ul>

                          </div>

                        ))}
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
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div
                      initial={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="flex justify-center">
                        <Image
                          src={feature.image}
                          alt={feature.text}
                          className="w-72  object-contain"
                          width={288}
                          height={286}
                        />
                      </div>
                      <span className="text-orange-500 text-[16px] font-medium">
                        {feature.text}
                      </span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>

            {/* Desktop Version - unchanged */}
            <motion.div
              className="hidden md:block border-t relative text-[#ff4000] text-xl sm:text-5xl py-4 px-5 border-b last:border-b-0 cursor-pointer group"
              whileHover={{
                scale: 1.05,
                backgroundColor: "#ff4000",
                color: "#FFFFFF",
                x: 5,  // Moves slightly right
                y: -5, // Moves slightly up
              }}
              transition={{
                duration: 0.2,
                ease: "easeOut"
              }}
            >
              <p className={styles.outfit}>
                {feature.text}
              </p>
              <motion.div
                className="absolute hidden group-hover:block right-0 top-1 transform -translate-y-1/2 translate-x-full mr-56 w-40 h-32 z-30"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  x: 5,  // Matches text movement
                  y: -5  // Matches text movement
                }}
                transition={{
                  duration: 0.2,
                  ease: "easeOut"
                }}
              >
                <Image
                  src={feature.image}
                  alt={feature.text}
                  className="object-cover w-full h-full"
                  width={192}
                  height={192}
                />
              </motion.div>
            </motion.div>      </div>
        ))}
      </div>
    </div>
  );
};

export default Design;