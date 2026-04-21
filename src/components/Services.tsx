export default function Services() {
  const services = [
    "Water Purification Systems",
    "Pump & Tank Supply",
    "Borehole Equipment",
    "Installation & Maintenance",
  ];

  return (
    <section id="services" className="py-20 bg-light text-center">
      <h2 className="text-3xl font-bold text-primary">Our Services</h2>

      <div className="grid md:grid-cols-4 gap-6 mt-10 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <div key={index} className="bg-white shadow-md p-6 rounded-xl">
            <p className="font-semibold">{service}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
