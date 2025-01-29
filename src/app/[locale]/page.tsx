import About from "./sections/About/About";
import Team from "./sections/Team/Team";
import Services from "./sections/Servicios/Services";
import Intro from "./sections/Intro/Intro";

export default async function Home() {
  return (
    <>
      <Intro />
      <About />
      <Team />
      <Services />
    </>
  );
}
