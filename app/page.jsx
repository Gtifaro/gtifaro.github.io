'use client'

import { useEffect, useState } from "react";

const devtext = "Desarrollador frontend"

export default function Home() {
  const [cursor, setCursor] = useState("|")
  useEffect(() => {
    if (typeof window !== "undefined") {
      function handleWrite() {
        setCursor(cursor === "|" ? "" : "|")
      };
      let interval = window.setInterval(handleWrite, 700);
      return () => window.clearInterval(interval);
    }
  }, [cursor])
  return (
    <main className="w-full">
      <div id="home" className="bg-[#141414] h-screen text-white flex items-center">
        <div className="w-fit mx-auto font-bold text-[5vw] text-[#00FFFF] leading-[5vw]">
        <span className="text-[1vw] text-[#ffffff] block text-center font-thin leading-[1.5vw]">¡Hola! soy</span>
          Gabriel R. Tífaro
          <span className="text-[2.5vw] h-[7.5vw] text-[#ffffff] block text-center font-semibold leading-[3.75vw]">{cursor}</span>
        </div>
      </div>
      <div id="about" className="bg-[#141414] h-screen text-white flex items-center">
        <div className="w-[90vw] md:w-[25vw] mx-auto h-[30vw] md:h-auto p-[2.5vw] md:p-[1.25vw] rounded-[1vw] md:rounded-[.5vw] text-[3.25vw] md:text-[1.25vw] duration-200 ease-in-out bg-[#202020]">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab atque nihil vero eaque corporis. Numquam error nobis reprehenderit fugit quia consectetur expedita maiores. Provident quis harum velit amet iste nesciunt!
          {/* Desarrollador Frontend con más de 1 año de experiencia creando soluciones innovadoras con tecnologías como HTML, CSS, JavaScript, entre otras. Nacido en Bogotá, Colombia, hace 21 años y apasionado por la creación del futuro de la tecnología. */}
        </div>
      </div>
      <div id="work" className="bg-[#141414] h-screen text-white">
      </div>
      <div id="contact" className="bg-[#141414] h-screen text-white">
      </div>
    </main>
  );
}
