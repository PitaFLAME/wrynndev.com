'use client'

import AboutContent from "@/components/about/about.page";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { useState } from "react";

export default function About() {
  const [isNavTriggered, setIsNavTriggered] = useState(false);
  return (
    <main className="h-screen">
      <Navbar isNavTriggered={isNavTriggered} activePage={3} />
      <AboutContent setIsNavTriggered={setIsNavTriggered} />
      <Footer activePage={3} />
    </main>
  );
} 