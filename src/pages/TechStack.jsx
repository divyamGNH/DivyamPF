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
        { src: "/github.svg", link: "https://github.com/react", alt: "GitHub" }, //html
        { src: "/github.svg", link: "https://github.com/react", alt: "GitHub" }, //css
        { src: "/github.svg", link: "https://github.com/react", alt: "GitHub" }, //js
        { src: "/github.svg", link: "https://github.com/react", alt: "GitHub" }, //framer
        { src: "/github.svg", link: "https://github.com/react", alt: "GitHub" }, //react
      ],
    },
    {
      name: "BackEnd",
      icons: [
        { src: "/github.svg", link: "https://github.com/nodejs", alt: "GitHub" }, //node
        { src: "/github.svg", link: "https://github.com/react", alt: "GitHub" }, //express
        { src: "/github.svg", link: "https://github.com/react", alt: "GitHub" }, //nodemailer
        { src: "/github.svg", link: "https://github.com/react", alt: "GitHub" }, //npm
        { src: "/github.svg", link: "https://github.com/react", alt: "GitHub" }, //axios
      ],
    },
    {
      name: "Design",
      icons: [
        { src: "/github.svg", link: "https://github.com/nodejs", alt: "GitHub" }, //node
        { src: "/github.svg", link: "https://github.com/react", alt: "GitHub" }, //Figma
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
