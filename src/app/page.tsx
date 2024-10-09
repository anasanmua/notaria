"use client";
import Intro from "@/app/sections/Intro/Intro";
import About from "@/app/sections/About/About";

export default function Home() {
  return (
    <div>
      <Intro />
      <About />
      <div
        id="part-3"
        style={{
          width: "100vw",
          height: "100vh",
          textAlign: "center",
          paddingTop: "80px",
        }}
      >
        helllooo3
      </div>
    </div>
  );
}
