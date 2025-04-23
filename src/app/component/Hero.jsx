"use client";
import React from "react";
import '@fontsource/inter/900.css';
function Hero() {
  return (
    <div>
      <section
        style={{ backgroundImage: "url('/bg1.png') " }}
        className="flex flex-col items-center text-center bg-center py-20 px-6 mt-8  "
      >
        <div className="max-w-3xl w-full px-1 sm:px-6 lg:px-8">


          <h1 className="
     font-black 
    text-[34px] sm:text-4xl md:text-6xl 
    leading-[1.2] 
    text-[#ff4000] 
    text-start
    
    mt-12
  ">
            SAMMY: The AI <br />
            Engine Powering <br />
            Customer Success
          </h1>

          <p className="
    text-[15px]  md:text-lg 
    text-gray-700 
    mt-7 mb-7 sm:mt-6
    text-start
    leading-relaxed
    max-w-2xl
  ">
            The only platform that keeps your users delighted by generating bespoke
            user walkthroughs, documentation, and tailored onboardings that
            automatically update with your product.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row gap-4 items-start sm:items-start justify-center sm:justify-start">
            <button className="bg-[#ff4000] text-white   px-10 sm:px-14 py-2 sm:py-[14px] rounded-lg shadow-md hover:bg-white hover:text-[#ff4000] border-2 border-[#ff4000] transition">
              Speak to a human
            </button>
            <button className="border-2 border-[#ff4000] text-[#ff4000]  px-8 sm:px-12 py-2 sm:py-[14px] rounded-lg hover:text-white hover:bg-[#ff4000] transition">
              See the Magic
            </button>
          </div>
          <div className="mt-6 flex justify-center sm:justify-start">
  <button className="hidden md:flex items-center bg-orange-50 border-2 border-orange-500 text-orange-600 font-semibold px-6 py-[4px] rounded-lg shadow-md hover:shadow-lg transition-all">
    <span className="bg-orange-600 text-white text-sm font-bold px-2 py-1 mr-2">Y</span>
    <div className="flex items-baseline gap-1">
      <div className="">
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
      </section>
    </div>
  );
}

export default Hero;
