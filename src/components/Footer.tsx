import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faFacebook,
  faXTwitter,
  faInstagram,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer className="bg-secondary  py-6 mt-10 text-center text-black">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-b border-b-dark pb-10 mb-10 gap-16">
          <div className="text-left">
            <h2 className="font-primary text-orange-custom text-xl mb-2">
              WinkLink Water Solutions
            </h2>
            <p className="font-primary italic">
              Enterprise Building, Enterprise Rd, Nairobi
            </p>
            <address className="mt-6 space-y-3 not-italic font-primary text-base">
              <div className="flex items-start">
                <i className="fa-solid fa-location-dot mt-1 mr-3 text-orange-custom"></i>
                <p>P.O. Box 30041-00100, Nairobi, Kenya</p>
              </div>
              <div className="flex items-start">
                <i className="fa-solid fa-phone mt-1 mr-3 text-orange-custom"></i>
                <p>(+254) 710798732</p>
              </div>
              <div className="flex items-start">
                <i className="fa-solid fa-envelope mt-1 mr-3 text-orange-custom"></i>
                <p>winklinkwater@gmail.com</p>
              </div>
            </address>
          </div>
          <div className="text-left">
            <h2 className="font-primary text-orange-custom text-xl mb-2">
              Site Map
            </h2>
            <ul className="mt-6 space-y-2 font-primary text-base">
              <li className="flex items-start before:content-['-'] before:mr-2 text-orange-custom">
                <a
                  href="#home"
                  className="text-dark hover:text-orange-custom transition"
                >
                  Home
                </a>
              </li>
              <li className="flex items-start before:content-['-'] before:mr-2 text-orange-custom">
                <a
                  href="#services"
                  className="text-dark hover:text-orange-custom transition"
                >
                  Our Services
                </a>
              </li>
              <li className="flex items-start before:content-['-'] before:mr-2 text-orange-custom">
                <a
                  href="#services"
                  className="text-dark hover:text-orange-custom transition"
                >
                  Our Products
                </a>
              </li>
              <li className="flex items-start before:content-['-'] before:mr-2 text-orange-custom">
                <a
                  href="#about"
                  className="text-dark hover:text-orange-custom transition"
                >
                  About Us
                </a>
              </li>
              <li className="flex items-start before:content-['-'] before:mr-2 text-orange-custom">
                <a
                  href="#leadership"
                  className="text-dark hover:text-orange-custom transition"
                >
                  Leadership
                </a>
              </li>
              <li className="flex items-start before:content-['-'] before:mr-2 text-orange-custom">
                <a
                  href="#contact"
                  className="text-dark hover:text-orange-custom transition"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <div className="text-left">
            <h2 className="font-primary text-orange-custom text-xl mb-2">
              Follow Us
            </h2>
            <p className="font-primary text-base mt-4">
              Stay connected for updates on our high-quality water purification
              systems and professional installation services across Kenya.
            </p>
            <div className="flex space-x-5 mt-4">
              <a
                href="..."
                target="_blank"
                className="text-orange-custom hover:scale-110 transition"
              >
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
              </a>

              <a
                href="..."
                target="_blank"
                className="text-orange-custom hover:scale-110 transition"
              >
                <FontAwesomeIcon icon={faFacebook} size="2x" />
              </a>

              <a
                href="..."
                target="_blank"
                className="text-orange-custom hover:scale-110 transition"
              >
                <FontAwesomeIcon icon={faXTwitter} size="2x" />
              </a>

              <a
                href="..."
                target="_blank"
                className="text-orange-custom hover:scale-110 transition"
              >
                <FontAwesomeIcon icon={faInstagram} size="2x" />
              </a>

              <a
                href="..."
                target="_blank"
                className="text-orange-custom hover:scale-110 transition"
              >
                <FontAwesomeIcon icon={faTiktok} size="2x" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="text-base text-dark font-primary space-y-1">
        <p>© {new Date().getFullYear()} WinkLink Water Solutions</p>
        <p className="text-sm mt-2">
          Reliable water purification & installation services
        </p>
      </div>
    </footer>
  );
}
