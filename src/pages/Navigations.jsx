const Navigations = () => {
  return (
    <div className="text-[#C7B99B]">
      <div className="fixed flex flex-col tracking-tighter right-10 top-10 gap-0.8 z-50">
        <a href="/">HOME</a>
        <a href="/about">ABOUT</a>
        <a href="/projects">PROJECTS</a>
        <a
          href="#footer"
          onClick={e => {
            e.preventDefault();
            const footer = document.getElementById('footer');
            if (footer) {
              // Custom smooth scroll with slower speed
              const targetY = footer.getBoundingClientRect().top + window.pageYOffset;
              const startY = window.pageYOffset;
              const distance = targetY - startY;
              const duration = 1200; // 1.2 seconds
              let startTime = null;

              function animateScroll(currentTime) {
                if (!startTime) startTime = currentTime;
                const timeElapsed = currentTime - startTime;
                const progress = Math.min(timeElapsed / duration, 1);
                // Ease in-out
                const ease = progress < 0.5
                  ? 2 * progress * progress
                  : -1 + (4 - 2 * progress) * progress;
                window.scrollTo(0, startY + distance * ease);
                if (timeElapsed < duration) {
                  requestAnimationFrame(animateScroll);
                }
              }
              requestAnimationFrame(animateScroll);
            }
          }}
        >CONTACT</a>
      </div>
    </div>
  );
};

export default Navigations;
