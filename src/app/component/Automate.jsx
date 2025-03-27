"use client";

import { motion } from "framer-motion";
import box from "@/app/img/box1.avif";

const Automate = () => {
  const features = [
    {
      title: "Secure",
      text: "SOC 2, GDPR, and HIPAA compliant for total peace of mind. Data is encrypted at every stage.",
      bgColor: "bg-orange-600 text-white",
      initialHeight: "h-48",
      hoverHeight: "h-64",
      background: "", // No background image
    },
    {
      title: "All-in-One",
      text: "Explain how you use data analytics to drive your strategies, showcasing your commitment to making informed decisions.",
      bgColor: "bg-orange-100 text-gray-900",
      initialHeight: "h-52",
      hoverHeight: "h-72",
      background: `url(${box})`, // Apply background image
    },
    {
      title: "Global Reach",
      text: "Highlight your ability to work with clients from around the world, showcasing your global presence.",
      bgColor: "bg-orange-600 text-white",
      initialHeight: "h-56",
      hoverHeight: "h-80",
      background: `url(${box})`, // Apply background image
    },
    {
      title: "Proven Results",
      text: "Deployed across 10+ industries, driving faster releases and fewer errors.",
      bgColor: "bg-orange-100 text-gray-900",
      initialHeight: "h-60",
      hoverHeight: "h-96",
      background: "", // No background image
    },
  ];

  return (
    <div className="container mx-auto px-6 py-12">
      {/* Steps Section */}
      <motion.div
        className="max-w-3xl mx-auto text-center"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl font-bold text-gray-900">3 Steps to Automation</h2>
        <div className="mt-6 space-y-6 text-lg text-gray-800">
          <p>
            <span className="font-bold text-orange-600">Step 1: SAMMY Runs</span><br />
            Run SAMMY with no code & integrates with 2 lines of code.
          </p>
          <p>
            <span className="font-bold text-orange-600">Step 2: SAMMY Creates</span><br />
            You assess the content (user-walkthroughs, videos, documentation/guides, and more).
          </p>
          <p>
            <span className="font-bold text-orange-600">Step 3: SAMMY Grows</span><br />
            As your product evolves, everything updates automagically (see what we did there).
          </p>
        </div>
      </motion.div>

      {/* Feature Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 mt-12">
        {features.map((item, index) => (
          <motion.div
            key={index}
            className={`${item.bgColor} p-8 rounded-2xl shadow-lg cursor-pointer relative overflow-hidden transition-all duration-300 ${item.initialHeight}`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            whileHover={{
              height: item.hoverHeight.replace("h-", "") + "px",
              boxShadow: "0px 15px 25px rgba(0,0,0,0.2)",
            }}
            style={{
              backgroundImage: item.background,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <h3 className="text-2xl font-extrabold">{item.title}</h3>
            <p className="mt-3 text-md">{item.text}</p>

            {/* Decorative Bottom Line */}
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-orange-400 to-orange-800 rounded-b-2xl"></div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Automate;
