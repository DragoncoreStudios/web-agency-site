export default function Portfolio() {
  return (
    <main className="min-h-screen text-gray-200 p-10">

    {/*background image*/}
    <div
        className="fixed inset-0 bg-cover bg-center -z-20"
        style={{ backgroundImage: "url('/images/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA4L3Jhd3BpeGVsX29mZmljZV8zNF9waG90b19vZl9uYXR1cmVfaW5famFwYW5fc2ltcGxlX2Flc3RoZXRpY19pc184NGZhNmMzOS1jODgyLTQyMDgtOTgyY.jpg')" }}
      />
        
    {/* Dark overlay */}
    <div className="fixed inset-0 bg-black/40 -z-10" />
    


      <div className="px-16 py-10 grid md:grid-cols-3 gap-8">

        <a href="/Portfolio/Coffee-shop">
        <div className="p-6 rounded-2xl h-90 bg-white/10 backdrop-blur-xl border border-white/20">
          <h2 className="text-xl mb-2">Business Website</h2>
          <p className="text-gray-300">Online business template</p>
          <img className="rounded-2xl" src="/images/Oak&bean.png"></img>
        </div>
        </a>

        <a href="/Portfolio/E-commerce">
        <div className="p-6 rounded-2xl h-130 bg-white/10 backdrop-blur-xl border border-white/20">
          <h2 className="text-xl mb-2">E-commerce</h2>
          <p className="text-gray-300">Online store template.</p>
          <img className="rounded-2xl" src="/images/Treasure trunk.png"></img>
        </div>
        </a>

        <a href="/Portfolio/Startup">
        <div className="p-6 rounded-2xl h-80 bg-white/10 backdrop-blur-xl border border-white/20">
            <h2 className="text-xl mb-2">Landing page</h2>
            <p className="text-gray-300">Product landing page.</p>
            <img className="rounded-2xl" src="/images/Futuretech.png"></img>
        </div>
        </a>

      </div>
    </main>
  );
}