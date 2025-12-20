const TimelineItem = ({ date, text, isLast }) => {
  return (
    <li className="relative pb-16 grid grid-cols-[120px_auto] gap-8">

      {/* DATE LEFT */}
      <div className="text-[#C7B99B] text-sm md:text-base opacity-80 text-right pr-4">
        {date}
      </div>

      {/* RIGHT SIDE: DOT + LINE + TEXT */}
      <div className="relative">

        {/* Line */}
        {!isLast && (
          <span className="absolute left-[10px] top-5 h-full w-[2px] bg-[#C7B99B]/40" />
        )}

        {/* Dot */}
        <span
          className="
            absolute left-0 top-3
            h-5 w-5 rounded-full bg-[#C7B99B]
          "
        />

        {/* TEXT */}
        <div className="ml-10 text-[#C7B99B]">
          <p className="text-sm md:text-lg leading-relaxed">{text}</p>
        </div>
      </div>
    </li>
  );
};

const Timeline = () => {
  const items = [
    { date: "27.08.2022", text: "Started coding" },
    { date: "15.09.2023", text: "Built first full-stack project" },
    { date: "20.04.2024", text: "Contributed to Open Source" },
    { date: "10.02.2025", text: "Building clean, scalable apps" },
  ];

  return (
    <section className="min-h-screen flex justify-center pt-20 px-4">
      <div className="w-full max-w-2xl md:max-w-3xl lg:max-w-4xl">

        <h2 className="text-2xl md:text-3xl lg:text-4xl text-[#C7B99B] mb-12 font-light tracking-wide">
          Recent Updates
        </h2>

        <ul className="space-y-4">
          {items.map((item, i) => (
            <TimelineItem
              key={i}
              date={item.date}
              text={item.text}
              isLast={i === items.length - 1}
            />
          ))}
        </ul>

      </div>
    </section>
  );
};

export default Timeline;
