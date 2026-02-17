export default function CoffeeShop() {
  return (
    <main className="min-h-screen bg-[#3b2a23] text-[#f5e6d3]">
      
      {/* Hero with background image */}
      <section
        className="relative h-[70vh] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url('/images/pngtree-abstract-blur-coffee-shop-cafe-and-restaurant-picture-image_15505659.jpg')" }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative text-center px-6">
          <h1 className="text-6xl font-semibold mb-4">
            Oak & Bean
          </h1>
          <p className="text-xl text-[#e6d2b5]">
            Crafted Coffee. Cozy Atmosphere.
          </p>
        </div>
      </section>

      {/* Menu + Quote Section */}
      <section className="grid md:grid-cols-2 gap-12 px-10 py-20 max-w-6xl mx-auto">

        {/* Scrollable Menu */}
        <div>
          <h2 className="text-3xl mb-6 text-[#d7a86e]">Menu</h2>

          <div className="bg-[#4a342b] p-6 rounded-xl h-80 overflow-y-auto space-y-4">
            {[
              "Espresso",
              "Americano",
              "Cappuccino",
              "Latte",
              "Flat White",
              "Mocha",
              "Caramel Macchiato",
              "Cold Brew",
              "Iced Latte",
              "Hot Chocolate"
            ].map((item, index) => (
              <div
                key={index}
                className="border-b border-[#6b4a3a] pb-2"
              >
                <h3 className="text-lg">{item}</h3>
                <p className="text-[#d9c1a5] text-sm">
                  Rich flavor crafted with care.
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Quote Section */}
        <div className="flex items-center justify-center">
          <div className="bg-[#5a3e31] p-10 rounded-xl text-center">
            <p className="text-2xl italic text-[#f1dcc0]">
              “Life happens. Coffee helps.”
            </p>
            <p className="mt-4 text-[#d7a86e]">— Oak & Bean</p>
          </div>
        </div>

      </section>

      {/* Footer */}
      <footer className="bg-[#2e201a] text-center py-8">
        <p className="text-[#c9b39a]">
          Oak & Bean Coffee • Est. 2024
        </p>
      </footer>

    </main>
  );
}