import React from 'react';
import { TrendingUp, ArrowRight } from 'lucide-react';

const Hero = () => {
  const features = [
    'Free domain & site builder',
    'Email Protection',
    'Improved cPanel',
    '60-Days Money-Back',
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6 bg-hero-pattern bg-cover bg-center">
      {/* Left Column */}
      <div className="space-y-6">
        {/* Top Title */}
        <div className="text-white">
          <p className="text-sm">Fast Secure & Powerful</p>
          <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
            Performance Marketing<br />
            für Unternehmen &<br />
            Onlineshops
          </h1>
        </div>

        {/* Feature Pills */}
        <div className="space-y-4">
          <div className="flex flex-wrap gap-3">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white bg-opacity-20 rounded-full px-4 py-2 text-sm text-white"
              >
                <span className="mr-2">✓</span>{feature}
              </div>
            ))}
          </div>
        </div>

        {/* Domain Search */}
        <div>
          <p className="text-sm text-white mb-4">
            Get a Domain Name (With FREE Email, DNS, Theft Protection, and lots more)
          </p>
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="www.example.io"
              className="flex-1 rounded-full px-6 py-3 text-gray-800"
            />
            <button className="bg-blue-500 hover:bg-blue-600 text-white rounded-full px-6 py-3 flex items-center transition-colors">
              Explore
              <ArrowRight className="ml-2 w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Right Column */}
      <div className="space-y-6">
        <div className="flex gap-6">
          {/* Image Placeholder */}
          <div className="w-1/2">
            <img
              src="/Curved.png"
              alt="Laptop with analytics"
              className="w-full h-full object-cover rounded-xl"
            />
          </div>

          {/* Stats Card */}
          <div className="bg-white rounded-xl p-6 shadow-lg w-1/2">
            <div className="flex items-start gap-4">
              <div className="bg-blue-50 p-3 rounded-full">
                <TrendingUp className="w-6 h-6 text-blue-500" />
              </div>
              <div>
                <h2 className="text-4xl font-bold">230+</h2>
                <p className="text-indigo-600 font-medium">Satisfied Clients</p>
                <p className="text-sm text-gray-500 mt-1">
                  some big companies that we work with, and trust us very much
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Traffic Card */}
        <div className="bg-black rounded-xl p-6 text-white">
          <p className="text-sm text-gray-400">Drive More Traffic and Sales</p>
          <h2 className="text-2xl font-bold mt-2 mb-6">
            Drive more traffic<br />& product sales
          </h2>
          <div className="flex items-end gap-8 justify-between px-4">
                  {[70, 85, 100].map((value, i) => (
                    <div key={value} className="text-center">
                      <div 
                        className={`w-10 rounded-t-lg mb-2 transition-all duration-500 ease-out ${
                          i === 0 ? 'h-20 bg-blue-400' : 
                          i === 1 ? 'h-24 bg-teal-400' : 
                          'h-28 bg-indigo-500'
                        }`}
                      />
                      <div className="text-sm font-medium">{value}%</div>
                    </div>
                  ))}
                </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
