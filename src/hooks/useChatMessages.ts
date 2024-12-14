import { useState, useCallback } from 'react';
import { Message } from '../types';
import { useAuth } from '../context/AuthContext';

export function useChatMessages() {
  const [messages, setMessages] = useState<Message[]>([]);
  const { user } = useAuth();

  const sendMessage = useCallback((content: string) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      content,
      sender: {
        id: user?.id || '1',
        name: user?.name || 'You',
        email: user?.email || 'you@vitbhopal.ac.in',
        branch: user?.branch || 'CSE',
        year: user?.year || 3,
        avatar: user?.avatar || 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80',
        about: user?.about || '',
        friends: user?.friends || 0
      },
      timestamp: new Date().toISOString(),
      type: 'text'
    };
    setMessages(prev => [...prev, newMessage]);
  }, [user]);

  return { messages, sendMessage };
}