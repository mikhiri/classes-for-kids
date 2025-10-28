import { Button } from './Button'

export function Hero() {
  return (
    <section className="relative min-h-[90vh] pt-20 flex items-center overflow-hidden bg-gradient-to-br from-background via-background to-secondary/30">
      <div className="container mx-auto px-4 py-20">
        <div className="relative">
          <div className="relative z-10 lg:pr-96">
            <h1 className="font-heading text-5xl md:text-7xl lg:text-[72px] font-bold text-foreground mb-6 leading-tight">
              Нескучные занятия <br />для детей <br /> <span className="font-pacifico" style={{ color: '#349FFF' }}>от 5 до 9 лет</span>
            </h1>

            <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mb-8 font-sans">
              Engaging, personalized classes designed for children aged 5-9. Building confidence, curiosity, and a lifelong love of learning through play-based education and proven teaching methods.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 items-start mb-8 lg:mb-0">
              <Button
                variant="default"
                size="lg"
                className="shadow-medium hover:shadow-strong transition-all"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Enroll Your Child
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View Pricing
              </Button>
            </div>

            {/* Mobile/Tablet image - shown below buttons */}
            <div className="lg:hidden flex justify-center mt-8">
              <img
                src="/technology.svg"
                alt="Space and technology illustration"
                className="w-full max-w-md h-auto animate-float"
              />
            </div>
          </div>

          {/* Desktop image - shown on the right */}
          <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-[40%] max-w-lg">
            <img
              src="/technology.svg"
              alt="Space and technology illustration"
              className="w-full h-auto animate-float"
            />
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-40 h-40 bg-secondary/50 rounded-full blur-3xl" />
    </section>
  )
}
