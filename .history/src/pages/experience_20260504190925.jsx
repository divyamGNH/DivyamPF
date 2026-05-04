import { useEffect, useState } from "react";

function ExperienceCard({
  status,
  statusColor,
  role,
  company,
  duration,
  details,
  stack,
}) {
  return (
    <div
      className="
        block
        border border-[#2A2A2A]
        p-6 sm:p-8
        transition-colors duration-300
        hover:border-[#3A3A3A]
        hover:bg-[#121212]
      "
    >
      {/* STATUS */}
      <div className="flex items-center gap-4 mb-6">
        <span className={`w-2 h-2 rounded-full ${statusColor}`} />
        <p className="text-xs tracking-widest">{status}</p>
      </div>

      {/* TITLE ROW */}
      <div className="mb-6">
        <p className="text-sm opacity-60 mb-1">{company}</p>
        <h2 className="font-mono text-[20px] sm:text-[22px]">{role}</h2>
        <p className="text-xs opacity-50 mt-1">{duration}</p>
      </div>

      {/* DETAILS */}
      <ul className="space-y-2 text-sm opacity-80 mb-6 max-w-xl">
        {details.map((item, i) => (
          <li key={i}>– {item}</li>
        ))}
      </ul>

      {/* STACK */}
      <p className="text-xs tracking-wide opacity-50">{stack}</p>
    </div>
  );
}

const ExperienceLanding = () => {
  return (
    <div className="min-h-[100svh] bg-[#0E0E0E] text-[#C7B99B] font-[Questrial] px-6 sm:px-12 md:px-24 pt-24 pb-32">
      
      {/* HEADER */}
      <div className="mb-24">
        <p className="text-xs tracking-widest opacity-60 mb-4">
          PROFESSIONAL TIMELINE
        </p>

        <h1 className="font-extrabold text-[38px] sm:text-[52px] leading-tight">
          Experience
        </h1>

        <p className="text-sm opacity-60 mt-4 max-w-xl">
          A timeline of my professional and technical experience.
        </p>
      </div>

      {/* EXPERIENCE LIST */}
      <div className="space-y-16 max-w-4xl">

        <ExperienceCard
          status="CURRENT"
          statusColor="bg-green-500"
          role="Software Developer Intern"
          company="Company Name"
          duration="Month YYYY – Present"
          details={[
            "Worked on scalable backend systems",
            "Built REST APIs and handled database integration",
            "Improved performance of core features",
          ]}
          stack="Tech Stack Here"
        />

        <ExperienceCard
          status="COMPLETED"
          statusColor="bg-blue-500"
          role="Frontend Developer"
          company="Company Name"
          duration="Month YYYY – Month YYYY"
          details={[
            "Developed responsive UI components",
            "Collaborated with backend team",
            "Optimized user experience and performance",
          ]}
          stack="Tech Stack Here"
        />

        <ExperienceCard
          status="COMPLETED"
          statusColor="bg-blue-500"
          role="Backend Developer"
          company="Company Name"
          duration="Month YYYY – Month YYYY"
          details={[
            "Designed database schemas",
            "Implemented authentication systems",
            "Built scalable APIs",
          ]}
          stack="Tech Stack Here"
        />

      </div>
    </div>
  );
};

export default ExperienceLanding;