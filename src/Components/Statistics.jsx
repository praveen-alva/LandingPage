import React from 'react';

const Statistics = () => {
  const stats = [
    {
      number: '80%',
      title: 'REDUCTION IN MANUAL',
      subtitle: 'COMMUNICATION'
    },
    {
      number: '2-4x',
      title: 'HIGHER ENGAGEMENT',
      subtitle: 'THAN COMPETITORS'
    },
    {
      number: '40%',
      title: 'INCREASE IN CUSTOMER',
      subtitle: 'ENGAGEMENT'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
                {stat.number}
              </div>
              <div className="space-y-1">
                <div className="text-sm font-medium text-gray-500 tracking-wide">
                  {stat.title}
                </div>
                <div className="text-sm font-medium text-gray-500 tracking-wide">
                  {stat.subtitle}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;