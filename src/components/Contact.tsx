import { Phone, Mail, MapPin } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from './Card'

const contactInfo = [
  {
    icon: Phone,
    title: 'Phone',
    content: '(555) 123-4567',
    href: 'tel:+15551234567',
  },
  {
    icon: Mail,
    title: 'Email',
    content: 'hello@teacherclasses.com',
    href: 'mailto:hello@teacherclasses.com',
  },
  {
    icon: MapPin,
    title: 'Office',
    content: '123 Learning Lane\nEducation District',
    href: null,
  },
]

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Ready to start your child's learning adventure? Contact us today!
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {contactInfo.map((info, index) => {
              const Icon = info.icon
              const content = info.href ? (
                <a
                  href={info.href}
                  className="text-primary hover:text-primary/80 transition-colors"
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
                  </CardContent>
                </Card>
              )
            })}
          </div>

          <Card className="bg-background shadow-lg">
            <CardHeader className="text-center">
              <CardTitle className="text-xl">
                Schedule a Free Consultation
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center pb-6">
              <p className="text-foreground/70 mb-4">
                Let's discuss your child's needs and how we can help them thrive.
                Call or email us to book your free 30-minute consultation.
              </p>
              <p className="text-sm text-foreground/60">
                Available Monday-Friday, 9 AM - 6 PM
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
