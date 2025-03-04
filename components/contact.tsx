"use client"

import { useRef } from "react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { Github, Linkedin, Mail, Twitter } from "lucide-react"

export default function Contact() {
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

  const socialLinks = [
    {
      name: "GitHub",
      icon: <Github size={24} />,
      url: "https://github.com/manuel",
      color: "hover:bg-[#333] hover:border-[#333]",
    },
    {
      name: "LinkedIn",
      icon: <Linkedin size={24} />,
      url: "https://linkedin.com/in/manuel",
      color: "hover:bg-[#0077B5] hover:border-[#0077B5]",
    },
    {
      name: "Twitter",
      icon: <Twitter size={24} />,
      url: "https://twitter.com/manuel",
      color: "hover:bg-[#1DA1F2] hover:border-[#1DA1F2]",
    },
    {
      name: "Email",
      icon: <Mail size={24} />,
      url: "mailto:contacto@manuel.com",
      color: "hover:bg-primary hover:border-primary",
    },
  ]

  return (
    <section id="contact" className="py-20" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              <span className="gradient-text">Contacto</span>
            </h2>
            <p className="text-muted-foreground">¿Interesado en trabajar juntos? ¡Hablemos!</p>
          </motion.div>

          <motion.div variants={itemVariants} className="text-center mb-12">
            <p className="text-lg mb-6">
              Estoy abierto a oportunidades de colaboración, proyectos interesantes y nuevas conexiones. No dudes en
              contactarme a través de cualquiera de mis redes sociales o por correo electrónico.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-2 border border-secondary bg-card px-6 py-3 rounded-lg transition-all duration-300 ${link.color}`}
              >
                {link.icon}
                <span>{link.name}</span>
              </a>
            ))}
          </motion.div>

          <motion.div variants={itemVariants} className="mt-16 text-center">
            <p className="text-muted-foreground">
              ¿Prefieres un contacto más directo? Envíame un mensaje y te responderé lo antes posible.
            </p>
            <a
              href="mailto:contacto@manuel.com"
              className="inline-block mt-4 px-8 py-3 rounded-lg bg-primary text-primary-foreground font-medium transition-all hover:bg-primary/90"
            >
              Enviar mensaje
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

