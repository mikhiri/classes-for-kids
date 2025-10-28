import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { OurApproach } from './components/OurApproach'
import { WhatWeOffer } from './components/WhatWeOffer'
import { LessonFormats } from './components/LessonFormats'
import { Reviews } from './components/Reviews'
import { Pricing } from './components/Pricing'
import { TeacherBio } from './components/TeacherBio'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <OurApproach />
        <WhatWeOffer />
        <LessonFormats />
        <Reviews />
        <Pricing />
        <TeacherBio />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
