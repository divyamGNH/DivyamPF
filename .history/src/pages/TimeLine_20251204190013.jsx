const TimelineItem = ({ date, text, isLast }) => {
  return (
    <li className="relative grid grid-cols-[120px_auto] gap-8">

      {/* LEFT: DATE */}
      <div className="text-[#C7B99B] text-sm md:text-base opacity-80 text-right pr-4 pt-2">
        {date}
      </div>

      {/* RIGHT SIDE DOT + LINE + CONTENT */}
      <div className="relative pb-12">

        {/* FULL CONNECTED LINE - extends beyond container */}
        {!isLast && (
          <span className="absolute left-[11px] top-0 h-[calc(100%+1.5rem)] w-[2px] bg-[#C7B99B]/40" />
        )}

        {/* DOT */}
        <span
          className="
            absolute left-0 top-2
            h-5 w-5 rounded-full bg-[#C7B99B]
          "
        />

        {/* CONTENT */}
        <div className="ml-10 pt-2 text-[#C7B99B]">
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
    { date: "10.02.2025", text: "Building clean, scalable apps" },
  ];

  return (
    <section className="min-h-screen flex justify-center pt-20 px-4">
      <div className="w-full max-w-2xl md:max-w-3xl lg:max-w-4xl">

        <h2 className="text-2xl md:text-3xl lg:text-4xl text-[#C7B99B] mb-12 font-light tracking-wide">
          Recent Updates
        </h2>

        <ul className="space-y-6">
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