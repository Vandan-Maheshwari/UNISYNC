import React from 'react';
import { Search } from 'lucide-react';

export function SearchLocation() {
  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Search locations..."
        className="pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-200 focus:border-indigo-400 w-64"
      />
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
    </div>
  );
}