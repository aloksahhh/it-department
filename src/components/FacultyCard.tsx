// components/FacultyCard.tsx
import Link from 'next/link';
import Image from 'next/image';
import { Linkedin, Mail } from 'lucide-react';

interface FacultyCardProps {
  name: string;
  designation: string;
  qualification: string;
  specialization: string;
  imageSrc: string;
  linkedin: string;
  email: string;
}

export function FacultyCard({
  name,
  designation,
  qualification,
  specialization,
  imageSrc,
  linkedin,
  email
}: FacultyCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      {/* Square Image - No icon on image */}
      <div className="relative aspect-square w-full">
        <Image
          src={imageSrc}
          alt={name}
          fill
          className="object-cover"
        />
      </div>

      {/* Details */}
      <div className="p-4">
        <h3 className="font-bold text-gray-900">{name}</h3>
        <p className="text-sm text-blue-600 mt-1">{designation}</p>
        <p className="text-xs text-gray-600 mt-2">{qualification}</p>
        <p className="text-xs text-gray-500 mt-1">{specialization}</p>
        
        {/* Social and Contact - LinkedIn icon here with content */}
        <div className="mt-3 pt-3 border-t border-gray-100 flex items-center justify-between">
          <Link 
            href={`mailto:${email}`} 
            className="text-gray-400 hover:text-blue-600 text-xs flex items-center gap-1"
          >
            <Mail className="w-3 h-3" />
            <span className="truncate max-w-[120px]">{email}</span>
          </Link>
          
          <Link 
            href={linkedin}
            target="_blank"
            className="text-gray-400 hover:text-blue-600 flex items-center gap-1 text-xs"
          >
            <Linkedin className="w-3.5 h-3.5" />
            <span>LinkedIn</span>
          </Link>
        </div>
      </div>
    </div>
  );
}