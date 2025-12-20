function Projects() {
  return (
    <div className="min-h-[100svh] bg-[#0E0E0E] text-[#C7B99B] font-[Questrial] px-6 sm:px-12 md:px-24 pt-24 pb-32">

      {/* HEADER */}
      <div className="mb-24">
        <p className="text-xs tracking-widest opacity-60 mb-4">
          SYSTEM OVERVIEW
        </p>

        <h1 className="font-extrabold text-[38px] sm:text-[52px] leading-tight">
          Active Systems
        </h1>

        <p className="text-sm opacity-60 mt-4 max-w-xl">
          A snapshot of systems I’ve built, shipped, and maintained.
        </p>
      </div>

      {/* SYSTEM LIST */}
      <div className="space-y-16 max-w-4xl">

        <System
          status="ONLINE"
          statusColor="bg-green-500"
          title="Real-time Communication Platform"
          name="CONNECTLY"
          details={[
            "Peer-to-peer video using WebRTC",
            "Socket.IO signaling server",
            "Room matchmaking & reconnect handling",
          ]}
          stack="WebRTC · Socket.IO · Node · React"
          liveLink="https://your-live-link.com"
          githubLink="https://github.com/yourname/connectly"
        />

        <System
          status="STABLE"
          statusColor="bg-blue-500"
          title="Backend Infrastructure"
          name="TASKFLOW BACKEND"
          details={[
            "Role-based access control (RBAC)",
            "JWT authentication & authorization",
            "Layered architecture (Controller / Service / Repo)",
          ]}
          stack="Spring Boot · Spring Security · MySQL"
          liveLink="https://your-live-link.com"
          githubLink="https://github.com/yourname/taskflow-backend"
        />

        <System
          status="ACTIVE"
          statusColor="bg-yellow-500"
          title="Frontend Interface"
          name="PORTFOLIO SYSTEM"
          details={[
            "Typography-first UI",
            "Custom hover & cursor logic",
            "Responsive without layout duplication",
          ]}
          stack="React · Tailwind CSS"
          liveLink="https://your-live-link.com"
          githubLink="https://github.com/yourname/portfolio"
        />

      </div>

      {/* FOOTNOTE */}
      <div className="mt-32 max-w-md">
        <p className="text-xs opacity-50 leading-relaxed">
          Status reflects current stability, not perfection.  
          Systems evolve through failure.
        </p>
      </div>
    </div>
  );
}

function System({
  status,
  statusColor,
  title,
  name,
  details,
  stack,
  liveLink,
  githubLink,
}) {
  return (
    <a
      href={liveLink}
      target="_blank"
      rel="noopener noreferrer"
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
        <p className="text-xs tracking-widest">
          {status}
        </p>
      </div>

      {/* TITLE ROW */}
      <div className="flex items-start justify-between gap-4 mb-6">
        <div>
          <p className="text-sm opacity-60 mb-1">
            {title}
          </p>

          <h2 className="font-mono text-[20px] sm:text-[22px]">
            {name}
          </h2>
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
          <GitHubIcon />
        </a>
      </div>

      {/* DETAILS */}
      <ul className="space-y-2 text-sm opacity-80 mb-6 max-w-xl">
        {details.map((item, i) => (
          <li key={i}>– {item}</li>
        ))}
      </ul>

      {/* STACK */}
      <p className="text-xs tracking-wide opacity-50">
        {stack}
      </p>
    </a>
  );
}

/* Simple GitHub Icon (inline SVG, no dependency) */
function GitHubIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.5 2.87 8.31 6.84 9.66.5.1.68-.22.68-.48 0-.24-.01-.87-.01-1.71-2.78.62-3.37-1.38-3.37-1.38-.45-1.18-1.11-1.49-1.11-1.49-.91-.64.07-.63.07-.63 1 .07 1.53 1.05 1.53 1.05.9 1.57 2.36 1.12 2.94.85.09-.67.35-1.12.63-1.38-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.27 2.75 1.05a9.2 9.2 0 0 1 5 0c1.9-1.32 2.75-1.05 2.75-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.8-4.57 5.06.36.32.68.94.68 1.9 0 1.38-.01 2.5-.01 2.84 0 .26.18.58.69.48A10.03 10.03 0 0 0 22 12.26C22 6.58 17.52 2 12 2z" />
    </svg>
  );
}

export default Projects;
