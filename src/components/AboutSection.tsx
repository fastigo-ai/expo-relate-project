import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const MinimalCard = ({ card, index, isActive, onClick }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), index * 150);
        }
      },
      { threshold: 0.1, rootMargin: "50px" }
    );

    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, [index]);

  return (
    <div
      ref={cardRef}
      className={`group cursor-pointer transition-all duration-700 ease-out bg-gray-50 transform ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0"
      } ${isActive ? "scale-105" : "scale-100"}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onClick(index)}
    >
      <div className="relative border border-gray-100 hover:border-gray-900 transition-all duration-500 hover:shadow-2xl overflow-hidden">
        <div className="relative overflow-hidden h-72">
          <div
            className={`w-full h-full bg-cover bg-center transition-all duration-1000 ${
              isHovered ? "scale-110" : "scale-100"
            }`}
            style={{ backgroundImage: `url("${card.image}")` }}
          />
        </div>

        <div className="p-8">
          <span className="text-xs uppercase text-gray-500">
            {card.category}
          </span>
          <h3 className="text-xl font-bold mt-2">{card.title}</h3>
          <p className="text-sm text-gray-600 mt-2">{card.description}</p>
        </div>
      </div>
    </div>
  );
};

const CardShowcase = () => {
  const [headerVisible, setHeaderVisible] = useState(false);
  const [activeCard, setActiveCard] = useState(0);
  const headerRef = useRef(null);
  const navigate = useNavigate();

  const cards = [
    {
      category: "Award Winner",
      title: "Smart Design Expo Silver A'Design Award",
      description: "Recognition for innovative exhibition stand design.",
      image:
        "https://images.pexels.com/photos/3183132/pexels-photo-3183132.jpeg",
    },
    {
      category: "Innovation",
      title: "Interactive Digital Experience Platform",
      description: "Groundbreaking digital installation.",
      image:
        "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg",
    },
    {
      category: "Excellence",
      title: "Sustainable Exhibition Architecture",
      description: "Eco-friendly award-winning design.",
      image:
        "https://images.pexels.com/photos/3183127/pexels-photo-3183127.jpeg",
    },
    {
      category: "Recognition",
      title: "International Design Competition",
      description: "Global recognition project.",
      image:
        "https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setHeaderVisible(true);
    });
    if (headerRef.current) observer.observe(headerRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCard((prev) => (prev + 1) % cards.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [cards.length]);

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div
          ref={headerRef}
          className={`text-center mb-20 transition-all ${
            headerVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <div 
            ref={headerRef}
            className={`text-center mb-20 transition-all duration-1000 transform ${
              headerVisible 
                ? 'translate-y-0 opacity-100' 
                : 'translate-y-8 opacity-0'
            }`}
          >
            {/* Floating Counter
            <div className="mb-6">
              <span className="text-[12rem] font-black text-gray-200 leading-none select-none">
                04
              </span>
            </div> */}

            <div className="max-w-4xl mx-auto">
              <h1 className="text-6xl md:text-8xl font-black leading-[0.9] mb-8">
                <span className="block text-black">That's what they talk about...</span>
                <span className="block text-black italic">about...</span>
              </h1>
              
              <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                Each project represents our dedication to pushing creative boundaries 
                and delivering exceptional results that speak for themselves.
              </p>
            </div>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, index) => (
            <MinimalCard
              key={index}
              card={card}
              index={index}
              isActive={activeCard === index}
              onClick={() => navigate(`/projects/${index}`)}
            />
          ))}
        </div>

        {/* Navigation dots */}
        <div className="flex justify-center mt-10 space-x-4">
          {cards.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveCard(index)}
              className={`w-3 h-3 rounded-full ${
                activeCard === index ? "bg-black" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardShowcase;
