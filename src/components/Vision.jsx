import React from 'react';
import visionImg from "../assets/vision.png";

const Vision = () => {
  return (
    <section data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000" className="py-28 bg-white">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6 sm:px-10 gap-12 max-w-7xl">
        
        <div className="w-full md:w-1/2 space-y-6">
          <h2 className="text-3xl sm:text-5xl font-bold text-gray-800">
            Our Vision
          </h2>
          <p className="text-lg sm:text-xl text-gray-700 text-left leading-relaxed">
            To become the leading multi‑metal, multi‑country digital investment platform, backed by real stores, trusted jewelers, and AI‑powered insights.
          </p>
        </div>

        <div data-aos="zoom-in" data-aos-delay="600" className="w-full md:w-1/2 flex justify-center">
          <img
            src={visionImg}
            alt="Vision"
            className="w-[280px] sm:w-[340px] md:w-[500px] h-auto rounded-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Vision;
