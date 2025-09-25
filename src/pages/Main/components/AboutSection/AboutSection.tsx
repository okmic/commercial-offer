import React from 'react'

const AboutSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-dark-900">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-12 lg:mb-0 lg:pr-8 xl:pr-12">
            <div className="relative rounded-xl overflow-hidden h-72 sm:h-96 w-full bg-gradient-to-br from-primary-800 to-primary-600 flex items-center justify-center">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-20"></div>
              <div className="relative z-10 text-center p-6 sm:p-8">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 sm:h-20 w-16 sm:w-20 mx-auto text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <h3 className="text-xl sm:text-2xl font-bold text-white mt-4 sm:mt-6">Михаил Okmic</h3>
                <p className="text-primary-300 mt-1 sm:mt-2 text-sm sm:text-base">Fullstack разработчик Nodejs Go</p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 px-4 sm:px-0">
            <span className="text-primary-400 font-semibold tracking-wider text-sm sm:text-base">ОБО МНЕ</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mt-3 sm:mt-4 mb-6 sm:mb-8">Профессиональный подход</h2>
            <p className="text-gray-400 text-sm sm:text-base mb-4 sm:mb-6">
              Я профессиональный разработчик с 8-летним опытом создания цифровых решений для бизнеса. Специализируюсь на веб-разработке, мобильных приложениях и автоматизации бизнес-процессов.
            </p>
            <p className="text-gray-400 text-sm sm:text-base mb-6 sm:mb-8">
              Моя цель - помочь вашему бизнесу стать более эффективным с помощью современных технологий. Я создаю не просто сайты или приложения, а инструменты для роста и развития вашей компании.
            </p>
            <div className="flex flex-wrap gap-2 sm:gap-3 mb-6 sm:mb-8">
              <span className="px-3 py-1 sm:px-4 sm:py-2 bg-dark-700 text-primary-400 rounded-full text-xs sm:text-sm font-medium">Веб-разработка</span>
              <span className="px-3 py-1 sm:px-4 sm:py-2 bg-dark-700 text-primary-400 rounded-full text-xs sm:text-sm font-medium">Мобильные приложения</span>
              <span className="px-3 py-1 sm:px-4 sm:py-2 bg-dark-700 text-primary-400 rounded-full text-xs sm:text-sm font-medium">Автоматизация</span>
              <span className="px-3 py-1 sm:px-4 sm:py-2 bg-dark-700 text-primary-400 rounded-full text-xs sm:text-sm font-medium">UI/UX дизайн</span>
            </div>
            <a href="https://okmic.github.io/okmic/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center bg-primary-600 hover:bg-primary-700 text-white font-semibold px-5 py-2.5 sm:px-6 sm:py-3 rounded-lg transition duration-300 transform hover:-translate-y-1">
              Подробнее обо мне
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
