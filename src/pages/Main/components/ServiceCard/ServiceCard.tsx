import React from 'react'

interface ServiceCardProps {
    icon: React.ReactNode
    title: string
    description: string
    features: string[]
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, features }) => {
    return (
        <div className="bg-dark-700 rounded-xl p-6 card-hover h-full flex flex-col group">
            <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 mt-1">
                    {icon}
                </div>
                <h3 className="text-xs font-semibold text-white leading-tight line-clamp-2 flex items-center min-h-[3rem]">
                    {title}
                </h3>
            </div>

            <p className="text-gray-400 text-xs leading-relaxed mb-4 flex-grow line-clamp-3">
                {description}
            </p>

            <ul className="space-y-2 text-gray-400">
                {features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary-400 mr-2 mt-0.5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-xs leading-relaxed line-clamp-2">{feature}</span>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ServiceCard
