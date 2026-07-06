import React, {useState} from "react";
import White from "../logos/White";
import JoinNow from "../buttons/JoinNow";
import { Link } from "react-scroll";
import { useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

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

  return (
    <>
      <nav className="mx-auto flex h-16 w-full max-w-[1216px] items-center justify-between px-4 sm:px-6 lg:px-0">
        

        
        <White />

        
        <div className="hidden lg:flex items-center gap-8">
          <ul className="flex items-center gap-6">
            {navItems.map((item) => {
              const isCoachPage =
                item.to === "coaches" &&
                location.pathname.startsWith("/coach");

              return (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    spy={true}
                    smooth={true}
                    offset={-80}
                    duration={500}
                    activeClass="active"
                    className={`cursor-pointer uppercase text-[15px] transition-colors ${
                      isCoachPage
                        ? "text-[#FA2A20]"
                        : "text-white hover:text-[#FA2A20]"
                    }`}
                    style={{ fontFamily: "Oswald" }}
                  >
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>

          <JoinNow />
        </div>

        
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-white"
        >
          {isOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </nav>

      {isOpen && (
          <div className="lg:hidden bg-black px-6 py-6">
            <ul className="flex flex-col gap-6">
              {navItems.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    onClick={() => setIsOpen(false)}
                    className="block uppercase text-white text-lg"
                  >
                    {item.name}
                  </Link>
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