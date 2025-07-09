'use client'
import Footer from "@/components/footer";
import HomeContent from "@/components/home/home.page";
import Navbar from "@/components/navbar";
import { useState } from "react";

export default function Home() {
  const [isNavTriggered, setIsNavTriggered] = useState(false);
  return (
    <main className="h-screen">
      <Navbar isNavTriggered={isNavTriggered} activePage={1} />
      <HomeContent setIsNavTriggered={setIsNavTriggered} />
      <Footer activePage={1} />
    </main>
  );
}
