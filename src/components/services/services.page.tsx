'use client'
import React, { useRef, useLayoutEffect } from "react";
import Image from "next/image";
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger);

const ServicesContent = ({ setIsNavTriggered }: { setIsNavTriggered: React.Dispatch<React.SetStateAction<boolean>> }) => {
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

  const vert_mountainImagePath = '/assets/services/mountain_v.jpg';
  const horz_mountainImagePath = '/assets/services/mountain.jpg';

  return (

    <div className="relative overflow-x-hidden">

      {/* Mobile Version */}
      <div className="relative flex md:hidden justify-center items-center w-screen h-screen top-0 bg-[#e2e3e4]">
        <Image 
          src={vert_mountainImagePath}
          className="h-screen object-cover"
          alt="a woman standing in front of a vast mountaintop"
          width={1984}
          height={2963}
          placeholder="blur"
          blurDataURL="/assets/services/mountain_v_blur.jpg"
          priority
        />

        <div className="absolute flex justify-center items-center text-center w-5/6 h-1/3">
          <h2 className="font-montserrat font-bold text-black text-4xl sm:text-5xl leading-tight mb-auto">YOUR JOURNEY<br/>STARTS HERE</h2>
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
          blurDataURL="/assets/services/mountain_blur.jpg"
          priority
        />
        
        <div className="absolute flex justify-center items-center w-1/2 h-1/2">
          <h2 className="font-montserrat font-bold text-center text-black text-[9rem] leading-tight">YOUR JOURNEY<br/>STARTS HERE</h2>
        </div>

      </div>


      <div className="relative flex flex-col items-center w-full bg-[#131415] text-[#e2e3e4] z-10 py-[20vh]" ref={navTrigger}>

        <div className="flex flex-col md:w-1/2 w-11/12 h-1/2 font-montserrat text-center">
          <h2 className="w-full font-bold md:text-[2.2rem] text-xl leading-10">PARTNERSHIP<span className="md:inline hidden">, </span><br className="md:hidden" />NOT JUST A PRODUCT</h2>
          <p className="w-full md:text-4xl text-2xl md:leading-[1.2] font-light pt-10">Most web developers build your site, hand you the keys, and disappear. We do things differently. 
            Your business changes, your market evolves, and your website should keep up. That&apos;s why we work with you month after month—handling updates, 
            improvements, and new ideas as they come. You focus on your business, we focus on keeping your digital presence sharp.</p>
        </div>

        <div className="flex md:flex-row flex-col mt-[20vh]">

          <div className="md:w-[20vw] pb-[8vh] pt-[4vh] md:mb-0 mb-[4vh] mx-4 bg-gradient-to-br transition-all duration-200 from-[#111213] to-[#101112] border border-[#080808] hover:from-[#202224] hover:to-[#212325] hover:border-[#e2e3e4]">
            <h3 className="font-montserrat mt-8 text-center text-3xl text-[#e2e3e4] cursor-default">COMPLETE TECHNICAL PACKAGE</h3>
            <p className="text-center font-montserrat font-extralight text-xl text-[#e2e3e4]/70 mt-4">Anything you need</p>
            <div className="w-4/5 h-0.5 mx-auto mt-8 bg-[#e2e3e4]/20" />
            <ul className="font-jost text-center text-xl text-[#e2e3e4] px-12 mt-8 cursor-default">
              <li className="my-2">&#9679; WEB DEVELOPMENT</li>
              <li className="my-2">&#9679; EMAIL SETUP AND CONFIGURATION</li>
              <li className="my-2">&#9679; DONAMIN ANALYTICS AND MANAGEMENT</li>
              <li className="my-2">&#9679; DATABASE OPTIMIZATION</li>
              <li className="my-2">&#9679; THIRD-PARTY INTEGRATIONS</li>
              <li className="my-2">&#9679; MOBILE APP DEVELOPMENT</li>
            </ul>
          </div>
          
          <div className="md:w-[20vw] pb-[8vh] pt-[4vh] md:mb-0 mb-[4vh] mx-4 bg-gradient-to-br transition-all duration-200 from-[#111213] to-[#101112] border border-[#080808] hover:from-[#202224] hover:to-[#212325] hover:border-[#e2e3e4]">
            <h3 className="font-montserrat mt-8 text-center text-3xl text-[#e2e3e4] cursor-default">SEO & CONTENT<br/>STRATEGY</h3>
            <p className="text-center font-montserrat font-extralight text-xl text-[#e2e3e4]/70 mt-4">To help customers find you easier</p>
            <div className="w-4/5 h-0.5 mx-auto mt-8 bg-[#e2e3e4]/20" />
            <ul className="font-jost text-center text-xl text-[#e2e3e4] px-12 mt-8 cursor-default">
              <li className="my-2">&#9679; SEARCH ENGINE OPTIMIZATION</li>
              <li className="my-2">&#9679; CONTENT CREATION AND OPTIMIZATION</li>
              <li className="my-2">&#9679; LOCAL BUSINESS LISTING MANAGEMENT</li>
              <li className="my-2">&#9679; PAGE SPEED AND TECHNICAL SEO</li>
              <li className="my-2">&#9679; KEYWORD RESEARCH AND STRATEGY</li>
              <li className="my-2">&#9679; SOCIAL MEDIA INTEGRATION</li>
            </ul>
          </div>
          
          <div className="md:w-[20vw] pb-[8vh] pt-[4vh] md:mb-0 mb-[4vh] mx-4 bg-gradient-to-br transition-all duration-200 from-[#111213] to-[#101112] border border-[#080808] hover:from-[#202224] hover:to-[#212325] hover:border-[#e2e3e4]">
            <h3 className="font-montserrat mt-8 text-center text-3xl text-[#e2e3e4] cursor-default">BRAND<br/>INTEGRATION & GROWTH</h3>
            <p className="text-center font-montserrat font-extralight text-xl text-[#e2e3e4]/70 mt-4">To make your business shine</p>
            <div className="w-4/5 h-0.5 mx-auto mt-8 bg-[#e2e3e4]/20" />
            <ul className="font-jost text-center text-xl text-[#e2e3e4] px-12 mt-8 cursor-default">
              <li className="my-2">&#9679; BRAND ALIGNMENT AND CONSISTENCY</li>
              <li className="my-2">&#9679; LOGO DESIGN AND REFINEMENT</li>
              <li className="my-2">&#9679; VISUAL IDENTITY DEVELOPMENT</li>
              <li className="my-2">&#9679; MARKETING MATERIAL DESIGN</li>
              <li className="my-2">&#9679; CONVERSION RATE OPTIMIZATION</li>
              <li className="my-2">&#9679; DIGITAL STRATEGY CONSULTING</li>
            </ul>
          </div>
          
          <div className="md:w-[20vw] pb-[8vh] pt-[4vh] md:mb-0 mb-[4vh] mx-4 bg-gradient-to-br transition-all duration-200 from-[#111213] to-[#101112] border border-[#080808] hover:from-[#202224] hover:to-[#212325] hover:border-[#e2e3e4]">
            <h3 className="font-montserrat mt-8 text-center text-3xl text-[#e2e3e4] cursor-default group">FULL ONGOING<br/>SUPPORT</h3>
            <p className="text-center font-montserrat font-extralight text-xl text-[#e2e3e4]/70 mt-4">We keep it running smoothly</p>
            <div className="w-4/5 h-0.5 mx-auto mt-8 bg-[#e2e3e4]/20" />
            <ul className="font-jost text-center text-xl text-[#e2e3e4] px-12 mt-8 cursor-default">
              <li className="my-2">&#9679; MONTHLY MAINTENANCE AND UPDATES</li>
              <li className="my-2">&#9679; SECURITY MONITORING AND PATCHES</li>
              <li className="my-2">&#9679; BACKUP AND DISASTER RECOVERY</li>
              <li className="my-2">&#9679; TECHNICAL SUPPORT</li>
              <li className="my-2">&#9679; FEATURE ENHANCEMENT</li>
              <li className="my-2">&#9679; ANALYTICS REPORTING</li>
            </ul>
          </div>

        </div>

        <div className="mt-[12vh] md:py-[12vh] md:pb-0 pb-[12vh] bg-[#101112]">
          <div>
            <Image
              src='/assets/services/stepping_v.jpg'
              className="md:hidden block w-screen h-screen object-cover"
              alt="a silhouette of a person stepping off of a mountain peak"
              width={5184}
              height={3348}
            />
            <h3 className="font-montserrat font-bold md:text-6xl text-2xl text-center leading-tight md:mt-0 mt-[12vh]">PROFESSIONAL WEBSITES<br/>WITHOUT THE STICKER SHOCK</h3>
            <div className="md:grid md:grid-cols-2 mt-[8vh]">
              <div className="">
                <Image
                  src='/assets/services/stepping.jpg'
                  className="md:block hidden w-screen h-screen object-cover"
                  alt="a silhouette of a person stepping off of a mountain peak"
                  width={5184}
                  height={3348}
                />
              </div>
              <div className="relative flex md:justify-start justify-center md:pb-0 pb-[20vh]">
                <p className="font-montserrat font-thin md:text-5xl text-2xl md:text-left text-center md:w-4/5 mt-12 leading-snug px-8">
                  Traditional web development can cost thousands upfront—money that many businesses don&apos;t have sitting around. &nbsp;
                  Our monthly model changes that completely. &nbsp;You get professional development, hosting, maintenance, and ongoing support without the financial stress. &nbsp;
                  Think of it like having your own developer team on retainer, but at a fraction of the cost. &nbsp;No huge upfront investment, 
                  no budget battles, just reliable monthly payments that work with your business finances.
                </p>
                <a className="absolute flex justify-center items-center border-2 border-white md:w-2/3 w-11/12 md:ml-[5vw] py-[2vh] bottom-[4vh] cursor-pointer transition-colors duration-100 hover:bg-[#e2e3e4]/10 active:bg-[#e2e3e4]/30" href="./contact">
                  <p className="font-montserrat font-bold text-xl text-[#e2e3e4]">Get Started</p>
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ServicesContent;