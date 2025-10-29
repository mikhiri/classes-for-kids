export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-foreground/5 border-t border-border py-8">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <p className="text-foreground/60 text-sm">
            © {currentYear} Евгения Владимировна Зубкова. Все права защищены.
          </p>
          <p className="text-foreground/50 text-xs mt-2">
            Нескучные занятия для детей 5-9 лет в Ростове-на-Дону.
          </p>
        </div>
      </div>
    </footer>
  )
}
