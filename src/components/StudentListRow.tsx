// components/StudentListRow.tsx
import Link from 'next/link';
import { Download, GraduationCap, Users } from 'lucide-react';

interface StudentYear {
  year: string;
  session: string;
  count: number;
  pdfUrl: string;
  type?: 'B.Tech' | 'Lateral';
}

interface StudentListRowProps {
  title?: string;
  academicYear?: string;
  years: StudentYear[];
}

export function StudentListRow({ 
  title = "Student Lists", 
  academicYear = "2024-25",
  years = [
  {
    year: "2026",
    session: "2022-2026",
    count: 120,
    pdfUrl: "/pdf/students-2026.pdf",
    type: "B.Tech"
  }
]
}: StudentListRowProps) {
  return (
    <div className="mb-16">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-light text-gray-800 flex items-center gap-2">
          <Users className="w-5 h-5 text-green-600" />
          {title}
        </h2>
        <span className="text-sm text-gray-400">Academic Year {academicYear}</span>
      </div>
      
      {/* Horizontal Scrollable Row */}
      <div className="flex overflow-x-auto pb-4 gap-4 custom-scrollbar">
        {years.map((item, index) => (
          <div key={index} className="flex-none w-72 bg-white rounded-xl shadow-sm border border-gray-200 hover:border-green-300 transition-colors">
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-green-100 rounded-lg">
                  <GraduationCap className="w-6 h-6 text-green-600" />
                </div>
                <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
                  {item.type || 'B.Tech'}
                </span>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-1">{item.year}</h3>
              <p className="text-sm text-gray-500 mb-4">Session: {item.session}</p>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">Total: {item.count} students</span>
                <Link 
                  href={item.pdfUrl}
                  className="flex items-center gap-1 text-green-600 hover:text-green-700"
                >
                  <Download className="w-4 h-4" />
                  PDF
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <p className="text-xs text-gray-400 mt-4">
        * Click on PDF to download the complete student list
      </p>

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          height: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #cbd5e0;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #a0aec0;
        }
      `}</style>
    </div>
  );
}
