import MaskLayer from '../components/MaskLayer';

function ProjectBlock(props) {
  return (
    <div>
      <div className="flex flex-row justify-between items-center px-50">
        <p className="text-8xl font-extrabold ml-0 pl-0 uppercase">{props.name}</p>

        <div className="flex gap-4">
          <a href={props.link} target="_blank" rel="noopener noreferrer">
            <img src="/github.svg" alt="GitHub" className="h-10 w-10" />
          </a>
        </div>
      </div>

      <hr className="opacity-30" />
    </div>
  );
}

const TopProjects = () => {
  return (
    <div className="text-[#C7B99B]">

      <p className="text-2xl text-[#C7B99B] px-50 mb-10 tracking-widest">TOP PROJECTS</p>
      <div>
        <hr className="opacity-30" />
        <ProjectBlock name="NAME" link="https://youtube.com" />
        <ProjectBlock name="NAME" link="https://youtube.com" />
        <ProjectBlock name="NAME" link="https://youtube.com" />
        <ProjectBlock name="NAME" link="https://youtube.com" />
      </div>
    </div>
  );
};

export default TopProjects;
