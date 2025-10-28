import { Check } from 'lucide-react'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from './Card'
import { Button } from './Button'

const groupPlans = [
  {
    name: 'Школьная программа',
    price: '5500 руб',
    period: '/месяц',
    features: [
      '2 раза в неделю',
      '45 мин урок',
      '687 руб/занятие',
    ],
    popular: false,
  },
  {
    name: 'Дошкольная программа',
    price: '7920 руб',
    period: '/месяц',
    features: [
      '3 раза в неделю',
      '45 мин урок',
      '660 руб/занятие',
    ],
    popular: false,
  },
  {
    name: 'Творческие занятия',
    price: '3800 руб',
    period: '/месяц',
    features: [
      '1 раз в неделю',
      '90 мин урок',
      '950 руб/занятие',
    ],
    popular: false,
  },
]

const individualPlans = [
  {
    price: '7000 руб',
    period: '/месяц',
    features: [
     '2 раза в неделю',
      '45 мин урок',
      '895 руб/занятие',
    ],
  },
  {
    price: '10000 руб',
    period: '/месяц',
    features: [
     '3 раза в неделю',
      '45 мин урок',
      '833 руб/занятие',
    ],
  },
]

export function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Тарифы
          </h2>
        </div>

        {/* Group Classes */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">Групповые занятия до 8 учеников</h3>
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
                    Записаться на занятие
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>

        {/* Individual Classes */}
        <div>
          <h3 className="text-2xl font-bold text-center mb-8">Индивидуальные занятия</h3>
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
                    Записаться на занятие
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
