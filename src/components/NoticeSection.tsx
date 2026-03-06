'use client';
import React,{useState} from 'react';
import { Calendar, Clock, ChevronRight } from 'lucide-react';

import { useRouter } from "next/navigation";



interface Notice {
  month: string;
  year: string;
  title: string;
}

interface Event {
  date: string;
  title: string;
  location: string;
}

interface NoticeSectionProps {
  title?: string;
  showViewAll?: boolean;
  onViewAllNotices?: () => void;
  onViewAllEvents?: () => void;
  onNoticeClick?: (notice: Notice) => void;
  onEventClick?: (event: Event) => void;
}



const NoticeSection: React.FC<NoticeSectionProps> = ({
  title = "Latest updates and events",
  showViewAll = true,
  onViewAllNotices,
  onViewAllEvents,
  onNoticeClick,
  onEventClick
}) => {
  {/*
  const notices: Notice[] = [
    { month: 'March', year: '2026', title: 'Semester Examination Schedule Released' },
    { month: 'February', year: '2026', title: 'Internship Opportunity for 3rd Year Students' },
    { month: 'January', year: '2026', title: 'Workshop on AI & Machine Learning' },
  ];*/}

  const [notices, setNotices] = React.useState<any[]>([]);
  React.useEffect(() => {
  fetch("/api/public/notices")
    .then(res => res.json())
    .then(data => {
      const formatted = data.data.map((notice: any) => {
        const date = new Date(notice.createdAt);

        return {
          ...notice,
          month: date.toLocaleString("default", { month: "long" }),
          year: date.getFullYear().toString(),
        };
      });

      setNotices(formatted);
    })
    .catch(err => console.error(err));
}, []);


  const events: Event[] = [
    { date: '12', title: 'Tech Symposium 2026', location: 'Department Seminar Hall' },
    { date: '25', title: 'Hackathon Registration Deadline', location: 'Online Submission' },
    { date: '05', title: "RTCI'26", location: 'SN BOSE' },
  ];

  const handleNoticeClick = (notice: Notice) => {
    if (onNoticeClick) {
      onNoticeClick(notice);
    }
  };

  const handleEventClick = (event: Event) => {
    if (onEventClick) {
      onEventClick(event);
    }
  };
const router = useRouter();
  return (
    <div className="w-full max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-6 flex justify-center">
        <h1 className="text-xl font-bold text-green-800 ">{title}</h1>      
      </div>

      {/* Notices and Events Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Latest Notices */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="p-4 bg-gray-50 border-b border-gray-200">
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-green-600" />
              <h2 className="font-semibold text-gray-900">Latest Notices</h2>
            </div>
          </div>
          
          <div className="divide-y divide-gray-100">
            {notices.map((notice, index) => (
              <div 
                key={index}
                onClick={() => handleNoticeClick(notice)}
                className="p-4 hover:bg-gray-50 transition-colors cursor-pointer group"
              >
                <p className="text-xs font-medium text-green-600 mb-1">
                  {notice.month} {notice.year}
                </p>
                <p className="text-sm text-gray-900 group-hover:text-green-800 transition-colors">
                  {notice.title}
                </p>
              </div>
            ))}
          </div>
          
          {showViewAll && (
            <div className="p-3 bg-gray-50 border-t border-gray-200">
              <button 
                  onClick={() => router.push("/notices")}
                className="text-sm text-blue-600 hover:text-green-800 font-medium flex items-center gap-1"
              >
                View All Notices
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>

        {/* Upcoming Events */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="p-4 bg-gray-50 border-b border-gray-200">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-green-600" />
              <h2 className="font-semibold text-gray-900">Upcoming Events</h2>
            </div>
          </div>
          
          <div className="divide-y divide-gray-100">
            {events.map((event, index) => (
              <div 
                key={index}
                onClick={() => handleEventClick(event)}
                className="p-4 hover:bg-gray-50 transition-colors cursor-pointer group"
              >
                <div className="flex gap-3">
                  <div className="shrink-0 w-10 h-10 bg-blue-50 rounded-lg flex flex-col items-center justify-center">
                    <span className="text-lg font-bold text-green-600 leading-none">
                      {event.date}
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 group-hover:text-green-600 transition-colors truncate">
                      {event.title}
                    </p>
                    <p className="text-xs text-gray-500 mt-1 truncate">
                      {event.location}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {showViewAll && (
            <div className="p-3 bg-gray-50 border-t border-gray-200">
              <button 
                onClick={onViewAllEvents}
                className="text-sm text-blue-600 hover:text-green-700 font-medium flex items-center gap-1"
              >
                View All Events
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NoticeSection;