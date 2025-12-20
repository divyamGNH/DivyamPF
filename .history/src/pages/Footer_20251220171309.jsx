import React from "react";

function Footer() {
  return (
    <div
      id="footer"
      className="relative w-full max-w-full overflow-x-hidden bg-[#0E0E0E] text-[#C7B99B]"
    >
      {/* SCALE WRAPPER (phone only) */}
      <div className="scale-[0.9] sm:scale-100 origin-top">

        <div
          className="
            px-6 sm:px-10 md:px-16 lg:px-24
            mb-16
            text-base
          "
        >
          {/* TITLE */}
          <p className="mb-12 tracking-widest text-sm sm:text-base">
            CONNECT
          </p>

          {/* CONTENT */}
          <div className="flex flex-row justify-between gap-10">

            {/* COLUMN 1 */}
            <div className="flex flex-col gap-3">
              <a href="#" className="text-base hover:opacity-80 transition">
                Instagram
              </a>
              <a href="#" className="text-base hover:opacity-80 transition">
                Twitter
              </a>
              <a href="#" className="text-base hover:opacity-80 transition">
                GitHub
              </a>
            </div>

            {/* COLUMN 2 */}
            <div className="flex flex-col gap-4">
              <a href="#" className="text-base hover:opacity-80 transition">
                LinkedIn
              </a>
              <a href="#" className="text-base hover:opacity-80 transition">
                YouTube
              </a>
              <a href="#" className="text-base hover:opacity-80 transition">
                Blog
              </a>
            </div>

            {/* COLUMN 3 */}
            <div className="flex flex-col gap-4">
              <p className="text-base">Email</p>
              <p className="text-base">Phone</p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
