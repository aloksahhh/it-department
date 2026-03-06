// components/research/ResearchCard.tsx
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, Users, FileText, ExternalLink, BookOpen, Award, TrendingUp, Globe } from 'lucide-react';

interface ResearchCardProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  authors?: string[];
  date?: string;
  citations?: number;
  journal?: string;
  doi?: string;
  link?: string;
  reversed?: boolean; // For alternating layout
}

export function ResearchCard({
  title,
  description,
  imageSrc= '/HOD.jpeg',
  imageAlt,
  authors = ['Dr. John Doe', 'Prof. Jane Smith'],
  date = '2024',
  citations = 45,
  journal = 'International Journal of Computer Science',
  doi = '10.1234/ijcs.2024.001',
  link = '#',
  reversed = false
}: ResearchCardProps) {
  return (
    <div className={`flex flex-col ${reversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 bg-white mb-5 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100`}>
      {/* Image Section */}
      <div className="lg:w-2/5 relative h-64 lg:h-auto">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent lg:bg-none" />
        
        {/* Mobile-only overlay text */}
        <div className="absolute bottom-4 left-4 text-white lg:hidden">
          <span className="bg-blue-600 px-3 py-1 rounded-full text-sm font-medium">
            Research Paper
          </span>
        </div>
      </div>

      {/* Details Section */}
      <div className="lg:w-3/5 p-6 lg:p-8">
        {/* Desktop badge */}
        <div className="hidden lg:inline-block mb-4">
          <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
            Research Paper
          </span>
        </div>

        {/* Title */}
        <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
          {title}
        </h3>

        {/* Authors */}
        <div className="flex items-center gap-2 text-gray-600 mb-4">
          <Users className="w-4 h-4 flex-shrink-0" />
          <p className="text-sm">
            {authors.join(' • ')}
          </p>
        </div>

        {/* Description */}
        <p className="text-gray-700 mb-6 line-clamp-3">
          {description}
        </p>

        {/* Metadata Grid */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Calendar className="w-4 h-4 text-blue-600" />
            <span>Published: {date}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <TrendingUp className="w-4 h-4 text-green-600" />
            <span>Citations: {citations}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600 col-span-2">
            <BookOpen className="w-4 h-4 text-purple-600 flex-shrink-0" />
            <span className="truncate">{journal}</span>
          </div>
        </div>

        {/* DOI and Links */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-gray-100">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <FileText className="w-4 h-4" />
            <span className="font-mono">DOI: {doi}</span>
          </div>
          
          <div className="flex gap-3">
            <Link 
              href={link}
              className="flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium transition-colors"
            >
              Read Paper
              <ExternalLink className="w-4 h-4" />
            </Link>
            <Link 
              href="#"
              className="flex items-center gap-2 text-gray-600 hover:text-gray-800 font-medium transition-colors"
            >
              Cite
              <Award className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}