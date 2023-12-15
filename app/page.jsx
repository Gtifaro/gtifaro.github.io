'use client'

import { useEffect, useState } from "react";
import Link from "next/link";
import Github from "@/components/Github";
import Linkedin from "@/components/Linkedin";

const devtext = ["F", "r", "o", "n", "t", "e", "n", "d", " ", "D", "e", "v", "e", "l", "o", "p", "e", "r",]

export default function Home() {
  const [cursor, setCursor] = useState("")
  const [finalCursor, setFinalCursor] = useState(false)
  useEffect(() => {
    if (typeof window !== "undefined" && devtext[cursor.length] !== undefined) {
      function handleWrite() {
        setCursor(cursor + devtext[cursor.length])
      };
      let interval = window.setInterval(handleWrite, 45);
      return () => window.clearInterval(interval);
    }
  }, [cursor])

  useEffect(() => {
    if (typeof window !== "undefined") {
      function handleWrite() {
        devtext[cursor.length] === undefined && setFinalCursor(!finalCursor)
      };
      let interval = window.setInterval(handleWrite, 400);
      return () => window.clearInterval(interval);
    }
  }, [cursor, finalCursor])

  return (
    <main className="w-full bg-[#141414]">
      <div id="home" className="h-screen text-white flex items-center">
        <div className="w-fit mx-auto ">
          <span className="select-none cursor-default text-[3vw] md:text-[1.5vw] text-[#a1a1a1] block md:text-center font-thin leading-[3vw] md:leading-[1.5vw] animate-fade-down animate-duration-700 animate-ease-in-out">¡Hi! Im</span>
          <span className="select-none cursor-default font-bold text-transparent md:text-center text-[10vw] md:text-[5vw] leading-[10vw] md:leading-[5vw] bg-gradient-to-r from-violet-500 via-blue-500 to-cyan-500 bg-clip-text animate-fade animate-duration-500 animate-ease-in-out animate-delay-[350ms]">Gabriel R. Tífaro</span>
          <span className="select-none cursor-default w-fit md:mx-auto text-[5vw] md:text-[2.5vw] text-left text-white block font-semibold leading-[5vw] md:leading-[2.5vw]">{cursor}<span className={`duration-200 ${finalCursor ? "opacity-100" : "opacity-0"}`}>|</span></span>
          <div className="md:grid md:grid-cols-2 w-full h-auto mt-[1.5vw] md:mt-[1vw] animate-fade-up animate-once animate-duration-700 animate-delay-[500ms]">
            <div className="float-left w-fit md:w-full h-auto">
              <Link href="/#contact" className="float-right duration-200 w-fit mr-[1vw] py-[.5vw] md:py-[.25vw] px-[1vw] md:px-[.5vw] box-border rounded-[.5vw] md:rounded-[.25vw] hover:text-[#141414] text-[#00FFFF] border-[.1vw] border-[#00FFFF] hover:bg-[#00FFFF] text-[2vw] md:text-[1vw]">Contact</Link>
            </div>
            <div className="float-left w-fit md:w-full h-auto flex items-center">
              <a href="https://www.github.com/Gtifaro" target="_blank" className="hover:scale-125 duration-200 ml-[1vw] md:ml-[0vw] block w-[4vw] md:w-fit md:h-fit"><Github /></a>
              <a href="https://www.linkedin.com/in/gtifaro" target="_blank" className="hover:scale-125 duration-200 ml-[1.5vw] md:ml-[1vw] block w-[4vw] md:w-fit md:h-fit"><Linkedin /></a>
            </div>
          </div>
        </div>
      </div>
      <div id="about" className="h-screen text-white flex items-center">
        <div className="w-[90vw] md:w-[25vw] mx-auto h-[30vw] md:h-auto p-[2.5vw] md:p-[1.25vw] rounded-[1vw] md:rounded-[.5vw] text-[3.25vw] md:text-[1.25vw] duration-200 ease-in-out bg-[#202020]">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab atque nihil vero eaque corporis. Numquam error nobis reprehenderit fugit quia consectetur expedita maiores. Provident quis harum velit amet iste nesciunt!
          {/* Desarrollador Frontend con más de 1 año de experiencia creando soluciones innovadoras con tecnologías como HTML, CSS, JavaScript, entre otras. Nacido en Bogotá, Colombia, hace 21 años y apasionado por la creación del futuro de la tecnología. */}
        </div>
      </div>
      <div id="work" className="h-screen text-white">
      </div>
      <div id="contact" className="h-screen text-white">
      </div>
    </main>
  );
}
