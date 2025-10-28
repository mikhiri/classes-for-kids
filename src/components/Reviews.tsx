import { useState } from 'react'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'
import { Card, CardContent } from './Card'
import { Button } from './Button'

const reviews = [
  {
    name: 'Анастасия',
    role: 'Мама Вадима (7 лет)',
    rating: 5,
    text: "Евгения профессионал в работе с детьми. Она находит подход к нашему ребенку с очень сложным характером, который часто к ней на уроки приходил не в духе, а уходил в отличном настроении. Что касается процесса обучения, то даже онлайн занятия с Евгенией показали лучше результаты, чем оффлайн с другим учителем. Мы очень рады, что наш ребёнок учится у такого замечательного учителя. Благодарим за Ваш труд и желаем много хороших учеников.",
  },
  {
    name: 'Кристина',
    role: 'Мама Серафима (9 лет)',
    rating: 5,
    text: "Евгения отличный репетитор! Ребенок с удовольствием ходит на занятия, заметно повысилась успеваемость. Педагог всегда найдет подход, объясняет всё понятно и доступно. Как результат, появилась мотивация и интерес к учебе. Очень довольны выбором!",
  },
  {
    name: 'Вячеслав',
    role: 'Папа Мирославы (5 лет)',
    rating: 5,
    text: "Евгения относится к детям с огромным уважением, она не просто авторитет, но и настоящий друг, к мнению которого ребенок прислушивается. Мы очень благодарны ей не только за знания, но и за ту теплую, поддерживающую атмосферу, которую она создала.",
  },
]

export function Reviews() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextReview = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length)
  }

  const prevReview = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length)
  }

  const review = reviews[currentIndex]

  return (
    <section id="reviews" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Отзывы родителей
          </h2>
        </div>

        <div className="max-w-3xl mx-auto relative">
          <Card className="bg-secondary/20 border-none shadow-lg">
            <CardContent className="p-8 md:p-12">
              <div className="flex gap-1 mb-6 justify-center">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>

              <blockquote className="text-lg md:text-xl text-foreground/80 text-center mb-6 italic">
                "{review.text}"
              </blockquote>

              <div className="text-center">
                <p className="font-semibold text-foreground">{review.name}</p>
                <p className="text-sm text-foreground/60">{review.role}</p>
              </div>
            </CardContent>
          </Card>

          {reviews.length > 1 && (
            <>
              <Button
                variant="outline"
                size="sm"
                onClick={prevReview}
                className="absolute top-1/2 -translate-y-1/2 left-0 h-8 w-8 rounded-full p-0"
                aria-label="Previous review"
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={nextReview}
                className="absolute top-1/2 -translate-y-1/2 right-0 h-8 w-8 rounded-full p-0"
                aria-label="Next review"
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
            </>
          )}

          <div className="flex justify-center gap-2 mt-6">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-primary' : 'bg-foreground/20'
                }`}
                aria-label={`Go to review ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
