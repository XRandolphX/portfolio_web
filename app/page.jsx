import About from "@/components/About";
import Hero from "@/components/Hero";
import Reviews from "@/components/Reviews";
import Services from "@/components/Services";
import Works from "@/components/Works";

export default function Home() {
  return (
    <main>
      <Hero />
      <About/>
      {/* <Services/> */}
      <Works/>
      <Reviews/>
    </main>
  );
}
