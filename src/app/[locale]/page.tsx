"use client";
import Intro from "@/app/[locale]/sections/Intro/Intro";
import About from "@/app/[locale]/sections/About/About";
import Team from "@/app/[locale]/sections/Team/Team";
import Services from "@/app/[locale]/sections/Servicios/Services";

export default function Home() {
  return (
    <div>
      <Intro />
      <About />
      <Team />
      <Services />
    </div>
  );
}
