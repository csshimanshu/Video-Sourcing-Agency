'use client';

export default function ServicesSection() {
  return (
    <section id="services" className="bg-white min-h-screen flex items-center">
      <div className="container mx-auto px-4 py-20">
        <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 border rounded-lg shadow hover:shadow-xl transition duration-300">
            <h3 className="text-2xl font-semibold mb-4">Video Production</h3>
            <p className="text-gray-600">
              End-to-end video production services that bring your brand vision to life from concept to final edit.
            </p>
          </div>
          <div className="p-6 border rounded-lg shadow hover:shadow-xl transition duration-300">
            <h3 className="text-2xl font-semibold mb-4">Editing & Post-Production</h3>
            <p className="text-gray-600">
              Seamless editing, advanced visual effects, and sound design to create a compelling final product.
            </p>
          </div>
          <div className="p-6 border rounded-lg shadow hover:shadow-xl transition duration-300">
            <h3 className="text-2xl font-semibold mb-4">Creative Consulting</h3>
            <p className="text-gray-600">
              Collaborative creative consulting to help you conceptualize and execute impactful visual campaigns.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
