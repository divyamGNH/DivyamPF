function Projects() {
  return (
    <div className="min-h-[100svh] bg-[#0E0E0E] text-[#C7B99B] font-[Questrial] px-6 sm:px-12 md:px-24 pt-28 pb-32">

      {/* TITLE */}
      <div className="mb-24">
        <p className="tracking-widest text-xs mb-6 opacity-60">
          PROJECTS
        </p>

        <h1 className="font-extrabold text-[40px] sm:text-[56px] leading-tight max-w-2xl">
          What I can build.
        </h1>
      </div>

      {/* CLAIMS */}
      <div className="space-y-20 max-w-3xl">

        <Claim
          claim="Real-time communication systems"
          proof="Connectly — random video chat platform"
          stack="WebRTC · Socket.IO · Node · React"
        />

        <Claim
          claim="Scalable backend architectures"
          proof="TaskFlow Backend — RBAC-based REST API"
          stack="Spring Boot · Spring Security · MySQL"
        />

        <Claim
          claim="Frontend interfaces with intent"
          proof="Personal portfolio"
          stack="React · Tailwind · Motion"
        />

      </div>

      {/* CLOSING LINE */}
      <div className="mt-32 max-w-md">
        <p className="text-sm opacity-60">
          Each project exists to prove a capability —  
          not to fill space.
        </p>
      </div>
    </div>
  );
}

function Claim({ claim, proof, stack }) {
  return (
    <div className="group">

      {/* CLAIM */}
      <h2 className="text-[22px] sm:text-[26px] font-semibold mb-3">
        • {claim}
      </h2>

      {/* PROOF */}
      <p className="text-sm sm:text-base opacity-80 ml-4 mb-2">
        → {proof}
      </p>

      {/* STACK */}
      <p className="text-xs tracking-wide opacity-50 ml-4">
        {stack}
      </p>

      {/* ACCENT */}
      <div className="h-[1px] w-0 bg-[#E74C3C] mt-4 ml-4 transition-all duration-300 group-hover:w-24" />
    </div>
  );
}

export default Projects;
