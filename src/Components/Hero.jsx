import React from 'react';
import { Star, Play } from 'lucide-react';
import pic1 from '../assets/pic1.jpeg'; 

const Hero = () => {
  return (
    <section className="bg-gray-50 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
         
          <div className="space-y-8">
            <div className="flex items-center space-x-2">
              <Star className="w-5 h-5 text-green-500 fill-current" />
              <span className="text-sm font-medium text-gray-700">4.7 on TrustPilot</span>
            </div>

            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Boost your
                <br />
                conversions
                <br />
                instantly
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
                Packed with lightning-fast Shoppable videos, interactive video quizzes, Live-stream shopping & more – All 3x faster than YouTube
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-3 bg-black text-white rounded-lg hover:bg-gray-800 font-medium transition-all duration-200">
                Get Started — For Free!
              </button>
              <button className="px-8 py-3 border border-gray-300 text-gray-700 rounded-lg hover:border-gray-400 font-medium transition-all duration-200">
                Book A Demo
              </button>
            </div>
          </div>

        
          <div className="relative flex justify-center">
        
            <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden w-64 lg:w-80 h-[500px]">
              <img
                src={pic1}
                alt="Portrait demo"
                className="w-full h-full object-cover rounded-2xl"
              />

            
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform cursor-pointer">
                  <Play className="w-6 h-6 text-gray-900 ml-1" fill="currentColor" />
                </div>
              </div>

          
              <div className="absolute top-4 right-4 bg-white rounded-lg px-3 py-2 shadow-lg">
                <span className="text-sm font-semibold text-gray-900">$99</span>
              </div>

          
              <div className="absolute top-4 left-1 bg-white rounded-lg px-3 py-2 shadow-lg flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 text-yellow-400 fill-current" />
                ))}
              </div>

          
              <div className="absolute bottom-30 left-23 -right-30 space-y-2">
                <div className="bg-white rounded-lg px-13 py-2 shadow-lg flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-900">Increase Sales</span>
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                </div>
                <div className="bg-white rounded-lg px-3 py-2 shadow-lg flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-900">Add to cart from video</span>
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                </div>
              </div>
            </div>


            <div className="absolute -top-6 -right-6 bg-green-500 text-white rounded-2xl p-6 shadow-xl transform rotate-3 hover:rotate-0 transition-transform">
              <div className="text-3xl font-bold">20X</div>
              <div className="text-sm opacity-90">Jump in product</div>
              <div className="text-sm opacity-90">discovery</div>
            </div>

        
            <div className="absolute -bottom-8 -left-8 bg-white rounded-2xl p-4 shadow-xl max-w-xs">
              <div className="flex items-start space-x-3 mb-3">
                <div className="w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xs">RED</span>
                </div>
                <div className="flex-1">
                  <div className="font-medium text-sm text-gray-900 mb-1">SABRE Backless Maxi Dress in Black</div>
                  <div className="text-gray-600 text-sm">$ 169.00 USD</div>
                </div>
              </div>
              <button className="w-full bg-black text-white py-2 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors">
                Shop Now
              </button>
            </div>

       
            <div className="absolute bottom-24 left-4 bg-white rounded-lg px-3 py-2 shadow-lg">
              <div className="text-xs font-medium text-gray-600 mb-2">Add tags to your video</div>
              <div className="flex space-x-2">
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">Music</span>
                <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-xs">Fashion</span>
                <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded-full text-xs">Fashion</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
