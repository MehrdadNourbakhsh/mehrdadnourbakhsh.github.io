import About from "@/components/About";
import Connect from "@/components/Connect";
import Hero from "@/components/Hero";
import Miscellaneous from "@/components/Miscellaneous";
import Projects from "@/components/Projects";
import Research from "@/components/Research";
import Works from "@/components/Works";



export default function Home() {
  return (
    <>
      <Hero/>
      <About/>
      <Works/>
      <Research/>
      <Projects/>
      <Miscellaneous/>
      <Connect/>
    </>
  );
}
