export default function Home() {
  return (
    <main className="min-h-screen text-gray-200 p-10">
      
      {/* Background image */}
      <div
        className="fixed inset-0 bg-cover bg-center -z-20"
        style={{ backgroundImage: "url('images/Be8okJ9mnPV2qWam7MTEAg-1024-80.jpg.webp')" }}
      />

      {/* Dark overlay */}
      <div className="fixed inset-0 bg-black/40 -z-10" />

      

      {/* Hero */}
      <section className="text-center mt-28 px-6">
        <h2 className="text-5xl font-semibold mb-6">
          Modern and reliable Websites.
        </h2>

        <p className="max-w-xl mx-auto text-gray-300 mb-10">
          Welcome, Dragoncore Studios build modern websites with reliability,
          simplicity, and thoughtful design.
        </p>

        <a
  href="/Contact"><button className="px-6 py-3 rounded-xl
          bg-white/20 backdrop-blur-lg border border-white/30">
          Start a Project
        </button></a>
      </section>

      {/* Services */}
      <section className="grid md:grid-cols-3 gap-8 mt-24 px-6 max-w-6xl mx-auto pb-20">
        <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20">
          <h3 className="font-semibold mb-2">Design</h3>
          <p className="text-gray-300">Clean, thoughtful interfaces for both desktop and mobile</p>
        </div>

        <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20">
          <h3 className="font-semibold mb-2">Development</h3>
          <p className="text-gray-300">Fast and scalable architecture.</p>
        </div>

        <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20">
          <h3 className="font-semibold mb-2">Deployment</h3>
          <p className="text-gray-300">Reliable hosting and delivery.</p>
        </div>
      </section>

    </main>
  );
}