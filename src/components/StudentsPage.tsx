// app/students/page.tsx
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, MapPin, Users, ExternalLink, ChevronRight } from 'lucide-react';

export default function StudentsPage() {
  return (
    <main className="min-h-screen bg-gray-100">
      

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* ACM Chapter */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden mb-12">
          {/* Chapter Header */}
          <div className="p-8 pb-0">
            <div className="flex items-start justify-between flex-wrap gap-4 mb-6">
              <div>
                <h2 className="text-3xl font-light text-gray-900 mb-2">ACM Student Chapter</h2>
                <p className="text-gray-500">Association for Computing Machinery</p>
              </div>
              <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm">
                Since 2015
              </span>
            </div>
          </div>

          {/* Hero Image */}
          <div className="px-8">
            <div className="relative w-full h-80 rounded-xl overflow-hidden bg-gray-200">
              <Image
                src="/img/IT.jpeg"
                alt="ACM Student Chapter"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Description */}
          <div className="p-8">
            <p className="text-gray-600 leading-relaxed mb-8">
              The ACM Student Chapter at our department is a vibrant community of 
              computing enthusiasts dedicated to fostering technical excellence, 
              innovation, and collaboration. We organize regular workshops, hackathons, 
              guest lectures, and coding competitions to help students stay updated 
              with the latest in technology.
            </p>

            {/* Lead Section */}
            <div className="mb-8">
              <h3 className="text-sm font-medium text-gray-400 uppercase tracking-wider mb-4">
                Chapter Lead
              </h3>
              <div className="flex items-center gap-4">
                <div className="relative w-16 h-16 rounded-full overflow-hidden bg-gray-200">
                  <Image
                    src="/HOD.jpeg"
                    alt="Chapter Lead"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-medium text-gray-900">Dr. Sarah Johnson</p>
                  <p className="text-sm text-gray-500">Faculty Coordinator</p>
                  <p className="text-xs text-gray-400 mt-1">sarah.johnson@it.edu</p>
                </div>
              </div>
            </div>

            {/* Team Members */}
            <div className="mb-8">
              <h3 className="text-sm font-medium text-gray-400 uppercase tracking-wider mb-4">
                Core Team
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { name: "Rahul Sharma", role: "Chairperson", image: "/students/rahul.jpg" },
                  { name: "Priya Patel", role: "Vice Chair", image: "/students/priya.jpg" },
                  { name: "Amit Kumar", role: "Secretary", image: "/students/amit.jpg" },
                  { name: "Neha Singh", role: "Treasurer", image: "/students/neha.jpg" },
                ].map((member, i) => (
                  <div key={i} className="text-center">
                    <div className="relative w-20 h-20 mx-auto rounded-full overflow-hidden bg-gray-200 mb-2">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <p className="text-sm font-medium text-gray-900">{member.name}</p>
                    <p className="text-xs text-gray-500">{member.role}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Events */}
            <div>
              <h3 className="text-sm font-medium text-gray-400 uppercase tracking-wider mb-4">
                Recent Events
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  {
                    title: "Hackathon 2024",
                    date: "March 15-16, 2024",
                    venue: "IT Block, Lab 301",
                    image: "/events/hackathon.jpg"
                  },
                  {
                    title: "AI Workshop Series",
                    date: "February 10, 2024",
                    venue: "Seminar Hall",
                    image: "/events/ai-workshop.jpg"
                  },
                  {
                    title: "Guest Lecture: Cloud Computing",
                    date: "January 25, 2024",
                    venue: "Online",
                    image: "/events/guest-lecture.jpg"
                  },
                  {
                    title: "Coding Competition",
                    date: "December 5, 2023",
                    venue: "Computer Center",
                    image: "/events/coding.jpg"
                  }
                ].map((event, i) => (
                  <div key={i} className="flex gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <div className="relative w-16 h-16 rounded-lg overflow-hidden bg-gray-200 flex-shrink-0">
                      <Image
                        src={event.image}
                        alt={event.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 text-sm">{event.title}</h4>
                      <div className="flex items-center gap-1 text-xs text-gray-500 mt-1">
                        <Calendar className="w-3 h-3" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center gap-1 text-xs text-gray-500">
                        <MapPin className="w-3 h-3" />
                        <span>{event.venue}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* IEEE Chapter (Second Society) */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="p-8 pb-0">
            <div className="flex items-start justify-between flex-wrap gap-4 mb-6">
              <div>
                <h2 className="text-3xl font-light text-gray-900 mb-2">IETE IT Student Branch</h2>
                <p className="text-gray-500">Institute of Electrical and Electronics Engineers</p>
              </div>
              <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm">
                Since 2016
              </span>
            </div>
          </div>

          <div className="px-8">
            <div className="relative w-full h-80 rounded-xl overflow-hidden bg-gray-200">
              <Image
                src="/img/ieteitsks.jpeg"
                alt="IEEE Student Branch"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="p-8">
            <p className="text-gray-600 leading-relaxed mb-8">
              The IETE Student Branch provides a platform for students to explore 
              various domains of electrical and electronics engineering, organize 
              technical events, and connect with industry professionals.
            </p>

            {/* Lead */}
            <div className="mb-8">
              <h3 className="text-sm font-medium text-gray-400 uppercase tracking-wider mb-4">
                Branch Counselor
              </h3>
              <div className="flex items-center gap-4">
                <div className="relative w-16 h-16 rounded-full overflow-hidden bg-gray-200">
                  <Image
                    src="/img/Tamosha.jpeg"
                    alt="Branch Counselor"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-medium text-gray-900">Prof. Michael Chen</p>
                  <p className="text-sm text-gray-500">Faculty Counselor</p>
                </div>
              </div>
            </div>

            {/* Team */}
            <div className="mb-8">
              <h3 className="text-sm font-medium text-gray-400 uppercase tracking-wider mb-4">
                Student Executive Committee
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { name: "Vikram Singh", role: "Chair", image: "/students/vikram.jpg" },
                  { name: "Anjali Mehta", role: "Vice Chair", image: "/students/anjali.jpg" },
                  { name: "Rohan Das", role: "Secretary", image: "/students/rohan.jpg" },
                  { name: "Kavya Reddy", role: "Treasurer", image: "/students/kavya.jpg" },
                ].map((member, i) => (
                  <div key={i} className="text-center">
                    <div className="relative w-20 h-20 mx-auto rounded-full overflow-hidden bg-gray-200 mb-2">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <p className="text-sm font-medium text-gray-900">{member.name}</p>
                    <p className="text-xs text-gray-500">{member.role}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        
      </div>
    </main>
  );
}