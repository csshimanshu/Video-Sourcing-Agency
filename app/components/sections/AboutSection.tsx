'use client';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Who We Are</h2>
            <div className="w-16 h-1 bg-blue-500 mx-auto mb-8"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-600 leading-relaxed">
                Vidsource is a dedicated team of video production experts committed to helping YouTubers like you create stunning, professional-quality videos.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our mission is to free up your time so you can focus on what you do best – creating amazing content. With our comprehensive suite of services, we handle the technical aspects while you concentrate on your creative vision.
              </p>
              <div className="flex flex-wrap gap-4 mt-8">
                <div className="flex items-center space-x-2">
                  <div className="text-blue-500 text-2xl">✓</div>
                  <span className="text-gray-700">Professional Editing</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="text-blue-500 text-2xl">✓</div>
                  <span className="text-gray-700">Fast Turnaround</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="text-blue-500 text-2xl">✓</div>
                  <span className="text-gray-700">24/7 Support</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-video bg-gray-200 rounded-lg shadow-xl overflow-hidden">
                {/* Placeholder for about section image */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-indigo-500/20"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
