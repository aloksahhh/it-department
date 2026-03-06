"use client";

import { useState } from "react";
import Image from "next/image";
import { carouselItems } from "@/src/data/carouselData";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? carouselItems.length - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === carouselItems.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="relative w-full h-[380px] overflow-hidden rounded-md shadow-md group">
      
      <Image
        src={carouselItems[currentIndex].src}
        alt={carouselItems[currentIndex].alt}
        fill
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-green-700 bg-opacity-10 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
        <p className="text-white text-lg font-semibold text-center px-6">
          {carouselItems[currentIndex].description}
        </p>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-3 -translate-y-1/2 bg-white p-2 rounded-full shadow"
      >
        <ChevronLeft size={18} />
      </button>

      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-3 -translate-y-1/2 bg-white p-2 rounded-full shadow"
      >
        <ChevronRight size={18} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
        {carouselItems.map(( _ , index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? "bg-white" : "bg-gray-300"
            }`}
          />
        ))}
      </div>

    </div>
  );
}