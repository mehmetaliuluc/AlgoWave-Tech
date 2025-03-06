export default function VisionMission() {
  return (
    <section id="vision" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Vision & Mission
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Shaping the future of finance and technology
          </p>
        </div>
        
        <div className="mt-16 grid gap-12 lg:grid-cols-2">
          <div className="relative p-8 bg-white rounded-lg shadow-md border-t-4 border-blue-600">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
            <p className="text-gray-600">
              Transforming financial and industrial systems with AI and machine learning. We aim to be at 
              the forefront of technological innovation, providing solutions that revolutionize how 
              businesses operate and make decisions in an increasingly data-driven world.
            </p>
          </div>
          
          <div className="relative p-8 bg-white rounded-lg shadow-md border-t-4 border-blue-600">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
            <p className="text-gray-600">
              Providing strategic advantages to our clients through data analysis, optimization technologies, 
              and tailored financial solutions. We are committed to leveraging cutting-edge AI and 
              algorithm-based tools to solve complex problems and create measurable value for our clients.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
} 