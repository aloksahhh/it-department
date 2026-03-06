// components/about/AboutHeader.tsx
import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight, Facebook, Instagram, Youtube, MapPin, Phone, Calendar } from 'lucide-react';

interface AboutHeaderProps {
  imageSrc?: string;
  imageAlt?: string;
}

export function Overview({ 
  imageSrc = "/img/SOUMEN.jpeg", 
  imageAlt = "Department Building" 
}: AboutHeaderProps) {
  return (
    <div className="bg-gray-100">
      {/* Breadcrumb */}
      <div className="border-b border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-3 flex items-center gap-2 text-sm">
            <Link href="/" className="text-gray-500 hover:text-gray-900 transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
            <span className="text-gray-900">About</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Text Content & Image */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About the Department
            </h1>
            
            <div className="space-y-4 text-gray-700">
              <p className="text-lg leading-relaxed">
                The Department of Information Technology was established with the vision to impart 
                high-quality technical education and foster innovation in computing and digital technologies.
              </p>
              
              <p className="text-lg leading-relaxed">
                The department offers undergraduate and postgraduate programs designed to equip students 
                with strong theoretical foundations and practical industry skills.
              </p>
              <h2>120+ experienced teachers.</h2>
            </div>

            {/* Image */}
            <div className="mt-8 relative h-64 w-full rounded-xl overflow-hidden">
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Right Column - Contact Info */}
          <div className="bg-gray-50 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Information Technology</h2>
            
            <div className="space-y-6">
              {/* Since 1996 */}
              <div className="flex items-start gap-3">
                <Calendar className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium text-gray-900">Since 1996</p>
                  <p className="text-gray-600">ICARE Complex, Hatiberia Haldia, Dist-Purba Medinipore, WB Pin-721657</p>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium text-gray-900">Main Campus</p>
                  <p className="text-gray-600">ICARE Complex, Hatiberia</p>
                  <p className="text-gray-600">Haldia, Dist-Purba Medinipore, WB Pin-721657</p>
                </div>
              </div>

              {/* Admission Inquiry */}
              <div className="border-t border-gray-200 pt-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">For Admission Inquiry:</h3>
                
                <div className="space-y-3">
                  <p className="font-medium text-gray-800">Corporate Office:</p>
                  <p className="text-gray-600">54, Harish Mukherjee Road (2nd Floor)</p>
                  <p className="text-gray-600">Kolkata-700025</p>
                  
                  <div className="flex items-center gap-2 text-gray-600 mt-2">
                    <Phone className="w-4 h-4 flex-shrink-0" />
                    <span>+91 85839 37675</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Phone className="w-4 h-4 flex-shrink-0" />
                    <span>+91 94344 53140</span>
                  </div>
                </div>
              </div>

              {/* Social Connect */}
              <div className="border-t border-gray-200 pt-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Connect with us</h3>
                
                <div className="flex gap-4">
                  <Link 
                    href="#" 
                    className="bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 transition-colors hover:scale-110 transform duration-200"
                    aria-label="Facebook"
                  >
                    <Facebook className="w-5 h-5" />
                  </Link>
                  <Link 
                    href="#" 
                    className="bg-pink-600 text-white p-3 rounded-full hover:bg-pink-700 transition-colors hover:scale-110 transform duration-200"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-5 h-5" />
                  </Link>
                  <Link 
                    href="#" 
                    className="bg-red-600 text-white p-3 rounded-full hover:bg-red-700 transition-colors hover:scale-110 transform duration-200"
                    aria-label="YouTube"
                  >
                    <Youtube className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}