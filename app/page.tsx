import Hero from "@/components/hero"
import About from "@/components/about"
import Projects from "@/components/projects"
import Skills from "@/components/skills"
import Contact from "@/components/contact"

export default function Home() {
  return (
    <div className="flex flex-col gap-20 pb-20">
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </div>
  )
}

