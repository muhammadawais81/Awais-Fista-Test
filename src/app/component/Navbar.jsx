"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import logo from "@/app/img/logo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 left-0 md:px-5 py-3 flex  border-b 
     items-center justify-evenly px-4 bg-white rounded-full shadow-md border border-gray-200 max-w-4xl  mt-6">

      <div className="flex items-center">
        <Image src={logo} alt="Logo" width={40} height={40} />
        <h1 className="text-lg font-bold text-orange-800 ">SAMMY <span className="text-gray-600">Labs</span></h1>
      </div>

      <div className="hidden md:flex space-x-8 text-gray-800">
        <Link href="#" className="hover:text-orange-500 transition">Features</Link>
        <Link href="#" className="hover:text-orange-500 transition">Pricing</Link>
        <Link href="#" className="hover:text-orange-500 transition">Case Studies</Link>
      </div>

      <button className="hidden md:flex items-center border-2 border-orange-600 bg-orange-600 text-white font-bold text-lg px-5 py-3 rounded-full  duration-300 hover:bg-white hover:transition-all">
        <span>Contact Us</span>
        <div className="w-10 h-7 flex items-center justify-center bg-white border-2 border-orange-700 rounded-full ml-3">
          <ArrowRight className="text-orange-600 w-3 h-4" />
        </div>
      </button>

      <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      <div
        className={`fixed top-0 left-0 w-full h-screen bg-white flex flex-col items-center space-y-6 py-10 shadow-lg transform transition-transform duration-300 ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
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
      </div>
    </nav>
  );
}
