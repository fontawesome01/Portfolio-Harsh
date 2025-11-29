import Header from './components/Header';
import Hero from './components/herosection/Hero';
import About from './components/About';
import Skills from './components/skills';
import Projects from './components/project/Projects';
import Achievements from '@/app/components/achievements and certificates/Achievements';
import Contact from './components/contact';
export default function Home() {
  return (
    <div
      className="h-screen snap-y snap-mandatory overflow-y-scroll
      overflow-x-hidden scrollbar-thin scrollbar-thumb-[#00FFFF]/40 scrollbar-track-gray-800
      z-0"
    >
      <Header />

      {/* Hero Section */}
      <section
        id="hero"
        className="snap-start min-h-screen"
      >
        <Hero />
      </section>

      {/* About Section */}
      <section
        id="about"
        className="snap-start min-h-screen"
      >
        <About />
      </section>

      {/* Example future sections */}
      <section
        id="skills"
        className="snap-start min-h-screen"
      >
        <Skills />
      </section>

      <section
        id="projects"
        className="snap-start min-h-screen"
      >
        <Projects />
      </section>

      <section
        id="achievements"
        className="snap-start min-h-screen"
      >
        <Achievements />
      </section>
      <section />
      <section
        id="conatct"
        className="snap-start min-h-screen"
      >
        <Contact />
      </section>
    </div>
  );
}
