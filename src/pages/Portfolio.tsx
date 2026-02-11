import React from "react";

const PortfolioUI = () => {
  const portfolioProjects = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200",
      title: "DECEUNINCK",
      event: "FRONTALE 2024",
      location: "Germany",
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200",
      title: "ALUPROF",
      event: "BAU 2025",
      location: "Munich",
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1200",
      title: "ANWIS",
      event: "R+T 2024",
      location: "Stuttgart",
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1200",
      title: "TEKNOS",
      event: "EXPO 2024",
      location: "Italy",
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=1200",
      title: "VELUX",
      event: "BUDMA 2025",
      location: "Poland",
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1497366858526-0766cadbe8fa?w=1200",
      title: "REHAU",
      event: "LIGHT 2024",
      location: "Frankfurt",
    },
    {
      id: 7,
      image: "https://images.unsplash.com/photo-1551739440-5dd934d3a94a?w=1200",
      title: "FAKRO",
      event: "FAIR 2024",
      location: "Europe",
    },
    {
      id: 8,
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200",
      title: "KOMMERLING",
      event: "TRADE 2025",
      location: "Germany",
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

      {/* Header */}
      <div className="flex justify-between items-center px-8 py-6">
        <div className="text-sm font-medium "></div>
        <div className="text-sm font-medium ">
         
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-8">
        {/* Title */}
        <div className="text-center mb-20">
          <h1 className="text-6xl md:text-8xl font-black mb-4">portfolio</h1>
          <p className="text-gray-600 tracking-wide">
            Smart Design Expo • Selected Projects
          </p>
        </div>

        {/* Masonry Grid */}
        <div
          className="
            grid grid-cols-1 md:grid-cols-4
            auto-rows-[180px]
            gap-6
            mb-32
          "
        >
          {portfolioProjects.map((project, index) => (
            <div
              key={project.id}
              className={`${layout[index % layout.length]} group relative overflow-hidden rounded-xl shadow-lg cursor-pointer`}
            >
              {/* Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />

              {/* Overlay */}
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
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <p className="text-sm text-gray-200">{project.event}</p>
                  <p className="text-xs text-gray-300">{project.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default PortfolioUI;
