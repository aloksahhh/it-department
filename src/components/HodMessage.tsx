'use client';

import React, { useState } from 'react';
import Image from 'next/image';

interface HodMessageProps {
  hodName?: string;
  hodTitle?: string;
  hodImage?: string;
  message?: string;
}

const HodMessage: React.FC<HodMessageProps> = ({
  hodName = "Dr. Arup Roy",
  hodTitle = "Professor & Head of Department",
  hodImage = "/HOD.jpeg",
  message = "Welcome to the Department of Information Technology. Our goal is to create an environment where students can learn, grow, and prepare for successful careers. We focus on building strong fundamentals while keeping up with industry trends."
}) => {
  const [imageError, setImageError] = useState(false);

  return (
    <section className="w-full py-3  bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">

        {/**header */}
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-gray-900">
            Message from HOD
          </h2>
          
          <div className="w-20 h-1 bg-green-600 mt-3"></div>
        </div>


        <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
          <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
            {/* Photo with error handling */}
            <div className="w-36 h-36 rounded-full overflow-hidden border-4 border-white shadow-sm bg-gray-200">
              {!imageError ? (
                <Image
                  src={hodImage}
                  alt={hodName}
                  width={144}
                  height={144}
                  className="w-full h-full object-cover"
                  onError={() => setImageError(true)}
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-3xl text-gray-500">
                  {hodName.split(' ').map(n => n[0]).join('')}
                </div>
              )}
            </div>
            
            {/* Message */}
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-gray-900 mb-1">{hodName}</h3>
              <p className="text-green-600 text-sm mb-4">{hodTitle}</p>
              
              <p className="text-gray-600 leading-relaxed">
                {message}
              </p>
              
              <p className="text-gray-500 text-sm mt-4">— {hodName}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HodMessage;