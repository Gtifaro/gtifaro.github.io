"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
const navItems = [
  {
    path: "#home",
    name: "/",
  },
  {
    path: "#about",
    name: "About",
  },
  {
    path: "#work",
    name: "Work",
  },
  {
    path: "#contact",
    name: "Contact",
  },
];

export default function NavBar() {
  let pathname = usePathname() || "#home";

  const [hoveredPath, setHoveredPath] = useState("#home");
  function handleLoad(scroll, screenY) {
    if (scroll <= screenY * .5) {
      setHoveredPath("#home")
    } else if (scroll <= screenY * 1.5) {
      setHoveredPath("#about")
    } else if (scroll <= (screenY * 2.5)) {
      setHoveredPath("#work")
    } else {
      setHoveredPath("#contact")
    }
  }

  useEffect(() => {
    if (typeof window !== "undefined") {
      handleLoad(window.scrollY, window.screen.availHeight)
      window.addEventListener("scroll", () => handleLoad(window.scrollY, window.screen.availHeight));
      return () => window.removeEventListener("scroll", () => handleLoad(window.scrollY, window.screen.availHeight));
    }
  }, [hoveredPath])

  return (
    <div className="p-[1vh] sm:p-[1vw] w-full fixed z-[100]">
      <nav
        className={`flex relative justify-center w-fit mx-auto rounded-full px-[1vh] sm:px-[.5vw] py-[.5vh] sm:py-[.25vw] z-[100] backdrop-blur-md`}
      >
        {navItems.map((item) => {
          const isActive = item.path === pathname;
          return (
            <Link
              key={item.path}
              className={`px-[2vh] sm:px-[1vw] py-[1vh] sm:py-[.5vw] select-none rounded-full text-[2vh] sm:text-[1vw] relative no-underline duration-300 ease-in ${item.path === hoveredPath ? "text-[#00FFFF]" : "text-[#008A8A]"
                }`}
              data-active={isActive}
              href={item.path}
            >
              <span>{item.name}</span>
              {item.path === hoveredPath && (
                <motion.div
                  className="absolute bottom-0 left-0 h-full bg-[#333] rounded-full -z-10"
                  layoutId="navbar"
                  aria-hidden="true"
                  style={{
                    width: "100%",
                  }}
                  transition={{
                    type: "spring",
                    bounce: 0,
                    stiffness: 500,
                    damping: 50,
                    duration: 1,
                  }}
                />
              )}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
