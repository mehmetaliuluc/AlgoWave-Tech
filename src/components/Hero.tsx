export default function Hero() {
  return (
    <div className="relative bg-gradient-to-r from-blue-600 to-blue-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="text-center">
          <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
            AlgoWave Technology - AI-Driven Solutions
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-blue-100 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Optimization with Artificial Intelligence, Algorithms, and Financial Analytics
          </p>
          <div className="mt-10 max-w-3xl mx-auto text-white text-opacity-80 text-lg">
            <p>
              AlgoWave Technology is a leading technology company specializing in AI Consensus Optimization, 
              Reinforcement Learning, algorithms, correlation analysis, similarity finders, and financial tools. 
              We also provide B2B financial tool development and leasing services.
            </p>
          </div>
          <div className="mt-8 flex justify-center">
            <div className="rounded-md shadow">
              <a
                href="#services"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-white hover:bg-gray-100 md:py-4 md:text-lg md:px-10"
              >
                Our Services
              </a>
            </div>
            <div className="ml-3 rounded-md shadow">
              <a
                href="#contact"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-500 hover:bg-blue-600 md:py-4 md:text-lg md:px-10"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 w-full">
        <svg className="w-full h-16 text-white" preserveAspectRatio="none" viewBox="0 0 1440 54" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 22L60 16.7C120 11 240 1 360 0.7C480 1 600 11 720 16.7C840 22 960 22 1080 16.7C1200 11 1320 1 1380 0.7L1440 0V54H0V22Z"></path>
        </svg>
      </div>
    </div>
  );
} 