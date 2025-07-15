'use client'
import React from "react";
import { useRef } from "react";
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Menu, X } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const Navbar = ({ isNavTriggered, activePage } : {
  isNavTriggered: boolean,
  activePage?: number
}) => {
  const navRef = useRef<HTMLDivElement>(null);
  const [isMenuActive, setIsMenuActive] = React.useState(false);

  return (
    <>
      <div
        ref={navRef}
        className={`fixed flex justify-center w-full md:h-24 h-16 md:py-4 py-2 md:px-8 px-2 z-40 transition-all duration-75 
          ${isNavTriggered ? "bg-gradient-to-br from-[#121314]/95 to-[#101112]/95 backdrop-blur-lg" : 'bg-gradient-to-b from-[#131415]/50 to-transparent'}`}
      >
        <nav className="flex flex-row w-full h-full max-w-[1620px] px-[2vw]">
          <a className="flex flex-row cursor-pointer" href="./" data-name="WrynnDev Home" >
            <div className="grid grid-cols-1 h-full md:w-[4.5rem] w-12">
              
              {/* Color Logo */}
              <svg className={`col-start-1 row-start-1 transition-opacity ${isNavTriggered ? '' : 'opacity-0 duration-200'}`} viewBox="0 0 176.23 176.23">
                <defs>
                  <style>{`
                    .a { fill: url(#a); }
                    .b { fill: url(#b); }
                    .c { fill: url(#c); }
                  `}</style>
                  <linearGradient id="a" x1="96.34" y1="135.3" x2="130.01" y2="76.98" gradientUnits="userSpaceOnUse">
                    <stop offset="0" stopColor="#ee513f" />
                    <stop offset="0.4" stopColor="#ee543f" />
                    <stop offset="0.65" stopColor="#ee5c3f" />
                    <stop offset="0.86" stopColor="#ee6b3f" />
                    <stop offset="1" stopColor="#ee793f" />
                  </linearGradient>
                  <linearGradient id="b" x1="95.17" y1="154.47" x2="103.8" y2="139.52" xlinkHref="#a" />
                  <linearGradient id="c" x1="25.81" y1="25.81" x2="150.42" y2="150.42" gradientUnits="userSpaceOnUse">
                    <stop offset="0" stopColor="#ee513f" />
                    <stop offset="0.28" stopColor="#ee613f" />
                    <stop offset="0.7" stopColor="#ee733f" />
                    <stop offset="1" stopColor="#ee793f" />
                  </linearGradient>
                </defs>
                <path className="a" d="M88.85,83.71A367.12,367.12,0,0,1,68.48,41.46,275.64,275.64,0,0,0,78.74,72.25c20.34,50.94,52.31,88.59,79.72,97.54C135.13,151.55,109.92,121.23,88.85,83.71Z" />
                <path className="b" d="M132.86,176.23c-21.75-30.42-46.8-51.09-67.94-56.42C85.78,129.91,109.88,149.68,132.86,176.23Z" />
                <path className="c" d="M88.12,0a88.12,88.12,0,1,0,88.11,88.12A88.12,88.12,0,0,0,88.12,0ZM92,168.13A76.12,76.12,0,1,1,168.13,92,76.12,76.12,0,0,1,92,168.13Z" />
              </svg>

              {/* Black and White Logo */}
              <svg className={`col-start-1 row-start-1 transition-opacity duration-200 ${isNavTriggered ? 'opacity-0' : ''}`} viewBox="0 0 176.23 176.23">
                <path d="M88.85,83.71A367.12,367.12,0,0,1,68.48,41.46,275.64,275.64,0,0,0,78.74,72.25c20.34,50.94,52.31,88.59,79.72,97.54C135.13,151.55,109.92,121.23,88.85,83.71Z"/>
                <path d="M132.86,176.23c-21.75-30.42-46.8-51.09-67.94-56.42C85.78,129.91,109.88,149.68,132.86,176.23Z"/>
                <path d="M88.12,0a88.12,88.12,0,1,0,88.11,88.12A88.12,88.12,0,0,0,88.12,0ZM92,168.13A76.12,76.12,0,1,1,168.13,92,76.12,76.12,0,0,1,92,168.13Z"/>
              </svg>

            </div>
            <div className="flex h-full items-center px-4">
              <h2 className={`md:block hidden font-ysabeau md:text-5xl transition-colors duration-75 ${isNavTriggered ? "bg-gradient-to-r from-[#ee513f] to-[#ee793f] text-transparent bg-clip-text" : "text-black"}`}>WrynnDev</h2>
            </div>
          </a>

          <ul className={`md:flex hidden flex-row ml-auto my-auto gap-10 text-3xl transition-colors duration-200 font-jost ${
            isNavTriggered ? 'text-[#e2e3e4]' : 'text-[#131415]'
          }`}>
            <li className={`cursor-pointer transition-colors duration-200 ${activePage == 2 ? 'underline' : 'hover:underline'}`}>{activePage != 2 ? <a href="./services">Services</a> : <>Services</>}</li>
            <li className={`cursor-pointer transition-colors duration-200 ${activePage == 3 ? 'underline' : 'hover:underline'}`}>{activePage != 3 ? <a href="./about">About</a> : <>About</>}</li>
            <li className={`cursor-pointer transition-colors duration-200 ${activePage == 4 ? 'underline' : 'hover:underline'}`}>{activePage != 4 ? <a href="./contact">Contact</a> : <>Contact</>}</li>
          </ul>
          <button className="md:hidden flex ml-auto my-auto" onClick={ isMenuActive ? () => setIsMenuActive(false) : () => setIsMenuActive(true) }>
            { isMenuActive ? 
              <X className={`w-9 h-9 ${isNavTriggered ? 'text-[#e2e3e4]' : 'text-[#131415]'}`} name="Close Menu" /> :
              <Menu className={`w-9 h-9 ${isNavTriggered ? 'text-[#e2e3e4]' : 'text-[#131415]'}`} name="Menu" />
            }
          </button>

        </nav>
      </div>

      {/* Side Menu */}
      <div className={`md:hidden flex flex-col ${isMenuActive ? '' : '-translate-x-[100%]'} fixed h-screen w-2/3 border-r-4 border-[#dfe0e1] bg-gradient-to-br from-[#e2e3e4] to-[#e5e6e7] z-50 transition-all ease-out duration-150`}>
        
        <a className="w-1/3 ml-[10%] mt-[5vh]" href="./">
          <svg className="fill-[#131415]" viewBox="0 0 176.23 176.23">
            <path d="M88.85,83.71A367.12,367.12,0,0,1,68.48,41.46,275.64,275.64,0,0,0,78.74,72.25c20.34,50.94,52.31,88.59,79.72,97.54C135.13,151.55,109.92,121.23,88.85,83.71Z"/>
            <path d="M132.86,176.23c-21.75-30.42-46.8-51.09-67.94-56.42C85.78,129.91,109.88,149.68,132.86,176.23Z"/>
            <path d="M88.12,0a88.12,88.12,0,1,0,88.11,88.12A88.12,88.12,0,0,0,88.12,0ZM92,168.13A76.12,76.12,0,1,1,168.13,92,76.12,76.12,0,0,1,92,168.13Z"/>
          </svg>
        </a>

        <ul className="flex flex-col gap-[2vh] text-3xl text-[#131415] ml-[10%] mt-[8vh]">
          <li className={`cursor-pointer transition-colors duration-200 ${activePage == 1 ? 'underline' : 'hover:underline'}`}>{activePage != 1 ? <a href="./">Home</a> : <>Home</>}</li>
          <li className={`cursor-pointer transition-colors duration-200 ${activePage == 2 ? 'underline' : 'hover:underline'}`}>{activePage != 2 ? <a href="./services">Services</a> : <>Services</>}</li>
          <li className={`cursor-pointer transition-colors duration-200 ${activePage == 3 ? 'underline' : 'hover:underline'}`}>{activePage != 3 ? <a href="./about">About</a> : <>About</>}</li>
          <li className={`cursor-pointer transition-colors duration-200 ${activePage == 4 ? 'underline' : 'hover:underline'}`}>{activePage != 4 ? <a href="./contact">Contact</a> : <>Contact</>}</li>
        </ul>

      </div>
      <div className={`opacity-0 ${isMenuActive ? 'block opacity-100' : 'hidden'} fixed w-screen h-screen bg-zinc-900/30 z-30 transition-opacity`} onClick={() => setIsMenuActive(false)} />
    </>
  )
}

export default Navbar;