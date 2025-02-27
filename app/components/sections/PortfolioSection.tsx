'use client';

export default function PortfolioSection() {
  const portfolioItems = [
    {
      title: "Gaming Content",
      description: "Professional gaming video edits with engaging transitions and effects",
      image: "/Images/image01.jpg"
    },
    {
      title: "Product Reviews",
      description: "Detailed product review videos with clean cuts and smooth transitions",
      image: "/Images/image02.jpg"
    },
    {
      title: "Tech Reviews",
      description: "In-depth tech reviews with sophisticated b-roll sequences",
      image: "/Images/image04.jpg"
    },
    {
      title: "Vlogs",
      description: "Dynamic vlog edits that maintain viewer engagement",
      image: "/Images/image06.jpg"
    }
  ];

  return (
    <section id="portfolio" className="relative py-12 sm:py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-[320px] xs:max-w-lg sm:max-w-2xl lg:max-w-6xl mx-auto">
          <h2 className="text-xl xs:text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-white mb-3 sm:mb-6">
            Our{' '}
            <span className="bg-gradient-to-r from-blue-400 to-indigo-500 text-transparent bg-clip-text">
              Portfolio
            </span>
          </h2>
          
          <p className="text-center text-xs xs:text-sm sm:text-base text-gray-400 mb-8 sm:mb-12 max-w-2xl mx-auto">
            Take a look at some of our work. We pride ourselves in delivering high-quality video edits that help our clients grow their channels and engage their audience.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 xs:gap-4 sm:gap-6">
            {portfolioItems.map((item, index) => (
              <div 
                key={index}
                className="group relative overflow-hidden rounded-lg sm:rounded-xl bg-gradient-to-b from-blue-900/80 to-indigo-900/80 backdrop-blur-sm border border-white/10"
              >
                {/* Image */}
                <div className="aspect-video w-full relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-80"></div>
                </div>

                {/* Content */}
                <div className="p-3 xs:p-4">
                  <h3 className="text-sm xs:text-base sm:text-lg font-semibold text-white mb-1 sm:mb-2">
                    {item.title}
                  </h3>
                  <p className="text-[10px] xs:text-xs sm:text-sm text-gray-400 line-clamp-2">
                    {item.description}
                  </p>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
