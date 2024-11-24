import { Features } from "@/components/landing-page/Features";
import { Footer } from "@/components/landing-page/Footer";
import Hero from "@/components/landing-page/Hero";
import Navbar from "@/components/landing-page/Navbar";

export default function Page() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Footer />
    </>
  );
}
