function ProjectBlock({ name, link }) {
  return (
    <div>
      <div
        className="
          flex flex-row justify-between items-center
          px-6 sm:px-10 md:px-16 lg:px-24
          py-5 
        "
      >
        {/* PROJECT NAME */}
        <p
          className="
            max-w-[70%]
            text-4xl sm:text-5xl md:text-6xl
            font-extrabold uppercase
            tracking-tight leading-tight
          "
        >
          {name}
        </p>

        {/* ICON */}
        <div className="flex gap-4 shrink-0">
          <a href={link} target="_blank" rel="noopener noreferrer">
            <img
              src="/github.svg"
              alt="GitHub"
              className="h-8 w-8 sm:h-10 sm:w-10"
            />
          </a>
        </div>
      </div>

      {/* SEPARATOR */}
      <hr className="opacity-30 mx-6 sm:mx-10 md:mx-16 lg:mx-24" />
    </div>
  );
}

const TopProjects = () => {
  return (
    <div className="relative w-full max-w-full overflow-x-hidden bg-[#0E0E0E] text-[#C7B99B]">
      
      {/* SCALE WRAPPER (phone only) */}
      <div className="scale-[0.85] sm:scale-100 origin-top">

        {/* SECTION TITLE */}
        <p
          className="
            text-xl sm:text-2xl
            px-6 sm:px-10 md:px-16 lg:px-24
            mb-14 tracking-widest
          "
        >
          TOP PROJECTS
        </p>

        <div>
          <hr className="opacity-30 mx-6 sm:mx-10 md:mx-16 lg:mx-24" />

          <ProjectBlock name="CONNECTLY" link="https://youtube.com" />
          <ProjectBlock name="NAME" link="https://youtube.com" />
          <ProjectBlock name="NAME" link="https://youtube.com" />
          <ProjectBlock name="NAME" link="https://youtube.com" />

        </div>
      </div>
    </div>
  );
};

export default TopProjects;
