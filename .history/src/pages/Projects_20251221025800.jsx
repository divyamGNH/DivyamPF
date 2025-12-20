function Projects() {
  return (
    <div className="min-h-[100svh] bg-[#0E0E0E] text-[#C7B99B] font-[Questrial] px-6 sm:px-12 md:px-24 pt-28 pb-32">

      {/* INTRO */}
      <div className="max-w-2xl mb-28">
        <p className="tracking-widest text-xs mb-6 opacity-70">
          PROJECTS
        </p>

        <h1 className="font-extrabold text-[36px] sm:text-[48px] leading-tight mb-6">
          I build real-time systems,  
          backend-heavy applications,  
          and clean interfaces.
        </h1>

        <p className="text-sm opacity-70">
          Mostly focused on performance, scalability, and systems that
          don’t fall apart under load.
        </p>
      </div>

      {/* SECTION 1 */}
      <section className="mb-24">
        <p className="text-xs tracking-widest mb-8 opacity-60">
          REAL-TIME / SYSTEMS
        </p>

        <Project
          title="Connectly"
          description="Random video chat platform with real-time signaling and media streams."
          stack="WebRTC · Socket.IO · Node · React"
          year="2024"
        />
      </section>

      {/* SECTION 2 */}
      <section className="mb-24">
        <p className="text-xs tracking-widest mb-8 opacity-60">
          BACKEND / INFRASTRUCTURE
        </p>

        <Project
          title="TaskFlow Backend"
          description="Role-based backend with authentication, authorization, and layered architecture."
          stack="Spring Boot · Spring Security · MySQL"
          year="2024"
        />
      </section>

      {/* SECTION 3 */}
      <section>
        <p className="text-xs tracking-widest mb-8 opacity-60">
          FRONTEND / PERSONAL
        </p>

        <Project
          title="Portfolio"
          description="Minimal portfolio focused on typography, interaction, and intent."
          stack="React · Tailwind"
          year="2025"
        />
      </section>
    </div>
  );
}

function Project({ title, description, stack, year }) {
  return (
    <div className="group mb-14">
      <div className="flex items-baseline justify-between mb-2">
        <h2 className="font-semibold text-[22px] sm:text-[26px]">
          {title}
        </h2>
        <span className="text-xs opacity-50">
          {year}
        </span>
      </div>

      <p className="text-sm opacity-80 mb-2 max-w-xl">
        {description}
      </p>

      <p className="text-xs tracking-wide opacity-50">
        {stack}
      </p>

      {/* underline */}
      <div className="h-[1px] w-0 bg-[#E74C3C] mt-4 transition-all duration-300 group-hover:w-20" />
    </div>
  );
}

export default Projects;
