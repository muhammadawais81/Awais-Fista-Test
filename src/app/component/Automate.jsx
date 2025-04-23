"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import box1 from "@/app/img/1bx1.avif";
import box1M from "@/app/img/1box1M.avif";
import box2 from "@/app/img/box1.avif";
import box3 from "@/app/img/1bx3.avif";
import b0x4 from "@/app/img/1bx4.avif";
import { useState, useEffect } from "react";

const Automate = () => {
  const [hoveredBox, setHoveredBox] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className=" px-6 py-16 bg-white">
      {/* Steps Section - Without animations */}
      <div className="ml-3 md:ml-8 -mt-8 text-start items-start px-4 py-12">
        <h2 className="text-2xl text-start items-start font-semibold   text-gray-900  mb-6">
          3 Steps to Automation
        </h2>

        <div className="space-y-6">
          {/* Step 1 */}
          <div className="">
            <p className="font-bold text-[#ff4000] mb-1">Step 1: SAMMY Runs</p>
            <p className="text-gray-800">Run SAMMY with no code & integrates with 2 lines of code.</p>
          </div>

          {/* Step 2 */}
          <div className="">
            <p className="font-bold text-[#ff4000] mb-1">Step 2: SAMMY Creates</p>
            <p className="text-gray-800">You assess the content (user-walkthroughs, videos, documentation/guides, and more).</p>
          </div>

          {/* Step 3 */}
          <div className="">
            <p className="font-bold text-[#ff4000] mb-1">Step 3: SAMMY Grows</p>
            <p className="text-gray-800">As your product evolves, everything updates automagically (see what we did there).</p>
          </div>
        </div>
      </div>
      {/* Feature Cards */}
      <div className="grid grid-cols-1 md:mx-10   md:grid-cols-2 gap-8 md:gap-8 mt-7   relative">
        {/* Box 1 - Secure */}
        <motion.div
          className="bg-[#ff4000] text-white p-8 w-full rounded-2xl shadow-lg relative overflow-hidden flex flex-col mb-4 md:mb-6"
          initial={{ height: isMobile ? 500 : 400, x: isMobile ? -100 : 0 }}
          animate={{
            height: hoveredBox === 1 ? (isMobile ? 550 : 500) : (isMobile ? 500 : 400),
            x: 0
          }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          onHoverStart={() => setHoveredBox(1)}
          onHoverEnd={() => setHoveredBox(null)}
        >
          <div>
            <h3 className="text-3xl font-extrabold mb-4">Secure</h3>
            <p className="text-[16px] mb-4">
              SOC 2, GDPR, and HIPAA compliant for total peace of mind. Data is encrypted at every stage, keeping your product and user info safe. <br />
              Strict access controls ensure only authorized teams can view or edit results
            </p>
          </div>

          <motion.div
            className="relative mx-auto mt-auto w-64 h-56"
            animate={{
              y: hoveredBox === 1 ? 40 : 0,
              scale: hoveredBox === 1 ? 1.7 : 1.3
            }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src={isMobile ? box1M : box1}
              alt="Secure illustration"
              className="object-contain"
              fill
            />
          </motion.div>
        </motion.div>

        {/* Box 2 - All-in-One */}
        <motion.div
          className="bg-rose-50 text-black p-8 rounded-2xl shadow-lg relative overflow-hidden flex flex-col mb-4 md:mb-6"
          initial={{ height: isMobile ? 500 : 350, x: isMobile ? -100 : 0 }}
          animate={{
            height: hoveredBox === 2 ? (isMobile ? 550 : 450) : (hoveredBox === 4 ? (isMobile ? 500 : 300) : (isMobile ? 500 : 350)),
            x: 0
          }}
          transition={{ duration: 0.6, ease: "easeOut", delay: isMobile ? 0.2 : 0 }}
          onHoverStart={() => setHoveredBox(2)}
          onHoverEnd={() => setHoveredBox(null)}
        >
          <div>
            <h3 className="text-3xl font-extrabold mb-4">All-in-One</h3>
            <p className="text-lg">
              Explain how you use data analytics to drive your strategies, showcasing your commitment to making informed decisions that lead to success.
            </p>
            <p className="">No juggling multiple tools or licenses—one trusted AI model powers everything.</p>
          </div>

          <motion.div
            className={`relative mx-auto mt-auto ${isMobile ? 'w-36 h-36' : 'w-36 h-36'}`}
            animate={{
              scale: hoveredBox === 2 ? (isMobile ? 1.3 : 1.5) : 1
            }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src={box2}
              alt="All-in-One illustration"
              className="object-contain"
              fill
            />
          </motion.div>
        </motion.div>

        {/* Box 3 - Global Reach */}
        <motion.div
          className="bg-rose-50 text-black p-8 rounded-2xl shadow-lg relative overflow-hidden flex flex-col mb-4 md:mb-6"
          initial={{ height: isMobile ? 500 : 350, x: isMobile ? -100 : 0 }}
          animate={{
            height: hoveredBox === 3 ? (isMobile ? 550 : 450) : (isMobile ? 500 : 350),
            x: 0
          }}
          transition={{ duration: 0.6, ease: "easeOut", delay: isMobile ? 0.4 : 0 }}
          onHoverStart={() => setHoveredBox(3)}
          onHoverEnd={() => setHoveredBox(null)}
        >
          <div>
            <h3 className="text-3xl font-extrabold mb-4">Proven Results</h3>
            <p className="text-[16px]">
              Results speak louder than words. Deployed across 10+ industries, driving faster releases and fewer production issues. Backed by success stories from startups and enterprise clients alike.
              80% higher completion rates on user actions; 65% reduction in support burden and $Xm saved in early bug-catches. That's the SAMMY way.
            </p>
          </div>

          <motion.div
            className={`relative mx-auto mt-auto ${isMobile ? 'w-56 h-56' : 'w-36 h-36'}`}
            animate={{
              scale: hoveredBox === 3 ? (isMobile ? 1.5 : 1.7) : 1
            }}
            transition={{
              scale: { duration: 0.3, ease: "easeOut" },
              default: { duration: 0.3 }
            }}
          >
            <Image
              src={box3}
              alt="Global Reach illustration"
              className="object-contain"
              fill
              priority={isMobile} // Optimize loading for mobile
            />
          </motion.div>
        </motion.div>
        {/* Box 4 - Proven Results */}
        <motion.div
          className="bg-[#ff4000] text-white p-8 rounded-2xl shadow-lg relative overflow-hidden flex flex-col mb-4 md:mb-6"
          initial={{ height: isMobile ? 500 : 400, x: isMobile ? -100 : 0 }}
          animate={{
            height: hoveredBox === 4 ? (isMobile ? 550 : 500) : (hoveredBox === 2 ? (isMobile ? 500 : 300) : (isMobile ? 500 : 400)),
            x: 0
          }}
          transition={{ duration: 0.6, ease: "easeOut", delay: isMobile ? 0.6 : 0 }}
          onHoverStart={() => setHoveredBox(4)}
          onHoverEnd={() => setHoveredBox(null)}
        >
          <div>
            <h3 className="text-3xl font-extrabold mb-4">Proven Results</h3>
            <p className="text-[16px]">
              Highlight your ability to work with clients from around the world, showcasing your global presence and adaptability.
              Our proven strategies and global partnerships will propel your brand beyond borders, helping you thrive in today's interconnected world
            </p>
          </div>

          <motion.div
            className={`relative mx-auto mt-auto ${isMobile ? 'w-40 h-40' : 'w-40 h-40'}`}
            animate={{
              scale: hoveredBox === 4 ? (isMobile ? 1.3 : 1.5) : 1
            }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src={b0x4}
              alt="Proven Results illustration"
              className="object-contain"
              fill
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Automate;