// app/page.tsx
import { FacultyCard } from '@/src/components/FacultyCard';
import { facultyMembers } from '@/src/data/facultyData';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gray-100">
      {/* Hero Section or other components */}
      
      {/* Faculty Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Faculty Members
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Meet our experienced faculty members dedicated to excellence in education and research
            </p>
          </div>

          {/* Faculty Grid - 4 cards per row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {facultyMembers.map((member) => (
              <FacultyCard
                key={member.id}
                name={member.name}
                designation={member.designation}
                qualification={member.qualification}
                specialization={member.specialization}
                imageSrc={member.imageSrc}
                linkedin={member.linkedin}
                email={member.email}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}