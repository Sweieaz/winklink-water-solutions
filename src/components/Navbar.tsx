export default function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        <h1 className="text-xl font-bold text-primary">WinkLink Water</h1>

        <div className="space-x-6">
          <a href="#home">Home</a>
          <a href="#services">Our Services</a>
          <a href="#products">Our Products</a>
          <a href="#about">About Us</a>
          <a href="#leadership">Leadership</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </nav>
  );
}
