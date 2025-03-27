"use client";
import React from "react";

function Hero() {
  return (
    <div>
      <section
        style={{ backgroundImage: "url('/bg1.avif')" }}
        className="flex flex-col items-center text-center py-20 px-6 mt-8 "
      >
        <div className="max-w-3xl w-full px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl text-start font-semibold text-orange-600 leading-tight">
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
            <button className="border-2 border-orange-500 text-orange-500 font-semibold px-16 sm:px-18 py-3 sm:py-[18px] rounded-lg hover:text-white hover:bg-orange-600 transition">
              See the Magic
            </button>
          </div>
          <div className="mt-6 flex justify-center sm:justify-start">
            <button className="bg-yellow-50  border-2 border-orange-500 text-orange-600 font-semibold px-12 sm:px-16 py-2 sm:py-4 rounded-lg shadow-md transition">
             <span className="bg-orange-600 text-white p-1 px-2">Y</span> Launch YC 300
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;
