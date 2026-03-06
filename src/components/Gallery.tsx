'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface GalleryImage {
  id: number;
  src: string;
  caption: string;
}

const CARD_WIDTH = 340;
const GAP = 20;
const STEP = CARD_WIDTH + GAP;
const AUTO_SCROLL_SPEED = 0.6;

const Gallery: React.FC = () => {
  const trackRef = useRef<HTMLDivElement>(null);
  const animRef = useRef<number>(0);
  const isPausedRef = useRef(false);
  const posRef = useRef(0);

  // Sample images - replace these with your actual photos
  const images: GalleryImage[] = [
    { id: 1, src: "/img/SOUMEN.jpeg", caption: "Annual Tech Fest 2024" },
    { id: 2, src: "/img/Speaker.jpeg", caption: "Hackathon Winners" },
    { id: 3, src: "/hero3.jpg", caption: "Industry Visit" },
    { id: 4, src: "/hero1.jpg", caption: "Graduation Ceremony" },
    { id: 5, src: "/hero2.jpg", caption: "Research Symposium" },
    { id: 6, src: "/hero3.jpg", caption: "Sports Day" },
    { id: 7, src: "/hero1.jpg", caption: "Cultural Night" },
    { id: 8, src: "/hero2.jpg", caption: "Alumni Meet" },
  ];

  // Duplicate images for seamless loop
  const items = [...images, ...images];

  const scrollBy = (dir: number) => {
    isPausedRef.current = true;
    posRef.current += dir * STEP;
    if (trackRef.current) {
      trackRef.current.style.transition = "transform 0.45s cubic-bezier(0.4,0,0.2,1)";
      trackRef.current.style.transform = `translateX(${-posRef.current}px)`;
    }
    setTimeout(() => {
      if (trackRef.current) trackRef.current.style.transition = "none";
      isPausedRef.current = false;
    }, 500);
  };

  useEffect(() => {
    const totalWidth = images.length * STEP;

    const animate = () => {
      if (!isPausedRef.current) {
        posRef.current += AUTO_SCROLL_SPEED;
        if (posRef.current >= totalWidth) {
          posRef.current -= totalWidth;
        }
        if (trackRef.current) {
          trackRef.current.style.transform = `translateX(${-posRef.current}px)`;
        }
      }
      animRef.current = requestAnimationFrame(animate);
    };

    animRef.current = requestAnimationFrame(animate);
    return () => {
      if (animRef.current) {
        cancelAnimationFrame(animRef.current);
      }
    };
  }, [images.length]);

  return (
    <section className="w-full py-16  bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header - matching your website style */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Gallery</h2>
            <p className="text-sm text-gray-500 mt-1">Moments that define us.</p>
            <div className="w-16 h-1 bg-green-600 mt-3"></div>
          </div>

          {/* View All Link */}
          <Link 
            href="/gallery" 
            className="text-blue-600 text-sm hover:text-blue-700 inline-flex items-center gap-1"
          >
            View all
            <span className="text-lg">→</span>
          </Link>
        </div>

        {/* Gallery Track Container */}
        <div 
          className="relative overflow-hidden rounded-xl"
          onMouseEnter={() => { isPausedRef.current = true; }}
          onMouseLeave={() => { isPausedRef.current = false; }}
        >
          {/* Fade Edges */}
          <div className="absolute top-0 left-0 w-16 h-full bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none" />
          <div className="absolute top-0 right-0 w-16 h-full bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none" />

          {/* Gallery Track */}
          <div
            ref={trackRef}
            className="flex gap-5 will-change-transform"
            style={{ transform: `translateX(0px)` }}
          >
            {items.map((img, index) => (
              <div
                key={`${img.id}-${index}`}
                className="min-w-[340px] bg-white  overflow-hidden shadow-md hover:shadow-lg transition-shadow"
              >
                {/* Image Container */}
                <div className="relative w-full h-[220px] bg-gray-200">
                  <Image
                    src={img.src}
                    alt={img.caption}
                    fill
                    className="object-cover"
                    sizes="340px"
                  />
                </div>
                
                {/* Caption */}
                <div className="p-3">
                  <p className="text-sm text-gray-700 font-medium">{img.caption}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Arrow Controls - positioned absolutely */}
          <div className="absolute top-1/2 left-4 right-4 -translate-y-1/2 flex justify-between z-20 pointer-events-none">
            <button
              onClick={() => scrollBy(-1)}
              className="w-10 h-10 rounded-full bg-white border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white transition-all pointer-events-auto shadow-md flex items-center justify-center"
              aria-label="Previous"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => scrollBy(1)}
              className="w-10 h-10 rounded-full bg-white border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white transition-all pointer-events-auto shadow-md flex items-center justify-center"
              aria-label="Next"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

       
      </div>
    </section>
  );
};

export default Gallery;