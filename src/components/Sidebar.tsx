import React from 'react';
import { Calendar, Map, Users, MessageSquare, Bot, User } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Sidebar() {
  const menuItems = [
    { icon: Calendar, label: 'Timetable', path: '/timetable' },
    { icon: Map, label: 'Campus Map', path: '/map' },
    { icon: Users, label: 'Community', path: '/community' },
    { icon: MessageSquare, label: 'Chat', path: '/chat' },
    { icon: Bot, label: 'AI Assistant', path: '/assistant' },
    { icon: User, label: 'Profile', path: '/profile' },
  ];

  return (
    <div className="fixed left-0 top-16 h-full w-64 bg-white shadow-md p-4">
      <div className="space-y-2">
        {menuItems.map((item, index) => (
          <Link
            key={index}
            to={item.path}
            className="flex items-center space-x-3 p-3 rounded-lg hover:bg-indigo-50 text-gray-700 hover:text-indigo-600"
          >
            <item.icon className="h-5 w-5" />
            <span>{item.label}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}