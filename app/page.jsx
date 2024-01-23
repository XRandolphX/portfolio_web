import About from "@/components/About";
import Hero from "@/components/Hero";
import Reviews from "@/components/Reviews";
import Services from "@/components/Services";
import Achievements from "@/components/Achievements";
import Works from "@/components/Works";
import Cta from "@/components/Cta";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      {/* <Services/> */}
      <Achievements />
      <Works />
      {/* <Reviews /> */}
      <Cta />
    </main>
  );
}
