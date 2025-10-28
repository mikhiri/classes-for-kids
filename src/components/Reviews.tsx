import { useState } from 'react'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'
import { Card, CardContent } from './Card'
import { Button } from './Button'

const reviews = [
  {
    name: 'Sarah Johnson',
    role: 'Mother of Emma, 7',
    rating: 5,
    text: "My daughter looks forward to every class! She's become more confident in reading and her math skills have improved tremendously. The teacher's patience and creativity make all the difference.",
  },
  {
    name: 'Michael Chen',
    role: 'Father of Lucas, 6',
    rating: 5,
    text: "We tried several programs before finding this one. The personalized approach and play-based learning have been perfect for our son. He doesn't even realize he's learning - he thinks it's just fun!",
  },
  {
    name: 'Emily Rodriguez',
    role: 'Mother of Sofia, 8',
    rating: 5,
    text: "Outstanding teacher and curriculum! Sofia has made incredible progress in just three months. The communication is excellent, and we receive regular updates on her development. Highly recommend!",
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
            What Parents Say
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Real feedback from families who trust us with their children's education
          </p>
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
