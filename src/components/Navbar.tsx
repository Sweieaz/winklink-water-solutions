"use client";

import { useState } from "react";
import { faXmark, faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full fixed top-0 left-0 z-50">
      <nav className="mx-auto px-4 lg:px-8 py-auto flex items-center justify-between bg-white transition-shadow duration-300">
        {/* Logo */}
        <a className="flex items-center gap-1">
          <Image
            src="/images/logo1.png"
            alt="winklink water solutions ltd logo"
            width={48}
            height={48}
            className="object-contain"
            priority
          />
          <div className="text-accent font-bold w-55 pt-1">
            <span className="block text-xl font-extrabold uppercase tracking-wide font-secondary">
              Winklink Water
            </span>
            <span className="block text-base uppercase tracking-[0.25em] pl-1">
              Solutions LTD
            </span>
          </div>
        </a>

        {/* Desktop Menu */}
        <div className="hidden xl:flex items-center space-x-8">
          <ul className="flex space-x-6 pr-10 text-lg font-secondary1">
            {[
              "home",
              "services",
              "products",
              "about",
              "leadership",
              "contact",
            ].map((item) => (
              <li key={item}>
                <a
                  href={`#${item}`}
                  className="text-secondary hover:text-primary transition"
                >
                  {item === "home"
                    ? "Home"
                    : item.replace(/^\w/, (c) => c.toUpperCase())}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Hamburger Button */}
        <button onClick={() => setIsOpen(true)} className="xl:hidden">
          <FontAwesomeIcon icon={faBars} size="xl" className="text-accent" />
        </button>

        {/* Mobile Menu */}
        <div
          className={`fixed top-0 left-0 w-full h-full bg-primary z-50 p-6 transform transition-transform duration-300 ease-in-out xl:hidden ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex items-center mb-8 mt-4 mx-4 justify-between">
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold">
              Winklink Water Solutions LTD
            </h1>

            {/* Close Button */}
            <button onClick={() => setIsOpen(false)}>
              <FontAwesomeIcon icon={faXmark} size="lg" />
            </button>
          </div>

          <ul className="mx-4 text-lg space-y-4 font-secondary1">
            {[
              "home",
              "services",
              "products",
              "about",
              "leadership",
              "contact",
            ].map((item) => (
              <li key={item}>
                <a
                  href={`#${item}`}
                  onClick={() => setIsOpen(false)}
                  className="text-secondary hover:text-primary transition"
                >
                  {item === "home"
                    ? "Home"
                    : item.replace(/^\w/, (c) => c.toUpperCase())}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}
