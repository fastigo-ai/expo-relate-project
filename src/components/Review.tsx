import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { SplitText } from "./SplitText";

const testimonials = [
  {
    industry: "SANITARY INDUSTRY",
    quote:
      "We had the opportunity to cooperate with Smart Design Expo for the 3rd time when exhibiting at the international KBIS fair taking place in the USA. During each trade fair event, we can be sure that we will receive a high-quality trade fair stand. We can count on support, commitment and interesting ideas from experienced Smart Design Expo employees.",
    author: "MARTYNA MAKA",
    position: "Marmite, Trade Marketing and Communication Manager",
  },
  {
    industry: "TECHNOLOGY SECTOR",
    quote:
      "Smart Design Expo exceeded our expectations with their innovative approach to our booth design. Their attention to detail and professional execution made our presence at the trade show truly memorable. The team's creativity and technical expertise are unmatched.",
    author: "ANNA KOWALSKA",
    position: "Tech Solutions, Marketing Director",
  },
  {
    industry: "AUTOMOTIVE INDUSTRY",
    quote:
      "Working with Smart Design Expo was a game-changer for our brand presence at international fairs. Their comprehensive approach from design to implementation saved us time and delivered exceptional results that attracted visitors and generated leads.",
    author: "ROBERT NOWAK",
    position: "AutoPro, Exhibition Manager",
  },
];

const brands = [
  { name: "Alprof", logo: "ALPROF" },
  { name: "Marmite", logo: "marmite" },
  { name: "Solaris", logo: "SOLARIS" },
  { name: "Anwis", logo: "anwis" },
  { name: "HM", logo: "HM" },
  { name: "Cersanit", logo: "cersanit" },
];

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [headerVisible, setHeaderVisible] = useState(false);
  const [testimonialsVisible, setTestimonialsVisible] = useState(false);
  const [brandsVisible, setBrandsVisible] = useState(false);

  const sectionRef = React.useRef(null);
  const headerRef = React.useRef(null);
  const testimonialsRef = React.useRef(null);
  const brandsRef = React.useRef(null);

  useEffect(() => {
    const observerOptions = { threshold: 0.2 };

    const headerObs = new IntersectionObserver(([e]) => e.isIntersecting && setHeaderVisible(true), observerOptions);
    const testObs = new IntersectionObserver(([e]) => e.isIntersecting && setTestimonialsVisible(true), observerOptions);
    const brandObs = new IntersectionObserver(([e]) => e.isIntersecting && setBrandsVisible(true), observerOptions);

    if (headerRef.current) headerObs.observe(headerRef.current);
    if (testimonialsRef.current) testObs.observe(testimonialsRef.current);
    if (brandsRef.current) brandObs.observe(brandsRef.current);

    const interval = setInterval(() => {
      setCurrentTestimonial((p) => (p + 1) % testimonials.length);
    }, 6000);

    return () => {
      clearInterval(interval);
      headerObs.disconnect();
      testObs.disconnect();
      brandObs.disconnect();
    };
  }, []);

  const nextTestimonial = () =>
    setCurrentTestimonial((p) => (p + 1) % testimonials.length);
  const prevTestimonial = () =>
    setCurrentTestimonial((p) => (p - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-24 relative overflow-hidden" ref={sectionRef}>
      <div className="max-w-6xl mx-auto px-6 relative">

        {/* Header */}
        <div ref={headerRef} className={`text-center mb-20 transition-all ${headerVisible ? "opacity-100" : "opacity-0 translate-y-8"}`}>
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-black text-black">
            <span className="block text-black overflow-hidden py-2">
              <SplitText text="They trusted us" />
            </span>
          </h2>
        </div>

        {/* Card */}
        <div ref={testimonialsRef} className={`transition-all ${testimonialsVisible ? "opacity-100" : "opacity-0 translate-y-10"}`}>
          <div className="relative bg-white rounded-2xl p-12 md:p-16 mb-16 overflow-hidden group hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">

            {/* Quote */}
            <div className="text-center mb-12">
              <div className="text-6xl mb-6 inline-block px-4 py-2 rounded-full  text-gray-500 group-hover:text-[#862422] transition-colors">
                "
              </div>
              <blockquote className="text-xl md:text-2xl italic max-w-4xl mx-auto text-gray-500 group-hover:text-[#862422] transition-colors">
                {testimonials[currentTestimonial].quote}
              </blockquote>
            </div>

            {/* Author */}
            <div className="text-center">
              <h4 className="text-xl font-bold text-gray-600 group-hover:text-[#862422] transition-colors">
                {testimonials[currentTestimonial].author}
              </h4>
              <p className="text-gray-400 group-hover:text-[#862422] transition-colors">
                {testimonials[currentTestimonial].position}
              </p>
            </div>

            {/* Nav */}
            <button onClick={prevTestimonial} className="absolute left-4 top-1/2 -translate-y-1/2 bg-white p-3 shadow rounded-full">
              <ChevronLeft />
            </button>
            <button onClick={nextTestimonial} className="absolute right-4 top-1/2 -translate-y-1/2 bg-white p-3 shadow rounded-full">
              <ChevronRight />
            </button>

          </div>
        </div>

        {/* Brands */}
        <div ref={brandsRef} className={`flex justify-center gap-12 transition-all ${brandsVisible ? "opacity-100" : "opacity-0 translate-y-8"}`}>
          {brands.map((b) => (
            <div key={b.name} className="text-2xl font-bold text-gray-400 hover:text-black transition">
              {b.logo}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TestimonialsSection;
