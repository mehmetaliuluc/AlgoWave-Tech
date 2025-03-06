import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex">
              <span className="sr-only">AlgoWave Technology</span>
              <Image 
                src="/logo.svg" 
                alt="AlgoWave Technology" 
                width={180} 
                height={40} 
                className="h-8 w-auto" 
              />
            </Link>
          </div>
          
          <nav className="flex mt-8 md:mt-0 space-x-6">
            <Link href="#services" className="text-gray-300 hover:text-white text-sm">
              Services
            </Link>
            <Link href="#vision" className="text-gray-300 hover:text-white text-sm">
              Vision & Mission
            </Link>
            <Link href="#products" className="text-gray-300 hover:text-white text-sm">
              Products
            </Link>
            <Link href="#contact" className="text-gray-300 hover:text-white text-sm">
              Contact
            </Link>
          </nav>
        </div>
        
        <div className="mt-8 border-t border-gray-700 pt-8 md:flex md:items-center md:justify-between">
          <div className="flex space-x-6 md:order-2">
            {/* Social links could go here */}
          </div>
          <p className="mt-8 text-base text-gray-400 md:mt-0 md:order-1">
            &copy; {currentYear} AlgoWave Technology. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
} 