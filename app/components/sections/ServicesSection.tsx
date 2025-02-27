'use client';

import { useRef, useState, useCallback, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCoverflow, Navigation } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import styles from './ServicesSection.module.css';
import 'swiper/css';
import 'swiper/css/effect-coverflow';

const services = [
  {
    title: "Video Editing",
    description: "Professional video editing services tailored for YouTube content creators. We handle everything from basic cuts to advanced effects, color grading, and seamless transitions.",
    image: "/Images/Professional video editing time line.jpeg"
  },
  {
    title: "Thumbnail Design",
    description: "Eye-catching thumbnail designs that boost click-through rates. We create compelling visuals that stand out in search results and suggested videos.",
    image: "/Images/image02.jpg"
  },
  {
    title: "Channel Management & SEO",
    description: "Comprehensive channel optimization services including SEO, content strategy, and analytics to increase visibility and grow your audience.",
    image: "/Images/youtube-seo.webp"
  },
  {
    title: "AI Agent Automation",
    description: "Leverage cutting-edge AI technology to automate content creation, scheduling, and optimization. Streamline your workflow and enhance productivity with intelligent automation solutions.",
    image: "/Images/ai-automation.webp"
  }
];

export default function ServicesSection() {
  const progressRef = useRef<HTMLDivElement>(null);
  const swiperRef = useRef<SwiperType>();
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  // Cleanup function
  useEffect(() => {
    return () => {
      if (swiperRef.current) {
        swiperRef.current.destroy(true, true);
      }
    };
  }, []);

  const updateProgress = useCallback((swiper: SwiperType) => {
    swiperRef.current = swiper;
    if (!progressRef.current) return;
    const progress = ((swiper.realIndex + 1) / services.length) * 100;
    progressRef.current.style.width = `${progress}%`;
  }, []);

  return (
    <section id="services" className="min-h-screen flex items-center justify-center relative scroll-mt-16 py-8">
      {/* Dynamic background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-1/2 h-1/2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-[120px] animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10 overflow-hidden">
        <div className="text-center mb-16 relative">
          {/* Background blur effect */}
          <div className="absolute -inset-10 bg-gradient-to-r from-blue-500/10 to-purple-500/10 blur-3xl opacity-50 rounded-full"></div>
          
          <div className="relative">
            <h2 className="text-5xl md:text-7xl font-bold mb-6 inline-block">
              {/* Gradient background for emphasis */}
              <span className="relative">
                <span className="absolute -inset-2 bg-gradient-to-r from-blue-600/20 to-purple-600/20 blur-lg rounded-lg"></span>
                <span className="relative">
                  {/* Text with multi-layer effect */}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-blue-500 to-purple-600 animate-gradient-x">
                    Our Services
                  </span>
                </span>
              </span>
            </h2>
            
            <p className="text-gray-300 max-w-2xl mx-auto text-base md:text-lg font-light tracking-wide">
              <span className="bg-gradient-to-r from-blue-400/20 to-purple-400/20 px-4 py-1 rounded-full">
                Elevate your content with our professional services
              </span>
            </p>
          </div>
        </div>
        
        <div className="relative max-w-7xl mx-auto">
          <Swiper
            className={styles.swiper}
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={'auto'}
            initialSlide={1}
            modules={[Autoplay, EffectCoverflow, Navigation]}
            loop={true}
            allowTouchMove={true}
            preventInteractionOnTransition={true}
            updateOnWindowResize={true}
            observer={true}
            observeParents={true}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2.5,
              slideShadows: false
            }}
            spaceBetween={30}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true
            }}
            onSlideChange={(swiper) => {
              updateProgress(swiper);
              setIsBeginning(swiper.isBeginning);
              setIsEnd(swiper.isEnd);
            }}
            onSwiper={(swiper) => {
              updateProgress(swiper);
              setIsBeginning(swiper.isBeginning);
              setIsEnd(swiper.isEnd);
            }}
            breakpoints={{
              480: {
                slidesPerView: 1.1,
                spaceBetween: 20
              },
              768: {
                slidesPerView: 1.5,
                spaceBetween: 30
              },
              1024: {
                slidesPerView: 2.2,
                spaceBetween: 40
              },
              1280: {
                slidesPerView: 2.5,
                spaceBetween: 50
              }
            }}
          >
            {services.map((service, index) => (
              <SwiperSlide key={index} className="w-[280px] sm:w-[400px] md:w-[450px] lg:w-[500px] p-4 sm:p-6">
                <div className={`${styles.cardWrapper} relative`}>
                  <div className={styles.card}>
                    <div className={styles.imageWrapper}>
                      <div className={styles.imageOverlay} />
                      <img 
                        src={service.image} 
                        alt={service.title}
                        className="w-full h-[200px] sm:h-[300px] object-cover object-center transition-transform duration-700 hover:scale-110"
                      />
                    </div>
                    
                    <div className={`${styles.cardContent} p-6 sm:p-8`}>
                      <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 font-outfit">
                        {service.title}
                        <div className="h-1 w-12 bg-gradient-to-r from-blue-400 to-purple-500 mt-2 rounded-full transform origin-left transition-all duration-300 group-hover:w-full"></div>
                      </h3>
                      <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Progress Bar */}
          <div className={styles.progressBar}>
            <div ref={progressRef} className={styles.progressBarFill}></div>
          </div>

          {/* Navigation Hint */}
          <div className="text-center mt-6 text-gray-400 text-sm mb-4">
            <p>Swipe or drag to explore our services</p>
          </div>
        </div>
      </div>
    </section>
  );
}
