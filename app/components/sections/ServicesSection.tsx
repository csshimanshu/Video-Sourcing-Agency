'use client';
import { FC } from 'react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
}

const ServiceCard: FC<ServiceCardProps> = ({ title, description, icon }) => (
  <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
    <div className="text-3xl text-blue-500 mb-4">{icon}</div>
    <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const services = [
  {
    title: "Video Editing",
    description: "We polish your raw footage into a masterpiece.",
    icon: "🎬"
  },
  {
    title: "Thumbnail Creation",
    description: "Eye-catching thumbnails that drive clicks.",
    icon: "🖼️"
  },
  {
    title: "SEO Optimization",
    description: "Boost your video's visibility with expert SEO.",
    icon: "📊"
  },
  {
    title: "Social Media Promotion",
    description: "Extend your reach with tailored social media strategies.",
    icon: "📱"
  },
  {
    title: "Custom Intros and Outros",
    description: "Make your videos memorable with unique intros and outros.",
    icon: "✨"
  }
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive video production services to help your channel grow
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
