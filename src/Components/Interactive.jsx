import React from 'react';
import { ArrowRight, Play } from 'lucide-react';
import pic2 from '../assets/pic2.jpeg'; 

const InteractiveVideos = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
        
          <div className="space-y-8">
            <div className="bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-medium w-fit">
              Interactive Videos
            </div>

            <h3 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Interactive and
              <br />
              Quiz Videos
            </h3>

            <p className="text-lg text-gray-600 leading-relaxed">
              Work better together, ship faster, and avoid unauthorized changes with advanced roles and permissions, page branching, and more.
            </p>

            <button className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium group">
              <span>Learn More</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

         
          <div className="relative flex justify-center">
            <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden w-64 lg:w-80 h-[500px]">
              <img 
                src={pic2} 
                alt="Interactive quiz demo"
                className="w-full h-full object-cover rounded-2xl"
              />

           
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform cursor-pointer">
                  <Play className="w-6 h-6 text-gray-900 ml-1" fill="currentColor" />
                </div>
              </div>

            
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white rounded-2xl p-4 shadow-xl">
                  <div className="text-sm font-medium text-gray-900 mb-3">How is the fit?</div>
                  <div className="space-y-2">
                    <button className="w-full bg-green-500 text-white py-2 px-4 rounded-lg text-sm font-medium flex items-center">
                      <span className="mr-2">✓</span>
                      Do you like this design?
                    </button>
                  </div>
                </div>
              </div>
            </div>

          
            <div className="absolute -top-4 -right-4 bg-orange-500 text-white rounded-2xl px-4 py-3 shadow-xl">
              <div className="text-sm font-medium flex items-center">
                <span className="mr-2">↗</span>
                Increase in Engagement
              </div>
            </div>

          
            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-4 shadow-xl max-w-xs">
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center">
                  <span className="text-white text-xs font-bold">FF</span>
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-900">Need a Fashion Fix</div>
                  <div className="text-xs text-gray-600">Recommend best engagement</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveVideos;
