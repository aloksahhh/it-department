'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface Program {
  id: number;
  title: string;
  type: string;
  duration: string;
  seats: string;
  pos: string[];
  peos: string[];
  psos: string[];
}

const DepartmentPrograms: React.FC = () => {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const programs: Program[] = [
    {
      id: 1,
      title: "B.Tech in Information Technology",
      type: "UG",
      duration: "4 Years",
      seats: "60 seats",
      pos: [
        "Engineering knowledge",
        "Problem analysis",
        "Design/development",
        "Investigations",
        "Modern tool usage"
      ],
      peos: [
        "Successful career in IT",
        "Higher education",
        "Leadership skills",
        "Ethical practices"
      ],
      psos: [
        "Software development",
        "Network management",
        "Data analytics"
      ]
    },
    {
      id: 2,
      title: "B.Tech IT (Lateral Entry)",
      type: "UG LATERAL",
      duration: "3 Years",
      seats: "18 seats",
      pos: [
        "Engineering knowledge",
        "Problem analysis",
        "Design/development",
        "Investigations",
        "Modern tool usage"
      ],
      peos: [
        "Successful career in IT",
        "Higher education",
        "Leadership skills",
        "Ethical practices"
      ],
      psos: [
        "Software development",
        "Network management",
        "Data analytics"
      ]
    },
    {
      id: 3,
      title: "M.Tech in Information Technology",
      type: "PG",
      duration: "2 Years",
      seats: "18 seats",
      pos: [
        "Advanced knowledge",
        "Critical analysis",
        "Research aptitude",
        "Problem solving",
        "Innovation"
      ],
      peos: [
        "R&D careers",
        "Doctoral studies",
        "Technical leadership",
        "Research publications"
      ],
      psos: [
        "Advanced software design",
        "System architecture",
        "Research methodology"
      ]
    }
  ];

  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section className="w-full py-8 px-4 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header with View All - matching Achievements style */}
        <div className="flex items-center justify-between mb-6">
          <div>
           <h2 className="text-3xl font-bold text-gray-900">
            Programs
          </h2>
            <div className="w-20 h-1 bg-green-500 mt-4"></div>
          </div>
          
          {/* View All Link */}
          <Link 
            href="/academics" 
            className="text-blue-600 text-sm hover:text-blue-700 inline-flex items-center gap-1"
          >
            View all
            <span className="text-lg">→</span>
          </Link>
        </div>

        {/* Programs List */}
        <div className="space-y-2">
          {programs.map((program) => (
            <div key={program.id} className="border border-gray-200 rounded-lg overflow-hidden">
              {/* Program Header - Clickable */}
              <div 
                onClick={() => toggleExpand(program.id)}
                className="bg-white p-3 hover:bg-gray-50 cursor-pointer transition-colors"
              >
                <div className="flex items-start justify-between">
                  {/* Left side - Title and Type */}
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <h3 className="text-sm font-medium text-gray-900">
                        {program.title}
                      </h3>
                      <span className="text-xs bg-blue-50 text-blue-600 px-2 py-0.5 rounded">
                        {program.type}
                      </span>
                    </div>
                    
                    {/* Duration and Seats */}
                    <div className="flex items-center gap-3 mt-1">
                      <span className="text-xs text-gray-500">{program.duration}</span>
                      <span className="text-xs text-gray-400">•</span>
                      <span className="text-xs text-gray-500">{program.seats}</span>
                    </div>
                  </div>

                  {/* Expand/Collapse Icon */}
                  <div className="text-gray-400">
                    {expandedId === program.id ? (
                      <ChevronUp className="w-4 h-4" />
                    ) : (
                      <ChevronDown className="w-4 h-4" />
                    )}
                  </div>
                </div>
              </div>

              {/* Expanded Details - PSOs/PEOs/POs */}
              {expandedId === program.id && (
                <div className="bg-gray-50 p-4 border-t border-gray-200">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {/* POs */}
                    <div>
                      <h4 className="text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">
                        Program Outcomes (POs)
                      </h4>
                      <ul className="space-y-1">
                        {program.pos.map((po, idx) => (
                          <li key={idx} className="text-xs text-gray-600 flex items-start gap-1">
                            <span className="text-blue-600 font-medium">•</span>
                            {po}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* PEOs */}
                    <div>
                      <h4 className="text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">
                        PEOs
                      </h4>
                      <ul className="space-y-1">
                        {program.peos.map((peo, idx) => (
                          <li key={idx} className="text-xs text-gray-600 flex items-start gap-1">
                            <span className="text-green-600 font-medium">•</span>
                            {peo}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* PSOs */}
                    <div>
                      <h4 className="text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">
                        PSOs
                      </h4>
                      <ul className="space-y-1">
                        {program.psos.map((pso, idx) => (
                          <li key={idx} className="text-xs text-gray-600 flex items-start gap-1">
                            <span className="text-purple-600 font-medium">•</span>
                            {pso}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* View Full Details Link */}
                  <div className="mt-3 text-right">
                    <Link 
                      href={`/academics/${program.id}`}
                      className="text-xs text-blue-600 hover:text-blue-700"
                    >
                      View full details →
                    </Link>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DepartmentPrograms;