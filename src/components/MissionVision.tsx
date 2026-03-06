'use client';

import React from 'react';

interface MissionVisionProps {
  departmentName?: string;
}

const MissionVision: React.FC<MissionVisionProps> = ({
  departmentName = "Information Technology"
}) => {
  return (
    <section className="w-full py-16 px-4 bg-gray-100">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-green-600 mb-4">
            Mission & Vision
            
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Department of {departmentName}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Mission Card - Simple hover */}
          <div className="group p-8 bg-gray-50 rounded-2xl transition-all duration-300 hover:shadow-xl hover:scale-[1.02] hover:bg-green-50/50">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 transition-all duration-300 group-hover:text-green-600 group-hover:translate-x-1">
              Our Mission
            </h3>
            <p className="text-gray-700 leading-relaxed transition-all duration-300 group-hover:text-gray-900">
              To produce competent IT professionals with strong theoretical and practical knowledge, 
              capable of innovating sustainable technological solutions for industry and society, 
              while fostering ethical values and lifelong learning.
            </p>
          </div>

          {/* Vision Card - Simple hover */}
          <div className="group p-8 bg-gray-50 rounded-2xl transition-all duration-300 hover:shadow-xl hover:scale-[1.02] hover:bg-green-50/50">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 transition-all duration-300 group-hover:text-green-600 group-hover:translate-x-1">
              Our Vision
            </h3>
            <p className="text-gray-700 leading-relaxed transition-all duration-300 group-hover:text-gray-900">
              To be a center of excellence in Information Technology education and research, 
              recognized globally for producing innovative leaders and entrepreneurs who 
              transform society through technology.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;