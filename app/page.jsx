'use client'

import { useEffect, useState } from "react";
import Link from "next/link";
import Github from "@/components/Github";
import Linkedin from "@/components/Linkedin";

const devtext = ["F", "r", "o", "n", "t", "e", "n", "d", " ", "D", "e", "v", "e", "l", "o", "p", "e", "r",]

export default function Home() {
  const [cursor, setCursor] = useState("")
  const [finalCursor, setFinalCursor] = useState(true)
  const [show, setShow] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setShow(true)
    }, 600);
  }, [])

  useEffect(() => {
    if (typeof window !== "undefined" && devtext[cursor.length] !== undefined) {
      function handleWrite() {
        show && setCursor(cursor + devtext[cursor.length])
      };
      let interval = window.setInterval(handleWrite, 45);
      return () => window.clearInterval(interval);
    }
  }, [cursor, show])

  useEffect(() => {
    if (typeof window !== "undefined") {
      function handleWrite() {
        show && devtext[cursor.length] === undefined && setFinalCursor(!finalCursor)
      };
      let interval = window.setInterval(handleWrite, 400);
      return () => window.clearInterval(interval);
    }
  }, [cursor, finalCursor])

  return (
      <main className="w-full bg-[#141414] starscontainer">
        <div className="stars stars1 bg-[url('/stars/star1.png')] z-10" />
        <div className="stars stars2 bg-[url('/stars/star2.png')] z-10" />
        <div className="stars stars3 bg-[url('/stars/star3.png')] z-10" />
        <div className="stars stars4 bg-[url('/stars/star4.png')] z-10" />
        <div className="stars stars5 bg-[url('/stars/star5.png')] z-10" />
        <div className="stars stars6 bg-[url('/stars/star6.png')] z-10" />
        <div className="stars stars7 bg-[url('/stars/star7.png')] z-10" />
        <div className="stars stars8 bg-[url('/stars/star8.png')] z-10" />
        <div id="home" className="h-screen relative text-white flex items-center z-20">
          <div className="w-fit mx-auto">
            <span className="select-none cursor-default text-[3.3vw] sm:text-[2vw] text-[#a1a1a1] block sm:text-center font-thin leading-[4vw] sm:leading-[2vw] animate-fade-down animate-duration-700 animate-ease-in-out">¡Hi! I’m</span>
            <span className="select-none cursor-default font-bold text-transparent sm:text-center text-[10vw] sm:text-[5vw] leading-[10vw] sm:leading-[5vw] bg-gradient-to-r from-violet-500 via-blue-500 to-cyan-500 bg-clip-text animate-fade animate-duration-500 animate-ease-in-out animate-delay-[350ms]">Gabriel R. Tífaro</span>
            <span className="select-none cursor-default w-fit sm:mx-auto text-[5vw] sm:text-[2.5vw] text-left text-white block font-semibold leading-[5vw] sm:leading-[2.5vw] animate-fade animate-duration-500 animate-ease-in-out animate-delay-[600ms]">{cursor}<span className={`duration-200 ${finalCursor ? "opacity-100" : "opacity-0"}`}>|</span></span>
            <div className="sm:grid sm:grid-cols-2 w-full h-auto mt-[1.75vw] sm:mt-[1vw] animate-fade-up animate-once animate-duration-500 animate-delay-[600ms] flex items-center">
              <div className="float-left w-fit sm:w-full h-auto">
                <Link href="/#contact" className="float-right duration-200 w-fit mr-[1vw] py-[1vw] px-[2vw] sm:px-[1vw] sm:py-[.5vw] box-border rounded-[1vw] sm:rounded-[.5vw] hover:text-[#141414] text-[#00FFFF] border-[.1px] border-[#00FFFF] hover:bg-[#00FFFF] text-[3vw] sm:text-[1vw]">Contact</Link>
              </div>
              <div className="float-left w-fit sm:w-full h-auto flex items-center">
                <a href="https://www.github.com/Gtifaro" target="_blank" className="hover:scale-125 duration-200 ml-[2vw] sm:ml-[0vw] block w-[5vw] sm:w-[2vw] sm:h-fit"><Github /></a>
                <a href="https://www.linkedin.com/in/gtifaro" target="_blank" className="hover:scale-125 duration-200 ml-[2vw] sm:ml-[.8vw] md:ml-[.5vw] block w-[5vw] sm:w-[2vw] sm:h-fit"><Linkedin /></a>
              </div>
            </div>
          </div>
        </div>
        <div id="about" className="h-screen relative text-white flex items-center z-20">
          <div className="w-[90vw] sm:w-[25vw] mx-auto h-[30vw] sm:h-auto p-[2.5vw] sm:p-[1.25vw] rounded-[1vw] sm:rounded-[.5vw] text-[3.25vw] sm:text-[1.25vw] duration-200 ease-in-out bg-[#202020]">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab atque nihil vero eaque corporis. Numquam error nobis reprehenderit fugit quia consectetur expedita maiores. Provident quis harum velit amet iste nesciunt!
            {/* Desarrollador Frontend con más de 1 año de experiencia creando soluciones innovadoras con tecnologías como HTML, CSS, JavaScript, entre otras. Nacido en Bogotá, Colombia, hace 21 años y apasionado por la creación del futuro de la tecnología. */}
          </div>
        </div>
        <div id="work" className="h-screen relative text-white z-20">
        </div>
        <div id="contact" className="h-screen relative text-white z-20">
        </div>
      </main>
  );
}
