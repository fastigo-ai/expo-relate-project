import React, { useState, useEffect } from "react";

const shuffleArray = (array) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

const PortfolioSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [portfolioItems, setPortfolioItems] = useState([]);

  const portfolioData = [
    {
      id: 1,
      title: "AMRIT POLYCHEM",
      type: "Exhibition Booth",
      location: "Greater Noida",
      event: "PUTECH 2025",
      bootSize: 78,
      image: "https://res.cloudinary.com/dhfpgijhp/image/upload/v1770884428/Screenshot_2026-01-21_141136_ezcsrv.png",
    },
    {
      id: 2,
      title: "BAMS",
      type: "Exhibition Booth",
      location: "Greater Noida",
      event: "PUTECH 2025",
      bootSize: 72,
      image: "https://res.cloudinary.com/dhfpgijhp/image/upload/v1770884553/Screenshot_2026-01-21_141737_obori1.png",
    },
    {
      id: 3,
      title: "BAMS",
      type: "Exhibition Booth",
      location: "New Delhi",
      event: "CABLE AND WIRE FAIR 2025",
      bootSize: 40,
      image: "https://res.cloudinary.com/dhfpgijhp/image/upload/v1770884689/Screenshot_2026-01-21_143151_gb5qrv.png",
    },
    {
      id: 4,
      title: "BHARAT ENTERPRISES",
      type: "Exhibition Booth",
      location: "New Delhi",
      event: "IIFF 2023",
      bootSize: 36,
      image: "https://res.cloudinary.com/dhfpgijhp/image/upload/v1770884881/Screenshot_2026-01-21_152031_wgozy3.png",
    },
    {
      id: 5,
      title: "DANFOSS",
      type: "Exhibition Booth",
      location: "Bengaluru",
      event: "ACREX 2025",
      bootSize: 117,
      image: "https://res.cloudinary.com/dhfpgijhp/image/upload/v1770884881/Screenshot_2026-01-21_152031_wgozy3.png",
    },
    {
      id: 6,
      title: "DENSO",
      type: "Exhibition Booth",
      location: "New Delhi",
      event: "BHARAT MOBILITY 2025",
      bootSize: 120,
      image: "https://res.cloudinary.com/dhfpgijhp/image/upload/v1770885024/Screenshot_2026-01-21_153755_exthcy.png",
    },
    {
      id: 7,
      title: "GENUS",
      type: "Exhibition Booth",
      location: "Greater Noida",
      event: "ELECRAMA 2025",
      bootSize: 90,
      image: "https://res.cloudinary.com/dhfpgijhp/image/upload/v1770885256/Screenshot_2026-01-21_160149_cykwte.png",
    },
    {
      id: 8,
      title: "SPACE WORLD",
      type: "Exhibition Booth",
      location: "New Delhi",
      event: "IMC 2025",
      bootSize: 233,
      image: "https://res.cloudinary.com/dhfpgijhp/image/upload/v1770892352/Screenshot_2026-01-21_184010_ldpecy.png",
    },
  ];

  useEffect(() => {
    setPortfolioItems(shuffleArray(portfolioData));
  }, []);

  const totalSlides = portfolioItems.length;
  const currentItem = portfolioItems[currentSlide] || {};

  useEffect(() => {
    if (!totalSlides) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 5000);
    return () => clearInterval(timer);
  }, [totalSlides]);

  return (
    <section className="bg-gray-100 py-12 sm:py-16 px-4 sm:px-8 md:px-12">
      {/* Header */}
      <div className="text-center mb-10 sm:mb-14">
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold">
          Portfolio
        </h1>
        <p className="tracking-widest text-xs sm:text-sm mt-2">
          30 YEARS OF EXPERIENCE
        </p>
      </div>

      {/* Main Card */}
      <div className="relative bg-white shadow-2xl rounded-xl overflow-hidden grid grid-cols-1 md:grid-cols-12">
        
        {/* Info Panel */}
        <div className="md:col-span-4 bg-black text-white p-6 sm:p-8 md:p-10 flex flex-col justify-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl mb-4">
            {currentItem.title}
          </h2>

          <p className="uppercase tracking-wider text-xs mb-1">
            {currentItem.type}
          </p>

          <p className="text-sm">{currentItem.location}</p>
          <p className="text-sm mb-4">{currentItem.event}</p>

          <p className="inline-block bg-white/10 px-4 py-2 text-base sm:text-lg font-bold">
            Boot Size : {currentItem.bootSize} 
          </p>
        </div>

        {/* Image */}
        <div className="md:col-span-8 relative">
          <img
            src={
              currentItem.image && currentItem.image.trim() !== ""
                ? currentItem.image
                : "https://via.placeholder.com/800x500?text=Expo+Project"
            }
            alt={currentItem.title || "Expo Project"}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src =
                "https://via.placeholder.com/800x500?text=Expo+Project";
            }}
            className="w-full object-cover
              h-[240px]
              sm:h-[320px]
              md:h-[460px]
              lg:h-[520px]"
          />

          {/* Left Arrow */}
          <button
            onClick={() =>
              setCurrentSlide(
                (currentSlide - 1 + totalSlides) % totalSlides
              )
            }
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2
              bg-white/80 px-3 py-2 sm:px-4 sm:py-3
              hover:bg-[#862422] hover:text-white transition"
          >
            ←
          </button>

          {/* Right Arrow */}
          <button
            onClick={() =>
              setCurrentSlide((currentSlide + 1) % totalSlides)
            }
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2
              bg-white/80 px-3 py-2 sm:px-4 sm:py-3
              hover:bg-[#862422] hover:text-white transition"
          >
            →
          </button>
        </div>

        {/* YouTube Button */}
        <div className="absolute bottom-3 sm:bottom-5 left-3 sm:left-5 z-20">
          <a
            href="https://www.youtube.com/@expo"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 sm:gap-3
              bg-white px-4 sm:px-6 py-2.5 sm:py-3
              text-[10px] sm:text-xs uppercase
              border border-black
              hover:bg-[#862422] hover:text-white transition"
          >
            Youtube →
          </a>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
