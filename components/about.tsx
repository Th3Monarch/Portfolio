"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Code, Lightbulb, Rocket } from "lucide-react"

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
    <section id="about" className="py-20" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Sobre <span className="gradient-text">Mí</span>
            </h2>
            <p className="text-muted-foreground">Apasionado por la tecnología y la creación de contenido</p>
          </motion.div>

          <motion.div variants={itemVariants} className="mb-10">
            <p className="text-lg leading-relaxed mb-6">
              Soy un desarrollador y creador de contenido enfocado en construir soluciones tecnológicas innovadoras y
              compartir conocimiento. Mi pasión por la programación me ha llevado a explorar diversas tecnologías y
              frameworks, siempre buscando aprender y mejorar constantemente.
            </p>
            <p className="text-lg leading-relaxed">
              Combino mis habilidades técnicas con mi creatividad para desarrollar proyectos que no solo funcionan
              eficientemente, sino que también ofrecen experiencias atractivas para los usuarios. Mi objetivo es seguir
              creciendo profesionalmente mientras contribuyo a la comunidad tecnológica.
            </p>
          </motion.div>

          <motion.div variants={containerVariants} className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <motion.div variants={itemVariants} className="bg-card rounded-xl p-6 border border-secondary">
              <div className="bg-primary/20 p-3 rounded-lg w-fit mb-4">
                <Code className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Desarrollo</h3>
              <p className="text-muted-foreground">
                Creación de aplicaciones y soluciones tecnológicas con enfoque en la experiencia del usuario.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="bg-card rounded-xl p-6 border border-secondary">
              <div className="bg-primary/20 p-3 rounded-lg w-fit mb-4">
                <Lightbulb className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Innovación</h3>
              <p className="text-muted-foreground">
                Exploración constante de nuevas tecnologías y metodologías para crear soluciones originales.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="bg-card rounded-xl p-6 border border-secondary">
              <div className="bg-primary/20 p-3 rounded-lg w-fit mb-4">
                <Rocket className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Contenido</h3>
              <p className="text-muted-foreground">
                Creación de material educativo y entretenido para compartir conocimiento y experiencias.
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

