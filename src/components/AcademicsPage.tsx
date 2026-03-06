// app/academics/page.tsx
import { Download, BookOpen, Target, Award, ChevronRight, FileText, Calendar } from 'lucide-react';
import Link from 'next/link';



export default function AcademicsPage() {
  return (
    <main className="min-h-screen bg-gray-100">
     

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Program Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* BTech Regular */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            <div className="bg-green-600 h-2"></div>
            <div className="p-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-2">B.Tech in Information Technology</h2>
              <p className="text-green-600 mb-4">4 Years • Full Time</p>
              <p className="text-gray-600 mb-6">
                Comprehensive program covering core IT concepts, programming, 
                networking, and emerging technologies.
              </p>
              <div className="space-y-3 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-green-600" />
                  <span>Intake: 60 students</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-green-600" />
                  <span>Eligibility: 10+2 with PCM (60% minimum)</span>
                </div>
              </div>
            </div>
          </div>

          {/* BTech Lateral */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            <div className="bg-green-600 h-2"></div>
            <div className="p-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-2">B.Tech Lateral Entry</h2>
              <p className="text-green-600 mb-4">3 Years • Full Time</p>
              <p className="text-gray-600 mb-6">
                Direct entry to second year for diploma holders, focusing on advanced 
                IT concepts and specialization.
              </p>
              <div className="space-y-3 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-green-600" />
                  <span>Intake: 12 students</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-green-600" />
                  <span>Eligibility: Diploma in CS/IT (60% minimum)</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* PSOs / PEOs / POs Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-light text-gray-800 mb-8">Program Educational Objectives & Outcomes</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* PEOs */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-green-100 rounded-lg">
                  <Target className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-medium text-gray-900">PEOs</h3>
              </div>
              <div className="space-y-4">
                <p className="text-sm text-gray-600">
                  <span className="font-medium text-gray-900">PEO1:</span> Graduates will have successful careers in IT industry, higher education, and research.
                </p>
                <p className="text-sm text-gray-600">
                  <span className="font-medium text-gray-900">PEO2:</span> Graduates will contribute to technological solutions with professional ethics and social responsibility.
                </p>
                <p className="text-sm text-gray-600">
                  <span className="font-medium text-gray-900">PEO3:</span> Graduates will engage in lifelong learning and adapt to evolving technologies.
                </p>
              </div>
            </div>

            {/* POs */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-green-100 rounded-lg">
                  <BookOpen className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-medium text-gray-900">POs</h3>
              </div>
              <div className="space-y-3 text-sm text-gray-600 max-h-[300px] overflow-y-auto pr-2">
                <p><span className="font-medium">PO1:</span> Engineering knowledge</p>
                <p><span className="font-medium">PO2:</span> Problem analysis</p>
                <p><span className="font-medium">PO3:</span> Design/development of solutions</p>
                <p><span className="font-medium">PO4:</span> Conduct investigations</p>
                <p><span className="font-medium">PO5:</span> Modern tool usage</p>
                <p><span className="font-medium">PO6:</span> Engineer and society</p>
                <p><span className="font-medium">PO7:</span> Environment and sustainability</p>
                <p><span className="font-medium">PO8:</span> Ethics</p>
                <p><span className="font-medium">PO9:</span> Individual and team work</p>
                <p><span className="font-medium">PO10:</span> Communication</p>
                <p><span className="font-medium">PO11:</span> Project management and finance</p>
                <p><span className="font-medium">PO12:</span> Life-long learning</p>
              </div>
            </div>

            {/* PSOs */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-green-100 rounded-lg">
                  <Award className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-medium text-gray-900">PSOs</h3>
              </div>
              <div className="space-y-4">
                <p className="text-sm text-gray-600">
                  <span className="font-medium text-gray-900">PSO1:</span> Analyze, design and develop software solutions using modern programming languages and frameworks.
                </p>
                <p className="text-sm text-gray-600">
                  <span className="font-medium text-gray-900">PSO2:</span> Apply knowledge of networking and security to design secure communication systems.
                </p>
                <p className="text-sm text-gray-600">
                  <span className="font-medium text-gray-900">PSO3:</span> Utilize data analytics and machine learning techniques for intelligent decision making.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Download Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-light text-gray-800 mb-8">Program Documents</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link href="/pdfs/btech-curriculum.pdf" className="block">
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:border-green-300 transition-colors group">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <FileText className="w-8 h-8 text-green-600" />
                    <div>
                      <h3 className="font-medium text-gray-900 mb-1">Complete Curriculum</h3>
                      <p className="text-sm text-gray-500">B.Tech IT - Full program structure</p>
                    </div>
                  </div>
                  <Download className="w-5 h-5 text-gray-400 group-hover:text-green-600 transition-colors" />
                </div>
              </div>
            </Link>

            <Link href="/pdfs/brochure.pdf" className="block">
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:border-green-300 transition-colors group">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <FileText className="w-8 h-8 text-green-600" />
                    <div>
                      <h3 className="font-medium text-gray-900 mb-1">Program Brochure</h3>
                      <p className="text-sm text-gray-500">Detailed information & admission criteria</p>
                    </div>
                  </div>
                  <Download className="w-5 h-5 text-gray-400 group-hover:text-green-600 transition-colors" />
                </div>
              </div>
            </Link>
          </div>
        </div>



     


        {/* Semester-wise Syllabus */}
        <div>
          <h2 className="text-3xl font-light text-gray-800 mb-8">Semester-wise Syllabus</h2>
          
          <div className="space-y-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((sem) => (
              <details key={sem} className="group bg-white rounded-xl shadow-sm border border-gray-200">
                <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-green-100 rounded-lg">
                      <BookOpen className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">Semester {sem}</h3>
                      <p className="text-sm text-gray-500">
                        {sem === 1 ? 'Foundation Courses' : 
                         sem === 2 ? 'Core Programming' :
                         sem === 3 ? 'Data Structures & Algorithms' :
                         sem === 4 ? 'Database & Networking' :
                         sem === 5 ? 'Advanced Concepts' :
                         sem === 6 ? 'Electives & Specialization' :
                         sem === 7 ? 'Industry Preparation' :
                         'Project & Internship'}
                      </p>
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-400 group-open:rotate-90 transition-transform" />
                </summary>
                
                <div className="px-6 pb-6 pt-2 border-t border-gray-100">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Subjects List */}
                    <div>
                      <h4 className="text-sm font-medium text-gray-700 mb-3">Subjects</h4>
                      <ul className="space-y-2 text-sm text-gray-600">
                        {sem === 1 && (
                          <>
                            <li>Mathematics I</li>
                            <li>Physics</li>
                            <li>Chemistry</li>
                            <li>Basic Electrical Engineering</li>
                            <li>Programming for Problem Solving</li>
                            <li>Engineering Mechanics</li>
                          </>
                        )}
                        {sem === 2 && (
                          <>
                            <li>Mathematics II</li>
                            <li>Data Structures</li>
                            <li>Object Oriented Programming</li>
                            <li>Digital Electronics</li>
                            <li>Discrete Mathematics</li>
                            <li>Communication Skills</li>
                          </>
                        )}
                        {/* Add other semesters similarly */}
                      </ul>
                    </div>
                    
                    {/* Download Links */}
                    <div>
                      <h4 className="text-sm font-medium text-gray-700 mb-3">Download</h4>
                      <div className="space-y-2">
                        <Link 
                          href={`/pdfs/syllabus/semester-${sem}.pdf`}
                          className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-green-50 transition-colors group"
                        >
                          <span className="text-sm text-gray-600">Detailed Syllabus</span>
                          <Download className="w-4 h-4 text-gray-400 group-hover:text-green-600" />
                        </Link>
                        <Link 
                          href={`/pdfs/syllabus/semester-${sem}-scheme.pdf`}
                          className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-green-50 transition-colors group"
                        >
                          <span className="text-sm text-gray-600">Exam Scheme</span>
                          <Download className="w-4 h-4 text-gray-400 group-hover:text-green-600" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </details>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Link href="/academics/regulation" className="text-sm text-gray-500 hover:text-green-600">
              Academic Regulations
            </Link>
            <Link href="/academics/calendar" className="text-sm text-gray-500 hover:text-green-600">
              Academic Calendar
            </Link>
            <Link href="/academics/fee-structure" className="text-sm text-gray-500 hover:text-green-600">
              Fee Structure
            </Link>
            <Link href="/academics/scholarship" className="text-sm text-gray-500 hover:text-green-600">
              Scholarships
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}