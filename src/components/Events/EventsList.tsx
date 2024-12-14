import React from 'react';
import { EventCard } from './EventCard';
import { Event } from '../../types';

const sampleEvents: Event[] = [
  {
    id: '1',
    title: 'Tech Fest 2024',
    description: 'Annual technical festival of VIT Bhopal',
    date: '2024-04-15',
    location: 'Main Auditorium',
    organizer: 'Technical Club',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80'
  },
  {
    id: '2',
    title: 'Coding Competition',
    description: 'Competitive programming contest',
    date: '2024-03-20',
    location: 'CSE Block',
    organizer: 'Coding Club',
    image: 'https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?auto=format&fit=crop&q=80'
  }
];

export default function EventsList() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Upcoming Events</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sampleEvents.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
}