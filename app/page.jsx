'use client'

import { useEffect, useState } from "react";

const devtext = ["D", "e", "s", "a", "r", "r", "o", "l", "l", "a", "d", "o", "r", " ", "F", "r", "o", "n", "t", "e", "n", "d"]

export default function Home() {
  const [cursor, setCursor] = useState("")
  const [finalCursor, setFinalCursor] = useState("|")
  useEffect(() => {
    if (typeof window !== "undefined" && devtext[cursor.length] !== undefined) {
      function handleWrite() {
        setCursor(cursor + devtext[cursor.length])
      };
      let interval = window.setInterval(handleWrite, 100);
      return () => window.clearInterval(interval);
    }
  }, [cursor])

  useEffect(() => {
    if (typeof window !== "undefined") {
      function handleWrite() {
        devtext[cursor.length] === undefined && setFinalCursor(finalCursor === "|" ? " " : "|")
      };
      let interval = window.setInterval(handleWrite, 500);
      return () => window.clearInterval(interval);
    }
  }, [cursor, finalCursor])

  return (
    <main className="w-full bg-[#141414]">
      <div id="home" className="h-screen text-white flex items-center">
        <div className="w-fit mx-auto">
          <span className="duration-75 ease-in-out text-[3vw] md:text-[1.5vw] text-[#a1a1a1] block md:text-center font-thin leading-[3vw] md:leading-[1.5vw]">¡Hola! soy</span>
          <span className="duration-75 ease-in-out font-bold text-transparent md:text-center text-[10vw] md:text-[5vw] leading-[10vw] md:leading-[5vw] bg-gradient-to-r from-violet-500 via-blue-500 to-cyan-500 bg-clip-text">Gabriel R. Tífaro</span>
          <span className="duration-75 ease-in-out w-[58vw] md:w-[29vw] md:mx-auto text-[5vw] md:text-[2.5vw] text-left text-white block font-semibold leading-[5vw] md:leading-[2.5vw]">{cursor}{finalCursor}</span>
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
