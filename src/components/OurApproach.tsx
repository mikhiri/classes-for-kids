import { Gamepad2, Heart, TrendingUp } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from './Card'

const approaches = [
  {
    icon: Gamepad2,
    title: 'Через игру',
    description: 'Учимся легко и с интересом — через игровые задания, творчество и живые примеры из жизни.',
  },
  {
    icon: Heart,
    title: 'С заботой',
    description: "Тёплая атмосфера и внимание к каждому ребёнку — без давления, с поддержкой и добротой.",
  },
  {
    icon: TrendingUp,
    title: 'С результатом',
    description: 'Постепенно укрепляем знания и уверенность — чтобы успехи в школе стали естественным результатом.',
  },
]

export function OurApproach() {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Учёба без скуки и стресса
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Каждое занятие помогает ребёнку развиваться, верить в себя и учиться с удовольствием.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {approaches.map((approach, index) => {
            const Icon = approach.icon
            return (
              <Card
                key={index}
                className="bg-background hover:shadow-lg transition-shadow duration-300"
              >
                <CardHeader className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">{approach.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-center text-foreground/70">
                    {approach.description}
                  </p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
