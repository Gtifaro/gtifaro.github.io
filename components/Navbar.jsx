"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const navItems = [
  {
    path: "/",
    name: "/",
  },
  {
    path: "/about",
    name: "About",
  },
  {
    path: "/work",
    name: "Work",
  },
  {
    path: "/contact",
    name: "Contact",
  },
];

export default function NavBar() {
  let pathname = usePathname() || "/";

  const [hoveredPath, setHoveredPath] = useState(pathname);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    function handleScroll() {
      setScrollY(window.scrollY > 10);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollY]);

  return (
    <div className="p-[1vh] w-full fixed z-[100]">
      <nav
        className={`flex relative justify-center w-fit mx-auto rounded-full px-[1vh] py-[.5vh] z-[100] backdrop-blur-md`}
      >
        {navItems.map((item) => {
          const isActive = item.path === pathname;

          return (
            <Link
              key={item.path}
              className={`px-[2vh] py-[1vh] rounded-full text-[1.5vh] relative no-underline duration-300 ease-in ${
                item.path === hoveredPath ? "text-[#00FFFF]" : "text-[#008A8A]"
              }`}
              data-active={isActive}  
              href={item.path}
              onMouseOver={() => setHoveredPath(item.path)}
              onMouseLeave={() => setHoveredPath(pathname)}
            >
              <span>{item.name}</span>
              {item.path === hoveredPath && (
                <motion.div
                  className="absolute bottom-0 left-0 h-full bg-[#282828] rounded-full -z-10"
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
