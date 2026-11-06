import React from 'react';
import Hero from './components/Hero';
import { TrustStrip, About } from './components/Intro';
import PracticeAreas from './components/PracticeAreas';
import { Results, Reviews } from './components/Proof';
import HowWeWork from './components/HowWeWork';
import Consultation from './components/Consultation';
import Locations from './components/Locations';
import { Footer, CallBar } from './components/Footer';
import { useReveal } from './hooks/hooks';

export default function App() {
  useReveal();
  return (
    <>
      <a href="#main" className="absolute left-3 top-[-60px] z-[100] rounded-full bg-gold px-[18px] py-3 font-semibold text-ink no-underline transition-[top] focus:top-3">Skip to main content</a>
      <Hero />
      <main id="main">
        <TrustStrip />
        <About />
        <PracticeAreas />
        <Results />
        <Reviews />
        <HowWeWork />
        <Consultation />
        <Locations />
      </main>
      <Footer />
      <CallBar />
    </>
  );
}
