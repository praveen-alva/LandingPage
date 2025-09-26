import React from 'react';

const CompanyLogos = () => {
  const companies = [
    'FIRESS',
    'TOZO', 
    'HailPixels',
    'cocokind',
    'Oxyfresh',
    'DOTKEY',
    'Stylr',
    'Bellefit',
    'AMAZING FACE'
  ];

  return (
    <section className="py-12 bg-white border-t border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex animate-marquee whitespace-nowrap space-x-12">
          {companies.concat(companies).map((company, index) => (
            <div
              key={index}
              className="text-gray-400 font-medium text-base hover:text-gray-600 transition-colors duration-200 cursor-pointer"
            >
              {company}
            </div>
          ))}
        </div>
      </div>

     
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            display: flex;
            animation: marquee 20s linear infinite;
          }
        `}
      </style>
    </section>
  );
};

export default CompanyLogos;
