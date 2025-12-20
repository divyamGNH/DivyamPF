import MaskLayer from "../components/MaskLayer";

function ProjectBlock({ name, link }) {
  return (
    <div>
      <div
        className="
          flex flex-row justify-between items-center
          px-60 sm:px-10 md:px-16 lg:px-24
        "
      >
        <p className="text-5xl sm:text-6xl md:text-8xl font-extrabold uppercase">
          {name}
        </p>

        <div className="flex gap-4">
          <a href={link} target="_blank" rel="noopener noreferrer">
            <img
              src="/github.svg"
              alt="GitHub"
              className="h-8 w-8 sm:h-10 sm:w-10"
            />
          </a>
        </div>
      </div>

      <hr className="opacity-30" />
    </div>
  );
}

const TopProjects = () => {
  return (
    <div className="relative w-full max-w-full overflow-x-hidden bg-[#0E0E0E] text-[#C7B99B]">
      
      {/* SCALE WRAPPER (phone only) */}
      <div className="scale-[0.85] sm:scale-100 origin-top">
        
        <p
          className="
            text-xl sm:text-2xl
            px-6 sm:px-10 md:px-16 lg:px-24
            mb-10 tracking-widest
          "
        >
          TOP PROJECTS
        </p>

        <div>
          <hr className="opacity-30" />

          <ProjectBlock name="CONNECTLY" link="https://youtube.com" />
          <ProjectBlock name="PROJECT NAME" link="https://youtube.com" />
          <ProjectBlock name="PROJECT NAME" link="https://youtube.com" />
          <ProjectBlock name="PROJECT NAME" link="https://youtube.com" />

        </div>
      </div>
    </div>
  );
};

export default TopProjects;
