import React from 'react'
import HeroSection from './components/HeroSection/HeroSection'
import ServicesSection from './components/ServicesSection/ServicesSection'
import AutomationSection from './components/AutomationSection/AutomationSection'
import AboutSection from './components/AboutSection/AboutSection'

const Main: React.FC = () => {
  return (
    <div className="font-sans bg-dark-900 text-gray-300 antialiased min-h-screen">
      <HeroSection />
      <ServicesSection />
      <AutomationSection />
      <AboutSection />
    </div>
  )
}

export default Main