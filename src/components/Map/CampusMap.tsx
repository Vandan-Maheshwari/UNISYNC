import React from 'react';
import { MapPin, Search } from 'lucide-react';
import { ProfessorsList } from './ProfessorsList';
import { SearchLocation } from './SearchLocation';

export default function CampusMap() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2 bg-white rounded-lg shadow-md p-6">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-2xl font-bold flex items-center">
            <MapPin className="mr-2" /> Campus Map
          </h2>
          <SearchLocation />
        </div>
        <div className="aspect-video bg-gray-100 rounded-lg relative">
          {/* Map will be integrated here */}
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="text-gray-500">Interactive campus map coming soon</p>
          </div>
        </div>
      </div>
      <ProfessorsList />
    </div>
  );
}