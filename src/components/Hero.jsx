
import React from 'react';
import heroBg from "../assets/Goldvault+.png";

const Hero = () => {
  return (
    <section data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000" className="bg-white py-16 md:py-16">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4 gap-6 md:gap-8 min-h-screen">

        <div data-aos="zoom-in" data-aos-delay="600" className="w-full md:w-2/5 flex justify-center mt-10 md:mt-0 ">

          <img
            src={heroBg}
            alt="App Preview"
            className="w-[180px] sm:w-[220px] md:w-[300px] h-auto rounded-xl"
          />
        </div>


        <div className="w-full md:w-3/5 text-left space-y-6">
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-wide text-gray-800 leading-tight">
            <span>Hybrid Digital‑Physical</span>
            <br />
            <span className="block mt-2">Gold Investing</span>
          </h1>

          <p className="text-base sm:text-lg text-gray-600">
            Invest, track live prices, and redeem gold, silver, or gems — all from a single app.
          </p>
          <a
            href="#features"
            className="inline-block rounded bg-[#AE8625] px-6 py-3 text-base sm:text-lg font-semibold text-white hover:bg-[#926F34]"
          >
            See How It Works
          </a>
        </div>

      </div>
    </section>
  );
};

export default Hero;
