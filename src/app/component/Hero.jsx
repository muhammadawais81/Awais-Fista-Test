"use client";
import React from "react";
import Navbar from "./Navbar";

function Hero() {
  return (
    <div style={{ backgroundImage: "url('/bg1.avif')" }}>
      <Navbar />
    <section
      
      className="relative flex flex-col items-center text-center py-20 px-6"
    >
     
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-30 pointer-events-none"></div>

      <div className="relative max-w-3xl w-full px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl md:text-6xl text-start font-extrabold text-orange-600 leading-tight">
          SAMMY: The AI <br /> Engine Powering <br /> Customer Success
        </h1>
        <p className="text-base sm:text-lg text-gray-800 mt-4">
          The only platform that keeps your users delighted by generating bespoke
          user walkthroughs, documentation, and tailored onboardings that
          automatically update with your product.
        </p>

        <div className="mt-6 flex flex-col sm:flex-row gap-4 items-center sm:items-start justify-center sm:justify-start">
          <button className="bg-orange-600 text-white font-semibold px-12 sm:px-16 py-4 sm:py-5 rounded-lg shadow-md hover:bg-orange-500 transition">
            Speak to a human
          </button>
          <button className="border-2 border-orange-500 text-orange-500 font-semibold px-12 sm:px-16 py-4 sm:py-5 rounded-lg hover:text-white hover:bg-orange-600 transition">
            See the Magic
          </button>
        </div>
        <div className="mt-6 flex justify-center sm:justify-start">
          <button className="bg-orange-600 text-white font-semibold px-12 sm:px-12 py-4 sm:py-5 rounded-lg shadow-md hover:bg-orange-500 transition">
            Speak to a human
          </button>
        </div>
      </div>
    </section>
    </div>
  );
}

export default Hero;
