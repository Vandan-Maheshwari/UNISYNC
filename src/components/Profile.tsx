import React from 'react';
import { User, Mail, Book, Users as UsersIcon, Calendar } from 'lucide-react';

export default function Profile() {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="text-center mb-8">
        <div className="w-32 h-32 rounded-full bg-gray-200 mx-auto mb-4">
          <img
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80"
            alt="Profile"
            className="w-full h-full rounded-full object-cover"
          />
        </div>
        <h1 className="text-2xl font-bold">John Doe</h1>
        <p className="text-gray-600">Computer Science Engineering</p>
        <p className="text-gray-500">3rd Year</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            <Mail className="text-gray-400" />
            <span>john.doe@vitbhopal.ac.in</span>
          </div>
          <div className="flex items-center space-x-3">
            <Book className="text-gray-400" />
            <span>CSE - AI/ML</span>
          </div>
          <div className="flex items-center space-x-3">
            <UsersIcon className="text-gray-400" />
            <span>234 Friends</span>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="font-semibold text-lg">About Me</h3>
          <p className="text-gray-600">
            Passionate about technology and innovation. Active member of the coding club and AI society.
          </p>
        </div>
      </div>
    </div>
  );
}