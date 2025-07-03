import React from 'react'
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white/70 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-4">
        <a href="#">
          <img src={logo} alt="GoldVault Logo" className="h-10 w-auto" />
        </a>
        <button className="rounded-md bg-[#AE8625] text-white px-5 py-2 font-medium transition-colors hover:bg-[#926F34] focus:outline-none focus:ring-2 focus:ring-[#926F34] focus:ring-offset-2">
          Launch App
        </button>
      </nav>
    </header>
  )
}

export default Navbar