import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-white/50 backdrop-blur-sm border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src="/BCL logo - Two Line Text - Border outline - Transparent BG.png"
              alt="Black Cat Labs Logo"
              className="h-10 md:h-12 object-contain hover:opacity-80 transition-opacity"
            />
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className="relative text-zinc-900 bg-clip-text hover:bg-gradient-to-r from-[#ec5ba2] via-[#ed9395] to-[#9889c0] hover:text-transparent transition-all duration-300 group"
            >
              Home
              <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-gradient-to-r from-[#ec5ba2] to-[#9889c0] transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link 
              to="/services" 
              className="text-zinc-900 hover:text-zinc-900 transition-colors"
            >
              Services
            </Link>
            <Link 
              to="/quote"
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4">
            <Link 
              to="/" 
              className="block py-2 text-zinc-900 hover:text-zinc-900 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/services" 
              className="block py-2 text-zinc-900 hover:text-zinc-900 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Services
            </Link>
            <Link 
              to="/quote"
              className="block py-2 px-4 bg-blue-600 text-white rounded-lg mt-2 w-fit hover:bg-blue-700 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Get a Quote
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
