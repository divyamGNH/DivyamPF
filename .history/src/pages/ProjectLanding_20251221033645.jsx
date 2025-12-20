import { useEffect, useState } from "react";

/* -------------------- SYSTEM CARD -------------------- */
function System({
  status,
  statusColor,
  title,
  name,
  details,
  stack,
  liveLink,
  githubLink,
  onUnavailableClick,
}) {
  const isLive = liveLink !== "—";

  return (
    <a
      href={isLive ? liveLink : undefined}
      target={isLive ? "_blank" : undefined}
      rel="noopener noreferrer"
      onClick={(e) => {
        if (!isLive) {
          e.preventDefault();
          onUnavailableClick();
        }
      }}
      className="
        block
        border border-[#2A2A2A]
        p-6 sm:p-8
        transition-colors duration-300
        hover:border-[#3A3A3A]
        hover:bg-[#121212]
        cursor-pointer
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
          <p className="text-sm opacity-60 mb-1">{title}</p>
          <h2 className="font-mono text-[20px] sm:text-[22px]">{name}</h2>
        </div>

        {/* GITHUB ICON */}
        <a
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="opacity-60 hover:opacity-100 transition"
          aria-label="GitHub Repository"
        >
          <img
            src="./github.svg"
            alt="GitHub"
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
    </a>
  );
}

/* -------------------- PAGE -------------------- */
const ProjectLanding = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [progress, setProgress] = useState(100);

  useEffect(() => {
    if (!showPopup) return;

    setProgress(100);

    const duration = 5000;
    const interval = 50;
    const step = 100 / (duration / interval);

    const timer = setInterval(() => {
      setProgress((p) => Math.max(p - step, 0));
    }, interval);

    const timeout = setTimeout(() => {
      setShowPopup(false);
    }, duration);

    return () => {
      clearInterval(timer);
      clearTimeout(timeout);
    };
  }, [showPopup]);

  return (
    <>
      {/* POPUP */}
      {showPopup && (
        <div className="fixed inset-0 z-50 flex items-end justify-center pointer-events-none">
          <div
            className="
              mb-10
              w-[90%] max-w-md
              border border-[#2A2A2A]
              bg-[#0E0E0E]
              text-[#C7B99B]
              pointer-events-auto
            "
          >
            <div className="px-6 py-4 text-sm tracking-wide">
              Not deployed yet - Coming Soon.
            </div>

            {/* TIMER BAR */}
            <div className="h-[2px] bg-[#2A2A2A]">
              <div
                className="h-full bg-[#C7B99B] transition-[width] duration-50"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </div>
      )}

      {/* MAIN CONTENT */}
      <div className="min-h-[100svh] bg-[#0E0E0E] text-[#C7B99B] font-[Questrial] px-6 sm:px-12 md:px-24 pt-24 pb-32">
        {/* HEADER */}
        <div className="mb-24">
          <p className="text-xs tracking-widest opacity-60 mb-4">
            SYSTEM OVERVIEW
          </p>

          <h1 className="font-extrabold text-[38px] sm:text-[52px] leading-tight">
            Recent Builds
          </h1>

          <p className="text-sm opacity-60 mt-4 max-w-xl">
            A snapshot of projects I’ve been building.
          </p>
        </div>

        {/* SYSTEM LIST */}
        <div className="space-y-16 max-w-4xl">
          <System
            status="DEPLOYED"
            statusColor="bg-green-500"
            title="Real-time Communication Platform"
            name="CONNECTLY"
            details={[
              "Peer-to-peer video using WebRTC",
              "Socket.IO signaling server",
              "Room matchmaking & reconnect handling",
            ]}
            stack="WebRTC · Socket.IO · Node · React"
            liveLink="https://connectly-video.vercel.app/"
            githubLink="https://github.com/divyamGNH/Connectly"
            onUnavailableClick={() => setShowPopup(true)}
          />

          <System
            status="DEPLOYED"
            statusColor="bg-green-500"
            title="Frontend Interface"
            name="PORTFOLIO"
            details={[
              "Cool UI and animations",
              "Custom hover & cursor logic",
              "Responsive and user friendly",
            ]}
            stack="React · Tailwind CSS · Framer Motion"
            liveLink="https://divyamk.vercel.app/"
            githubLink="https://github.com/divyamGNH/DivyamPF"
            onUnavailableClick={() => setShowPopup(true)}
          />

          <System
            status="IN PROGRESS"
            statusColor="bg-yellow-500"
            title="Mobile Application"
            name="CONTEST REMINDER"
            details={[
              "Automated coding contest alerts",
              "Native alarms & notifications",
              "Clean, minimal mobile-first UI",
            ]}
            stack="React Native · Expo · Node · REST APIs"
            liveLink="—"
            githubLink="https://github.com/divyamGNH/ContestReminder"
            onUnavailableClick={() => setShowPopup(true)}
          />
        </div>
      </div>
    </>
  );
};

export default ProjectLanding;
