import About from "@/components/About";
import Hero from "@/components/Hero";
import Reviews from "@/components/Reviews";
import Services from "@/components/Services";
import Achievements from "@/components/Achievements";
import Works from "@/components/Works";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      {/* <Services/> */}
      <Achievements />
      <Works />
      <Reviews />
    </main>
  );
}
