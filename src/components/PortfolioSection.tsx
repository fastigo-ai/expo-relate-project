import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AnimatedCharacters } from "./AnimatedCharacters";
import { SplitText } from "./SplitText";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const shuffleArray = (array) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

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

const PortfolioSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [portfolioItems, setPortfolioItems] = useState<typeof portfolioData>([]);

  useEffect(() => {
    setPortfolioItems(shuffleArray(portfolioData));
  }, []);

  const totalSlides = portfolioItems.length;
  const currentItem = portfolioItems[currentSlide] || {};

  useEffect(() => {
    if (!totalSlides) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 6000);
    return () => clearInterval(timer);
  }, [totalSlides]);

  const handlePrev = () => setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  const handleNext = () => setCurrentSlide((prev) => (prev + 1) % totalSlides);

  if (portfolioItems.length === 0) return null;

  return (
    <section className="bg-gradient-to-b from-gray-50 to-gray-200 py-20 px-4 sm:px-8 md:px-12 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -right-[10%] w-[40%] h-[40%] rounded-full bg-[#862422]/10 blur-[120px]" />
        <div className="absolute top-[60%] -left-[10%] w-[30%] h-[30%] rounded-full bg-blue-900/10 blur-[100px]" />
      </div>

      {/* Header */}
      <div className="text-center mb-16 relative z-10">
        <h1 className="text-6xl md:text-8xl font-black leading-[0.9] mb-8 overflow-hidden py-4">
          <SplitText text="Portfolio" className="text-black" />
        </h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="tracking-[0.4em] text-xs sm:text-sm text-gray-500 font-sans font-semibold uppercase cursor-pointer"
        >
          30 Years of Experience
        </motion.p>
      </div>

      {/* Main Card */}
      <motion.div 
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-7xl mx-auto relative bg-white/80 backdrop-blur-xl shadow-2xl rounded-3xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 border border-white/40"
      >
        
        {/* Info Panel */}
        <div className="lg:col-span-5 bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white p-8 sm:p-12 md:p-16 flex flex-col justify-center relative overflow-hidden min-h-[400px]">
          {/* Subtle overlay noise/texture */}
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20 pointer-events-none"></div>
          
          <AnimatePresence mode="wait">   
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 30 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="relative z-10 flex flex-col h-full justify-center"
            >
              <p className="uppercase tracking-[0.2em] text-xs sm:text-sm font-semibold text-[#ef4444] mb-4 font-sans">
                {currentItem.type}
              </p>
              
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-medium mb-8 leading-tight text-white tracking-wide">
                {currentItem.title}
              </h2>

              <div className="space-y-4 mb-12 text-gray-300 font-sans font-light">
                <div className="flex items-center gap-4">
                  <div className="w-2 h-2 rounded-full bg-[#ef4444]"></div>
                  <p className="text-lg tracking-wide">{currentItem.location}</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-2 h-2 rounded-full bg-[#3b82f6]"></div>
                  <p className="text-lg tracking-wide">{currentItem.event}</p>
                </div>
              </div>

              <div className="inline-block bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl px-6 py-4 text-lg sm:text-xl self-start shadow-xl font-sans">
                <span className="text-gray-400 mr-3 font-light">Booth Size:</span> 
                <span className="text-white font-medium">{currentItem.bootSize} sqm</span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Image */}
        <div className="lg:col-span-7 relative h-[400px] sm:h-[500px] md:h-[600px] overflow-hidden bg-gray-100 group">
          <AnimatePresence mode="wait">
            <motion.img
              key={currentSlide}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              src={
                currentItem.image && currentItem.image.trim() !== ""
                  ? currentItem.image
                  : "https://via.placeholder.com/800x500?text=Expo+Project"
              }
              alt={currentItem.title || "Expo Project"}
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.onerror = null;
                target.src = "https://via.placeholder.com/800x500?text=Expo+Project";
              }}
              className="w-full h-full object-cover absolute inset-0"
            />
          </AnimatePresence>
          
          {/* Subtle gradient overlay to make buttons pop */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

          {/* Controls */}
          <div className="absolute inset-0 pointer-events-none flex items-center justify-between px-4 sm:px-8">
            <button
              onClick={handlePrev}
              className="pointer-events-auto w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-black/40 hover:bg-[#862422] backdrop-blur-md text-white flex items-center justify-center transition-all hover:scale-110 active:scale-95 shadow-lg"
            >
              <FiChevronLeft className="w-6 h-6 sm:w-8 sm:h-8" />
            </button>
            <button
              onClick={handleNext}
              className="pointer-events-auto w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-black/40 hover:bg-[#862422] backdrop-blur-md text-white flex items-center justify-center transition-all hover:scale-110 active:scale-95 shadow-lg"
            >
              <FiChevronRight className="w-6 h-6 sm:w-8 sm:h-8" />
            </button>
          </div>

          {/* YouTube Button */}
          <div className="absolute bottom-6 sm:bottom-8 left-6 sm:left-8 z-20">
            <a
              href="https://www.youtube.com/@expo"
              target="_blank"
              rel="noreferrer"
              className="group/btn flex items-center gap-3 bg-white/90 backdrop-blur-sm px-6 py-3 sm:px-8 sm:py-4 rounded-full text-xs sm:text-sm font-bold uppercase tracking-widest text-black hover:bg-[#862422] hover:text-white transition-all shadow-xl hover:shadow-2xl"
            >
              <span>Watch on YouTube</span>
              <motion.span 
                className="inline-block"
                initial={{ x: 0 }}
                whileHover={{ x: 5 }}
              >
                →
              </motion.span>
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default PortfolioSection;
