const TimelineItem = ({ date, text, isLast }) => {
  return (
    <li className="relative flex gap-6 pb-5">

      {/* Dot + Line */}
      <div
        className={
          "before:absolute before:left-[5.5px] before:w-[1px] before:bg-[#C7B99B] " +
          (isLast ? "before:h-0" : "before:h-full")
        }
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          className="text-[#C7B99B]"
        >
          <circle cx="8" cy="8" r="8" fill="#C7B99B" />
        </svg>
      </div>

      {/* Text */}
      <div className="text-sm text-[#C7B99B]">
        <p>{date}</p>
        <p className="mt-2">{text}</p>
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
        <h2 className="text-xl text-[#C7B99B] mb-7">Recent Updates</h2>

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
