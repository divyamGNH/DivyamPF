import React from "react";

function Footer() {
  return (
    <div
      id="footer"
      className="relative w-full max-w-full overflow-x-hidden bg-[#0E0E0E] text-[#C7B99B] py-16 z-51"
    >
      <div className="flex flex-col items-center text-center gap-5">

        {/* TITLE */}
        <p className="tracking-widest text-md sm:text-base">
          CONNECT WITH ME
        </p>

        {/* SOCIAL ICONS */}
        <div className="flex items-center gap-">
          {/* Instagram */}
          <a href="#" className="hover:opacity-80 transition">
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="1" />
            </svg>
          </a>

          {/* Instagram (placeholder for LinkedIn / Email later) */}
          <a href="#" className="hover:opacity-80 transition">
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="1" />
            </svg>
          </a>

          {/* Instagram (placeholder) */}
          <a href="#" className="hover:opacity-80 transition">
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="1" />
            </svg>
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
