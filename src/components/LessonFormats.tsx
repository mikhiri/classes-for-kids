import { Check, Sparkle, Loader } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from './Card'

const formats = [
  {
    icon: Sparkle,
    title: 'Формат',
    features: [
      '2-3 раза в неделю',
      'Занятия по 45 минут',
      'В группах до 8 учеников',
      'Индивидуально',
    ],
  },
  {
    icon: Loader,
    title: 'Виды занятий',
    features: [
      'Школьная программа',
      'Дошкольная программа',
      'Творческие занятия',
    ],
  },
]

export function LessonFormats() {
  return (
    <section id="lesson-formats" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Как проходят занятия
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {formats.map((format, index) => {
            const Icon = format.icon
            return (
              <Card
                key={index}
                className="bg-background hover:shadow-lg transition-shadow duration-300"
              >
                <CardHeader>
                  <div className="w-16 h-16 mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">{format.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {format.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-foreground/80">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
