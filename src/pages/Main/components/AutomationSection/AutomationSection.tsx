import React from 'react'

const AutomationSection: React.FC = () => {
  return (
    <section className="bg-dark-800 full-width mobile-section-padding">
      <div className="container mx-auto">
        <div className="mobile-inner-padding">
          <div className="text-center mb-12 sm:mb-16">
            <span className="text-primary-400 font-semibold tracking-wider section-subtitle uppercase">Автоматизация</span>
            <h2 className="section-heading text-white mt-3 mb-4 section-title mobile-text-center">
              Бизнес-автоматизация
            </h2>
            <p className="text-gray-400 card-text mx-auto mobile-text-center">
              Оптимизация процессов для повышения эффективности вашего бизнеса
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mobile-stack">
            <div className="space-y-8">
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary-600 text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="card-heading text-white mb-2 font-semibold">Разработка подсистем</h3>
                  <p className="card-text text-gray-400 mobile-tight">
                    Создание специализированных подсистем для автоматизации ключевых бизнес-процессов
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary-600 text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="card-heading text-white mb-2 font-semibold">Обработка лидов</h3>
                  <p className="card-text text-gray-400 mobile-tight">
                    Настройка автоматизированной системы сбора и обработки лидов с аналитикой
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-dark-700 rounded-xl p-6">
              <h3 className="card-heading text-white mb-4 font-semibold">Преимущества автоматизации</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-primary-600 bg-opacity-20 text-primary-400 rounded-lg p-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h4 className="text-white font-semibold list-text">Снижение затрат</h4>
                    <p className="text-gray-400 list-text mt-1 mobile-tight">Автоматизация сокращает расходы на персонал и ошибки</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-primary-600 bg-opacity-20 text-primary-400 rounded-lg p-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h4 className="text-white font-semibold list-text">Ускорение процессов</h4>
                    <p className="text-gray-400 list-text mt-1 mobile-tight">Операции выполняются в разы быстрее</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-primary-600 bg-opacity-20 text-primary-400 rounded-lg p-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h4 className="text-white font-semibold list-text">Аналитика и контроль</h4>
                    <p className="text-gray-400 list-text mt-1 mobile-tight">Детальная аналитика всех процессов</p>
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

export default AutomationSection
