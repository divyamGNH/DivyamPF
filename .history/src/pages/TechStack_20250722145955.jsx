// Helper function to render icons
function renderIcons(icons) {
  return icons.map((icon, index) => (
    <a
      key={index}
      href={icon.link}
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src={icon.src} alt={icon.alt || "icon"} className="h-10 w-10" />
    </a>
  ));
}

function StackBlock(props) {
  return (
    <div>
      <div className="flex flex-row justify-between items-center px-50">
        <p className="text-7xl font-extrabold ml-0 pl-0 uppercase pt-1 pb-1">{props.name}</p>

        <div className="flex gap-4">
          {renderIcons(props.icons)}
        </div>
      </div>
      <hr className="opacity-30" />
    </div>
  );
}

const TechStack = () => {
  const techStacks = [
    {
      name: "FrontEnd",
      icons: [
        { src: "/reactIcon.svg", link: "https://reactjs.org/", alt: "React" },
        { src: "/jsIcon.svg", link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript", alt: "JavaScript" },
        { src: "/framerIcon.svg", link: "https://www.framer.com/motion/", alt: "Framer Motion" },
        { src: "/cssIcon.svg", link: "https://developer.mozilla.org/en-US/docs/Web/CSS", alt: "CSS" },
        { src: "/htmlIcon.svg", link: "https://developer.mozilla.org/en-US/docs/Web/HTML", alt: "HTML" },
      ],
    },
    {
      name: "BackEnd",
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
      name: "DataBases",
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
    {
      name: "Libraries",
      icons: [
        { src: "/numpyIcon.svg", link: "https://numpy.org/", alt: "NumPy" },
        { src: "/pandasIcon.svg", link: "https://pandas.pydata.org/", alt: "Pandas" },
        { src: "/matplotlibIcon.svg", link: "https://matplotlib.org/", alt: "Matplotlib" },
      ],
    },
    
    // Add more stacks as needed
  ];

  return (
    <div className="text-[#C7B99B]">
      <p className="text-2xl text-[#C7B99B] px-50 mb-10 tracking-widest">
        TECHNOLOGY USED
      </p>
      <div>
        <hr className="opacity-30" />
        {techStacks.map((stack, index) => (
          <StackBlock key={index} name={stack.name} icons={stack.icons} />
        ))}
      </div>
    </div>
  );
};

export default TechStack;
