export default function Products() {
  const products = [
    "Water Purification Systems",
    "Pump & Tank Supply",
    "Borehole Equipment",
    "Installation & Maintenance",
  ];

  return (
    <section id="products" className="py-20 bg-light text-center">
      <h2 className="text-3xl font-bold text-primary">Our products</h2>

      <div className="grid md:grid-cols-4 gap-6 mt-10 max-w-6xl mx-auto">
        {products.map((product, index) => (
          <div key={index} className="bg-white shadow-md p-6 rounded-xl">
            <p className="font-semibold">{product}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
