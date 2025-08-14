"use client";
import About from "@/components/About";
import Connect from "@/components/Connect";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Miscellaneous from "@/components/Miscellaneous";
import Projects from "@/components/Projects";
import Research from "@/components/Research";
import Works from "@/components/Works";

import { useEffect, useState } from 'react';


export default function Home() {

  const [isLoaded,setIsLoaded] = useState(false)

  useEffect(() => {
      setIsLoaded(true)
  },[])

  if(!isLoaded){
      return (
        <div className="min-h-dvh grid place-items-center">
          <div className="flex items-center gap-2" role="status" aria-live="polite">
            <span className="sr-only">Loading…</span>
            <span className="h-2 w-2 rounded-full bg-current animate-bounce [animation-delay:-.2s]" />
            <span className="h-2 w-2 rounded-full bg-current animate-bounce [animation-delay:-.1s]" />
            <span className="h-2 w-2 rounded-full bg-current animate-bounce" />
          </div>
        </div>
      )
  }

  return (
    <main>
      <Hero/>
      <About/>
      <Works/>
      <Research/>
      <Projects />
      <Miscellaneous/>
      <Connect/>
      <Footer/>
    </main>
  );
}

