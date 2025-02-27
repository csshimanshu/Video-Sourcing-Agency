'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const testimonials = [
  {
    name: "Alex Chen",
    role: "Gaming YouTuber",
    comment: "Their editing skills transformed my gaming content. The transitions and effects are top-notch, and my viewers love the improved quality!",
    avatar: "/Images/image07.jpg"
  },
  {
    name: "Sarah Miller",
    role: "Tech Reviewer",
    comment: "Professional service with quick turnaround times. They understand exactly what tech reviewers need and deliver consistently great results.",
    avatar: "/Images/image06.jpg"
  },
  {
    name: "Mike Johnson",
    role: "Product Reviewer",
    comment: "The team's attention to detail is impressive. They've helped me create more engaging product reviews that really connect with my audience.",
    avatar: "/Images/image04.jpg"
  }
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="relative py-12 sm:py-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 -right-1/4 w-1/2 h-1/2 bg-blue-500/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-1/4 -left-1/4 w-1/2 h-1/2 bg-indigo-500/10 rounded-full blur-[120px]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-[320px] xs:max-w-lg sm:max-w-2xl lg:max-w-4xl mx-auto">
          <h2 className="text-xl xs:text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-white mb-3 sm:mb-6">
            Client{' '}
            <span className="bg-gradient-to-r from-blue-400 to-indigo-500 text-transparent bg-clip-text">
              Testimonials
            </span>
          </h2>
          
          <p className="text-center text-xs xs:text-sm sm:text-base text-gray-400 mb-8 sm:mb-12">
            Don't just take our word for it. Here's what our clients have to say about our video editing services.
          </p>

          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={24}
            slidesPerView={1}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true
            }}
            loop={true}
            className="pb-12 sm:pb-16"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="bg-gradient-to-b from-blue-900/80 to-indigo-900/80 rounded-lg sm:rounded-xl p-4 sm:p-6 border border-white/10">
                  <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3 sm:gap-4">
                    {/* Avatar */}
                    <div className="relative w-12 h-12 xs:w-16 xs:h-16 sm:w-20 sm:h-20 shrink-0">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-full h-full object-cover rounded-full ring-2 ring-blue-500/20"
                      />
                    </div>

                    {/* Content */}
                    <div className="flex-1 text-center sm:text-left">
                      <h3 className="text-sm xs:text-base sm:text-lg font-semibold text-white">
                        {testimonial.name}
                      </h3>
                      <p className="text-[10px] xs:text-xs sm:text-sm text-blue-400 mb-2">
                        {testimonial.role}
                      </p>
                      <p className="text-xs xs:text-sm sm:text-base text-gray-300 leading-relaxed">
                        "{testimonial.comment}"
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
