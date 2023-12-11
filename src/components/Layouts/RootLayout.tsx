import React, { ReactNode } from "react";
import Footer from "../Shared/Footer";
import NavIcon from "../Shared/NavIcon";
import Navbar from "../Shared/Navbar";

interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <>
      <NavIcon />
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default RootLayout;
