export default function Products() {
  return (
    <section id="products" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Developed Products & Projects
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Explore our innovative solutions
          </p>
        </div>
        
        <div className="mt-16">
          <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg shadow-md p-8">
            <div className="lg:flex lg:items-center lg:justify-between">
              <div className="lg:w-1/2">
                <h3 className="text-2xl font-bold text-gray-900">BambamSignals.com</h3>
                <p className="mt-4 text-lg text-gray-600">
                  Our flagship financial analysis and trading tools platform showcasing the power of 
                  AlgoWave Technology&apos;s AI and algorithmic capabilities.
                </p>
                <div className="mt-6">
                  <a 
                    href="https://bambamsignals.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
                  >
                    Visit Website
                  </a>
                </div>
              </div>
              <div className="mt-8 lg:mt-0 lg:w-1/2">
                <div className="relative h-64 overflow-hidden rounded-lg">
                  <div className="w-full h-full bg-blue-300 flex items-center justify-center text-white font-bold text-xl">
                    BambamSignals.com
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-lg text-gray-600">
              We&apos;re constantly developing new tools and technologies. 
              Contact us to learn about our latest projects and custom solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
} 