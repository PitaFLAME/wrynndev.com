import { MaxWidthWrapper } from "@/components/contentWrappers";
import HomeContent from "@/components/home/home.page";
import Navbar from "@/components/navbar";


export default function Home() {
  return (
    <main className="bg-gradient-to-br from-base2 to-black w-screen h-screen overflow-hidden">
      <Navbar />

      <MaxWidthWrapper>
        <HomeContent />
      </MaxWidthWrapper>
      
    </main>
  );
}
