const Socials = () => {
  return (
    <div>
      <div className="fixed bottom-5 left-5 flex flex-col gap-4.5 z-50 size-max">
        <a href="https://www.instagram.com/_divyamk15_/" target="_blank" rel="noopener noreferrer">
          <img src="/instaIcon.svg" alt="Instagram" className="gap-4.5 size-10"/>
        </a>
        <a href="https://www.linkedin.com/in/divyam-khandelwal-b54594338/" target="_blank" rel="noopener noreferrer">
          <img src="/linkedinIcon.svg" alt="LinkedIn" className="gap-4.5 size-10"/>
        </a>
        <a href="http://github.com/divyamGNH" target="_blank" rel="noopener noreferrer">
          <img src="/github.svg" alt="GitHub" className="gap-4.5 size-10"/>
        </a>
      </div>
    </div>
  );
};

export default Socials;
