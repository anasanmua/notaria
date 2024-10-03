"use client";
import Intro from "@/app/sections/Intro/Intro";

export default function Home() {
  return (
    <div>
      <Intro />
      <div
        id="part-2"
        style={{
          width: "100vw",
          height: "100vh",
          textAlign: "center",
          paddingTop: "80px",
        }}
      >
        hellooooo2
      </div>
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
