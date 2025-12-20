const TimelineItem = ({ date, text, isLast }) => {
  return (
    <li className="relative pl-8 pb-10 group">

      {/* Line */}
      {!isLast && (
        <span className="absolute left-[10px] top-4 h-full w-[2px] bg-[#C7B99B]/40" />
      )}

      {/* Dot */}
      <span
        className="
          absolute left-0 top-2 h-4 w-4 rounded-full 
          bg-[#C7B99B]
          shadow-[0_0_10px_2px_rgba(199,185,155,0.4)]
          group-hover:shadow-[0_0_14px_4px_rgba(199,185,155,0.7)]
          transition-all
        "
      />

      {/* Text */}
      <div className="text-[#C7B99B]">
        <p className="text-xs opacity-80">{date}</p>
        <p className="mt-2 text-sm leading-relaxed">{text}</p>
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
    <section className="min-h-screen flex justify-center pt-20">
      <div className="w-80">
        <h2 className="text-xl text-[#C7B99B] mb-7 font-light tracking-wide">
          Recent Updates
        </h2>

        <ul>
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
