import { animate } from "framer-motion";

const Navigations = () => {
  const handleScroll = () => {
    const footer = document.getElementById("footer");
    if (footer) {
      const targetY = footer.getBoundingClientRect().top + window.pageYOffset;

      animate(window.scrollY, targetY, {
        duration: 1.2,
        ease: [0.42, 0, 0.58, 1], // easeInOut (cubic-bezier curve)

        //This line actually carries the animation visually like updates the animation frame by frame.
        onUpdate: (latest) => window.scrollTo(0, latest),
      });
    }
  };

  return (
    <div className="text-[#C7B99B]">
      <div className="fixed flex flex-col tracking-tighter right-8 top-5 gap-0.8 z-50">
        <a href="/">HOME</a>
        <a href="/about">ABOUT</a>
        <a href="/projects">PROJECTS</a>
        <a onClick={ handleScroll}>
          CONTACT
        </a>
      </div>
    </div>
  );
};

export default Navigations;
