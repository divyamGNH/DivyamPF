// Helper function to render icons
function renderIcons(icons) {
  return icons.map((icon, index) => (
    <div
      key={index}
      className="
        h-10 w-10 sm:h-12 sm:w-12
        flex items-center justify-center
      "
    >
      <img
        src={icon.src}
        alt={icon.alt || "icon"}
        className="h-full w-full object-contain"
      />
    </div>
  ));
}

function StackBlock({ name, icons }) {
  return (
    <div>
      <div
        className="
          flex flex-row justify-between items-center
          px-6 sm:px-10 md:px-16 lg:px-24
          py-5
        "
      >
        {/* STACK NAME — hidden on phones */}
        <p
          className="
            hidden sm:block
            max-w-[60%]
            text-4xl sm:text-5xl md:text-6xl
            font-extrabold uppercase
            tracking-tight leading-tight
          "
        >
          {name}
        </p>

        {/* ICONS — always visible */}
        <div className="flex gap-4 shrink-0">
          {renderIcons(icons)}
        </div>
      </div>

      {/* SEPARATOR */}
      <hr className="opacity-30 mx-6 sm:mx-10 md:mx-16 lg:mx-24" />
    </div>
  );
}

const TechStack = () => {
  const techStacks = [
    {
      name: "Languages",
      icons: [
        { src: "/jsIcon.svg", alt: "JavaScript" },
        { src: "/tsIcon.svg", alt: "TypeScript" },
        { src: "/javaIcon.svg", alt: "Java" },
        { src: "/cppIcon.svg", alt: "C++" },
      ],
    },
    {
      name: "Frontend",
      icons: [
        { src: "/reactIcon.svg", alt: "React" },
        { src: "/tailwindIcon.svg", alt: "HTML" },
        { src: "/gsapIcon.svg", alt: "GSAP" },
        { src: "/framerIcon.svg", alt: "Framer Motion" },
        { src: "/cssIcon.svg", alt: "CSS" },
        { src: "/htmlIcon.svg", alt: "HTML" },
      ],
    },
    {
      name: "Backend",
      icons: [
        { src: "/nodeIcon.svg", alt: "Node.js" },
        { src: "/expressIcon.svg", alt: "Express.js" },
        { src: "/socketioIcon.svg", alt: "Socket.io" },
        { src: "/webRTCIcon.svg", alt: "WebRTC" },
        { src: "/zodIcon.svg", alt: "Zod" },
      ],
    },
    {
      name: "Design",
      icons: [
        { src: "/figmaIcon.svg", alt: "Figma" },
        { src: "/canvaIcon.svg", alt: "Canva" },
      ],
    },
    {
      name: "Databases",
      icons: [
        { src: "/mongodbIcon.svg", alt: "MongoDB" },
        { src: "/postgresIcon.svg", alt: "PostgreSQL" },
      ],
    },
    {
      name: "TOOLS",
      icons: [
        { src: "/github.svg", alt: "GitHub" },
        { src: "/gitIcon.svg", alt: "Git" },
        { src: "/dockerIcon.svg", alt: "Docker" },
      ],
    },
  ];

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
          TECHNOLOGIES USED
        </p>

        <div>
          <hr className="opacity-30 mx-6 sm:mx-10 md:mx-16 lg:px-24" />

          {techStacks.map((stack, index) => (
            <StackBlock
              key={index}
              name={stack.name}
              icons={stack.icons}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStack;
