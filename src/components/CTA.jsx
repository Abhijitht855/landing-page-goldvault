import React from 'react';
import appStore from '../assets/apple.png';
import googlePlay from '../assets/playstore.png';

const CTA = () => {
  return (
    <section className="bg-[#1c1c1c] py-20 text-white px-4">
      <div className="max-w-4xl mx-auto space-y-6">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-left sm:text-center">
          Ready to Start Saving in Gold?
        </h2>
        <p className="text-lg sm:text-xl text-left sm:text-center">
          Download the app and begin your journey today.
        </p>

        <div className="flex flex-col sm:flex-row items-start sm:items-center sm:justify-center gap-4 sm:gap-6 pt-6">
          <a
            href="#"
            className="w-50 flex items-center gap-3 bg-white text-black px-6 py-3 rounded-lg shadow-md hover:bg-gray-100 transition"
          >
            <img
              src={appStore}
              alt="App Store"
              className="w-8 h-8 object-contain"
            />
            <span className="font-semibold text-base">App Store</span>
          </a>

          <a
            href="#"
            className="w-50 flex items-center gap-3 bg-white text-black px-6 py-3 rounded-lg shadow-md hover:bg-gray-100 transition"
          >
            <img
              src={googlePlay}
              alt="Google Play"
              className="w-8 h-8 object-contain"
            />
            <span className="font-semibold text-base">Google Play</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTA;
