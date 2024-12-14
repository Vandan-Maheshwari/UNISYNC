import React from 'react';
import { Menu, Bell, Settings, LogOut } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md px-4 py-3 fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <Menu className="h-6 w-6 text-gray-600 cursor-pointer" />
          <Link to="/" className="text-2xl font-bold text-indigo-600">UniSync</Link>
        </div>
        <div className="flex items-center space-x-6">
          <Bell className="h-6 w-6 text-gray-600 cursor-pointer" />
          <Settings className="h-6 w-6 text-gray-600 cursor-pointer" />
          <div className="h-8 w-8 rounded-full bg-gray-200 cursor-pointer" />
        </div>
      </div>
    </nav>
  );
}