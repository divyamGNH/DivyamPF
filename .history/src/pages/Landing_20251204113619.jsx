import GlobalMask from "../components/GlobalMask";

function Landing() {
  return (
    <div className="relative h-screen w-full bg-[#0E0E0E]">

      {/* Hidden content INSIDE the mask */}
      <GlobalMask>
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <p className="text-black">DIVYAM</p>
          <h1 className="text-black">
            HIDING <br/> BAD <br/> CODE <br/> SINCE <br/> 2024
          </h1>
        </div>
      </GlobalMask>

      {/* Normal content ABOVE mask */}
      <div className="absolute inset-0 z-[5] flex items-center justify-center text-center">
        <p className="text-[#C7B99B]">DIVYAM</p>
        <h1 className="text-[#C7B99B]">
          MAKING <br/> GOOD <br/> CODE <br/> SINCE 2024
        </h1>
      </div>

    </div>
  );
}

export default Landing;
