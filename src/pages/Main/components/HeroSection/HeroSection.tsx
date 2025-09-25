import React from 'react'

const HeroSection: React.FC = () => {
  return (
    <header className="relative overflow-hidden full-width">
      <div className="absolute inset-0 hero-gradient"></div>
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1639762681057-408e52192e55?q=80&w=2232&auto=format&fit=crop')] bg-cover bg-center opacity-20"></div>
      <div className="container mx-auto py-20 md:py-32 relative z-10 mobile-section-padding">
        <div className="mobile-inner-padding">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="hero-heading mb-6 text-white mobile-tight">
              <span className="gradient-text block mb-2">Цифровые решения</span>
              для роста вашего бизнеса
            </h1>
            <p className="hero-subheading text-gray-300 mb-8 mx-auto max-w-2xl mobile-tight">
              Профессиональная разработка сайтов, приложений и систем автоматизации для ваших бизнес-задач
            </p>
            <div className="flex justify-center">
              <a href="#services" className="touch-button inline-flex items-center bg-primary-600 hover:bg-primary-700 text-white font-semibold button-text rounded-lg transition duration-300 shadow-lg hover:shadow-xl">
                Узнать подробнее
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default HeroSection
