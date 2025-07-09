'use client'

import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import ServicesContent from "@/components/services/services.page";
import { useState } from "react";

export default function Services() {
  const [isNavTriggered, setIsNavTriggered] = useState(false);
  return (
    <main className="h-screen">
      <Navbar isNavTriggered={isNavTriggered} activePage={2} />
      <ServicesContent setIsNavTriggered={setIsNavTriggered} />
      <Footer activePage={2} />
    </main>
  );
} 