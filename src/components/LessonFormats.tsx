import { Home, Video, Check } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from './Card'

const formats = [
  {
    icon: Home,
    title: 'In-Person Lessons',
    description: 'Face-to-face interaction in a comfortable, inspiring learning environment',
    features: [
      'Hands-on activities and materials',
      'Direct supervision and guidance',
      'Social interaction with peers',
      'Immediate feedback and support',
    ],
  },
  {
    icon: Video,
    title: 'Online Sessions',
    description: 'Flexible virtual learning from the comfort of your home',
    features: [
      'Flexible scheduling options',
      'No travel time required',
      'Interactive digital tools',
      'Recording available for review',
    ],
  },
]

export function LessonFormats() {
  return (
    <section id="lesson-formats" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Lesson Formats
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Choose the learning style that works best for your family
          </p>
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
                  <p className="text-foreground/70 pt-2">{format.description}</p>
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
