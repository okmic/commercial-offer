import React from 'react'
import ServiceCard from '../ServiceCard/ServiceCard'

const ServicesSection: React.FC = () => {
const services = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: "Современные сайты",
    description: "Адаптивные сайты с современным дизайном для эффективного представления вашего бизнеса в интернете.",
    features: [
      "UI/UX дизайн",
      "Высокая производительность", 
      "SEO-оптимизация"
    ]
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    title: "Мобильные приложения",
    description: "Нативные и кроссплатформенные приложения для iOS и Android для расширения возможностей бизнеса.",
    features: [
      "iOS и Android",
      "Удобный интерфейс",
      "Интеграция с API"
    ]
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
      </svg>
    ),
    title: "AI чат-боты",
    description: "Интеллектуальные боты для автоматизации общения с клиентами и поддержки.",
    features: [
      "Telegram и VK боты",
      "AI ассистенты",
      "Интеграция с CRM"
    ]
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4 4 0 003 15z" />
      </svg>
    ),
    title: "Облачные системы",
    description: "Бэкенд разработка на Node.js и Go с поддержкой современных протоколов.",
    features: [
      "Node.js и Go",
      "HTTP/WebSocket/SOAP",
      "Масштабируемые архитектуры"
    ]
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
      </svg>
    ),
    title: "Архитектура БД",
    description: "Оптимизация баз данных и проектирование масштабируемых архитектур.",
    features: [
      "Реляционные и NoSQL",
      "Оптимизация запросов",
      "Проектирование архитектур"
    ]
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "DevOps",
    description: "Настройка серверов, CI/CD процессов и мониторинг инфраструктуры.",
    features: [
      "Настройка Nginx",
      "CI/CD автоматизация", 
      "Мониторинг серверов"
    ]
  }
]

  return (
    <section id="services" className="bg-dark-800 full-width mobile-section-padding">
      <div className="container mx-auto">
        <div className="mobile-inner-padding">
          <div className="text-center mb-12 sm:mb-16">
            <span className="text-primary-400 font-semibold tracking-wider section-subtitle uppercase">Услуги</span>
            <h2 className="section-heading text-white mt-3 mb-4 section-title mobile-text-center">
             Что я могу предложить
            </h2>
            <p className="text-gray-400 card-text mx-auto mobile-text-center">
              Комплексные IT-решения для вашего бизнеса с фокусом на результат
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                features={service.features}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServicesSection
