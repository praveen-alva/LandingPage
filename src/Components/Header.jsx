import React, { useState } from 'react';
import { Menu, X, Star } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
       
          <div className="flex items-center">
            <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
              <div className="w-4 h-4 bg-white rounded-full flex items-center justify-center">
                <Star className="w-2 h-2 text-black" />
              </div>
            </div>
            <span className="ml-2 text-lg font-medium text-gray-900">/hello@reel.ai</span>
          </div>

       
          <nav className="hidden md:flex items-center space-x-8">
            <div className="relative group">
              <button className="text-gray-600 hover:text-gray-900 font-medium transition-colors duration-200 flex items-center">
                Products
                <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
            <a href="#" className="text-gray-600 hover:text-gray-900 font-medium transition-colors duration-200">
              Customer Stories
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900 font-medium transition-colors duration-200">
              Resources
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900 font-medium transition-colors duration-200">
              Pricing
            </a>
          </nav>
  
          <div className="hidden md:flex items-center space-x-4">
            <button className="px-4 py-2 text-gray-600 hover:text-gray-900 font-medium transition-colors duration-200">
              Book A Demo
            </button>
            <button className="px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800 font-medium transition-all duration-200">
              Get Started
            </button>
          </div>

       
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-gray-700 hover:text-gray-900"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

  
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-4 pt-2 pb-3 space-y-1">
            <a href="#" className="block px-3 py-2 text-gray-700 hover:text-gray-900">Products</a>
            <a href="#" className="block px-3 py-2 text-gray-700 hover:text-gray-900">Customer Stories</a>
            <a href="#" className="block px-3 py-2 text-gray-700 hover:text-gray-900">Resources</a>
            <a href="#" className="block px-3 py-2 text-gray-700 hover:text-gray-900">Pricing</a>
            <div className="pt-4 pb-2 space-y-2">
              <button className="block w-full text-left px-3 py-2 text-gray-700 hover:text-gray-900">
                Book A Demo
              </button>
              <button className="block w-full px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800 font-medium">
                Get Started
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;