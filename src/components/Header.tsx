import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0">
              <Image 
                src="/logo.svg" 
                alt="AlgoWave Technology" 
                width={200} 
                height={50} 
                className="h-10 w-auto" 
              />
            </Link>
          </div>
          <nav className="hidden md:flex space-x-8">
            <Link 
              href="#services" 
              className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium"
            >
              Services
            </Link>
            <Link 
              href="#vision" 
              className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium"
            >
              Vision & Mission
            </Link>
            <Link 
              href="#products" 
              className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium"
            >
              Products
            </Link>
            <Link 
              href="#contact" 
              className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium"
            >
              Contact
            </Link>
          </nav>
          <div className="md:hidden flex items-center">
            {/* Mobile menu button */}
            <button className="text-gray-700 hover:text-blue-600 focus:outline-none">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
} 