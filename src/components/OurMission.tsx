import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const OurVisionSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [contentVisible, setContentVisible] = useState(false);
  const [statsVisible, setStatsVisible] = useState(false);
  const sectionRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), 100);
          setTimeout(() => setContentVisible(true), 400);
          setTimeout(() => setStatsVisible(true), 700);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const industries = [
    "Automotive",
    "Electric & Batteries",
    "Compressor & Refrigeration",
    "Wires & Cable",
    "Chemical",
    "Footwear",
    "Technology",
    "Healthcare",
  ];

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100 py-16 md:py-24">
      {/* Background Grid */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-0 h-full w-px bg-gray-300/40" />
        <div className="absolute left-1/4 h-full w-px bg-gray-300/30" />
        <div className="absolute right-0 h-full w-px bg-gray-300/40" />
        <div className="absolute top-1/3 w-full h-px bg-gray-300/30" />
        <div className="absolute top-2/3 w-full h-px bg-gray-300/30" />
      </div>

      <div ref={sectionRef} className="relative z-10 max-w-7xl mx-auto px-4 md:px-8">

        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <span className="text-xs md:text-sm tracking-widest text-gray-600 uppercase">
            Our Vision
          </span>

          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black mt-4 leading-tight">
            designing brilliance
          </h1>

          <p className="text-lg md:text-xl text-gray-600 mt-4 max-w-3xl mx-auto">
            in the world of events & exhibitions
          </p>
        </div>

        {/* Main Grid */}
        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 transition-all duration-1000 ${
            contentVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          {/* Left */}
          <div className="bg-white rounded-xl p-6 md:p-10 shadow-lg">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              More than space, we create experiences
            </h2>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed">
              We believe every exhibition stand is a powerful marketing tool that
              transforms brands into unforgettable experiences.
            </p>
          </div>

          {/* Right */}
          <div className="bg-white rounded-xl p-6 md:p-10 shadow-lg">
            <h3 className="text-xl md:text-2xl font-bold mb-6 text-center">
              Industries We Transform
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {industries.map((industry) => (
                <div
                  key={industry}
                  className="bg-gray-100 hover:bg-black hover:text-white transition-all duration-300 p-4 text-center rounded-lg text-sm md:text-base cursor-pointer"
                >
                  {industry}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div
          className={`text-center bg-black text-white rounded-2xl p-8 md:p-12 mt-20 transition-all duration-1000 ${
            statsVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-6">
            Ready to create something extraordinary?
          </h3>

          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's transform your brand vision into a compelling exhibition
            experience.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={() => navigate("/contact-us")}
              className="bg-white text-black px-8 py-4 rounded-full hover:scale-105 transition"
            >
              Start Your Project
            </button>

            <a
              href="/Smart-Design-Expo-Portfolio.pdf"
              download
              className="border border-white px-8 py-4 rounded-full hover:bg-white hover:text-black transition"
            >
              View Portfolio
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurVisionSection;
