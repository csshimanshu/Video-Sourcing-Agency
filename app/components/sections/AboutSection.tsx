'use client';

import Image from 'next/image';
import StatCounter from './StatCounter';

export default function AboutSection() {
  return (
    <section id="about" className="relative min-h-screen py-12 sm:py-20 flex items-center justify-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient background with blur */}
        <div className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-blue-500/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-indigo-500/10 rounded-full blur-[120px]"></div>
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="max-w-[320px] xs:max-w-lg sm:max-w-2xl lg:max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            {/* Left Column - Image */}
            <div className="relative order-2 lg:order-1">
              <div className="relative aspect-video lg:aspect-square rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/Images/video editing timeline.jpg"
                  alt="Video Editing Timeline"
                  fill
                  className="object-cover"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
              </div>
              
              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-2 xs:gap-3 sm:gap-4 mt-3 sm:mt-6">
                <div className="bg-gradient-to-br from-blue-900/80 to-indigo-900/80 backdrop-blur-sm rounded-lg sm:rounded-xl p-3 sm:p-4 border border-white/10">
                  <StatCounter
                    end={150}
                    suffix="+"
                    className="text-lg xs:text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-1 flex items-baseline justify-center sm:justify-start gap-0.5"
                  />
                  <p className="text-[10px] xs:text-xs sm:text-sm text-gray-400 text-center sm:text-left">Videos Edited</p>
                </div>
                <div className="bg-gradient-to-br from-blue-900/80 to-indigo-900/80 backdrop-blur-sm rounded-lg sm:rounded-xl p-3 sm:p-4 border border-white/10">
                  <StatCounter
                    end={50}
                    suffix="M+"
                    className="text-lg xs:text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-1 flex items-baseline justify-center sm:justify-start gap-0.5"
                  />
                  <p className="text-[10px] xs:text-xs sm:text-sm text-gray-400 text-center sm:text-left">Views Generated</p>
                </div>
              </div>
            </div>

            {/* Right Column - Content */}
            <div className="order-1 lg:order-2 text-center lg:text-left">
              <h2 className="text-xl xs:text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-6">
                Professional Video Editing{' '}
                <span className="bg-gradient-to-r from-blue-400 to-indigo-500 text-transparent bg-clip-text">
                  Services
                </span>
              </h2>
              
              <div className="space-y-3 sm:space-y-4 text-gray-400">
                <p className="text-xs xs:text-sm sm:text-base leading-relaxed">
                  We specialize in creating engaging content that captivates your audience. Our professional editing team ensures your videos stand out and perform well on YouTube.
                </p>
                <p className="text-xs xs:text-sm sm:text-base leading-relaxed">
                  From basic cuts to advanced effects, color grading, and seamless transitions - we handle it all. Let us help you create content that engages your audience and grows your channel.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-2 xs:gap-3 sm:gap-4 mt-6 sm:mt-8">
                <div className="bg-gradient-to-br from-blue-900/50 to-indigo-900/50 backdrop-blur-sm rounded-lg sm:rounded-xl p-3 sm:p-4 border border-white/10">
                  <h3 className="text-sm xs:text-base sm:text-lg font-semibold text-white mb-1 sm:mb-2">Fast Delivery</h3>
                  <p className="text-[10px] xs:text-xs sm:text-sm text-gray-400">Quick turnaround time for your content</p>
                </div>
                <div className="bg-gradient-to-br from-blue-900/50 to-indigo-900/50 backdrop-blur-sm rounded-lg sm:rounded-xl p-3 sm:p-4 border border-white/10">
                  <h3 className="text-sm xs:text-base sm:text-lg font-semibold text-white mb-1 sm:mb-2">24/7 Support</h3>
                  <p className="text-[10px] xs:text-xs sm:text-sm text-gray-400">Always here to assist you</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
