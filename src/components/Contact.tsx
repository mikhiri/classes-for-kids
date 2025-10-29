import { Phone, Mail, MapPin } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from './Card'

const contactInfo = [
  {
    icon: Phone,
    title: 'Телефон',
    content: '+7 995 318 56 10',
    secondaryContent: 'Пн-Сб: 9:00-19:00',
    href: 'tel:+79953185610',
  },
  {
    icon: MapPin,
    title: 'Адрес',
    content: 'г. Ростов-на-Дону\nул. 339-й Стрелковой Дивизии, 10А\nЖК "Вместе"',
    href: null,
  },
  {
    icon: Mail,
    title: 'Email',
    content: 'mail@teacherclasses.com',
    href: 'mailto:hello@teacherclasses.com',
  },
]

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Контакты
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Свяжитесь со мной удобным способом — обсудим цели и подберём подходящее расписание.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {contactInfo.map((info, index) => {
              const Icon = info.icon
              const content = info.href ? (
                <a
                  href={info.href}
                  className="text-primary hover:text-primary/80 transition-colors whitespace-pre-line"
                >
                  {info.content}
                </a>
              ) : (
                <span className="text-foreground/80 whitespace-pre-line">
                  {info.content}
                </span>
              )

              return (
                <Card
                  key={index}
                  className="bg-background hover:shadow-lg transition-shadow"
                >
                  <CardHeader className="text-center">
                    <div className="w-12 h-12 mx-auto mb-3 bg-primary/10 rounded-full flex items-center justify-center">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-base">{info.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center pb-6">
                    {content}
                    {info.secondaryContent && (
                      <div className="text-black mt-1">
                        {info.secondaryContent}
                      </div>
                    )}
                  </CardContent>
                </Card>
              )
            })}
          </div>

          <Card className="bg-background shadow-lg">
            <CardHeader className="text-center">
              <CardTitle className="text-xl">
                Запишитесь на пробное занятие
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center pb-6">
              <p className="text-foreground/70 mb-4">
                Пробное занятие — это возможность познакомиться, увидеть, как проходят уроки, и понять, подходит ли ребёнку формат.
                <br />
                Я стараюсь, чтобы каждому ученику было спокойно, интересно и уютно учиться.
              </p>
              <p className="text-sm text-foreground/60">
                Групповое занятие 500 руб. | Индивидуальное 700 руб.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
