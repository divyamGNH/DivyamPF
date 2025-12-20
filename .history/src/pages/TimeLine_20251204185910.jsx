const TimelineItem = ({ date, text }) => {
  return (
    <li className="relative grid grid-cols-[120px_auto] gap-8 py-8">

      {/* Left date */}
      <div className="text-right text-[#C7B99B] text-sm md:text-base opacity-80 pr-4">
        {date}
      </div>

      {/* Dot + Text */}
      <div className="relative">
        {/* DOT */}
        <span className="absolute -left-[11px] top-1 h-5 w-5 rounded-full bg-[#C7B99B]" />

        {/* TEXT */}
        <p className="ml-6 text-[#C7B99B] text-sm md:text-lg leading-relaxed">
          {text}
        </p>
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
      <div className="relative w-full max-w-3xl lg:max-w-4xl">

        {/* SINGLE BACKGROUND LINE */}
        <span className="absolute left-[133px] top-0 bottom-0 w-[2px] bg-[#C7B99B]/40" />

        <h2 className="text-3xl lg:text-4xl text-[#C7B99B] mb-12 font-light">
          Recent Updates
        </h2>

        <ul>
          {items.map((item, i) => (
            <TimelineItem
              key={i}
              date={item.date}
              text={item.text}
            />
          ))}
        </ul>

      </div>
    </section>
  );
};

export default Timeline;
