"use client";

import { motion } from "framer-motion";

const Automate = () => {
  return (
    <div className="container mx-auto px-6 py-12">
      {/* Steps Section */}
      <motion.div
        className="max-w-3xl mx-auto"
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

      {/* Features Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
        {[
          {
            title: "Secure",
            text: "SOC 2, GDPR, and HIPAA compliant for total peace of mind. Data is encrypted at every stage.",
            bgColor: "bg-orange-600 text-white",
          },
          {
            title: "All-in-One",
            text: "Explain how you use data analytics to drive your strategies, showcasing your commitment to making informed decisions.",
            bgColor: "bg-orange-100 text-gray-900",
          },
          {
            title: "Global Reach",
            text: "Highlight your ability to work with clients from around the world, showcasing your global presence.",
            bgColor: "bg-orange-600 text-white",
          },
          {
            title: "Proven Results",
            text: "Deployed across 10+ industries, driving faster releases and fewer errors.",
            bgColor: "bg-orange-100 text-gray-900",
          },
        ].map((item, index) => (
          <motion.div
            key={index}
            className={`${item.bgColor} p-8 rounded-lg shadow-md transition-all hover:scale-105`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.2 }}
          >
            <h3 className="text-xl font-bold">{item.title}</h3>
            <p className="mt-2 text-sm">{item.text}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Automate;
