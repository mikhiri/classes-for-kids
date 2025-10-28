export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-foreground/5 border-t border-border py-8">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <p className="text-foreground/60 text-sm">
            © {currentYear} KidsLearn Classes. All rights reserved.
          </p>
          <p className="text-foreground/50 text-xs mt-2">
            Empowering young minds through engaging education
          </p>
        </div>
      </div>
    </footer>
  )
}
