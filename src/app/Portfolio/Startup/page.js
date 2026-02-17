export default function StartupTemplate() {
  return (
    <main className="min-h-screen bg-[#0B0F19] text-[#E6F1FF]">
      
      {/* HERO */}
      <section className="grid md:grid-cols-2 gap-12 px-10 py-24 max-w-7xl mx-auto items-center">
        
        {/* LEFT SIDE */}
        <div>
          <p className="text-cyan-400 mb-4 tracking-wider">
            FUTURE TECHNOLOGY
          </p>

          <h1 className="text-5xl font-bold leading-tight mb-6">
            Build faster with intelligent software
          </h1>

          <p className="text-gray-400 mb-8 max-w-lg">
            A modern platform for startups to deploy, scale,
            and innovate using powerful cloud infrastructure
            and AI-driven workflows.
          </p>

          <div className="flex gap-4">
            <button className="px-6 py-3 rounded-lg bg-cyan-500 text-black font-semibold shadow-lg shadow-cyan-500/30">
              Get Started
            </button>

            <button className="px-6 py-3 rounded-lg border border-cyan-400 text-cyan-300">
              Live Demo
            </button>
          </div>
        </div>

        {/* RIGHT SIDE — FUTURISTIC PANEL */}
        <div className="relative">
          
          <div className="rounded-2xl border border-cyan-500/40 bg-[#0F1629] p-6 shadow-[0_0_40px_rgba(0,255,255,0.15)]">
            <div className="h-40 bg-[#0B0F19] rounded-lg mb-4 flex items-center justify-center text-gray-500">
              Product UI Preview
            </div>

            <div className="space-y-3">
              <div className="h-3 bg-cyan-500/40 rounded"></div>
              <div className="h-3 bg-purple-500/40 rounded"></div>
              <div className="h-3 bg-cyan-500/40 rounded w-2/3"></div>
            </div>
          </div>

          {/* floating panels */}
          <div className="absolute -top-6 -right-6 w-24 h-24 border border-purple-500/40 rounded-xl bg-[#11182B] shadow-[0_0_25px_rgba(168,85,247,0.25)]" />
          <div className="absolute -bottom-6 -left-6 w-20 h-20 border border-cyan-500/40 rounded-xl bg-[#11182B] shadow-[0_0_25px_rgba(34,211,238,0.25)]" />
        </div>
      </section>

      {/* FEATURES */}
      <section className="px-10 pb-24 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold mb-12 text-center">
          Platform Features
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <FeatureCard title="AI Automation" />
          <FeatureCard title="Cloud Scaling" />
          <FeatureCard title="Real-time Analytics" />
        </div>
      </section>
    </main>
  );
}

function FeatureCard({ title }) {
  return (
    <div className="p-6 rounded-xl bg-[#0F1629] border border-cyan-500/20 shadow-[0_0_20px_rgba(0,255,255,0.1)]">
      <div className="h-12 w-12 mb-4 rounded-lg bg-cyan-500/20" />
      <h3 className="font-semibold mb-2">{title}</h3>
      <p className="text-gray-400 text-sm">
        Placeholder feature description for startup landing page template.
      </p>
    </div>
  );
}