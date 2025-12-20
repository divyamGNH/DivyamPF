import { useEffect } from "react";

function Projects() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const projects = [
    {
      title: "CONNECTLY",
      subtitle: "Real-time video chat platform",
      stack: "WebRTC · Socket.IO · Node · React",
      year: "2024",
    },
    {
      title: "TASKFLOW",
      subtitle: "Role-based backend system",
      stack: "Spring Boot · JWT · MySQL",
      year: "2024",
    },
    {
      title: "PORTFOLIO",
      subtitle: "Personal site, no templates harmed",
      stack: "React · Tailwind · Motion",
      year: "2025",
    },
  ];

  return (
    <div className="relative min-h-[100svh] w-full bg-[#0E0E0E] text-[#C7B99B] font-[Questrial] overflow-x-hidden">

      {/* PAGE TITLE */}
      <div className="pt-32 pb-24 px-6 sm:px-12 md:px-24">
        <p className="tracking-widest text-sm mb-6">
          SELECTED WORK
        </p>

        <h1 className="font-extrabold leading-[48px] sm:leading-[72px] md:leading-[96px]
                       text-[42px] sm:text-[64px] md:text-[96px]">
          PROJECTS
        </h1>
      </div>

      {/* PROJECT LIST */}
      <div className="flex flex-col gap-24 px-6 sm:px-12 md:px-24 pb-32">
        {projects.map((project, i) => (
          <div
            key={i}
            className="group cursor-pointer transition-all duration-300"
          >
            {/* YEAR */}
            <p className="text-xs tracking-widest mb-3 opacity-60">
              {project.year}
            </p>

            {/* TITLE */}
            <h2
              className="
                font-extrabold
                text-[36px] sm:text-[56px] md:text-[80px]
                leading-[40px] sm:leading-[64px] md:leading-[88px]
                transition-all duration-300
                group-hover:translate-x-2
              "
            >
              {project.title}
            </h2>

            {/* UNDERLINE */}
            <div className="h-[1px] w-0 bg-[#E74C3C] mt-4 transition-all duration-300 group-hover:w-32" />

            {/* META */}
            <div className="mt-6 max-w-xl">
              <p className="text-sm sm:text-base mb-2 opacity-90">
                {project.subtitle}
              </p>

              <p className="text-xs sm:text-sm tracking-wide opacity-60">
                {project.stack}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* FOOTER STATEMENT */}
      <div className="px-6 sm:px-12 md:px-24 pb-20">
        <p className="text-sm tracking-wide opacity-50 max-w-md">
          No filler projects.  
          Everything here broke at least once before working.
        </p>
      </div>
    </div>
  );
}

export default Projects;
