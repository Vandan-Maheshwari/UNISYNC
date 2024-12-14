export interface User {
  id: string;
  name: string;
  email: string;
  branch: string;
  year: number;
  avatar: string;
  about: string;
  friends: number;
}

export interface TimeSlot {
  id: string;
  subject: string;
  professor: string;
  room: string;
  time: string;
  day: string;
}

export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  location: string;
  organizer: string;
  image?: string;
}

export interface Message {
  id: string;
  sender: User;
  content: string;
  timestamp: string;
  type: 'text' | 'image';
}