import { Gamepad2, Heart, TrendingUp } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from './Card'

const approaches = [
  {
    icon: Gamepad2,
    title: 'Through a Game',
    description: 'Learning disguised as play. Every lesson incorporates games and activities that make education fun and memorable for young minds.',
  },
  {
    icon: Heart,
    title: 'With Care',
    description: "Individual attention and nurturing support. Each child's unique needs and learning style are respected and celebrated.",
  },
  {
    icon: TrendingUp,
    title: 'With Result',
    description: 'Measurable progress and skill development. Regular assessments and parent communication ensure your child is advancing confidently.',
  },
]

export function OurApproach() {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Approach
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Three pillars that make learning effective and enjoyable
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
