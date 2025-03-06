import { EnvelopeIcon, GlobeAltIcon } from '@heroicons/react/24/outline';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Contact Us
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Get in touch to learn how we can help your business
          </p>
        </div>
        
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="px-6 py-8 sm:p-10">
              <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <EnvelopeIcon className="h-6 w-6 text-blue-600" aria-hidden="true" />
                  </div>
                  <div className="ml-3 text-base text-gray-700">
                    <p className="font-medium text-gray-900">Email</p>
                    <p className="mt-1">mehmetaliuluc@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <GlobeAltIcon className="h-6 w-6 text-blue-600" aria-hidden="true" />
                  </div>
                  <div className="ml-3 text-base text-gray-700">
                    <p className="font-medium text-gray-900">Website</p>
                    <p className="mt-1">algowavetech.com</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-10">
                <div className="bg-blue-50 rounded-lg p-6">
                  <div className="text-center">
                    <h3 className="text-lg font-medium text-blue-900">Ready to get started?</h3>
                    <p className="mt-2 text-blue-700">
                      Contact us today to discuss your project requirements and how AlgoWave Technology can help.
                    </p>
                    <div className="mt-6">
                      <a
                        href="mailto:mehmetaliuluc@gmail.com"
                        className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
                      >
                        Send Email
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 