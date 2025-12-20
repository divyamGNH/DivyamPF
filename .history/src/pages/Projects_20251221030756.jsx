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
        />

      </div>

      {/* FOOTNOTE */}
      <div className="mt-32 max-w-md">
        <p className="text-xs opacity-50 leading-relaxed">
          Status reflects current stability, not perfection.  
          Every system here failed at least once before becoming usable.
        </p>
      </div>
    </div>
  );
}

function System({ status, statusColor, title, name, details, stack }) {
  return (
    <div className="border border-[#2A2A2A] p-6 sm:p-8">

      {/* STATUS ROW */}
      <div className="flex items-center gap-4 mb-6">
        <span className={`w-2 h-2 rounded-full ${statusColor}`} />
        <p className="text-xs tracking-widest">
          {status}
        </p>
      </div>

      {/* TITLE */}
      <p className="text-sm opacity-60 mb-1">
        {title}
      </p>

      <h2 className="font-mono text-[20px] sm:text-[22px] mb-6">
        {name}
      </h2>

      {/* DETAILS */}
      <ul className="space-y-2 text-sm opacity-80 mb-6">
        {details.map((item, i) => (
          <li key={i}>– {item}</li>
        ))}
      </ul>

      {/* STACK */}
      <p className="text-xs tracking-wide opacity-50">
        {stack}
      </p>
    </div>
  );
}

export default Projects;
