'use client';
import { FC } from 'react';

interface PricingTierProps {
  name: string;
  price: string;
  description: string;
  features: string[];
  isPopular?: boolean;
}

const PricingTier: FC<PricingTierProps> = ({ name, price, description, features, isPopular }) => (
  <div className={`bg-white rounded-xl shadow-lg p-8 ${isPopular ? 'border-2 border-blue-500 relative' : ''}`}>
    {isPopular && (
      <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-500 text-white px-4 py-1 rounded-full text-sm">
        Most Popular
      </div>
    )}
    <div className="text-center">
      <h3 className="text-2xl font-bold text-gray-800 mb-2">{name}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="text-4xl font-bold text-blue-500 mb-6">{price}</div>
    </div>
    <ul className="space-y-4 mb-8">
      {features.map((feature, index) => (
        <li key={index} className="flex items-center text-gray-600">
          <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
          </svg>
          {feature}
        </li>
      ))}
    </ul>
    <button className={`w-full py-3 px-6 rounded-lg font-medium transition-colors ${
      isPopular 
        ? 'bg-blue-500 text-white hover:bg-blue-600' 
        : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
    }`}>
      Get Started
    </button>
  </div>
);

const pricingTiers = [
  {
    name: "Basic",
    price: "$299/mo",
    description: "Perfect for beginners",
    features: [
      "Up to 4 videos per month",
      "Basic video editing",
      "Thumbnail creation",
      "48-hour delivery",
      "Email support"
    ]
  },
  {
    name: "Pro",
    price: "$599/mo",
    description: "Ideal for growing channels",
    features: [
      "Up to 8 videos per month",
      "Advanced video editing",
      "Custom thumbnails",
      "24-hour delivery",
      "Priority support",
      "SEO optimization",
      "Social media clips"
    ],
    isPopular: true
  },
  {
    name: "Elite",
    price: "$999/mo",
    description: "For established creators",
    features: [
      "Up to 15 videos per month",
      "Premium video editing",
      "Custom intros/outros",
      "12-hour delivery",
      "24/7 VIP support",
      "Advanced SEO strategy",
      "Social media management",
      "Analytics reporting"
    ]
  }
];

export default function PricingSection() {
  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Affordable Pricing</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose the perfect plan for your channel's needs
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingTiers.map((tier, index) => (
            <PricingTier
              key={index}
              name={tier.name}
              price={tier.price}
              description={tier.description}
              features={tier.features}
              isPopular={tier.isPopular}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
