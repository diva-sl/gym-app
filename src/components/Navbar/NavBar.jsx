import React, { useEffect, useState } from "react";
import { navLink } from "../../Data";
import { HiMenuAlt1, Hix } from "react-icons/hi";
import MobileNavLinks from "./MobileNavLinks";
import NavLink from "./NavLink";
import { motion } from "framer-motion";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [active, setActive] = useState(null);
  useEffect(() => {
    const scrollActive = () => {
      setActive(window.scrollY > 20);
    };
    window.addEventListener("scroll", scrollActive);
    return () => window.removeEventListener("scroll", scrollActive);
  }, [active]);
  return (
    <div
      className={`${
        active ? "shadow-lg bg-teal" : ""
      } fixed w-full top-0 left-0 z-20`}
    >
      <div>
        <div
          className={`${
            active ? "py-4 transition-all duration-300" : "py-2"
          } w-[70%s] mx-auto flex items-center justify-between px-2`}
        >
          <div className=" flex items-center gap-4 justify-between ">
            <HiMenuAlt1
              className="
            text-3xl text-white sm:hidden cursor-pointer"
              onClick={() => setToggle(true)}
            />
            <div className="text-xl text-red-700 uppercase tracking-wide font-bold">
              <img src="/logo1.png" alt="" className=" h-[65px]" />
            </div>
          </div>
          <div className={`sm:flex items-center hidden ${"text-white"}`}>
            {navLinks.map((navLink) => {
              return <NavLink key={navLink.id} {...navLink} />;
            })}
          </div>
          {toggle && (
            <motion.div
              initial={{ x: -500, opacity: 0 }}
              animate={{ x: 0, opacity1 }}
              transition={{ duration: 0.3 }}
              className="fixed h-full w-96 top-0 left-0 z-20 big-Teal text-white flex flex-col justify-center items-center shadow-lg gap-8 py-8"
            >
              {navLinks.map((navLink) => {
                return (
                  <MobileNavLinks
                    key={navLink.id}
                    {...navLink}
                    setToggle={setToggle}
                  />
                );
              })}
              <Hix
                className="absolute right-12 top-12 text-3xl cursor-pointer"
                onClick={(prev) => setToggle(!prev)}
              />
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};
export default Navbar;
