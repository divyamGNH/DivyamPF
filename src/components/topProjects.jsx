function ProjectBlock(props) {
  return (
    <div className="flex flex-row justify-between items-center">
      <p className="text-5xl">{props.name}</p>

      <div className="flex gap-4">
        <a href={props.link} target="_blank" rel="noopener noreferrer">
          <img src="/github.svg" alt="GitHub" className="h-10 w-10" />
        </a>
      </div>
    </div>
  );
}

const TopProjects = () => {
  return (
    <div className="text-[#C7B99B] px-50 mb-10">
      <div>
        <ProjectBlock
        name = "NAME"
        link = "https://youtube.com"
        />
      </div>
    </div>
  );
};

export default TopProjects;
