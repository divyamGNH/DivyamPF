const Timeline = () => {
  const items = [
    { year: "2022", text: "Started coding" },
    { year: "2023", text: "Built first full-stack project" },
    { year: "2024", text: "Contributed to Open Source" },
    { year: "2025", text: "Building clean, scalable apps" },
  ];

  return (
    // <div className="relative border-l ml-4 flex flex-col">
      <section class="min-h-screen flex justify-center pt-20">
        <div class="w-80">
          <h2 class="text-xl text-[#C7B99B] mb-7">Recent Updates</h2>
          <ul>
            <li class="relative flex gap-6 pb-5">
              <div class="before:absolute before:left-[5.5px] before:h-full before:w-[1px] before:bg-[#C7B99B] relative">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  class="text-[#C7B99B]"
                >
                  <circle cx="8" cy="8" r="8" fill="#C7B99B" />
                </svg>
              </div>

              <div class="text-sm text-[#C7B99B]">
                <p>27.08.2022</p>
                <p class="mt-2">Started coding</p>
              </div>
            </li>

            <li class="relative flex gap-6 pb-5">
              <div class="before:absolute before:left-[5.5px] before:h-full before:w-[1px] before:bg-[#C7B99B] relative">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  class="text-[#C7B99B]"
                >
                  <circle cx="8" cy="8" r="8" fill="#C7B99B" />
                </svg>
              </div>
              <div class="text-sm text-[#C7B99B]">
                <p>15.09.2023</p>
                <p class="mt-2">Built first full-stack project</p>
              </div>
            </li>

            <li class="relative flex gap-6 pb-5">
              <div class="before:absolute before:left-[5.5px] before:h-full before:w-[1px] before:bg-[#C7B99B] relative">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  class="text-[#C7B99B]"
                >
                  <circle cx="8" cy="8" r="8" fill="#C7B99B" />
                </svg>
              </div>
              <div class="text-sm text-[#C7B99B]">
                <p>20.04.2024</p>
                <p class="mt-2">Contributed to Open Source</p>
              </div>
            </li>

            <li class="relative flex gap-6 pb-5">
              <div class="before:absolute before:left-[5.5px] before:h-full before:w-[1px] before:bg-[#C7B99B] relative">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  class="text-[#C7B99B]"
                >
                  <circle cx="8" cy="8" r="8" fill="#C7B99B" />
                </svg>
              </div>
              <div class="text-sm text-[#C7B99B]">
                <p>10.02.2025</p>
                <p class="mt-2">Building clean, scalable apps</p>
              </div>
            </li>
          </ul>
        </div>
      </section>
    // </div>
  );
};

export default Timeline;
