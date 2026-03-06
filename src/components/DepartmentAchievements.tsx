'use client';

import React from 'react';

const DepartmentAchievements: React.FC = () => {
  return (
    <section className="w-full py-14 bg-gray-100 ">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-gray-900">
            Achievements
          </h2>
          <p className="text-sm text-gray-500 mt-2">
            Built on results, driven by curiosity.
          </p>
          <div className="w-20 h-1 bg-green-600 mt-3"></div>
        </div>

        {/* Horizontal Stats */}
        <div className="flex flex-wrap justify-between items-center gap-8">
          
          <div className="min-w-[180px]">
            <div className="text-4xl font-bold text-gray-900 hover:text-[2.75rem] hover:text-green-500 transition-all duration-300 ease-in-out">14+</div>
            <p className="text-sm text-gray-500 mt-1">
              Years of academic excellence
            </p>
          </div>

          <div className="min-w-[180px]">
            <div className="text-4xl font-bold text-gray-900 hover:text-[2.75rem] hover:text-green-500 transition-all duration-300 ease-in-out">92%</div>
            <p className="text-sm text-gray-500 mt-1">
              Placement rate, last batch
            </p>
          </div>

          <div className="min-w-[180px]">
            <div className="text-4xl font-bold text-gray-900 hover:text-[2.75rem] hover:text-green-500 transition-all duration-300 ease-in-out">38</div>
            <p className="text-sm text-gray-500 mt-1">
              Research papers published
            </p>
          </div>

          <div className="min-w-[180px]">
            <div className="text-4xl font-bold text-gray-900 hover:text-[2.75rem] hover:text-green-500 transition-all duration-300 ease-in-out">6x</div>
            <p className="text-sm text-gray-500 mt-1">
              State-level hackathon winners
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default DepartmentAchievements;