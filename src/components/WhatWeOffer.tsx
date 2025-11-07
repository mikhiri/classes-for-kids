import { Users, User, BookOpen, Calculator, Palette } from 'lucide-react'

const services = [
  {
    icon: Users,
    text: 'Подготовка к школе',
  },
  {
    icon: User,
    text: "Помощь с домашними заданиями",
  },
  {
    icon: BookOpen,
    text: 'Повышение успеваемости',
  },
  {
    icon: Calculator,
    text: 'Работа с математикой, русским, английским и чтением',
    subtext: 'По вопросам английского языка уточняйте стоимость и условия по телефону',
  },
  {
    icon: Palette,
    text: 'Мастер-классы и творческие занятия',
  },
]

export function WhatWeOffer() {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Услуги
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Всё для успешной и спокойной учёбы: от подготовки к школе до творческих занятий.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className="flex items-start gap-4 p-6 rounded-lg bg-secondary/20 hover:bg-secondary/40 transition-colors duration-300 border-2 border-primary/30"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <div className="pt-2">
                  <p className="text-lg text-foreground/80">{service.text}</p>
                  {service.subtext && (
                    <p className="text-sm text-foreground/50 mt-1">{service.subtext}</p>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
