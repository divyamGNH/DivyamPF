import React from "react";

function Footer() {
  return (
    <div id="footer">
      <div className="text-[#C7B99B] px-50 mb-10 text-base">
        <p className="text-[#C7B99B] mb-10 text-base">CONNECT</p>
        <div className="flex flex-row justify-between">
          <div className="flex flex-col justify-center text-center">
            <a href="" className="text-base">Instagram</a>
            <a href="" className="text-base">Instagram</a>
            <a href="" className="text-base">Instagram</a>
          </div>

          <div className="flex flex-col">
            <a href="" className="text-base">Instagram</a>
            <a href="" className="text-base">Instagram</a>
            <a href="" className="text-base">Instagram</a>
          </div>

          <div className="flex flex-col">
            <p className="text-base">Email</p>
            <p className="text-base">Phone</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
