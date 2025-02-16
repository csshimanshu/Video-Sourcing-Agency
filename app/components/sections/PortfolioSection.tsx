'use client';

const projects = [
  {
    title: "Project Alpha",
    description: "A groundbreaking campaign for a leading tech brand that combines innovation with engaging storytelling.",
    image: "/images/project-alpha.jpg"
  },
  {
    title: "Project Beta",
    description: "A visually immersive series that captures the essence of creative expression and urban culture.",
    image: "/images/project-beta.jpg"
  },
  {
    title: "Project Gamma",
    description: "A modern advertisement redefining brand identity with striking visuals and dynamic design.",
    image: "/images/project-gamma.jpg"
  }
];

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="bg-gray-50 min-h-screen flex items-center">
      <div className="container mx-auto px-4 py-20">
        <h2 className="text-4xl font-bold text-center mb-12">Our Portfolio</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div 
              key={idx} 
              className="overflow-hidden rounded-lg shadow-md hover:shadow-2xl transition transform hover:-translate-y-1 duration-300"
            >
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6 bg-white">
                <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-700">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
