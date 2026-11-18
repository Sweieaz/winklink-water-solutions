export default function Navbar() {
  return (
    <nav className="bg-white shadow-md fixed w-full z-50 top-0 left-0">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        <h1 className="text-xl font-bold text-primary font-primary">
          WinkLink Water <span> Solutions LTD</span>
        </h1>

        <div className="space-x-6 text-base font-bold text-secondary-accent font-primary1">
          <a
            href="#home"
            className="hover:text-secondary transition-colors duration-300"
          >
            Home
          </a>
          <a
            href="#services"
            className="hover:text-secondary transition-colors duration-300"
          >
            Our Services
          </a>
          <a
            href="#products"
            className="hover:text-secondary transition-colors duration-300"
          >
            Our Products
          </a>
          <a
            href="#about"
            className="hover:text-secondary transition-colors duration-300"
          >
            About Us
          </a>
          <a
            href="#leadership"
            className="hover:text-secondary transition-colors duration-300"
          >
            Leadership
          </a>
          <a
            href="#contact"
            className="hover:text-secondary transition-colors duration-300"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}
