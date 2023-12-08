import { Facebook, Instagram, Phone, Twitter } from "lucide-react";
import React, { ReactNode } from "react";
import Footer from "../Shared/Footer";
import Navbar from "../Shared/Navbar";

interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <>
      <div className="container mx-auto flex justify-between p-1">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-500 flex justify-center items-center rounded">
            <Phone color="#fff" />
          </div>

          <p className="text-lg">514-800-0201</p>
        </div>
        <div className="flex gap-2">
          <div className="w-8 h-8 bg-blue-500 flex justify-center items-center rounded">
            <Facebook color="#fff" />
          </div>
          <div className="w-8 h-8 bg-[#f14e4d] flex justify-center items-center rounded">
            <Instagram color="#fff" />
          </div>
          <div className="w-8 h-8 bg-[#1da1f2] flex justify-center items-center rounded">
            <Twitter color="#fff" />
          </div>
        </div>
      </div>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default RootLayout;
