import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

const FrogLogo = () => 
  <div className="mt-8">
    <img src="./FrogLogo.svg" alt="Frog logo" className="w-28 mx-auto" />
  </div>;

const Layout = ({ children }) => {
  const homePath = `${__PATH_PREFIX__}/`;
  const isHomePath = window.location.pathname === homePath;

  return (
    <div className="max-w-5xl mx-auto px-4">
      {isHomePath && <FrogLogo />}
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
