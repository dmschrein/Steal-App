import { Suspense } from 'react'
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
//import FeaturesAccordion from "@/components/FeaturesAccordion";
//import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import Services from "@/components/Services";
import About from "@/components/About"

export default function Home() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Header />
      </Suspense>
      <main>
        <Hero />
        <Problem />
        <Services />
        <About/>
        {/* <FeaturesAccordion />
        <Pricing /> */}
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}