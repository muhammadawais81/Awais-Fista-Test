"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import logo from "@/app/img/logo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full md:px-4 py-3 flex items-center justify-between md:justify-evenly px-4 bg-white rounded-full shadow-md border border-gray-200 max-w-3xl mt-6 z-50">
      {/* Logo */}
      <div className="flex items-center">
        <Image src={logo} alt="Logo" width={40} height={40} />
        <h1 className="text-lg font-bold text-orange-800">SAMMY <span className="text-gray-600">Labs</span></h1>
      </div>

      {/* Desktop Links */}
      <div className="hidden md:flex space-x-8 text-gray-800">
        <Link href="#" className="hover:text-orange-500 transition ml-3">Features</Link>
        <Link href="#" className="hover:text-orange-500 transition">Pricing</Link>
        <Link href="#" className="hover:text-orange-500 transition">Case Studies</Link>
      </div>

      {/* Contact Button */}
      <button className="hidden md:flex items-center border-2 hover:text-orange-500 border-orange-600 bg-orange-600 text-white font-bold text-lg px-2 ml-6 py-2 rounded-full duration-300 hover:bg-white hover:transition-all">
        <span>Contact Us</span>
        <div className="w-8 h-7 flex items-center justify-center bg-white border-2 border-orange-700 rounded-full ml-3">
          <ArrowRight className="text-orange-600 w-3 h-4" />
        </div>
      </button>

      {/* Mobile Menu Button */}
      <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Menu with Framer Motion */}
      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: isOpen ? "0%" : "-100%" }}
        transition={{ type: "tween", duration: 0.4 }}
        className="fixed top-0 left-0 w-full  bg-white flex flex-col items-center space-y-6 py-10 shadow-lg z-40"
      >
        <button className="absolute top-4 right-6" onClick={() => setIsOpen(false)}>
          <X size={32} />
        </button>
        <Link href="#" className="text-lg font-semibold text-gray-800 hover:text-orange-500 transition">Features</Link>
        <Link href="#" className="text-lg font-semibold text-gray-800 hover:text-orange-500 transition">Pricing</Link>
        <Link href="#" className="text-lg font-semibold text-gray-800 hover:text-orange-500 transition">Case Studies</Link>
        <button className="bg-orange-500 text-white px-6 py-3 rounded-full font-semibold shadow-md hover:bg-orange-600 transition">
          Contact Us →
        </button>
      </motion.div>
    </nav>
  );
}
