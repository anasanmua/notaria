import Intro from "./sections/Intro/Intro";
import About from "./sections/About/About";
import Team from "./sections/Team/Team";
import Services from "./sections/Servicios/Services";

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
