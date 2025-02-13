'use client';
import { FC } from 'react';

interface TestimonialCardProps {
  text: string;
  author: string;
  role?: string;
}

const TestimonialCard: FC<TestimonialCardProps> = ({ text, author, role }) => (
  <div className="bg-white rounded-xl shadow-lg p-8 relative">
    <div className="text-4xl text-blue-500 absolute -top-4 left-6">"</div>
    <p className="text-gray-600 mb-6 relative z-10 italic">
      {text}
    </p>
    <div className="flex items-center">
      <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
        <span className="text-xl text-gray-600">{author[0]}</span>
      </div>
      <div className="ml-4">
        <h4 className="font-bold text-gray-800">{author}</h4>
        {role && <p className="text-gray-500 text-sm">{role}</p>}
      </div>
    </div>
  </div>
);

const testimonials = [
  {
    text: "Vidsource has been a game-changer for my channel. Their editing skills are top-notch!",
    author: "Alex Rivers",
    role: "Tech YouTuber"
  },
  {
    text: "Thanks to Vidsource, I can now focus entirely on my content creation.",
    author: "Sarah Chen",
    role: "Lifestyle Creator"
  },
  {
    text: "Their SEO services have significantly increased my views.",
    author: "Mike Johnson",
    role: "Gaming Channel"
  }
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Hear from content creators who have transformed their channels with our help
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              text={testimonial.text}
              author={testimonial.author}
              role={testimonial.role}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
