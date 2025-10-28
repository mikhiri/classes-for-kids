import { GraduationCap, Award, Heart } from 'lucide-react'

export function TeacherBio() {
  return (
    <section id="teacher-bio" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            О преподавателе
          </h2>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Teacher Image */}
            <div className="order-2 md:order-1">
              <div className="aspect-[3/4] rounded-lg overflow-hidden bg-secondary/30 shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Jane Anderson"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Teacher Info */}
            <div className="order-1 md:order-2">
              <h3 className="text-3xl font-bold text-foreground mb-4">
                Зубкова Евгения Владимировна
              </h3>
              <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
                Учительница начальных классов с опытом работы более 10 лет.
              </p>

              <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
                Моя главная цель — не просто объяснить материал, а раскрыть способности ребёнка и развить
уверенность в себе. На занятиях мы много играем, обсуждаем, рассуждаем и ищем ответы вместе. Я подбираю задания так, чтобы ребёнок учился с увлечением и удовольствием, без страха ошибок.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">
                      Master's in Elementary Education
                    </h4>
                    <p className="text-foreground/70">
                      Specialized in early childhood development
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Award className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">
                      Опыт работы более 10 лет                    </h4>
                    <p className="text-foreground/70">
                      Working with children ages 5-9
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Heart className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">
                      Первая квалификационная категория
                    </h4>
                    <p className="text-foreground/70">
                      Making education fun and effective
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
