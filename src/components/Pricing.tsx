import { Check } from 'lucide-react'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from './Card'
import { Button } from './Button'

const groupPlans = [
  {
    name: 'Starter',
    price: '$120',
    period: 'per month',
    pricePerClass: '$15 per class',
    description: '2 lessons/week • 45 min each',
    features: [
      'Small group (4-6 kids)',
      'Progress reports',
      'Email support',
    ],
    popular: false,
  },
  {
    name: 'Standard',
    price: '$180',
    period: 'per month',
    pricePerClass: '$15 per class',
    description: '3 lessons/week • 45 min each',
    features: [
      'Small group (4-6 kids)',
      'Bi-weekly progress reports',
      'Priority email support',
      'Monthly parent meetings',
    ],
    popular: true,
  },
  {
    name: 'Premium',
    price: '$260',
    period: 'per month',
    pricePerClass: '$13 per class',
    description: '5 lessons/week • 45 min each',
    features: [
      'Small group (4-6 kids)',
      'Weekly progress reports',
      '24/7 priority support',
      'Weekly parent meetings',
    ],
    popular: false,
  },
]

const individualPlans = [
  {
    name: 'Individual Basic',
    price: '$240',
    period: 'per month',
    pricePerClass: '$30 per class',
    description: '2 lessons/week • 60 min each',
    features: [
      'Personalized curriculum',
      'Flexible scheduling',
      'Weekly progress reports',
      'Direct parent contact',
    ],
  },
  {
    name: 'Individual Intensive',
    price: '$450',
    period: 'per month',
    pricePerClass: '$28 per class',
    description: '4 lessons/week • 60 min each',
    features: [
      'Custom learning plan',
      'Priority scheduling',
      'Daily progress updates',
      'Weekly parent consultations',
    ],
  },
]

export function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Pricing Plans
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Flexible options to fit your family's needs and schedule
          </p>
        </div>

        {/* Group Classes */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">Group Classes</h3>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {groupPlans.map((plan, index) => (
              <Card
                key={index}
                className={`bg-background relative ${
                  plan.popular ? 'ring-2 ring-primary shadow-xl' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-xl mb-2">{plan.name}</CardTitle>
                  <div className="mb-2">
                    <span className="text-4xl font-bold text-primary">
                      {plan.price}
                    </span>
                    <span className="text-foreground/60 ml-2">{plan.period}</span>
                  </div>
                  <p className="text-sm text-foreground/60">{plan.pricePerClass}</p>
                  <p className="text-sm font-medium text-foreground mt-2">
                    {plan.description}
                  </p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-foreground/80">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button
                    className="w-full"
                    variant={plan.popular ? 'default' : 'outline'}
                  >
                    Enroll Now
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>

        {/* Individual Classes */}
        <div>
          <h3 className="text-2xl font-bold text-center mb-8">Individual Classes</h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {individualPlans.map((plan, index) => (
              <Card key={index} className="bg-background">
                <CardHeader className="text-center">
                  <CardTitle className="text-xl mb-2">{plan.name}</CardTitle>
                  <div className="mb-2">
                    <span className="text-4xl font-bold text-primary">
                      {plan.price}
                    </span>
                    <span className="text-foreground/60 ml-2">{plan.period}</span>
                  </div>
                  <p className="text-sm text-foreground/60">{plan.pricePerClass}</p>
                  <p className="text-sm font-medium text-foreground mt-2">
                    {plan.description}
                  </p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-foreground/80">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" variant="outline">
                    Enroll Now
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
