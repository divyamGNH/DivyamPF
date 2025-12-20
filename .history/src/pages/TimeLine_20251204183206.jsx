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
          {items.map((item, index) => (
            <TimelineItem
              key={index}
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
