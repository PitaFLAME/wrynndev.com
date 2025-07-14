'use client'
import React, { useRef, useLayoutEffect } from "react";
import Image from "next/image";
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger);

const AboutContent = ({ setIsNavTriggered }: { setIsNavTriggered: React.Dispatch<React.SetStateAction<boolean>> }) => {
  const navTrigger = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const context = gsap.context(() => {
      ScrollTrigger.create({
        trigger: navTrigger.current,
        start: "top top",
        end: "bottom bottom",
        onEnter: () => setIsNavTriggered(true),
        onLeaveBack: () => setIsNavTriggered(false),
      });
    });
    return () => context.revert();
  }, [setIsNavTriggered]);

  const vert_mountainImagePath = '/assets/about/mountain_v.jpg';
  const horz_mountainImagePath = '/assets/about/mountain.jpg';

  return (

    <div className="relative overflow-x-hidden">

      {/* Mobile Version */}
      <div className="relative flex md:hidden items-center justify-center w-screen h-screen top-0 bg-[#e2e3e4]">
        <Image 
          src={vert_mountainImagePath}
          className="h-screen object-cover"
          alt="a woman standing in front of a vast mountaintop"
          width={4000}
          height={6000}
          placeholder="blur"
          blurDataURL="/assets/about/mountain_v_blur.jpg"
          priority
        />

        <div className="absolute flex justify-center items-center text-center w-5/6 h-1/3">
          <h2 className="font-montserrat font-bold text-black text-4xl sm:text-5xl leading-tight mb-auto">WE BELIEVE<br/>IN DRAGONS</h2>
        </div>

      </div>



      {/* Desktop Version */}
      <div className="relative hidden md:flex items-center justify-center w-screen h-screen top-0 bg-[#131415]">
        <Image
          src={horz_mountainImagePath}
          className="h-screen w-screen object-cover scale-110"
          alt="a lush valley beneath a breathtaking mountain ridge"
          width={4608}
          height={2963}
          placeholder="blur"
          blurDataURL="/assets/about/mountain_blur.jpg"
          priority
        />
        
        <div className="absolute flex justify-center items-center w-1/2 h-1/2">
          <h2 className="font-montserrat font-bold text-center text-black text-[9rem] leading-tight">WE BELIEVE<br/>IN DRAGONS</h2>
        </div>

      </div>


      <div className="relative flex flex-col items-center w-full bg-[#131415] z-10 py-[20vh]" ref={navTrigger}>

        <div className="w-4/5">
          <h3 className="font-ysabeau md:text-6xl text-4xl text-center">We Are WrynnDev</h3>
          <p className="font-montserrat font-thin md:text-4xl text-2xl md:text-left text-center text-[#e2e3e4] leading-snug mt-[4vh]">
            We believe in the power of vision, the courage to think big, and the technical expertise to make ambitious ideas reality. 
            That&apos;s what drives everything we do—helping businesses turn their biggest dreams into digital success. Dragons have always 
            been symbols of transformation—creatures that guard treasures, overcome obstacles, and inspire awe. In the digital realm, we 
            see ourselves as guardians of your most valuable asset: your potential. We don&apos;t just solve problems; we unlock possibilities 
            that others might not even see. Our approach combines strategic insight with technical mastery, ensuring that every line of code, 
            every design decision, and every user interaction serves your larger vision. Whether you&apos;re launching your first product or 
            scaling to new heights, we&apos;re here to help you breathe fire into your ideas and watch them take flight in ways that exceed even your own expectations.
          </p>
          
          <svg className="mt-[12vh] md:scale-75 scale-150 fill-[#262830]"
          viewBox="0 0 433.11 7.76">
          <path d="M221.89,5.33a5.34,5.34,0,0,0-10.67,0,5.36,5.36,0,0,0,.61,2.43h9.45A5.24,5.24,0,0,0,221.89,5.33Z"/>
          <path d="M433.11,7.76,224,3.07a.44.44,0,0,0-.45.34l-1,4.35H433.11Z"/>
          <path d="M0,7.76H210.64l-1-4.33a.45.45,0,0,0-.46-.35Z"/>
        </svg>

          <p className="font-montserrat font-thin md:text-4xl text-xl text-[#e2e3e4] text-center leading-snug md:mt-[4vh] mt-[8vh]">
            We&apos;ve built our agency around the principle that quality trumps quantity every time. Our compact team moves fast, communicates clearly, and takes 
            personal ownership of every project. Without the overhead and complexity of managing dozens of people, we can focus entirely on what matters: delivering 
            exceptional results that exceed your expectations. When you work with us, you&apos;re not just another account number—you&apos;re a partner in 
            bringing something remarkable to life.
          </p>
          
          <svg className="md:w-[5%] w-[30%] mx-auto mt-[8vh] fill-[#e2e3e4]/40" viewBox="0 0 176.23 176.23">
              <path d="M88.85,83.71A367.12,367.12,0,0,1,68.48,41.46,275.64,275.64,0,0,0,78.74,72.25c20.34,50.94,52.31,88.59,79.72,97.54C135.13,151.55,109.92,121.23,88.85,83.71Z"/>
              <path d="M132.86,176.23c-21.75-30.42-46.8-51.09-67.94-56.42C85.78,129.91,109.88,149.68,132.86,176.23Z"/>
              <path d="M88.12,0a88.12,88.12,0,1,0,88.11,88.12A88.12,88.12,0,0,0,88.12,0ZM92,168.13A76.12,76.12,0,1,1,168.13,92,76.12,76.12,0,0,1,92,168.13Z"/>
            </svg>

          <div className="md:w-2/3 mx-auto mt-[16vh]">
            <p className="font-montserrat md:text-3xl text-2xl text-[#e2e3e4] text-center">
              If you&apos;re tired of putting off your project because of cost, complexity, or bad past experiences, let&apos;s talk. We&apos;re not here to sell you something you 
              don&apos;t need—we&apos;re here to build something that actually helps your business grow.
            </p>
            <p className="font-montserrat md:text-3xl text-2xl text-[#e2e3e4] text-center mt-[2vh]">
              Every great business started with someone who believed in something others thought was impossible. Let&apos;s explore what&apos;s possible for yours.
            </p>

            <a className="flex justify-center items-center border-2 border-white w-1/2 h-full mx-auto mt-[10vh] py-4 cursor-pointer transition-colors duration-100 hover:bg-[#e2e3e4]/10 active:bg-[#e2e3e4]/30" href="./services">
                <p className="font-montserrat font-bold text-xl text-[#e2e3e4]">Let us help</p>
              </a>
          </div>


        </div>

      </div>

    </div>
  );
};

export default AboutContent;