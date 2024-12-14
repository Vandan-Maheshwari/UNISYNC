import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import TimeTable from './components/TimeTable';
import Profile from './components/Profile';
import CampusMap from './components/Map/CampusMap';
import ChatRoom from './components/Chat/ChatRoom';
import EventsList from './components/Events/EventsList';
import AIAssistant from './components/Assistant/AIAssistant';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="flex pt-16">
          <Sidebar />
          <main className="flex-1 ml-64 p-6">
            <Routes>
              <Route path="/" element={<TimeTable />} />
              <Route path="/timetable" element={<TimeTable />} />
              <Route path="/map" element={<CampusMap />} />
              <Route path="/community" element={<EventsList />} />
              <Route path="/chat" element={<ChatRoom />} />
              <Route path="/assistant" element={<AIAssistant />} />
              <Route path="/profile" element={<Profile />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;