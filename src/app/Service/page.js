export default function Service() {
  return (
    <main className="min-h-screen text-gray-200 p-10">


    {/*background image*/}
    <div
        className="fixed inset-0 bg-cover bg-center -z-20"
        style={{ backgroundImage:"url('/images/pngtree-serene-zen-garden-featuring-a-bonsai-tree-centerpiece-surrounded-by-rocks-image_20131398.jpg')" }}
      />
        
    {/*Dark overlay*/}
    <div className="fixed inset-0 bg-black/40 -z-10" />


      <div className=" px-16 py-10 grid md:grid-cols-3 gap-8">
        <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20">
          <h2 className="text-xl mb-2">Website Design</h2>
          <p className="text-gray-300">
            We do Professional UI design focused on clarity and usability.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20">
          <h2 className="text-xl mb-2">Web Development</h2>
          <p className="text-gray-300">
            Modern websites built with Next.js that scales with your business.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20">
          <h2 className="text-xl mb-2">Deployment</h2>
          <p className="text-gray-300">
            Hosting and deployment using safe and reliable infrastructure.
          </p>
        </div>
      </div>
    </main>
  );
}