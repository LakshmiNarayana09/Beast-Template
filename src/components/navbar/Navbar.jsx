import React, { useState } from "react";
import White from "../logos/White";
import JoinNow from "../buttons/JoinNow";
import { Menu, X } from "lucide-react";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink, useLocation } from "react-router-dom";

const navItems = [
  { name: "ABOUT US", to: "about" },
  { name: "FACILITIES", to: "facilities" },
  { name: "BMI", to: "bmi" },
  { name: "SCHEDULE", to: "schedule" },
  { name: "REVIEWS", to: "reviews" },
  { name: "COACHES", to: "coaches" },
  { name: "BLOG", to: "blog" },
  { name: "GALLERY", to: "gallery" },
  { name: "JOIN US", to: "join" },
  { name: "CONTACT", to: "contact" },
  { name: "FOOTER", to: "footer" },
];

function Navbar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const isHome = location.pathname === "/";

  return (
    <>
      <nav className="mx-auto flex h-16 w-full max-w-[1216px] items-center justify-between px-4 sm:px-6 lg:px-0">
        <White />

        <div className="hidden items-center gap-8 lg:flex">
          <ul className="flex items-center gap-6">
            {navItems.map((item) => (
              <li key={item.to}>
                {isHome ? (
                  <ScrollLink
                    to={item.to}
                    spy
                    smooth
                    offset={-80}
                    duration={500}
                    activeClass="active"
                    className="cursor-pointer uppercase text-[15px] text-white transition-colors hover:text-[#FA2A20]"
                    style={{ fontFamily: "Oswald" }}
                  >
                    {item.name}
                  </ScrollLink>
                ) : (
                  <RouterLink
                    to={`/#${item.to}`}
                    className="cursor-pointer uppercase text-[15px] text-white transition-colors hover:text-[#FA2A20]"
                    style={{ fontFamily: "Oswald" }}
                  >
                    {item.name}
                  </RouterLink>
                )}
              </li>
            ))}
          </ul>

          <JoinNow />
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white lg:hidden"
        >
          {isOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </nav>

      {isOpen && (
        <div className="bg-black px-6 py-6 lg:hidden">
          <ul className="flex flex-col gap-6">
            {navItems.map((item) => (
              <li key={item.to}>
                {isHome ? (
                  <ScrollLink
                    to={item.to}
                    smooth
                    offset={-80}
                    duration={500}
                    onClick={() => setIsOpen(false)}
                    className="block cursor-pointer text-lg uppercase text-white"
                    style={{ fontFamily: "Oswald" }}
                  >
                    {item.name}
                  </ScrollLink>
                ) : (
                  <RouterLink
                    to={`/#${item.to}`}
                    onClick={() => setIsOpen(false)}
                    className="block text-lg uppercase text-white"
                    style={{ fontFamily: "Oswald" }}
                  >
                    {item.name}
                  </RouterLink>
                )}
              </li>
            ))}

            <JoinNow />
          </ul>
        </div>
      )}
    </>
  );
}

export default Navbar;