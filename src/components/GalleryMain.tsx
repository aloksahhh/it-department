// components/Gallery.tsx
'use client';

import { useState } from 'react';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface GalleryImage {
  id: number;
  src: string;
  caption: string;
  category: string;
  year: string;
}

interface GalleryProps {
  images: GalleryImage[];
}

const categories = [
  'All',
  'Tech Fests',
  'Department',
  'Placements',
  'Convocation',
  'Guest Lectures',
  'Industrial Visits',
  'Inaugurations',
  'Sports',
  'Acm'
];

export function GalleryMain({ images }: GalleryProps) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Filter images based on selected category
  const filteredImages = selectedCategory === 'All' 
    ? images 
    : images.filter(img => img.category === selectedCategory);

  // Get current lightbox image
  const currentImage = lightboxIndex !== null ? filteredImages[lightboxIndex] : null;

  // Navigation functions
  const handlePrevious = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex(lightboxIndex === 0 ? filteredImages.length - 1 : lightboxIndex - 1);
    }
  };

  const handleNext = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex(lightboxIndex === filteredImages.length - 1 ? 0 : lightboxIndex + 1);
    }
  };

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (lightboxIndex !== null) {
      if (e.key === 'ArrowLeft') handlePrevious();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'Escape') setLightboxIndex(null);
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-10">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Moments from our department</h1>

        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`
                px-4 py-2 rounded-full text-sm font-light transition-all
                ${selectedCategory === category 
                  ? 'bg-green-600 text-white' 
                  : 'bg-white text-gray-600 hover:bg-green-50 border border-gray-200'
                }
              `}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Photo Grid */}
        {filteredImages.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-gray-400 text-lg font-light">
              No photos yet in this category
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((image, index) => (
              <div
                key={image.id}
                onClick={() => setLightboxIndex(index)}
                className="group cursor-pointer"
              >
                <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  {/* Image Container */}
                  <div className="relative aspect-[4/3] overflow-hidden bg-gray-200">
                    <Image
                      src={image.src}
                      alt={image.caption}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  
                  {/* Caption and Meta */}
                  <div className="p-4">
                    <p className="text-gray-800 text-sm mb-2 line-clamp-2">
                      {image.caption}
                    </p>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-green-600 font-medium">
                        {image.category}
                      </span>
                      <span className="text-gray-400">
                        {image.year}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Lightbox */}
        {lightboxIndex !== null && currentImage && (
          <div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center"
            onClick={() => setLightboxIndex(null)}
            onKeyDown={handleKeyDown}
            tabIndex={0}
          >
            {/* Close button */}
            <button
              onClick={() => setLightboxIndex(null)}
              className="absolute top-6 right-6 text-white/70 hover:text-white z-10"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Navigation arrows */}
            <button
              onClick={(e) => { e.stopPropagation(); handlePrevious(); }}
              className="absolute left-4 md:left-8 text-white/70 hover:text-white"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>
            
            <button
              onClick={(e) => { e.stopPropagation(); handleNext(); }}
              className="absolute right-4 md:right-8 text-white/70 hover:text-white"
            >
              <ChevronRight className="w-8 h-8" />
            </button>

            {/* Image */}
            <div 
              className="relative w-full max-w-5xl max-h-[80vh] mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative h-full w-full flex items-center justify-center">
                <Image
                  src={currentImage.src}
                  alt={currentImage.caption}
                  width={1200}
                  height={800}
                  className="object-contain max-h-[80vh] w-auto"
                />
              </div>

              {/* Counter and Caption */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                <div className="text-white">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-light">
                      {lightboxIndex + 1} / {filteredImages.length}
                    </span>
                    <span className="text-xs text-green-400 bg-black/30 px-2 py-1 rounded-full">
                      {currentImage.category}
                    </span>
                  </div>
                  <p className="text-lg font-light">{currentImage.caption}</p>
                  <p className="text-sm text-gray-300 mt-1">{currentImage.year}</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}