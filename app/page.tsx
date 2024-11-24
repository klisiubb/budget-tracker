import { FAQ } from "@/components/landing-page/FAQ";
import { Features } from "@/components/landing-page/Features";
import { Footer } from "@/components/landing-page/Footer";
import Hero from "@/components/landing-page/Hero";
import Navbar from "@/components/landing-page/Navbar";
import { Pricing } from "@/components/landing-page/Pricing";
import { Testimonial } from "@/components/landing-page/Testimonial";

export default function Page() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Pricing />
      <Testimonial />
      <FAQ />
      <Footer />
    </>
  );
}
