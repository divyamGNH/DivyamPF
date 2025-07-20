const timeLine = () => {
  return (
    <div className="relative border-l border-[#C7B99B] ml-4">
      {/* Item 1 */}
      <div className="mb-10 ml-6">
        <div className="absolute w-3 h-3 bg-[#C7B99B] rounded-full -left-1.5 top-1.5"></div>
        <h3 className="text-[#C7B99B] font-semibold">2022</h3>
        <p className="text-[#C7B99B]">Started coding</p>
      </div>

      {/* Item 2 */}
      <div className="mb-10 ml-6">
        <div className="absolute w-3 h-3 bg-[#C7B99B] rounded-full -left-1.5 top-1.5"></div>
        <h3 className="text-[#C7B99B] font-semibold">2023</h3>
        <p className="text-[#C7B99B]">Built first full-stack project</p>
      </div>

      {/* Item 3 */}
      <div className="mb-10 ml-6">
        <div className="absolute w-3 h-3 bg-[#C7B99B] rounded-full -left-1.5 top-1.5"></div>
        <h3 className="text-[#C7B99B] font-semibold">2024</h3>
        <p className="text-[#C7B99B]">Contributed to Open Source</p>
      </div>

      {/* Item 4 */}
      <div className="ml-6">
        <div className="absolute w-3 h-3 bg-[#C7B99B] rounded-full -left-1.5 top-1.5"></div>
        <h3 className="text-[#C7B99B] font-semibold">2025</h3>
        <p className="text-[#C7B99B]">Building clean, scalable apps</p>
      </div>
    </div>
  );
};

export default timeLine;
