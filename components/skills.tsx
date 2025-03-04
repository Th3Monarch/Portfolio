"use client"

import type React from "react"

import { useRef } from "react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { Code, Cpu, Database, Layout, Pencil, Video } from "lucide-react"

type SkillCategory = {
  name: string
  icon: React.ReactNode
  skills: string[]
  image: string
}

const skillCategories: SkillCategory[] = [
  {
    name: "Lenguajes de Programación",
    icon: <Code className="text-primary" size={20} />,
    skills: ["JavaScript", "TypeScript", "Python", "HTML", "CSS"],
    image: "/programming-languages.jpg",
  },
  {
    name: "Frameworks & Librerías",
    icon: <Layout className="text-primary" size={20} />,
    skills: ["React", "Next.js", "Node.js", "Express", "Tailwind CSS", "Framer Motion"],
    image: "/frameworks.jpg",
  },
  {
    name: "Bases de Datos", // or "Bases de Data" if you prefer
    icon: <Database className="text-primary" size={20} />,
    skills: ["MongoDB", "Firebase", "MySQL", "PostgreSQL"],
    image: "/databases.jpg",
  },
  {
    name: "Inteligencia Artificial",
    icon: <Cpu className="text-primary" size={20} />,
    skills: ["OpenAI API", "Modelos de Lenguaje", "Integración de IA", "Chatbots"],
    image: "/ai.jpg",
  },
  {
    name: "Creación de Contenido",
    icon: <Video className="text-primary" size={20} />,
    skills: ["Guión", "Edición de Video", "Narrativa", "Storytelling"],
    image: "/content-creation.jpg",
  },
  {
    name: "Habilidades Creativas",
    icon: <Pencil className="text-primary" size={20} />,
    skills: ["Diseño UI/UX", "Prototipado", "Resolución de Problemas", "Pensamiento Crítico"],
    image: "/creative.jpg",
  },
]

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

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
    <section id="skills" className="py-20 bg-gradient-to-b from-background to-card" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">
            Mis <span className="gradient-text">Habilidades</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Tecnologías y conocimientos que he adquirido a lo largo de mi trayectoria profesional
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, index) => (
            <motion.div key={index} variants={itemVariants} className="bg-card rounded-xl p-6 border border-secondary">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-primary/20 p-2 rounded-lg">{category.icon}</div>
                <h3 className="text-lg font-semibold">{category.name}</h3>
              </div>
              <img src={category.image} alt={category.name} className="w-full h-32 object-cover rounded-lg mb-4" />
              <div className="flex flex-wrap gap-2 mt-4">
                {category.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="skill-item">
                    {skill}
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

