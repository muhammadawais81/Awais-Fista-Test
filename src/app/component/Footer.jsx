"use client";

import Image from "next/image";
import Link from "next/link";
import logo from "@/app/img/logo.png"

const Footer = () => {
  return (
    <footer
    
     className="flex flex-col items-center justify-center py-10 bg-orange-50">
      {/* Logo & Brand Name */}
      <div className="flex items-center space-x-2 mb-6">
        <Image src={logo} alt="Logo" width={40} height={40} />
        <span className="text-xl font-semibold text-orange-600">SAMMY Labs</span>
      </div>

      {/* Navigation Links */}
      <nav className="flex flex-col space-y-4 text-center text-orange-600 font-medium">
        <Link href="/features" className="hover:underline">
          Features
        </Link>
        <Link href="/pricing" className="hover:underline">
          Pricing
        </Link>
        <Link href="/case-studies" className="hover:underline">
          Case Studies
        </Link>
        <Link href="/privacy-policy" className="hover:underline">
          Privacy Policy
        </Link>
      </nav>
    </footer>
  );
};

export default Footer;
