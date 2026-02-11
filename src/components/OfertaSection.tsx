import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import services from "../data/services";

const ServiceCard = ({ service, index, onClick }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), index * 200);
        }
      },
      { threshold: 0.2 }
    );

    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, [index]);

  return (
    <div
      ref={cardRef}
      onClick={onClick}
      className={`relative group overflow-hidden cursor-pointer transition-all duration-1000 transform ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="h-96 md:h-[500px] relative overflow-hidden">
        {/* Background */}
        <div
          className={`absolute inset-0 bg-cover bg-center transition-all duration-700 transform ${
            isHovered ? "scale-110" : "scale-100"
          }`}
          style={{ backgroundImage: `url(${service.heroImage})` }}
        />

        <div
          className={`absolute inset-0 bg-black transition-all duration-500 ${
            isHovered ? "bg-opacity-60" : "bg-opacity-40"
          }`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

        {/* Title */}
        <div className="absolute top-8 left-8 z-10">
          <h3
            className={`text-white font-light transition-all duration-500 transform ${
              isHovered
                ? "text-5xl md:text-6xl translate-x-2"
                : "text-4xl md:text-5xl"
            }`}
          >
            {service.title}
          </h3>
        </div>

        {/* Description */}
        <div
          className={`absolute bottom-8 left-8 right-8 z-10 transition-all duration-500 transform ${
            isHovered ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
        >
          <p className="text-white text-lg leading-relaxed font-light">
            {service.intro}
          </p>

          <div className="mt-6">
            <span className="text-white border-b border-white/50 hover:border-white transition-all duration-300 pb-1">
              Dowiedz się więcej →
            </span>
          </div>
        </div>

        {/* Number */}
        <div
          className={`absolute top-8 right-8 w-12 h-12 bg-white bg-opacity-20 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-500 ${
            isHovered ? "scale-110 bg-opacity-30" : ""
          }`}
        >
          <span className="text-white font-bold text-lg">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>

        <div
          className={`absolute bottom-0 left-0 h-1 bg-white transition-all duration-700 ${
            isHovered ? "w-full" : "w-0"
          }`}
        />
      </div>
    </div>
  );
};

const OfertaSection = () => {
  const [headerVisible, setHeaderVisible] = useState(false);
  const [contentVisible, setContentVisible] = useState(false);
  const headerRef = useRef(null);
  const contentRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setHeaderVisible(true);
    });

    const observer2 = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setContentVisible(true);
    });

    if (headerRef.current) observer.observe(headerRef.current);
    if (contentRef.current) observer2.observe(contentRef.current);

    return () => {
      observer.disconnect();
      observer2.disconnect();
    };
  }, []);

  return (
    <section className="py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Header */}
        <div
          ref={headerRef}
          className={`text-center mb-20 transition-all duration-1000 ${
            headerVisible ? "opacity-100" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-6xl md:text-8xl lg:text-9xl font-black mb-12">
            Oferta
          </h2>

          <div
            ref={contentRef}
            className={`max-w-4xl mx-auto transition-all duration-800 ${
              contentVisible ? "opacity-100" : "opacity-0 translate-y-6"
            }`}
          >
            <p className="text-gray-700 text-xl leading-relaxed font-light">
              Funkcjonalność spotyka się u nas z pięknem i estetyką. Projektujemy i
              budujemy stoiska targowe na całym świecie.
            </p>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 shadow-2xl rounded-lg overflow-hidden">
          {services.map((service, index) => (
            <ServiceCard
              key={service.id}
              service={service}
              index={index}
              onClick={() => navigate(`/services/${service.id}`)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OfertaSection;
