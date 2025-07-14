'use client'
import React, { useRef, useLayoutEffect, useState } from "react";
import Image from "next/image";
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Mails } from "lucide-react";
import emailjs from '@emailjs/browser';
import { IMAGE_PATHS } from '@/app/utils';

gsap.registerPlugin(ScrollTrigger);

const ContactContent = ({ setIsNavTriggered }: { setIsNavTriggered: React.Dispatch<React.SetStateAction<boolean>> }) => {
  const navTrigger = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const formData = new FormData(formRef.current!);
      formData.append('time', new Date().toLocaleString());

      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formRef.current!,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );
      
      setSubmitStatus('success');
      if (formRef.current) {
        formRef.current.reset();
      }
    } catch (error) {
      console.error('Email submission failed:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (

    <div className="relative overflow-x-hidden">

      {/* Mobile Version */}
      <div className="relative flex md:hidden justify-center w-screen h-screen top-0 bg-[#131415]">
        <Image 
          src={IMAGE_PATHS.contact.vertMountain}
          className="w-screen h-screen object-cover"
          alt="Leio Mclaren sitting on a cliffside, looking out to the sunrise"
          width={2473}
          height={4489}
          placeholder="blur"
          blurDataURL={IMAGE_PATHS.contact.vertMountainBlur}
          priority
        />

        <div className="absolute flex items-center w-5/6 h-1/3 mt-[10vh]">
          <h2 className="font-montserrat font-bold text-black text-4xl sm:text-5xl leading-tight">SHARE YOUR<br/>VISION</h2>
        </div>

      </div>



      {/* Desktop Version */}
      <div className="relative hidden md:flex items-center justify-center w-screen h-screen top-0 bg-[#131415]">
        <Image
          src={IMAGE_PATHS.contact.horzMountain}
          className="w-screen h-screen object-cover"
          alt="Leio Mclaren sitting on a cliffside, looking out to the sunrise"
          width={4000}
          height={4489}
          placeholder="blur"
          blurDataURL={IMAGE_PATHS.contact.horzMountainBlur}
          priority
        />
        
        <div className="absolute flex justify-center items-center w-1/2 h-1/2">
          <h2 className="font-montserrat font-bold text-center text-black text-[9rem] leading-tight">SHARE YOUR<br/>VISION WITH US</h2>
        </div>

      </div>


      <div className="relative flex flex-col items-center w-full bg-[#131415] text-[#e2e3e4] z-10 py-[10vh]" ref={navTrigger}>

        <div className="grid md:grid-cols-7 grid-cols-1 md:mt-0 mt-[5vh]">
          <div className="md:grid md:grid-cols-4 md:col-span-4 w-full">
            <div />
            <div className="flex md:flex-row flex-col gap-[5vw] col-span-3 w-full">
              <p className="font-montserrat font-thin md:text-left text-center md:text-8xl text-5xl md:w-full w-screen">
                LET&apos;S GET<br/>IN TOUCH
              </p>
              <a className="md:flex hidden flex-row ml-auto mt-auto mr-[2vw] cursor-pointer group" href="mailto:info@wrynndev.com">
                <Mails className="w-8 h-8 mr-2" />
                <p className="group-hover:underline text-2xl">info@wrynndev.com</p>
              </a>
            </div>
            <div className="md:block hidden w-full mt-2 bg-[#0f0f0d]/70"/>
            <div className="md:flex hidden flex-row mt-2 md:col-span-3">
              
              <Image
                src={IMAGE_PATHS.contact.ledger}
                className="object-cover"
                alt="a lush valley beneath a breathtaking mountain ridge"
                width={5110}
                height={2504}
              />
            </div>
            <div className="md:block hidden" />

          </div>


          <div className="flex flex-row col-span-2">
            <form className="w-full max-w-2xl mx-auto p-8 space-y-6" ref={formRef} onSubmit={handleSubmit}>
              <div className="space-y-2">
                <label htmlFor="name" className="block font-montserrat font-bold text-[#e2e3e4] text-lg">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 bg-[#101112] border border-[#787970]/20 text-[#e2e3e4] placeholder:text-[#e2e3e4]/30 font-montserrat focus:outline-none focus:border-[#ee513f] transition-colors duration-100"
                  placeholder="Your name"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="company" className="block font-montserrat font-bold text-[#e2e3e4] text-lg">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  className="w-full px-4 py-3 bg-[#101112] border border-[#787970]/20 text-[#e2e3e4] placeholder:text-[#e2e3e4]/30 font-montserrat focus:outline-none focus:border-[#ee513f] transition-colors duration-100"
                  placeholder="Your company name"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="block font-montserrat font-bold text-[#e2e3e4] text-lg">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 bg-[#101112] border border-[#787970]/20 text-[#e2e3e4] placeholder:text-[#e2e3e4]/30 font-montserrat focus:outline-none focus:border-[#ee513f] transition-colors duration-100"
                  placeholder="your.email@example.com"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="block font-montserrat font-bold text-[#e2e3e4] text-lg">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-[#101112] border border-[#787970]/20 text-[#e2e3e4] placeholder:text-[#e2e3e4]/30 font-montserrat focus:outline-none focus:border-[#ee513f] transition-colors duration-100 resize-none"
                  placeholder="How can we help?"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-[#ee793f] to-[#ee513f] text-white font-montserrat font-bold py-4 px-8 text-lg hover:to-[#ee693f] transition-all duration-300 transform disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              > 
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>

              {submitStatus === 'success' && (
                <div className="text-orange-300 text-center font-montserrat">
                  Message sent successfully! We&apos;ll get back to you soon.
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="text-red-400 text-center font-montserrat">
                  Failed to send message. Please try again or contact us directly.
                </div>
              )}
            </form>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ContactContent;