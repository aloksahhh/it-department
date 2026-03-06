'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface FacultyMember {
  id: number;
  name: string;
  designation: string;
  education: string;
  imageUrl?: string;
  initials: string;
}

const OurFaculty: React.FC = () => {
  const faculty: FacultyMember[] = [
    {
      id: 1,
      name: "Dr. Arup Roy",
      designation: "Professor & Head of Department",
      education: "Ph.D. in Computer Science, IIT Kharagpur",
      imageUrl: "/HOD.jpeg",
      initials: "AR"
    },
    {
      id: 2,
      name: "Dr. Tamosha Maam",
      designation: "Associate Professor",
      education: "Ph.D. in Data Science, IIT Bombay",
      imageUrl: "/img/Tamosha.jpeg",
      initials: "PS"
    },
    {
      id: 3,
      name: "Mr. Sks Sir",
      designation: "Assistant Professor",
      education: "M.Tech in Software Engineering, NIT",
      imageUrl: "/img/sks.jpeg",
      initials: "RM"
    },
    {
      id: 4,
      name: "Dr. Arpita maam",
      designation: "Associate Professor",
      education: "Ph.D. in Networks, Jadavpur University",
      imageUrl: "/img/acmArpita.jpeg",
      initials: "SD"
    }
  ];

  return (
    <section className="w-full py-12  bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header with View All */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Our Faculty</h2>
            <p className="text-sm text-gray-500 mt-1">Dedicated educators shaping tomorrow's technologists.</p>
            <div className="w-16 h-1 bg-green-600 mt-3"></div>
          </div>
          
          <Link 
            href="/members" 
            className="text-blue-600 text-sm hover:text-blue-700 inline-flex items-center gap-1"
          >
            View all
            <span className="text-lg">→</span>
          </Link>
        </div>

        {/* Horizontal Row - 4 Square Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {faculty.map((member) => (
            <div 
              key={member.id}
              className="bg-white border border-gray-200  overflow-hidden hover:shadow-md transition-shadow group"
            >
              {/* Square Photo Container */}
              <div className="aspect-square bg-gray-100 flex items-center justify-center relative">
                {member.imageUrl ? (
                  <Image
                    src={member.imageUrl}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                    <span className="text-4xl font-bold text-white">
                      {member.initials}
                    </span>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-4 text-center">
                <h3 className="font-semibold text-gray-900 text-sm mb-1 group-hover:text-green-600 transition-colors">
                  {member.name}
                </h3>
                <p className="text-xs text-green-600 mb-1">{member.designation}</p>
                <p className="text-xs text-gray-500 line-clamp-2">{member.education}</p>
              </div>

              
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurFaculty;