import React, { useState, useEffect } from "react";
import { X } from "lucide-react";
import { Link } from "react-router-dom";

interface FullScreenMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const FullScreenMenu: React.FC<FullScreenMenuProps> = ({ isOpen, onClose }) => {
  const [animateItems, setAnimateItems] = useState(false);

  // 🔥 Clean, SEO-friendly, unique keys
  const menuItems = [
    { key: "home", title: "Home", path: "/" },
    { key: "about", title: "About Us", path: "/about" },
    { key: "events", title: "Events Portfolio", path: "/portfolio" },
    { key: "exhibitions", title: "Exhibitions Portfolio", path: "/exhibitions-portfolio" },
    { key: "calendar", title: "Exhibitions Calendar", path: "/exhibitions-calendar" },
    { key: "query", title: "Quick Query", path: "/quick-query" },
    { key: "contact", title: "Contact Us", path: "/contact-us" },
  ];

  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => setAnimateItems(true), 200);
      return () => clearTimeout(timer);
    } else {
      setAnimateItems(false);
    }
  }, [isOpen]);

  return (
    <div
      className={`fixed inset-0 z-50 bg-black transition-opacity duration-500 ${
        isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      {/* Close Button */}
      <button
        onClick={onClose}
        className={`absolute top-8 right-8 text-white transition-all duration-300 hover:text-gray-300 hover:rotate-90 ${
          animateItems ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
        }`}
      >
        <X className="w-8 h-8" />
      </button>

      {/* Menu */}
      <div className="flex justify-center items-center text-start h-full">
        <nav>
          <ul className="space-y-6 text-start">
            {menuItems.map((item, index) => (
              <li
                key={item.key}
                className={`transform transition-all duration-500 ${
                  animateItems
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-6"
                }`}
                style={{ transitionDelay: `${index * 80}ms` }}
              >
                <Link
                  to={item.path}
                  onClick={onClose}
                  className="group relative text-white text-3xl md:text-5xl font-light hover:text-gray-300 transition-all"
                >
                  <span className="group-hover:tracking-wider transition-all">
                    {item.title}
                  </span>

                  {/* Underline */}
                  <span className="block h-px w-0 bg-white group-hover:w-full transition-all duration-500 mx-auto mt-2"></span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default FullScreenMenu;
