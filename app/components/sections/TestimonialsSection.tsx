'use client';

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="bg-white min-h-screen flex items-center">
      <div className="container mx-auto px-4 py-20">
        <h2 className="text-4xl font-bold text-center mb-12">Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 border rounded-lg shadow hover:shadow-xl transition duration-300">
            <p className="text-gray-700">
              "The team exceeded our expectations! The video content truly captured our brand's essence."
            </p>
            <h3 className="text-xl font-semibold mt-4">- Jane Doe, CEO</h3>
          </div>
          <div className="p-6 border rounded-lg shadow hover:shadow-xl transition duration-300">
            <p className="text-gray-700">
              "A fantastic experience from start to finish. Highly recommend their services."
            </p>
            <h3 className="text-xl font-semibold mt-4">- John Smith, Marketing Head</h3>
          </div>
        </div>
      </div>
    </section>
  );
}
