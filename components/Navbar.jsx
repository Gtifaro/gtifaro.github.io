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
    path: "/#about",
    name: "About",
  },
  {
    path: "/#work",
    name: "Work",
  },
  {
    path: "/#contact",
    name: "Contact",
  },
];

export default function NavBar() {
  let pathname = usePathname() || "/";

  if (pathname.includes("/#contact")) {
    pathname = "/#contact";
  }
  if (pathname.includes("/#work")) {
    pathname = "/#work";
  }
  if (pathname.includes("/#about")) {
    pathname = "/#about";
  }
  if (pathname.includes("/")) {
    pathname = "/";
  }

 
  const [hoveredPath, setHoveredPath] = useState(pathname);
  const [scrollY, setScrollY] = useState(0);
  
  useEffect(() => {
    function handleScroll() {
      setScrollY(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll); 
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollY])

  return (
    <div className="p-[0.4rem] w-full rounded-lg mb-12 fixed top-2 z-[100] ">
      <nav className={`flex gap-2 relative justify-center w-fit mx-auto rounded-full px-2 py-1 z-[100] ${
                scrollY ? "backdrop-blur-sm" : ""
              }`}>
        {navItems.map((item) => {
          const isActive = item.path === hoveredPath;
          return (
            <Link
              key={item.path}
              className={`px-4 py-2 rounded-md text-sm lg:text-base relative no-underline duration-100 ease-in float-left ${
                isActive ? scrollY ? "text-zinc-100": "text-zinc-200" : scrollY ? "text-zinc-300": "text-zinc-400"
              }`}
              data-active={isActive}
              href={item.path}
              onClick={() => {setHoveredPath(item.path)}}
            >
              <span>{item.name}</span>
              {item.path === hoveredPath && (
                <motion.div
                  className="absolute bottom-0 left-0 h-full bg-stone-800 rounded-full -z-10"
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