// Helper function to render icons
function renderIcons(icons) {
  return icons.map((icon, index) => (
    <a
      key={index}
      href={icon.link}
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src={icon.src}
        alt={icon.alt || "icon"}
        className="h-10 w-10 sm:h-12 sm:w-12"
      />
    </a>
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
      name: "Frontend",
      icons: [
        { src: "/reactIcon.svg", link: "https://reactjs.org/", alt: "React" },
        { src: "/jsIcon.svg", link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript", alt: "JavaScript" },
        { src: "/framerIcon.svg", link: "https://www.framer.com/motion/", alt: "Framer Motion" },
        { src: "/cssIcon.svg", link: "https://developer.mozilla.org/en-US/docs/Web/CSS", alt: "CSS" },
        { src: "/htmlIcon.svg", link: "https://developer.mozilla.org/en-US/docs/Web/HTML", alt: "HTML" },
      ],
    },
    {
      name: "Backend",
      icons: [
        { src: "/nodeIcon.svg", link: "https://nodejs.org/", alt: "Node.js" },
        { src: "/expressIcon.svg", link: "https://expressjs.com/", alt: "Express.js" },
        { src: "/npmIcon.svg", link: "https://www.npmjs.com/", alt: "npm" },
      ],
    },
    {
      name: "Design",
      icons: [
        { src: "/figmaIcon.svg", link: "https://www.figma.com/", alt: "Figma" },
        { src: "/canvaIcon.svg", link: "https://www.canva.com/", alt: "Canva" },
      ],
    },
    {
      name: "Databases",
      icons: [
        { src: "/mongodbIcon.svg", link: "https://www.mongodb.com/", alt: "MongoDB" },
        { src: "/postgresIcon.svg", link: "https://www.postgresql.org/", alt: "PostgreSQL" },
      ],
    },
    {
      name: "Version Control",
      icons: [
        { src: "/github.svg", link: "https://github.com/", alt: "GitHub" },
        { src: "/gitIcon.svg", link: "https://git-scm.com/", alt: "Git" },
      ],
    },
    {
      name: "Languages",
      icons: [
        { src: "/javaIcon.svg", link: "https://www.oracle.com/java/", alt: "Java" },
        { src: "/pythonIcon.svg", link: "https://www.python.org/", alt: "Python" },
        { src: "/jsIcon.svg", link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript", alt: "JavaScript" },
        { src: "/cppIcon.svg", link: "https://isocpp.org/", alt: "C++" },
      ],
    },
    // {
    //   name: "Libraries",
    //   icons: [
    //     { src: "/numpyIcon.svg", link: "https://numpy.org/", alt: "NumPy" },
    //     { src: "/pandasIcon.svg", link: "https://pandas.pydata.org/", alt: "Pandas" },
    //     { src: "/matplotlibIcon.svg", link: "https://matplotlib.org/", alt: "Matplotlib" },
    //   ],
    // },
    {
      name: "Real Time",
      icons: [
        { src: "/javaIcon.svg", link: "https://www.oracle.com/java/", alt: "Java" },
        { src: "/pythonIcon.svg", link: "https://www.python.org/", alt: "Python" },
        { src: "/jsIcon.svg", link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript", alt: "JavaScript" },
        { src: "/cppIcon.svg", link: "https://isocpp.org/", alt: "C++" },
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
