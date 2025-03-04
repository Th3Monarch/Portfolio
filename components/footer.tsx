export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-8 border-t border-secondary/50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-muted-foreground">© {currentYear} Manuel. Todos los derechos reservados.</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Desarrollador & Creador de Contenido</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

