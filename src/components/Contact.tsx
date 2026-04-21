export default function Contact() {
  return (
    <section id="contact" className="py-10 md:py-25 bg-blue-custom/10">
      <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-5">
        <div className="bg-primary/60 lg:w-100 p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-primary text-brown-green mb-6">
            Contact Us
          </h2>
          <p className="font-primary text-brown-custom mb-2">
            WinkLink Water Solutions
          </p>
          <p className="font-primary italic">
            Enterprise Building, Enterprise Rd, Nairobi
          </p>

          <address className="mt-10 space-y-6 not-italic text-brown-custom font-primary">
            <div className="flex items-start border-b border-brown-custom pb-4">
              <i className="fa-solid fa-location-dot mt-1 mr-3 text-orange-custom text-lg"></i>
              <p className="mt-0">P.O. Box 30041-00100, Nairobi, Kenya</p>
            </div>
            <div className="flex items-start border-b border-brown-custom pb-4">
              <i className="fa-solid fa-phone mt-1 mr-3 text-orange-custom text-lg"></i>
              <p className="mt-0">(+254) 710798732</p>
            </div>
            <div className="flex items-start">
              <i className="fa-solid fa-envelope mt-1 mr-3 text-orange-custom text-lg"></i>
              <p className="mt-0">winklinkwater@gmail.com</p>
            </div>
          </address>
        </div>

        <div className="w-full">
          <form className="space-y-6">
            <div>
              <label className="block text-brown-custom font-primary mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full p-4 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary bg-primary/20"
                required
              />
            </div>
            <div>
              <label className="block text-brown-custom font-primary mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full p-4 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary bg-primary/20"
                required
              />
            </div>
            <div>
              <label className="block text-brown-custom font-primary mb-2">
                Message
              </label>
              <textarea
                id="message"
                className="w-full p-4 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary bg-primary/20"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-primary text-white font-primary px-8 py-3 rounded hover:bg-primary/60 transition-all duration-300 shadow-md"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
