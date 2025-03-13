'use client';

import { useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import VideoPlayer from '../VideoPlayer';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import styles from './PortfolioSlider.module.css';

type Service = 'videoEditing' | 'thumbnail' | 'channelManagement' | 'seo';

type SlideContent = {
  type: 'image' | 'video';
  url: string;
};

const services = [
  {
    id: 'videoEditing',
    title: 'Video Editing',
    description: 'Professional video editing services with engaging transitions and effects',
    content: [
      { type: 'video', url: 'dQw4w9WgXcQ' }, // Replace with actual video IDs
      { type: 'video', url: 'jNQXAC9IVRw' },
      { type: 'image', url: '/Images/Professional video editing time line.jpeg' }
    ]
  },
  {
    id: 'thumbnail',
    title: 'Thumbnail Design',
    description: 'Eye-catching thumbnail designs that increase click-through rates',
    content: [
      { type: 'image', url: '/Images/image01.jpg' },
      { type: 'image', url: '/Images/image02.jpg' },
      { type: 'image', url: '/Images/image04.jpg' }
    ]
  },
  {
    id: 'channelManagement',
    title: 'Channel Management',
    description: 'Complete YouTube channel management and growth strategy',
    content: [
      { type: 'video', url: 'M7FIvfx5J10' },
      { type: 'image', url: '/Images/Logo_of_YouTube_(2015-2017).svg.png' }
    ]
  },
  {
    id: 'seo',
    title: 'YouTube SEO',
    description: 'Optimize your videos for better visibility and growth',
    content: [
      { type: 'video', url: 'KYOYVZcZYAI' },
      { type: 'image', url: '/Images/youtube-seo.webp' },
      { type: 'image', url: '/Images/ai-automation.webp' }
    ]
  }
];

export default function PortfolioSlider() {
  const [activeService, setActiveService] = useState<Service>('videoEditing');
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [currentVideoIndex, setCurrentVideoIndex] = useState<number>(0);
  const swiperRef = useRef<any>(null);

  const activeContent = services.find(service => service.id === activeService);

  const handleVideoPlay = () => {
    setIsVideoPlaying(true);
    if (swiperRef.current?.swiper?.autoplay) {
      swiperRef.current.swiper.autoplay.stop();
    }
  };

  const handleVideoPause = () => {
    setIsVideoPlaying(false);
    if (swiperRef.current?.swiper?.autoplay) {
      swiperRef.current.swiper.autoplay.start();
    }
  };

  return (
    <div className="w-full">
      {/* Service Toggle Buttons */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {services.map((service) => (
          <button
            key={service.id}
            onClick={() => setActiveService(service.id as Service)}
            className={`px-4 py-2 rounded-full text-sm transition-all ${
              activeService === service.id
                ? 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white'
                : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
            }`}
          >
            {service.title}
          </button>
        ))}
      </div>

      {/* Content Section */}
      <div className="mb-8">
        <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 text-center">
          {activeContent?.title}
        </h3>
        <p className="text-gray-400 text-center mb-6 max-w-2xl mx-auto">
          {activeContent?.description}
        </p>
      </div>

      {/* Content Slider */}
      <div className="max-w-4xl mx-auto">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          navigation={{
            enabled: !isVideoPlaying
          }}
          pagination={{ 
            clickable: !isVideoPlaying,
            enabled: !isVideoPlaying
          }}
          autoplay={!isVideoPlaying ? { 
            delay: 5000, 
            disableOnInteraction: false 
          } : false}
          ref={swiperRef}
          allowTouchMove={!isVideoPlaying}
          className={`rounded-xl ${styles.swiper}`}
        >
          {activeContent?.content.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="aspect-video w-full">
                {item.type === 'video' ? (
                  <VideoPlayer
                    key={item.url}
                    videoId={item.url}
                    onPlay={() => {
                      handleVideoPlay();
                      if (swiperRef.current?.swiper) {
                        const swiper = swiperRef.current.swiper;
                        swiper.allowTouchMove = false;
                        swiper.allowSlideNext = false;
                        swiper.allowSlidePrev = false;
                      }
                    }}
                    onPause={() => {
                      handleVideoPause();
                      if (swiperRef.current?.swiper) {
                        const swiper = swiperRef.current.swiper;
                        swiper.allowTouchMove = true;
                        swiper.allowSlideNext = true;
                        swiper.allowSlidePrev = true;
                      }
                    }}
                    hasNext={activeContent.content.slice(index + 1).some(i => i.type === 'video')}
                    hasPrev={activeContent.content.slice(0, index).some(i => i.type === 'video')}
                    onNext={() => {
                      const videos = activeContent.content.filter(i => i.type === 'video');
                      const currentVideoIndex = videos.findIndex(v => v.url === item.url);
                      if (currentVideoIndex < videos.length - 1) {
                        const nextVideo = videos[currentVideoIndex + 1];
                        const nextIndex = activeContent.content.findIndex(i => i.url === nextVideo.url);
                        swiperRef.current?.swiper?.slideTo(nextIndex);
                      }
                    }}
                    onPrev={() => {
                      const videos = activeContent.content.filter(i => i.type === 'video');
                      const currentVideoIndex = videos.findIndex(v => v.url === item.url);
                      if (currentVideoIndex > 0) {
                        const prevVideo = videos[currentVideoIndex - 1];
                        const prevIndex = activeContent.content.findIndex(i => i.url === prevVideo.url);
                        swiperRef.current?.swiper?.slideTo(prevIndex);
                      }
                    }}
                  />
                ) : (
                  <img
                    src={item.url}
                    alt={`${activeContent.title} example ${index + 1}`}
                    className="w-full h-full object-cover rounded-xl"
                  />
                )}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
