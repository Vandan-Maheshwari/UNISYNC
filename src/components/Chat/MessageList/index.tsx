import React from 'react';
import { Message } from '../../../types';

interface MessageListProps {
  messages: Message[];
}

export function MessageList({ messages }: MessageListProps) {
  return (
    <div className="flex-1 overflow-y-auto p-4 space-y-4">
      {messages.map((message) => (
        <div
          key={message.id}
          className={`flex ${
            message.sender.name === 'You' ? 'justify-end' : 'justify-start'
          }`}
        >
          <div
            className={`max-w-[70%] rounded-lg p-3 ${
              message.sender.name === 'You'
                ? 'bg-indigo-500 text-white'
                : 'bg-gray-100'
            }`}
          >
            <p className="text-sm font-medium mb-1">{message.sender.name}</p>
            <p>{message.content}</p>
            <p className="text-xs mt-1 opacity-70">
              {new Date(message.timestamp).toLocaleTimeString()}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}