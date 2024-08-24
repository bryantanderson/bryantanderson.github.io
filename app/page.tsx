import AboutMe from "@/components/main/AboutMe";
import Education from "@/components/main/Education";
import Experience from "@/components/main/Experience";
import { Hero } from "@/components/main/Hero";
import Skills from "@/components/main/Skills";

export default function Home() {
  return (
    <main className='h-full w-full '>
      <div className='flex flex-col gap-20'>
        <Hero />
        <AboutMe />
        <Experience />
        <Education />
        <Skills />
      </div>
    </main>
  );
}
