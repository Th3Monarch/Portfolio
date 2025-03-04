"use client"

import { useState, useRef } from "react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import Image from "next/image"
import { Github, Play } from "lucide-react"

type Project = {
  id: number
  title: string
  description: string
  image: string
  category: "desarrollo" | "contenido"
  technologies: string[]
  link?: string
}

const projects: Project[] = [
  {
    id: 1,
    title: "Asistente Virtual con IA para Estudiantes",
    description:
      "Interfaz intuitiva y funciones clave para ayudar a estudiantes con sus tareas y organización académica mediante inteligencia artificial.",
    image: "/ia-estudiantes.jpg",
    category: "desarrollo",
    technologies: ["Next.js", "OpenAI API", "Tailwind CSS"],
    link: "#",
  },
  {
    id: 2,
    title: "Bot de Discord para Gestión de Videojuegos",
    description:
      "Bot que permite a los usuarios crear y gestionar listas de videojuegos, organizar sesiones y compartir recomendaciones.",
    image: "/bot.jpg",
    category: "desarrollo",
    technologies: ["Discord.js", "Node.js", "MongoDB"],
    link: "#",
  },
  {
    id: 3,
    title: "Plataforma de Distribución de Videojuegos",
    description:
      "Sistema completo para la gestión de roles y distribución de juegos, con interfaz administrativa y panel de usuario.",
    image: "/web.jpg",
    category: "desarrollo",
    technologies: ["React", "Firebase", "Express"],
    link: "#",
  },
  {
    id: 4,
    title: "Instalador de Mods para Minecraft",
    description:
      "Aplicación de escritorio que facilita la instalación y verificación de mods para Minecraft, con interfaz amigable.",
    image: "/minecraft-mods.jpg",
    category: "desarrollo",
    technologies: ["Python", "Tkinter", "JSON"],
    link: "#",
  },
  {
    id: 5,
    title: "Juego Interactivo sobre Futbolista Venezolano",
    description:
      "Experiencia interactiva que narra la historia de un futbolista venezolano a través de decisiones y minijuegos.",
    image: "/football-venezuela.jpg",
    category: "desarrollo",
    technologies: ["Python", "Pygame", "Storytelling"],
    link: "#",
  },
  {
    id: 6,
    title: "Historia del Beisbolista Subestimado",
    description:
      "Narrativa multimedia sobre un beisbolista que superó adversidades para alcanzar el éxito profesional.",
    image: "/beisbol.jpg",
    category: "contenido",
    technologies: ["Guión", "Edición", "Narrativa"],
    link: "#",
  },
  {
    id: 7,
    title: "Microclase sobre Lenguajes de Programación",
    description:
      "Contenido educativo que explica de manera concisa y clara los fundamentos de diferentes lenguajes de programación.",
    image: "/lenguaje-de-programacion.jpg",
    category: "contenido",
    technologies: ["Educación", "Programación", "Explicación"],
    link: "#",
  },
  {
    id: 8,
    title: "Dramatización sobre Politología y Economía",
    description:
      "Representación creativa que explora conceptos complejos de politología y economía de forma accesible y entretenida.",
    image: "/politologia.jpg",
    category: "contenido",
    technologies: ["Guión", "Actuación", "Educación"],
    link: "#",
  },
]

export default function Projects() {
  const [filter, setFilter] = useState<"todos" | "desarrollo" | "contenido">("todos")
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  const filteredProjects = projects.filter((project) => filter === "todos" || project.category === filter)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="projects" className="py-20" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">
            Mis <span className="gradient-text">Proyectos</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Una selección de mis trabajos en desarrollo de software y creación de contenido
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center gap-4 mb-12"
        >
          <button
            onClick={() => setFilter("todos")}
            className={`px-4 py-2 rounded-lg transition-all ${
              filter === "todos"
                ? "bg-primary text-primary-foreground"
                : "bg-secondary/50 text-muted-foreground hover:bg-secondary"
            }`}
          >
            Todos
          </button>
          <button
            onClick={() => setFilter("desarrollo")}
            className={`px-4 py-2 rounded-lg transition-all ${
              filter === "desarrollo"
                ? "bg-primary text-primary-foreground"
                : "bg-secondary/50 text-muted-foreground hover:bg-secondary"
            }`}
          >
            Desarrollo
          </button>
          <button
            onClick={() => setFilter("contenido")}
            className={`px-4 py-2 rounded-lg transition-all ${
              filter === "contenido"
                ? "bg-primary text-primary-foreground"
                : "bg-secondary/50 text-muted-foreground hover:bg-secondary"
            }`}
          >
            Contenido
          </button>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredProjects.map((project) => (
            <motion.div key={project.id} variants={itemVariants} className="project-card group">
              <div className="relative h-48 mb-4 overflow-hidden rounded-lg">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-end p-4">
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-primary/90 p-2 rounded-full text-white hover:bg-primary transition-colors"
                      aria-label={`Ver proyecto ${project.title}`}
                    >
                      {project.category === "desarrollo" ? <Github size={20} /> : <Play size={20} />}
                    </a>
                  )}
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="text-xs bg-secondary/50 text-muted-foreground px-2 py-1 rounded">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

