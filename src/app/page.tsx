import Navbar from "@/src/components/Navbar";
import Hero from "@/src/components/Hero";
import About from "@/src/components/About";
import Features from "@/src/components/Features";
import CTA from "@/src/components/CTA";
import Footer from "@/src/components/Footer";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Features />
      <CTA />
       
      <Contact />
      <Footer />
    </>
  );
}

