export default function StartupLanding() {
  return (
    <main className="min-h-screen bg-[#F7F8FA] text-gray-800">
      
      {/* Navbar */}
      <nav className="flex justify-between px-10 py-6  border border-[#E5E7EB]">
        <h1 className="font-semibold text-[#1F3A5F]">Treasure trunk</h1>
        <div className="space-x-6 text-[#3B82F6]">
          <a href="#">Features</a>
          <a href="#">Pricing</a>
          <a href="#">Login</a>
        </div>
      </nav>

      {/* Hero */}
      <section className="text-center py-7 px-6 max-w-3xl mx-auto">
        <h2 className=" text-[#1F3A5F] text-5xl font-semibold mb-6">
          Find all the treasures you desire,
          Without Complexity
        </h2>

        <p className="text-[#1F2933] mb-8">
          A treasure trove of items to buy,
          anything you might desire from the source.
        </p>

        <button className="px-6 py-2 rounded-lg bg-black text-white">
          Let's get started
        </button>
      </section>

      {/* Features */}
      <section className="grid md:grid-cols-3 gap-8 px-10 py-5 max-w-6xl mx-auto text-[#3B82F6]">
        <div>
          <h3 className="font-semibold mb-2">Independent sellers</h3>
          <p className="text-[#1F2933]">
            Get in contact with independant sellers.
          </p>
        </div>

        <div>
          <h3 className="font-semibold mb-2">Local support</h3>
          <p className="text-[#1F2933]">
            support local small businesses owners.
          </p>
        </div>

        <div>
          <h3 className="font-semibold mb-2">Easy acces</h3>
          <p className="text-[#1F2933]">
            Get acces to everything at the click of a button.
          </p>
        </div>
      </section>

    <section className="py-24 px-10 bg-[#1F3A5F] text-[#E8E3E3]">
  <h3 className="text-3xl font-semibold mb-12 text-center">
    Products
  </h3>

    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
    
    {/* Product 1 */}
    <div className="border border-[#E5E7EB] rounded-xl p-6 bg-[#333]">
      <div className="bg-[#444] h-40 rounded-lg mb-4 flex items-center justify-center">
        <img className=" h-40 rounded-lg" src="/images/51uOcitpgcL._AC_SL1500_.jpg"></img>
      </div>
      <h4 className="font-semibold mb-2">Electric candle lighter</h4>
      <p className="text-sm mb-4">Rechargable electric lighter.</p>
      <p className="font-semibold text-[#3B82F6]">$29</p>
    </div>

    {/* Product 2 */}
    <div className="border border-[#E5E7EB] rounded-xl p-6 bg-[#333]">
      <div className="bg-[#444] h-40 rounded-lg mb-4 flex items-center justify-center">
        <img className="h-40 rounded-lg" src="/images/Ninja_foodi.jpg"></img>
      </div>
      <h4 className="font-semibold mb-2">Ninja Foodi</h4>
      <p className="text-sm mb-4">Combines Steam cooking and air frying.</p>
      <p className="font-semibold text-[#3B82F6]">$39</p>
    </div>

    {/* Product 3 */}
    <div className="border border-[#E5E7EB] rounded-xl p-6 bg-[#333]">
      <div className="bg-[#444] h-40 rounded-lg mb-4 flex items-center justify-center">
        <img className="h-40 rounded-lg" src="/images/Ticarve-car-cleaning-gel.jpg"></img>
      </div>
      <h4 className="font-semibold mb-2">Ticarve cleaning gel</h4>
      <p className="text-sm mb-4">Cleaning gell for car vents and corners.</p>
      <p className="font-semibold text-[#3B82F6]">$49</p>
    </div>

    {/* Product 4 */}
    <div className="border border-[#E5E7EB] rounded-xl p-6 bg-[#333]">
      <div className="bg-[#444] h-40 rounded-lg mb-4 flex items-center justify-center">
        <img className="h-40 rounded-lg" src="/images/jeep-boots.jpg"></img>
      </div>
      <h4 className="font-semibold mb-2">Jeep boots</h4>
      <p className="text-sm mb-4">Jeep boots for men.</p>
      <p className="font-semibold text-[#3B82F6]">$19</p>
    </div>

    {/* Product 5 */}
    <div className="border border-[#E5E7EB] rounded-xl p-6 bg-[#333]">
      <div className="bg-[#444] h-40 rounded-lg mb-4 flex items-center justify-center">
        <img className="h-40 rounded-lg" src="/images/Maxi-sun-dress.jpg"></img>
      </div>
      <h4 className="font-semibold mb-2">Maxi sun dress</h4>
      <p className="text-sm mb-4">maxi summer sun dress.</p>
      <p className="font-semibold text-[#3B82F6]">$59</p>
    </div>

    {/* Product 6 */}
    <div className="border border-[#E5E7EB] rounded-xl p-6 bg-[#333]">
      <div className="bg-[#444] h-40 rounded-lg mb-4 flex items-center justify-center">
        <img className="h-40 rounded-lg" src="/images/Skinny_slim_fit_jeans.jpg"></img>
      </div>
      <h4 className="font-semibold mb-2">Skinny Jeans</h4>
      <p className="text-sm mb-4">Skinny slim fit jeans.</p>
      <p className="font-semibold text-[#3B82F6]">$15</p>
    </div>

    {/* Product 7 */}
    <div className="border border-[#E5E7EB] rounded-xl p-6 bg-[#333]">
      <div className="bg-[#444] h-40 rounded-lg mb-4 flex items-center justify-center">
        <img className="h-40 rounded-lg" src="/images/Sony-NC_ear_buds.jpg"></img>
      </div>
      <h4 className="font-semibold mb-2">Sony premium earbuds</h4>
      <p className="text-sm mb-4">Sony noise canceling earbuds.</p>
      <p className="font-semibold text-[#3B82F6]">$22</p>
    </div>

    {/* Product 8 */}
    <div className="border border-[#E5E7EB] rounded-xl p-6 bg-[#333]">
      <div className="bg-[#444] h-40 rounded-lg mb-4 flex items-center justify-center">
        <img className="h-40 rounded-lg" src="/images/Magnetic_wireless cahrger.jpg"></img>
      </div>
      <h4 className="font-semibold mb-2">Magnetic wireless charger</h4>
      <p className="text-sm mb-4">3 in 1 magnetic wireless charger.</p>
      <p className="font-semibold text-[#3B82F6]">$75</p>
    </div>

    {/* Product 9 */}
    <div className="border border-[#E5E7EB] rounded-xl p-6 bg-[#333]">
      <div className="bg-[#444] h-40 rounded-lg mb-4 flex items-center justify-center">
        <img className="h-40 rounded-lg" src="/images/apple_watch_ultra_3.jpg"></img>
      </div>
      <h4 className="font-semibold mb-2">Apple watch ultra 3</h4>
      <p className="text-sm mb-4">The all new apple watch ultra 3.</p>
      <p className="font-semibold text-[#3B82F6]">$99</p>
    </div>

    </div>
    </section>


    </main>
  );
}