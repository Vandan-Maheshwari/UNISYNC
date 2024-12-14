import React from 'react';
import { User } from 'lucide-react';

const professors = [
  {
    name: 'Dr. Sarah Johnson',
    department: 'Computer Science',
    cabin: 'AB-1, Room 204',
    timing: '10:00 AM - 4:00 PM'
  },
  {
    name: 'Dr. Michael Chen',
    department: 'Electronics',
    cabin: 'AB-2, Room 305',
    timing: '9:00 AM - 3:00 PM'
  },
  // Add more professors as needed
];

export function ProfessorsList() {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-xl font-semibold mb-4">Professors Directory</h3>
      <div className="space-y-4">
        {professors.map((professor, index) => (
          <div key={index} className="border-b last:border-0 pb-4 last:pb-0">
            <div className="flex items-start space-x-3">
              <User className="w-5 h-5 text-gray-400 mt-1" />
              <div>
                <h4 className="font-medium">{professor.name}</h4>
                <p className="text-sm text-gray-600">{professor.department}</p>
                <p className="text-sm text-gray-500">Cabin: {professor.cabin}</p>
                <p className="text-sm text-gray-500">Office Hours: {professor.timing}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}