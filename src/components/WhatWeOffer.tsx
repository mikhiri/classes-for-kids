import { Users, User, BookOpen, Calculator, Palette } from 'lucide-react'

const services = [
  {
    icon: Users,
    text: 'Small Group Classes (4-6 children) for collaborative learning',
  },
  {
    icon: User,
    text: "One-on-One Tutoring tailored to your child's pace",
  },
  {
    icon: BookOpen,
    text: 'Reading & Literacy Development programs',
  },
  {
    icon: Calculator,
    text: 'Math Fundamentals through hands-on activities',
  },
  {
    icon: Palette,
    text: 'Creative Workshops including art and storytelling',
  },
]

export function WhatWeOffer() {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            What We Offer
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Comprehensive educational services designed for young learners
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className="flex items-start gap-4 p-6 rounded-lg bg-secondary/20 hover:bg-secondary/40 transition-colors duration-300"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <p className="text-lg text-foreground/80 pt-2">{service.text}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
