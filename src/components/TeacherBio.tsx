import { GraduationCap, Award, Heart, Paperclip } from 'lucide-react'

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
                  src={`${import.meta.env.BASE_URL}images/teacher.jpg`}
                  alt="Зубкова Евгения Владимировна"
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
                Моя главная цель — не просто объяснить материал, а помочь ребёнку раскрыть способности, поверить в себя и полюбить учёбу. На занятиях мы играем, обсуждаем, рассуждаем и ищем ответы вместе. Я стараюсь, чтобы ребёнок чувствовал себя уверенно, не боялся ошибок и учился с интересом.
   
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">
                      Образование и квалификация
                    </h4>
                    <p className="text-foreground/70">
                      Бакалавр и магистр ЮФУ. 
                      Повышение квалификации в Институте социальной педагогики РАО
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Award className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">
                      Профессиональное развитие                    </h4>
                    <p className="text-foreground/70">
                      Сертификаты участника федеральных конференций
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Heart className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">
                      Признание и достижения
                    </h4>
                    <p className="text-foreground/70">
                      Диплом и сертификаты Всероссийского фестиваля педагогического творчества
                    </p>
                  </div>
                </div>
              </div>

              {/* Resume Link */}
              <div className="mt-8">
                <a
                  href="https://docs.google.com/document/d/1pIvcCEOOpyOrYfzM0I4PnVo0BWD3zZZZfKw6yiql0Ac/edit?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-semibold"
                >
                  <Paperclip className="w-5 h-5" />
                  <span>Полное резюме</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
