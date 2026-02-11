import React from "react";
import ContactForm from "../components/Comment";
import Footer from "../components/Footer";

const ExhibitionPortfolioUI = () => {
  const exhibitionProjects = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200",
      title: "BAU MÜNCHEN — 2024",
      hasAccent: false,
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200",
      title: "R+T STUTTGART — 2025",
      hasAccent: true,
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1200",
      title: "BUDMA POZNAŃ — 2024",
      hasAccent: false,
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1200",
      title: "GLASSTEC — DÜSSELDORF 2024",
      hasAccent: false,
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=1200",
      title: "LIGHT + BUILDING — 2025",
      hasAccent: false,
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1497366858526-0766cadbe8fa?w=1200",
      title: "ISH FRANKFURT — 2024",
      hasAccent: false,
    },
    {
      id: 7,
      image: "https://images.unsplash.com/photo-1551739440-5dd934d3a94a?w=1200",
      title: "HANNOVER MESSE — 2024",
      hasAccent: true,
    },
    {
      id: 8,
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200",
      title: "EXPO REAL — MÜNCHEN 2025",
      hasAccent: false,
    },
    {
      id: 9,
      image: "https://images.unsplash.com/photo-1560472355-536de3962603?w=1200",
      title: "CEVISAMA — VALENCIA 2024",
      hasAccent: false,
    },
    {
      id: 10,
      image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?w=1200",
      title: "BATIMAT — PARIS 2025",
      hasAccent: false,
    },
    {
      id: 11,
      image: "https://images.unsplash.com/photo-1562113530-57ba0c8e60b4?w=1200",
      title: "MADE EXPO — MILANO 2024",
      hasAccent: false,
    },
    {
      id: 12,
      image: "https://images.unsplash.com/photo-1497366412874-3415097a27e7?w=1200",
      title: "INTERSOLAR — MUNICH 2025",
      hasAccent: true,
    },
    {
      id: 13,
      image: "https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=1200",
      title: "ARCHITECT@WORK — BERLIN 2024",
      hasAccent: false,
    },
    {
      id: 14,
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=1200",
      title: "CLIMATIZACIÓN — MADRID 2025",
      hasAccent: false,
    },
    {
      id: 15,
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200",
      title: "TARGKIELCE — BUILD 2024",
      hasAccent: false,
    },
    {
      id: 16,
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1200",
      title: "WARSAW BUILD — EXPO 2025",
      hasAccent: false,
    },
    {
      id: 17,
      image: "https://images.unsplash.com/photo-1560472355-a9a6ea4a3ffd?w=1200",
      title: "KRAKÓW EXPO — BUILD 2024",
      hasAccent: true,
    },
    {
      id: 18,
      image: "https://images.unsplash.com/photo-1497215842964-222b430dc094?w=1200",
      title: "WROCŁAW — CONSTRUCTION 2025",
      hasAccent: false,
    },
    {
      id: 19,
      image: "https://images.unsplash.com/photo-1560472354-36ac5f6e43b5?w=1200",
      title: "GDANSK BUILD — FAIR 2024",
      hasAccent: false,
    },
    {
      id: 20,
      image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=1200",
      title: "LUBLIN — INNOVATION 2025",
      hasAccent: false,
    },
    {
      id: 21,
      image: "https://images.unsplash.com/photo-1560472355-67d8da34e0ca?w=1200",
      title: "KATOWICE — SUMMIT 2024",
      hasAccent: false,
    },
    {
      id: 22,
      image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1200",
      title: "POZNAŃ — FUTURE 2025",
      hasAccent: true,
    },
  ];

  const layout = [
    "col-span-2 row-span-3",
    "col-span-1 row-span-2",
    "col-span-1 row-span-2",
    "col-span-2 row-span-2",
    "col-span-1 row-span-2",
    "col-span-1 row-span-1",
    "col-span-1 row-span-1",
    "col-span-2 row-span-2",
  ];

  return (
    <div className="min-h-screen bg-gray-50 mt-20 relative overflow-hidden">
      {/* Content */}
      <div className="relative z-10">
        {/* Header */}
        <div className="flex justify-between items-center px-8 py-6">
          <div className="text-sm font-medium text-gray-600">EXPO</div>
          <div className="text-sm font-medium text-gray-600">
            +48 61 642 7147
          </div>
        </div>

        {/* Main */}
        <div className="max-w-7xl mx-auto px-8">
          {/* Title */}
          <div className="text-center mb-20">
            <h1 className="text-6xl md:text-8xl font-black mb-4">
              exhibitions
            </h1>
            <p className="text-gray-600 tracking-wide">
              Smart Design Expo • Exhibition Portfolio
            </p>
          </div>

          {/* Grid */}
          <div
            className="
              grid grid-cols-1 md:grid-cols-4
              auto-rows-[180px]
              gap-6
              mb-32
            "
          >
            {exhibitionProjects.map((project, index) => (
              <div
                key={project.id}
                className={`${layout[index % layout.length]} group relative overflow-hidden rounded-xl shadow-lg cursor-pointer`}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="
                    w-full h-full object-cover
                    transition-transform duration-700 ease-out
                    group-hover:scale-110
                  "
                />

                <div
                  className="
                    absolute inset-0
                    bg-gradient-to-t from-black/80 via-black/40 to-transparent
                    opacity-0 group-hover:opacity-100
                    transition-opacity duration-500
                    flex items-end
                  "
                >
                  <div
                    className="
                      p-6 text-white
                      translate-y-6 group-hover:translate-y-0
                      transition-transform duration-500
                    "
                  >
                    <h3 className="text-xl font-bold">
                      {project.title}
                    </h3>
                  </div>
                </div>

                {project.hasAccent && (
                  <div className="absolute top-4 right-4 w-12 h-16 bg-purple-500 rounded opacity-80 z-20"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* <ContactForm /> */}
     
    </div>
  );
};

export default ExhibitionPortfolioUI;
