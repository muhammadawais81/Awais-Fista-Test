"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import Automate from "./component/Automate";
import Card from "./component/Card";
import Design from "./component/Design";
import HoldText from "./component/HoldText";
import Footer from "./component/Footer";

function Page() {
  
  
    const features = [
      "DOC & VIDEO TUTORIAL GENERATION",
      "ON-SCREEN USER ONBOARDING",
      "DEMO-LED SALES & SEO",
      "AUTOMATED UI & E2E TESTING",
    ];

  return (
    <div>
     
     <Hero/>
    <Design/>
    <Automate/>
    <Card/>
    <HoldText/>
    <Footer/>

    </div>
  );
}

export default Page;
