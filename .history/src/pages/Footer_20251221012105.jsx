function Footer() {
  return (
    <div
      id="footer"
      className="relative w-full max-w-full overflow-x-hidden bg-[#0E0E0E] text-[#C7B99B] py-16 z-1000"
    >
      <div className="flex flex-col items-center text-center gap-5">

        {/* TITLE */}
        <p className="tracking-widest text-md sm:text-base">
          CONNECT WITH ME
        </p>

        {/* SOCIAL ICONS */}
        <div className="flex items-center gap-4">
          <a href="#" className="hover:opacity-80 transition">
            <img src="./instaIcon.svg" alt="Instagram" className="w-7 h-7" />
          </a>

          <a href="#" className="hover:opacity-80 transition">
            <img src="./linkedinIcon.svg" alt="LinkedIn" className="w-7 h-7" />
          </a>

          <a href="mailto:divyamproff1521@gmail.com" className="hover:opacity-80 transition">
            <img src="./gmailIcon.svg" alt="Email" className="w-7 h-7" />
          </a>
        </div>

        {/* FOOTER NOTE */}
        <p className="text-sm opacity-70">
          Made with ❤️ by Divyam
        </p>

      </div>
    </div>
  );
}

export default Footer;
