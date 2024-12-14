import React, { useState } from 'react';
import { Message } from '../../types';
import { MessageList } from './MessageList';
import { MessageInput } from './MessageInput';

export default function ChatRoom() {
  const [messages, setMessages] = useState<Message[]>([]);

  const sendMessage = (content: string) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      content,
      sender: {
        id: '1',
        name: 'You',
        email: 'you@vitbhopal.ac.in',
        branch: 'CSE',
        year: 3,
        avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80',
        about: '',
        friends: 0
      },
      timestamp: new Date().toISOString(),
      type: 'text'
    };
    setMessages([...messages, newMessage]);
  };

  return (
    <div className="bg-white rounded-lg shadow-md h-[calc(100vh-8rem)]">
      <div className="h-full flex flex-col">
        <div className="p-4 border-b">
          <h2 className="text-xl font-semibold">Community Chat</h2>
        </div>
        <MessageList messages={messages} />
        <MessageInput onSend={sendMessage} />
      </div>
    </div>
  );
}