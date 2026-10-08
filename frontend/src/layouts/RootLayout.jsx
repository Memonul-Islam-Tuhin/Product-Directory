// import React from "react";
import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
const RootLayout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-neo-bg text-neo-dark">
      <Navbar />
      <main className="grow max-w-7xl w-full mx-auto px-4 sm:px-8 py-8 md:py-12">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default RootLayout;
