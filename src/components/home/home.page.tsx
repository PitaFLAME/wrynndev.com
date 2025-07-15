'use client'
import React, { useRef, useLayoutEffect } from "react";
import Image from "next/image";
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useImagePath } from '@/app/utils';

gsap.registerPlugin(ScrollTrigger);

const HomeContent = ({ setIsNavTriggered }: { setIsNavTriggered: React.Dispatch<React.SetStateAction<boolean>> }) => {
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

  return (

    <div className="relative overflow-x-hidden">

      <div className="relative flex justify-center items-center w-screen h-screen top-0 bg-[#e2e3e4] dark:bg-[#131415]">
        <Image 
          src={useImagePath('home', 'mountain')}
          className="h-screen w-screen object-cover scale-110"
          alt="a woman standing in front of a vast mountaintop"
          width={4000}
          height={6000}
          placeholder="blur"
          blurDataURL={useImagePath('home', 'mountainBlur')}
          priority
        />
        <div className="absolute flex justify-center items-center text-center w-5/6 h-1/3">
          <h2 className="font-montserrat font-bold md:text-black text-[#e2e3e4] lg:text-[9rem] md:text-[5.5rem] text-4xl sm:text-5xl leading-tight">FORGE<br/>YOUR VISION</h2>
        </div>
      </div>


      <div className="relative flex flex-col items-center w-full bg-[#131415] text-[#e2e3e4] z-10 md:py-[20vh] py-[16vh]" ref={navTrigger}>

        <svg className="absolute -z-10 opacity-20 md:-my-[320px] md:scale-y-75 -mt-[60px] md:scale-x-100 scale-x-150"
          viewBox="0 0 470.44 190.91">
          <defs>
            <linearGradient id="a" x1="235.22" x2="235.22" y1="0" y2="157.68" gradientUnits="userSpaceOnUse">
              <stop offset="0" stopColor="#131415" />
              <stop offset="1" stopColor="#131415" stopOpacity="0.5" />
            </linearGradient>
            <linearGradient id="b" x1="219.07" y1="38.65" x2="219.07" y2="190.91" xlinkHref="#a" />
            <linearGradient id="c" x1="225.86" y1="19.53" x2="225.86" y2="174.11" xlinkHref="#a" />
          </defs>
          <path className="a" d="M0,0C27.61,11,70,32.45,117.49,72.83c83.16,70.67,280,99.64,353,77.62-73,22-269.18-24.23-352.95-93.76C65.75,13.74,0,0,0,0Z" />
          <path className="b" d="M10.31,38.65C34.81,49.26,72.42,70,114.58,109c73.8,68.25,248.46,96.22,313.24,75C363,205.19,188.93,160.53,114.58,93.39,68.66,51.92,10.31,38.65,10.31,38.65Z" />
          <path className="c" d="M5.23,19.53c25.89,10.77,65.64,31.81,110.2,71.4,78,69.28,262.6,97.67,331.06,76.09C378,188.6,194,143.27,115.43,75.11,66.9,33,5.23,19.53,5.23,19.53Z" />
        </svg>


         <div className="flex flex-col md:w-1/2 w-full h-1/2 font-montserrat text-center text-[#e2e3e4]">
          <h2 className="w-full font-bold md:text-[2.2rem] text-xl leading-10">WE BELIEVE IN DRAGONS</h2>
          <p className="w-full md:text-4xl md:leading-[1.2] text-2xl md:px-0 px-[2vw] font-light pt-10">
            We build websites, apps, and digital experiences that help businesses reach beyond what they thought possible. 
            We see potential where others see problems, and we&apos;re not afraid to chase ambitious visions. 
            We start by understanding your goals, then use our expertise to turn the impossible into something powerful and real.</p>
        </div>

        <svg className="md:block hidden mt-[32vh] scale-75 fill-[#262830]"
          viewBox="0 0 433.11 7.76">
          <path d="M221.89,5.33a5.34,5.34,0,0,0-10.67,0,5.36,5.36,0,0,0,.61,2.43h9.45A5.24,5.24,0,0,0,221.89,5.33Z"/>
          <path d="M433.11,7.76,224,3.07a.44.44,0,0,0-.45.34l-1,4.35H433.11Z"/>
          <path d="M0,7.76H210.64l-1-4.33a.45.45,0,0,0-.46-.35Z"/>
        </svg>


        <div className="grid md:grid-cols-2 w-full md:gap-y-64 gap-y-[10vh] md:mt-20 mt-[20vh]">
          <div className="w-full md:pr-4 md:scale-100 scale-125 order-1">
            <Image
              src={useImagePath('home', 'samir')}
              className="md:h-full w-full object-cover"
              alt="A photo of Samir Venegas, holding a walking stick on a hiking trail"
              width={1993}
              height={2657} />
          </div>


          <div className="w-full md:max-w-[800px] md:ml-20 md:py-20 order-2">
            <h3 className="font-montserrat md:text-7xl text-5xl md:text-left text-center md:pr-12 md:pl-1 md:px-0 px-4">&#34;OUR ONLINE PRESENCE IS HOLDING US BACK.&#34;</h3>
            <p className="font-jost text-4xl mt-8 md:px-0 px-4">We hear this a lot. When your digital presence doesn&apos;t match your business quality, it&apos;s frustrating. We specialize in bridging that gap—taking businesses 
              from &#34;our website is embarrassing&#34; to &#34;our website brings in customers.&#34; It&apos;s about alignment, not just aesthetics.</p>
            <div className="md:w-full w-11/12 mx-auto h-20 mt-32 md:pr-20 group">
              <a className="flex justify-center items-center border-2 border-white h-full w-full cursor-pointer transition-colors duration-100 hover:bg-[#e2e3e4]/10 active:bg-[#e2e3e4]/30" href="./services">
                <p className="font-montserrat font-bold md:text-xl text-lg text-[#e2e3e4]">Transform your online presence</p>
              </a>
            </div>
          </div>


          <div className="md:ml-auto md:mr-20 w-full md:max-w-[800px] md:py-20 md:order-3 order-4">
            <h3 className="font-montserrat md:text-7xl text-5xl md:text-left text-center md:pr-12 md:pl-1 md:px-0 px-4">&#34;WHAT MAKES A WEBSITE ACTUALLY WORK?&#34;</h3>
            <p className="font-jost text-4xl mt-8 md:px-0 px-4">A good website isn&apos;t just pretty—it&apos;s built with purpose. We focus on creating sites that serve your business goals, whether that&apos;s getting more leads, 
              building credibility, or making it easier for customers to work with you. Form follows function, always.</p>
            <div className="md:w-full w-11/12 mx-auto h-20 mt-32 md:pr-20 group">
              <a className="flex justify-center items-center border-2 border-white h-full w-full cursor-pointer transition-colors duration-100 hover:bg-[#e2e3e4]/10 active:bg-[#e2e3e4]/30" href="./services">
                <p className="font-montserrat font-bold md:text-xl text-lg text-[#e2e3e4]">Make your website work for you</p>
              </a>
            </div>
          </div>


          <div className="w-full md:pl-4 md:scale-100 scale-125 md:order-4 order-3">
            <Image
            src={useImagePath('home', 'sand')}
            className="md:h-full w-full object-cover"
            alt=""
            width={1993}
            height={2657} />
          </div>


          <div className="w-full md:pr-4 md:scale-100 scale-125 order-5">
            <Image
            src={useImagePath('home', 'blackbird')}
            className="md:h-full w-full object-cover"
            alt=""
            width={1993}
            height={2657}></Image>
          </div>


          <div className="md:ml-20 w-full max-w-[800px] md:py-20 order-6">
            <h3 className="font-montserrat md:text-7xl text-5xl md:text-left text-center md:pr-12 md:pl-1 md:px-0 px-4">&#34;WHAT IF I NEED CHANGES AFTER LAUNCH?&#34;</h3>
            <p className="font-jost text-4xl mt-8 md:px-0 px-4">That&apos;s exactly why we exist. Your business evolves, and your website should too. Our plans include 
              regular updates, so you&apos;re never stuck with a stale site or hunting for your &#34;web guy.&#34;</p>
            <div className="md:w-full w-11/12 mx-auto h-20 mt-32 md:pr-20 group">
              <a className="flex justify-center items-center border-2 border-white h-full w-full cursor-pointer transition-colors duration-100 hover:bg-[#e2e3e4]/10 active:bg-[#e2e3e4]/30" href="./services">
                <p className="font-montserrat font-bold md:text-xl text-lg text-[#e2e3e4]">See what our services can do for you</p>
              </a>
            </div>
          </div>

          
        </div>
        

        <div className="flex md:flex-row flex-col md:gap-24 mt-[24vh]">
          <div className="flex flex-col py-8">
            <div className="w-64 h-72 mx-auto bg-[#e2e3e4]"></div>
            <h3 className="font-montserrat mt-8 text-center text-4xl">WE SEARCH<br/>WITH YOU</h3>
            <p className="font-montserrat font-light mt-4 text-center text-xl">Innovation Strategy<br/>Digital Product Strategy<br/>Technology Architecture<br/>Information Architecture</p>
          </div>
          <div className="h-auto w-0.5 bg-[#e2e3e4]" />
          <div className="flex flex-col py-8">
            <div className="w-64 h-72 mx-auto bg-[#e2e3e4]"></div>
            <h3 className="font-montserrat mt-8 text-center text-4xl">WE BUILD<br/>WITH YOU</h3>
            <p className="font-montserrat font-light mt-4 text-center text-xl">Web App Development<br/>Mobile App Development<br/>UX Research & Design<br/>Brand Identity Design</p>
          </div>
          <div className="h-auto w-0.5 bg-[#e2e3e4]" />
          <div className="flex flex-col py-8">
            <div className="w-64 h-72 mx-auto bg-[#e2e3e4]"></div>
            <h3 className="font-montserrat mt-8 text-center text-4xl">WE GROW<br/>WITH YOU</h3>
            <p className="font-montserrat font-light mt-4 text-center text-xl">Performance Optimization<br/>Feature Enhancement<br/>Business Scaling<br/>Partnership Support</p>
          </div>
        </div>


      </div>
    </div>
  );
};

export default HomeContent;