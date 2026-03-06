'use client';
import React, { useEffect, useState } from "react";

export default function NoticesPage() {

  const [notices, setNotices] = useState<any[]>([]);

  useEffect(() => {
    fetch("/api/public/notices-all")
      .then(res => res.json())
      .then(data => setNotices(data.data));
  }, []);

  return (
    <div className="max-w-5xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-8 text-green-800">
        All Notices
      </h1>

      {notices.map((notice, index) => (
        <div key={index} className="border-b py-4">
          <p className="text-sm text-green-600">
            {new Date(notice.createdAt).toDateString()}
          </p>
          <p className="text-lg font-medium">
            {notice.title}
          </p>
        </div>
      ))}
    </div>
  );
}