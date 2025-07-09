'use client'

import ContactContent from "@/components/contact/contact.page";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { useState } from "react";

export default function About() {
  const [isNavTriggered, setIsNavTriggered] = useState(false);
  return (
    <main className="h-screen">
      <Navbar isNavTriggered={isNavTriggered} activePage={4} />
      <ContactContent setIsNavTriggered={setIsNavTriggered} />
      <Footer activePage={4} noContact />
    </main>
  );
} 