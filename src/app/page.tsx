"use client";
import Intro from "@/app/sections/Intro/Intro";
import About from "@/app/sections/About/About";
import Team from "@/app/sections/Team/Team";
import Services from "@/app/sections/Servicios/Services";

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
