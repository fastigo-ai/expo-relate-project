import { useParams } from "react-router-dom";
import projects from "../data/projects";
import { About } from "../pages/About";
const AboutSectionDetail = () => {
  const { id } = useParams();

  const projectIndex = parseInt(id, 10);
  const project = projects[projectIndex];

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center text-2xl">
        Project not found
      </div>
    );
  }

  return (
    <div className="bg-white text-white min-h-screen">

      {/* HERO */}
      <div
        className="h-[90vh] bg-cover bg-center relative flex items-end"
        style={{ backgroundImage: `url(${project.heroImage})` }}
      >
        <div className="absolute inset-0 bg-black/70" />

        <div className="relative p-20 max-w-5xl">
          <p className="uppercase tracking-[0.4em] text-gray-400">
            {project.category}
          </p>
          <h1 className=" font-black text-6xl md:text-8xl  mt-4">
            {project.title}
          </h1>
          <p className="mt-6 text-gray-300 max-w-xl">
            {project.intro}
          </p>
        </div>
      </div>

      {/* SECTIONS */}
      <div className="max-w-7xl mx-auto py-32 px-12 space-y-40">
        {project.sections.map((section, index) => (
          <div
            key={index}
            className="grid md:grid-cols-2 gap-24 items-center"
          >
            {/* Image */}
            <div className={index % 2 === 1 ? "md:order-2" : ""}>
  <div className="relative group overflow-hidden rounded-xl">
    
    <div className="absolute -inset-6 bg-gradient-to-r from-purple-150 to-blue-100 opacity-40 blur-2xl group-hover:opacity-70 transition"></div>
    
    <img
      src={section.image}
      alt=""
      className="
        relative z-10 
        rounded-xl shadow-2xl
        transform transition-transform duration-500 ease-out
        group-hover:scale-110
      "
    />
  </div>
</div>


            {/* Text */}
            <div className={index % 2 === 1 ? "md:order-1" : ""}>
              <h2 className="text-5xl font-bold mb-6 text-[#862422]">
                {section.title}
              </h2>
              <p className="text-gray-400 text-xl leading-relaxed">
                {section.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutSectionDetail;
