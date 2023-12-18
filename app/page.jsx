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
    }, 350);
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
          <span className="select-none cursor-default font-bold text-transparent sm:text-center text-[10vw] sm:text-[5vw] leading-[10vw] sm:leading-[5vw] bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500 bg-clip-text animate-fade animate-duration-500 animate-ease-in-out animate-delay-[350ms]"><span className="tl">G</span>abriel R. Tífaro</span>
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
        <div className="w-fit mx-auto sm:grid sm:grid-cols-2 sm:gap-[1vw]">
          <div className="w-[75vw] text-center sm:w-[29vw] mx-auto h-auto p-[2.5vw] sm:p-[1.5vw] text-[3.25vw] sm:text-[1.25vw] duration-200 ease-in-out bg-[#101010]">
            <div className="flex items-center h-full">
              <div className="grid grid-cols-5 grid-rows-2 w-full h-fit gap-[2vw] sm:gap-[1vw]">
                <div className="w-full py-[3.5vw] sm:py-[1vw] col-span-5">
                  Skills
                </div>
                <Link title="¿What’s JavaScript?" href="https://wikipedia.org/wiki/JavaScript" target="_blank" className="bg-[url('/skills/javascript.png')] bg-cover bg-center hoverfilter w-full h-[12vw] sm:h-[4vw]" />
                <Link title="¿What’s TailwindCSS?" href="https://wikipedia.org/wiki/Tailwind_CSS" target="_blank" className="bg-[url('/skills/tailwindcss.png')] bg-cover bg-center hoverfilter w-full h-[12vw] sm:h-[4vw]" />
                <Link title="¿What’s Node.js?" href="https://wikipedia.org/wiki/Node.js" target="_blank" className="bg-[url('/skills/nodejs.png')] bg-cover bg-center hoverfilter w-full h-[12vw] sm:h-[4vw]" />
                <Link title="¿What’s HTML?" href="https://wikipedia.org/wiki/HTML" target="_blank" className="bg-[url('/skills/html.png')] bg-cover bg-center hoverfilter w-full h-[12vw] sm:h-[4vw]" />
                <Link title="¿What’s React.js?" href="https://wikipedia.org/wiki/React_(software)" target="_blank" className="bg-[url('/skills/reactjs.png')] bg-cover bg-center hoverfilter h-[12vw] sm:h-[4vw]" />
                <Link title="¿What’s Next.js?" href="https://wikipedia.org/wiki/Next.js" target="_blank" className="bg-[url('/skills/nextjs.png')] bg-cover bg-center hoverfilter w-full h-[12vw] sm:h-[4vw]" />
                <Link title="¿What’s CSS?" href="https://wikipedia.org/wiki/CSS" target="_blank" className="bg-[url('/skills/css.png')] bg-cover bg-center hoverfilter w-full h-[12vw] sm:h-[4vw]" />
                <Link title="¿What’s Amazon Web Services?" href="https://wikipedia.org/wiki/Amazon_Web_Services" target="_blank" className="bg-[url('/skills/aws.png')] bg-cover bg-center hoverfilter w-full h-[12vw] sm:h-[4vw]" />
                <Link title="¿What’s Here Technologies?" href="https://wikipedia.org/wiki/Here_Technologies" target="_blank" className="bg-[url('/skills/here.png')] bg-cover bg-center hoverfilter w-full h-[12vw] sm:h-[4vw]" />
                <Link title="¿What’s Git?" href="https://en.wikipedia.org/wiki/Git" target="_blank" className="bg-[url('/skills/git.png')] bg-cover bg-center hoverfilter w-full h-[12vw] sm:h-[4vw]" />
              </div>
            </div>
          </div>
          <div className="w-[75vw] sm:w-[29vw] mx-auto h-auto p-[2.5vw] sm:p-[1.5vw] text-[3.25vw] sm:text-[1.25vw] duration-200 ease-in-out bg-[#101010]">
            Frontend Developer with +1 year of experience creating innovative solutions using technologies such as HTML, CSS, JavaScript, among others.<br /><br /> Born in Bogotá, <span className="text-[#ffff50]" >Colo</span><span className="text-[#50f5ff]" >mb</span><span className="text-[#ff5050]">ia</span>, {Math.floor((new Date().getTime() - new Date("02/24/2002").getTime()) / 1000 / 60 / 60 / 24 / 365)} years ago, and passionate about creating the future of technology.
          </div>
        </div>
      </div>
      <div id="work" className="h-screen relative text-white flex items-center z-20">
        <div className="w-[55vw] h-[85vh] mt-[2.5vw] mx-auto grid grid-cols-3">
          <div className="w-full h-[45vh] hoverproject">
            <div className="w-full h-full">
              <div className="w-full h-1/2 bg-[#222]" />
              <div className="w-full h-1/2 px-[1vw] py-[.5vw] bg-[#101010]">
                <div className="w-full h-fit text-[.75vw]">
                  <span className="w-fit pr-[.5vw] text-[#00FFFF]">Next.js</span>
                  <span className="w-fit pr-[.5vw] text-[#00FFFF]">AWS</span>
                  <span className="w-fit pr-[.5vw] text-[#00FFFF]">Here</span>
                  <span className="w-fit pr-[.5vw] text-[#00FFFF]">CSS</span>
                  <span className="w-fit pr-[.5vw] text-[#00FFFF]">Node.js</span>
                </div>
                <div className="text-[1.5vw]">2Delivery - Rebuild</div>
                <div className="text-[.65vw]">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam officiis, porro odit magni maiores ullam, reiciendis, perspiciatis repellat voluptatum molestias quia est nam enim deleniti dolorem qui quidem rem assumenda.</div>
              </div>
            </div>
          </div>
          <div className="w-full h-[45vh] hoverproject">
            <div className="w-full h-full">
              <div className="w-full h-1/2 bg-[#222]" />
              <div className="w-full h-1/2 px-[1vw] py-[.5vw] bg-[#101010]">
                <div className="w-full h-fit text-[.75vw]">
                  <span className="w-fit pr-[.5vw] text-[#00FFFF]">React.js</span>
                  <span className="w-fit pr-[.5vw] text-[#00FFFF]">AWS</span>
                  <span className="w-fit pr-[.5vw] text-[#00FFFF]">Here</span>
                  <span className="w-fit pr-[.5vw] text-[#00FFFF]">CSS</span>
                  <span className="w-fit pr-[.5vw] text-[#00FFFF]">Node.js</span>
                </div>
                <div className="text-[1.5vw]">2Delivery - Legacy</div>
                <div className="text-[.65vw]">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam officiis, porro odit magni maiores ullam, reiciendis, perspiciatis repellat voluptatum molestias quia est nam enim deleniti dolorem qui quidem rem assumenda.</div>
              </div>
            </div>
          </div>
          <div className="w-full h-[45vh] hoverproject">
            <div className="w-full h-full">
              <div className="w-full h-1/2 bg-[#222]" />
              <div className="w-full h-1/2 px-[1vw] py-[.5vw] bg-[#101010]">
                <div className="w-full h-fit text-[.75vw]">
                  <span className="w-fit pr-[.5vw] text-[#00FFFF]">Next.js</span>
                  <span className="w-fit pr-[.5vw] text-[#00FFFF]">TailwindCSS</span>
                  <span className="w-fit pr-[.5vw] text-[#00FFFF]">Node.js</span>
                </div>
                <div className="text-[1.5vw]">Corp. Web Page</div>
                <div className="text-[.65vw]">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam officiis, porro odit magni maiores ullam, reiciendis, perspiciatis repellat voluptatum molestias quia est nam enim deleniti dolorem qui quidem rem assumenda.</div>
              </div>
            </div>
          </div>
          <div className="w-full h-[45vh] hoverproject">
            <div className="w-full h-full">
              <div className="w-full h-1/2 bg-[#222]" />
              <div className="w-full h-1/2 px-[1vw] py-[.5vw] bg-[#101010]">
                <div className="w-full h-fit text-[.75vw]">
                  <span className="w-fit pr-[.5vw] text-[#00FFFF]">React.js</span>
                  <span className="w-fit pr-[.5vw] text-[#00FFFF]">Here</span>
                  <span className="w-fit pr-[.5vw] text-[#00FFFF]">CSS</span>
                </div>
                <div className="text-[1.5vw]">API Viewer</div>
                <div className="text-[.65vw]">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam officiis, porro odit magni maiores ullam, reiciendis, perspiciatis repellat voluptatum molestias quia est nam enim deleniti dolorem qui quidem rem assumenda.</div>
              </div>
            </div>
          </div>
          <div className="w-full h-[45vh] hoverproject">
            <div className="w-full h-full">
              <div className="w-full h-1/2 bg-[#222]" />
              <div className="w-full h-1/2 px-[1vw] py-[.5vw] bg-[#101010]">
                <div className="w-full h-fit text-[.75vw]">
                  <span className="w-fit pr-[.5vw] text-[#00FFFF]">React.js</span>
                  <span className="w-fit pr-[.5vw] text-[#00FFFF]">AWS</span>
                  <span className="w-fit pr-[.5vw] text-[#00FFFF]">Here</span>
                  <span className="w-fit pr-[.5vw] text-[#00FFFF]">CSS</span>
                </div>
                <div className="text-[1.5vw]">Demos</div>
                <div className="text-[.65vw]">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam officiis, porro odit magni maiores ullam, reiciendis, perspiciatis repellat voluptatum molestias quia est nam enim deleniti dolorem qui quidem rem assumenda.</div>
              </div>
            </div>
          </div>
          <div className="w-full h-[45vh] hoverproject">
            <div className="w-full h-full">
              <div className="w-full h-1/2 bg-[#222]" />
              <div className="w-full h-1/2 px-[1vw] py-[.5vw] bg-[#101010]">
                <div className="w-full h-fit text-[.75vw]">
                  <span className="w-fit pr-[.5vw] text-[#00FFFF]">Here</span>
                </div>
                <div className="text-[1.5vw]">Support / Consulting</div>
                <div className="text-[.65vw]">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam officiis, porro odit magni maiores ullam, reiciendis, perspiciatis repellat voluptatum molestias quia est nam enim deleniti dolorem qui quidem rem assumenda.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="contact" className="h-screen relative text-white z-20">
      </div>
    </main>
  );
}
