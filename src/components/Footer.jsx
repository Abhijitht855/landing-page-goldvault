import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#F8F4E5] py-10 text-[#444]">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex flex-col items-center space-y-4 text-center md:flex-row md:justify-between md:space-y-0">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} GoldVault Trading L.L.C
          </p>
          <p className="text-sm">
            #1, Al Huwaidi Building, Gold Souk, Deira, Dubai | +971 422 77664
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
