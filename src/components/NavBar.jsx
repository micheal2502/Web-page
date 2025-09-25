import { useState, useEffect } from "react";

import { navLinks } from "../constants";
import Shuffle from "./ShuffleText";

const NavBar = () => {
  // track if the user has scrolled down the page
  const [scrolled, setScrolled] = useState(false);
  

  useEffect(() => {
      const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? "scrolled" : "not-scrolled"}`}>
      <div className="inner">
        <a href="/" className="logo">
          <Shuffle
          text="Michael | Tran"
          shuffleDirection="right"
          duration={0.35}
          animationMode="evenodd"
          shuffleTimes={1}
          ease="power3.out"
          stagger={0.03}
          threshold={0.1}
          triggerOnce={true}
          triggerOnHover={true}
          respectReducedMotion={true}
        />
        </a>

        <nav className="desktop">
          <ul>
              {navLinks.map(({ link, name, submenu }) => (
                <li key={name} className="group relative">
                  <a href={link} className="block">
                    <span>{name}</span>
                    <span className="underline" />
                  </a>

                  {submenu && (
                    <div className="dropdown absolute left-0 top-full hidden group-hover:flex flex-col bg-white w-52 rounded-lg shadow-lg z-50 pt-1">
                    {submenu.map((item) => (
                        <a
                          key={item.name}
                          href={item.link}
                          className="px-4 py-2 text-black hover:bg-gray-100 hover:text-blue-600 transition-colors duration-200"
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  )}
                </li>
              ))}
          </ul>
        </nav>

        <a href="/contact" className="contact-btn group">
          <div className="inner">
            <span>Contact me</span>
          </div>
        </a>
      </div>
    </header>
  );
}

export default NavBar;
