import React from 'react';
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white/70 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        <a href="#">
          <img
            src={logo}
            alt="GoldVault Logo"
            className="h-8 w-auto sm:h-10" // smaller on mobile
          />
        </a>
        <button
          className="rounded-md bg-[#AE8625] text-white px-3 py-1.5 sm:px-5 sm:py-2 text-sm sm:text-base font-medium transition-colors hover:bg-[#926F34] focus:outline-none focus:ring-2 focus:ring-[#926F34] focus:ring-offset-2"
        >
          Launch App
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
