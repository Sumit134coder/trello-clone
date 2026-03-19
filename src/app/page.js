import { metaData } from "@/constants";
import Hero from "./_sections/Hero";
import Problem from "./_sections/Problem";
import HowItWorks from "./_sections/HowItWorks";
import Features from "./_sections/Features";
import Collaboration from "./_sections/Collaboration";
import Benefits from "./_sections/Benefits";
import { FinalCTA } from "./_sections/FinalCTA";

export const metadata = metaData.home;

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Problem />
      <HowItWorks />
      <Features />
      <Collaboration />
      <Benefits />
      <FinalCTA />
    </div>
  );
}
