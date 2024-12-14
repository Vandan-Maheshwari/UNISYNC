import React from 'react';
import { Clock } from 'lucide-react';

export default function TimeTable() {
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
  const slots = ['9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '2:00 PM', '3:00 PM', '4:00 PM'];

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold mb-6 flex items-center">
        <Clock className="mr-2" /> Your Timetable
      </h2>
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead>
            <tr>
              <th className="px-4 py-2 bg-gray-50">Time</th>
              {days.map(day => (
                <th key={day} className="px-4 py-2 bg-gray-50">{day}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {slots.map((slot, index) => (
              <tr key={index}>
                <td className="border px-4 py-2 font-medium">{slot}</td>
                {days.map((day, idx) => (
                  <td key={`${day}-${idx}`} className="border px-4 py-2 hover:bg-indigo-50 cursor-pointer">
                    {/* Slots will be populated dynamically */}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}