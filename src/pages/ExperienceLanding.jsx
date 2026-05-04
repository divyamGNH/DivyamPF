import { useEffect, useState } from "react";

function ExperienceCard({
  status,
  statusColor,
  role,
  company,
  duration,
  details,
  stack,
  linkedinLink,
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
      <div className="flex items-start justify-between gap-4 mb-6">
        <div>
          <p className="text-sm opacity-60 mb-1">{company}</p>
          <h2 className="font-mono text-[20px] sm:text-[22px]">{role}</h2>
          <p className="text-xs opacity-50 mt-1">{duration}</p>
        </div>

        {/* LINKEDIN ICON */}
        <a
          href={linkedinLink}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="opacity-60 hover:opacity-100 transition"
          aria-label="Company LinkedIn"
        >
          <img
            src="./linkedinIcon.svg"
            alt="LinkedIn"
            className="w-8 h-8 sm:w-10 sm:h-10"
          />
        </a>
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
          role="Full Stack Intern"
          company="BrandFoundry Pvt Ltd"
          duration="April 2026 – Present"
          details={[
            "Building a complete SFU on Pion",
            "Built a Mesh P2P architecture for a complete conference call",
            "Helped building frontend for he platform",
          ]}
          stack="Golang · Pion · NEXT"
          linkedinLink="https://www.linkedin.com/company/confrnce"
        />

      </div>
    </div>
  );
};

export default ExperienceLanding;