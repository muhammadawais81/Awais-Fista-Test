"use client";
import React from "react";
import Hero from "./component/Hero";
import Automate from "./component/Automate";
import Card from "./component/Card";
import Design from "./component/Design";
import HoldText from "./component/HoldText";
import Footer from "./component/Footer";

function Page() {
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
