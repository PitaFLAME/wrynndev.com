'use client'
import Footer from "@/components/footer";
import HomeContent from "@/components/home/home.page";
import Navbar from "@/components/navbar";
import Head from "next/head";
import { useState } from "react";
import { IMAGE_PATHS } from "./utils";

export default function Home() {
  const [isNavTriggered, setIsNavTriggered] = useState(false);
  return (
    <>
      <Head>
        <title>WrynnDev Web Services</title>
        <meta name="title" content="WrynnDev Web Services" />
        <meta name="description" content="Custom static websites for small businesses. Professional web development services by WrynnDev Web Services. 
                                          Fast, responsive, and SEO-optimized websites that drive results."/>
        <meta name="keywords" content="web development Beaumont TX, web developer Beaumont Texas, website design Beaumont TX, custom websites Beaumont TX, 
                                        small business websites Beaumont, web development Port Arthur TX, web developer Port Arthur Texas, website design Port Arthur TX, 
                                        web development Orange TX, web developer Orange Texas, website design Orange TX, web development Port Neches TX, 
                                        web developer Port Neches Texas, website design Port Neches TX, web development Groves TX, web developer Groves Texas, website design Groves TX, 
                                        web development Bridge City TX, web developer Bridge City Texas, website design Bridge City TX, web development Houston TX, web developer Houston Texas, 
                                        website design Houston TX, web development Lake Charles LA, web developer Lake Charles Louisiana, website design Lake Charles LA, 
                                        web development Southeast Texas, web developer Southeast Texas, website design Southeast Texas, web development Golden Triangle TX, 
                                        web developer Golden Triangle Texas, website design Golden Triangle TX, responsive web design Beaumont TX, SEO services Beaumont TX, 
                                        professional web developer Beaumont TX, small business web developer Beaumont TX, custom website design Beaumont TX, 
                                        affordable web development Beaumont TX, mobile responsive websites Beaumont TX, website services Beaumont TX, 
                                        static websites Beaumont TX, business website design Beaumont TX, website development Beaumont TX, web design services Beaumont TX, 
                                        freelance web developer Beaumont TX, website redesign services Beaumont TX, professional websites Beaumont TX, 
                                        web development company Beaumont TX, responsive design Southeast Texas, SEO optimization Southeast Texas, 
                                        custom web design Southeast Texas, professional web development services Texas" />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="author" content="WrynnDev Web Services" />

      <meta name="viewport" content="width=device-width, initial-scale=1" />

      <link rel="preload" as="image" href={IMAGE_PATHS.home.mountain.mobile} media="(max-width: 768px)" />
      <link rel="preload" as="image" href={IMAGE_PATHS.home.mountain.desktop} media="(min-width: 769px)" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://wrynndev.com/" />
      <meta property="og:title" content="WrynnDev - Professional Web Development Services" />
      <meta property="og:description" content="Custom static websites for small businesses. Professional web development services that drive results." />
      <meta property="og:image" content="https://wrynndev.com/og-image.jpg" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:site_name" content="WrynnDev Web Services" />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://wrynndev.com/" />
      <meta property="twitter:title" content="WrynnDev - Professional Web Development Services" />
      <meta property="twitter:description" content="Custom static websites for small businesses. Professional web development services that drive results." />
      <meta property="twitter:image" content="https://wrynndev.com/og-image.jpg" />
      
      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-fat-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-fat-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />

      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//www.google-analytics.com" />
      <link rel="canonical" href="https://wrynndev.com/" />

      </Head>

      <main className="h-screen">
        <Navbar isNavTriggered={isNavTriggered} activePage={1} />
        <HomeContent setIsNavTriggered={setIsNavTriggered} />
        <Footer activePage={1} />
      </main>
    </>
  );
}
