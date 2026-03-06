// app/rtci-2025/page.tsx
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, MapPin, Users, Award, Clock, Mic, Download, ChevronRight } from 'lucide-react';

export default function RTCI2025Page() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      {/*<div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex items-center gap-3 mb-3">
            <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
              Annual Event
            </span>
            <span className="text-gray-400 text-sm">Since 2018</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-light text-gray-900 mb-4">
            RTCI'25
          </h1>
          <p className="text-xl text-gray-600 font-light max-w-3xl">
            Research & Technology Conclave 2025
          </p>
          <p className="text-gray-500 mt-2">Department of Information Technology</p>
        </div>
      </div>*/}

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section with Event Image */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden mb-12">
          <div className="relative w-full h-96">
            <Image
              src="/img/RTCI25.jpeg"
              alt="RTCI 2025"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            
            {/* Event Date Badge */}
            <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm rounded-lg p-4">
              <div className="flex items-center gap-4">
                <div className="text-center">
                  <span className="text-3xl font-bold text-green-600 block">15-17</span>
                  <span className="text-xs text-gray-600">March 2025</span>
                </div>
                <div className="h-10 w-px bg-gray-300"></div>
                <div>
                  <p className="font-medium text-gray-900">IT Department</p>
                  <p className="text-sm text-gray-500">Main Campus, Haldia</p>
                </div>
              </div>
            </div>
          </div>

          {/* Event Description */}
          <div className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="md:col-span-2">
                <h2 className="text-2xl font-light text-gray-800 mb-4">About the Event</h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  RTCI'25 is the flagship annual technology conclave organized by the Department of 
                  Information Technology. Now in its 8th edition, the event brings together industry 
                  experts, researchers, and students for three days of intensive learning, hands-on 
                  workshops, and networking opportunities.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  This year's theme focuses on "Emerging Technologies in AI and Cloud Computing" 
                  with specialized tracks for students to gain practical experience through 
                  interactive sessions and workshops led by industry professionals.
                </p>
              </div>
              
              {/* Quick Info */}
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-medium text-gray-900 mb-4">Quick Info</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-sm">
                    <Calendar className="w-4 h-4 text-green-600" />
                    <span className="text-gray-600">March 15-17, 2025</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <MapPin className="w-4 h-4 text-green-600" />
                    <span className="text-gray-600">IT Block, Main Campus</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <Users className="w-4 h-4 text-green-600" />
                    <span className="text-gray-600">500+ Participants</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <Award className="w-4 h-4 text-green-600" />
                    <span className="text-gray-600">Certification Provided</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Speakers Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-light text-gray-800 mb-8 flex items-center gap-2">
            <Mic className="w-5 h-5 text-green-600" />
            Featured Speakers
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: "Dr. Rajesh Kumar",
                title: "Director of AI Research",
                company: "Google India",
                image: "/img/Speaker.jpeg",
                topic: "Future of Generative AI"
              },
              {
                name: "Prof. Sarah Johnson",
                title: "Professor",
                company: "IIT Kharagpur",
                image: "/img/Tamosha.jpeg",
                topic: "Cloud Computing Trends"
              },
              {
                name: "Arun Sharma",
                title: "Principal Architect",
                company: "Microsoft",
                image: "/img/sks.jpeg",
                topic: "DevOps Best Practices"
              },
              {
                name: "Priya Singh",
                title: "Data Science Lead",
                company: "Amazon",
                image: "/img/acmArpita.jpeg",
                topic: "ML in Production"
              }
            ].map((speaker, i) => (
              <div key={i} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
                <div className="relative h-48 w-full bg-gray-200">
                  <Image
                    src={speaker.image}
                    alt={speaker.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-medium text-gray-900">{speaker.name}</h3>
                  <p className="text-sm text-gray-600">{speaker.title}</p>
                  <p className="text-xs text-green-600 mt-1">{speaker.company}</p>
                  <div className="mt-3 pt-3 border-t border-gray-100">
                    <p className="text-xs text-gray-500">
                      <span className="font-medium">Topic:</span> {speaker.topic}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Hands-on Sessions */}
        <div className="mb-16">
          <h2 className="text-2xl font-light text-gray-800 mb-8">Hands-on Workshops</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "AI/ML Workshop",
                description: "Build and deploy ML models using TensorFlow and PyTorch",
                duration: "2 Days",
                level: "Intermediate",
                capacity: "40 seats"
              },
              {
                title: "Cloud Computing Lab",
                description: "Hands-on with AWS, Azure, and Google Cloud Platform",
                duration: "2 Days",
                level: "Beginner to Intermediate",
                capacity: "35 seats"
              },
              {
                title: "DevOps Pipeline",
                description: "CI/CD implementation using Docker and Kubernetes",
                duration: "1 Day",
                level: "Intermediate",
                capacity: "30 seats"
              }
            ].map((session, i) => (
              <div key={i} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <h3 className="font-medium text-gray-900 mb-2">{session.title}</h3>
                <p className="text-sm text-gray-600 mb-4">{session.description}</p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs">
                    <Clock className="w-3 h-3 text-green-600" />
                    <span className="text-gray-500">{session.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs">
                    <Users className="w-3 h-3 text-green-600" />
                    <span className="text-gray-500">{session.level} • {session.capacity}</span>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
                    Hands-on Training
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        

        

        {/* Past Editions */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
          <h3 className="text-lg font-light text-gray-800 mb-4">Previous Editions</h3>
          <div className="flex flex-wrap gap-3">
            {['RTCI 2024', 'RTCI 2023', 'RTCI 2022', 'RTCI 2021', 'RTCI 2020'].map((edition, i) => (
              <Link 
                key={i}
                href={`/rtci-2025/past/${edition.toLowerCase().replace(' ', '-')}`}
                className="px-4 py-2 bg-gray-50 rounded-lg text-sm text-gray-600 hover:bg-gray-100 transition-colors"
              >
                {edition}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}