"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import logo from "@/app/img/logo2.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full md:px-4 py-3 flex items-center justify-between md:justify-evenly px-4 bg-white rounded-full shadow-md border border-gray-200 max-w-3xl mt-6 z-50">
      {/* Logo */}
      <div className="flex items-center">
        <Image src={logo} alt="Logo" width={70} height={70} />
        <h1 className="text-2xl font-sans text-[#ff4000]">SAMMY <span className="text-[#ff4000] text-xl font-light">Labs</span></h1>
      </div>

      {/* Desktop Links */}
      <div className="hidden md:flex space-x-8 text-gray-800">
        <Link href="#" className="hover:text-orange-500 transition ml-3">Features</Link>
        <Link href="#" className="hover:text-orange-500 transition">Pricing</Link>
        <Link href="#" className="hover:text-orange-500 transition">Case Studies</Link>
      </div>

      {/* Contact Button */}
      <button className="hidden md:flex items-center border-2 border-orange-600 bg-orange-600 text-white  text-lg px-2 ml-6 py-2 rounded-full relative overflow-hidden group transition-all duration-300">
        <span className="relative z-10 group-hover:text-orange-500 transition-colors duration-300">
          Contact Us
        </span>
        <div className="w-8 h-7 flex items-center justify-center bg-white  rounded-full ml-3 relative z-10">
          <ArrowRight className="text-orange-600 w-5 h-4" />
        </div>

        {/* Animated background - Right to Left */}
        <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 origin-right transition-transform duration-300 ease-in-out"></div>
      </button>

      {/* Mobile Menu Button */}
<button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
  {isOpen ? <X size={28} /> : <Menu size={28} />}
</button>



{/* ================================================= */}
<motion.div
  initial={{ y: "-100%", opacity: 0 }}
  animate={{ 
    y: isOpen ? "0%" : "-100%",
    opacity: isOpen ? 1 : 0
  }}
  transition={{ 
    type: "tween",
    duration: 0.8,
    ease: [0.55, 1, 0.45, 1]
  }}
  className="fixed top-0 left-0 w-full  bg-white flex flex-col items-start px-6 py-10 shadow-lg z-40 overflow-y-auto"
>
  {/* Logo and Title - Right aligned */}
  <motion.div
    initial={{ x: 100 }}
    animate={{ x: isOpen ? 0 : 100 }}
    transition={{ delay: 0.5, type: "spring", stiffness: 100 }}
    className="flex items-center self-end mb-8 mr-8"
  >
    <Image src={logo} alt="Logo" width={60} height={60} />
    <h1 className="text-xl font-sans text-[#ff4000]">SAMMY <span className="text-[#ff4000] text-lg font-light">Labs</span></h1>
  </motion.div>

  {/* Close Button - Top left */}
  <button className="absolute top-9 text-gray-400 font-light left-6" onClick={() => setIsOpen(false)}>
    <X size={32} />
  </button>

  {/* Menu Content - Left aligned */}
  <div className="w-full flex flex-col items-start space-y-6">
    <button className="bg-[#ff4000] flex text-white px-6 py-2 rounded-full font-semibold shadow-md hover:bg-orange-600 transition">
      <div>Contact Us</div>
      <div className="w-8 h-7 flex items-center justify-center bg-white rounded-full ml-3">
        <ArrowRight className="text-orange-600 w-5 h-4" />
      </div>
    </button>

    <Link href="#" className="text-lg  text-gray-700 hover:text-orange-500 transition">Features</Link>
    <Link href="#" className="text-lg  text-gray-700 hover:text-orange-500 transition">Pricing</Link>
    <Link href="#" className="text-lg  text-gray-700 hover:text-orange-500 transition">Case Studies</Link>

    <div>
      <button className="flex items-center bg-orange-50 border-2 border-orange-500 text-orange-600 font-semibold px-6 py-[3px] rounded-lg shadow-md hover:shadow-lg transition-all">
        <span className="bg-orange-600 text-white text-sm font-bold px-2 py-1 mr-2">Y</span>
        <div className="flex items-baseline gap-1">
          <div>
            <div className="text-[8px] text-start uppercase -mt-2">FEATURED ON</div>
            <div className="text-lg -mt-2 font-bold">Launch YC</div>
          </div>
          <div>
            <div className="ml-6 mt-1">^</div>
            <div className="text-lg ml-7 -mt-4 font-bold">334</div>
          </div>
        </div>
      </button>
    </div>
  </div>
</motion.div>

{/* ============================================= */}
    </nav>
  );
}
