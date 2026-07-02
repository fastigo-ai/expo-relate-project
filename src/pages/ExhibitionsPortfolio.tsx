import React from "react";

const ExhibitionPortfolioUI = () => {
  

   const exhibitionProjects = [
    {
      id: 1,
      image: "https://res.cloudinary.com/dhfpgijhp/image/upload/v1770884428/Screenshot_2026-01-21_141136_ezcsrv.png",
      title: "AMRIT POLYCHEM",
      event: "PUTECH 2025",
      location: "India Expo Centre, Greater Noida, Near New Delhi, INDIA",
      boothSize: 78,
    },
    {
      id: 2,
      image: "https://res.cloudinary.com/dhfpgijhp/image/upload/v1770884553/Screenshot_2026-01-21_141737_obori1.png",
      title: "BAMS",
      event: "PUTECH 2025",
      location: "India Expo Centre, Greater Noida, Near New Delhi, INDIA",
      boothSize: 72,
    },
    {
      id: 3,
      image: "https://res.cloudinary.com/dhfpgijhp/image/upload/v1770884689/Screenshot_2026-01-21_143151_gb5qrv.png",
      title: "BAMS",
      event: "CABLE AND WIRE FAIR 2025",
      location: "Pragati Maidan Bharat Mandapam, New Delhi, India",
      boothSize: 40,
    },
    {
      id: 4,
      image: "https://res.cloudinary.com/dhfpgijhp/image/upload/v1770884881/Screenshot_2026-01-21_152031_wgozy3.png",
      title: "BHARAT ENTERPRISES",
      event: "IIFF 2023",
      location: "Pragati Maidan Bharat Mandapam, New Delhi, India",
      boothSize: 36,
    },
    {
      id: 5,
      image: "https://res.cloudinary.com/dhfpgijhp/image/upload/v1770884881/Screenshot_2026-01-21_152031_wgozy3.png",
      title: "DANFOSS",
      event: "ACREX 2025",
      location: "Bangalore International Exhibition Centre (BIEC), Bengaluru, India",
      boothSize: 117,
    },
    {
      id: 6,
      image: "https://res.cloudinary.com/dhfpgijhp/image/upload/v1770885024/Screenshot_2026-01-21_153755_exthcy.png",
      title: "DENSO",
      event: "BHARAT MOBILITY 2025",
      location: "Pragati Maidan Bharat Mandapam, New Delhi, India",
      boothSize: 120,
    },
    {
      id: 7,
      image: "https://res.cloudinary.com/dhfpgijhp/image/upload/v1770885077/Screenshot_2026-01-21_154100_ko6fmy.png",
      title: "DRY ALL",
      event: "ACREX 2025",
      location: "Bangalore International Exhibition Centre (BIEC), Bengaluru, India",
      boothSize: 42,
    },
    {
      id: 8,
      image: "https://res.cloudinary.com/dhfpgijhp/image/upload/v1770885256/Screenshot_2026-01-21_160149_cykwte.png",
      title: "GENUS",
      event: "ELECRAMA 2025",
      location: "India Expo Mart, Greater Noida, Delhi NCR, India",
      boothSize: 90,
    },
    {
      id: 9,
      image: "https://res.cloudinary.com/dhfpgijhp/image/upload/v1770885172/Screenshot_2026-01-21_161624_pvelpw.png",
      title: "GOOD ENOUGH",
      event: "IMTOS 2025",
      location: "Yashobhoomi Convention Centre, Dwarka, New Delhi, India",
      boothSize: 42,
    },
    {
      id: 10,
      image: "https://res.cloudinary.com/dhfpgijhp/image/upload/v1770885413/Screenshot_2026-01-21_162259_oszre0.png",
      title: "HIGHLY",
      event: "ACREX 2024",
      location: "India Expo Centre, Greater Noida, Near New Delhi, INDIA",
      boothSize: 72,
    },
    {
      id: 11,
      image: "https://res.cloudinary.com/dhfpgijhp/image/upload/v1770885541/Screenshot_2026-01-21_163153_rvvpdt.png",
      title: "HIGHLY",
      event: "ACREX 2025",
      location: "Bangalore International Exhibition Centre (BIEC), Bengaluru, India",
      boothSize: 96,
    },
    {
      id: 12,
      image: "",
      title: "KB POLYCHEM",
      event: "PUTECH 2025",
      location: "India Expo Centre, Greater Noida, Near New Delhi, INDIA",
      boothSize: 63,
    },
    {
      id: 13,
      image: "https://res.cloudinary.com/dhfpgijhp/image/upload/v1770885695/Screenshot_2026-01-21_164909_tfpw1z.png",
      title: "LUMIN EYE",
      event: "BHARAT MOBILITY 2025",
      location: "Yashobhoomi Convention Centre, Dwarka, New Delhi, India",
      boothSize: 52,
    },
    {
      id: 14,
      image: "https://res.cloudinary.com/dhfpgijhp/image/upload/v1770885815/Screenshot_2026-01-21_170356_aqibv3.png",
      title: "MUNTERS",
      event: "CPHI 2024",
      location: "India Expo Centre, Greater Noida, Near New Delhi, INDIA",
      boothSize: 72,
    },
    {
      id: 15,
      image: "https://res.cloudinary.com/dhfpgijhp/image/upload/v1770885875/Screenshot_2026-01-21_171356_kfcp0h.png",
      title: "MUNTERS",
      event: "CPHI 2025",
      location: "India Expo Centre, Greater Noida, Near New Delhi, INDIA",
      boothSize: 72,
    },
    {
      id: 16,
      image: "https://res.cloudinary.com/dhfpgijhp/image/upload/v1770885945/Screenshot_2026-01-21_170855_ycay34.png",
      title: "ONOMA",
      event: "ACREX 2024",
      location: "India Expo Centre, Greater Noida, Near New Delhi, INDIA",
      boothSize: 27,
    },
    {
      id: 17,
      image: "https://res.cloudinary.com/dhfpgijhp/image/upload/v1770886472/Screenshot_2026-01-21_171814_fb1c3d.png",
      title: "ONOMA",
      event: "ACREX 2025",
      location: "Bangalore International Exhibition Centre (BIEC), Bengaluru, India",
      boothSize: 27,
    },
    {
      id: 18,
      image: "https://res.cloudinary.com/dhfpgijhp/image/upload/v1770886532/Screenshot_2026-01-21_172119_zhywk6.png",
      title: "PELORUS",
      event: "MILIPOL 2025",
      location: "Yashobhoomi Convention Centre, Dwarka, New Delhi, India",
      boothSize: 45,
    },
    {
      id: 19,
      image: "https://res.cloudinary.com/dhfpgijhp/image/upload/v1770886612/Screenshot_2026-01-21_173652_rv4z3i.png",
      title: "RYMBAL",
      event: "IIFF 2024",
      location: "Pragati Maidan Bharat Mandapam, New Delhi, India",
      boothSize: 84,
    },
    {
      id: 20,
      image: "https://res.cloudinary.com/dhfpgijhp/image/upload/v1770891753/Screenshot_2026-01-21_174258_tggflj.png",
      title: "RYMBAL",
      event: "PUTECH 2023",
      location: "India Expo Centre, Greater Noida, Near New Delhi, INDIA",
      boothSize: 140,
    },
    {
      id: 21,
      image: "https://res.cloudinary.com/dhfpgijhp/image/upload/v1770891829/Screenshot_2026-01-21_174710_xpzrnx.png",
      title: "RYMBAL",
      event: "PUTECH 2025",
      location: "India Expo Centre, Greater Noida, Near New Delhi, INDIA",
      boothSize: 99,
    },
    {
      id: 22,
      image: "https://res.cloudinary.com/dhfpgijhp/image/upload/v1770891877/Screenshot_2026-01-21_175358_fdqegz.png",
      title: "SAFEREF",
      event: "ACREX 2024",
      location: "India Expo Centre, Greater Noida, Near New Delhi, INDIA",
      boothSize: 72,
    },
    {
      id: 23,
      image: "https://res.cloudinary.com/dhfpgijhp/image/upload/v1770891921/Screenshot_2026-01-21_175650_t95vry.png",
      title: "SAFEREF",
      event: "ACREX 2025",
      location: "Bangalore International Exhibition Centre (BIEC), Bengaluru, India",
      boothSize: 48,
    },
    {
      id: 24,
      image: "https://res.cloudinary.com/dhfpgijhp/image/upload/v1770892036/Screenshot_2026-01-21_180826_cjfv0g.png",
      title: "SAINT GOBIN",
      event: "IWE 2025",
      location: "KTPO Convention Centre, Whitefield, Bengaluru",
      boothSize: 32,
    },
    {
      id: 25,
      image: "https://res.cloudinary.com/dhfpgijhp/image/upload/v1770892116/Screenshot_2026-01-21_181338_mwffdg.png",
      title: "SAINT GOBIN",
      event: "STEEL CONSTRUCTION 2025",
      location: "Jio World Convention Centre",
      boothSize: 54,
    },
    {
      id: 26,
      image: "https://res.cloudinary.com/dhfpgijhp/image/upload/v1770892188/Screenshot_2026-01-21_181922_bvdsvf.png",
      title: "SCOPE INGREDIENTS",
      event: "CPHI EXPO 2025",
      location: "India Expo Centre, Greater Noida, Near New Delhi, INDIA",
      boothSize: 117,
    },
    {
      id: 27,
      image: "https://res.cloudinary.com/dhfpgijhp/image/upload/v1770892217/Screenshot_2026-01-21_182317_cd8dya.png",
      title: "SEMCO",
      event: "REI 2025",
      location: "India Expo Centre, Greater Noida, Near New Delhi, INDIA",
      boothSize: 90,
    },
    {
      id: 28,
      image: "https://res.cloudinary.com/dhfpgijhp/image/upload/v1770892272/Screenshot_2026-01-21_183022_bs1vwr.png",
      title: "SPACE WORLD",
      event: "IMC 2024",
      location: "Pragati Maidan Bharat Mandapam, New Delhi, India",
      boothSize: 233,
    },
    {
      id: 29,
      image: "https://res.cloudinary.com/dhfpgijhp/image/upload/v1770892352/Screenshot_2026-01-21_184010_ldpecy.png",
      title: "SPACE WORLD",
      event: "IMC 2025",
      location: "Yashobhoomi Convention Centre, Dwarka, New Delhi, India",
      boothSize: 233,
    },
    {
      id: 30,
      image: "https://res.cloudinary.com/dhfpgijhp/image/upload/v1770892540/Screenshot_2026-01-21_184224_ls6j9a.png",
      title: "SPACE WORLD",
      event: "IMC 2023",
      location: "Pragati Maidan Bharat Mandapam, New Delhi, India",
      boothSize: 209,
    },
    {
      id: 31,
      image: "https://res.cloudinary.com/dhfpgijhp/image/upload/v1770892597/Screenshot_2026-01-21_184737_ahyf1q.png",
      title: "SRF",
      event: "IIFF 2024",
      location: "Pragati Maidan Bharat Mandapam, New Delhi, India",
      boothSize: 72,
    },
    {
      id: 32,
      image: "https://res.cloudinary.com/dhfpgijhp/image/upload/v1770892622/Screenshot_2026-01-21_185246_thhtqv.png",
      title: "VEDA",
      event: "MILIPOL 2025",
      location: "Yashobhoomi Convention Centre, Dwarka, New Delhi, India",
      boothSize: 72,
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
                src={
                  project.image && project.image.trim() !== ""
                    ? project.image
                    : "https://via.placeholder.com/600x400?text=Expo+Project"
                }
                alt={project.title}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src =
                    "https://via.placeholder.com/600x400?text=Expo+Project";
                }}
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
  </div>
);

};

export default ExhibitionPortfolioUI;
