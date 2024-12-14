import React, { useState } from 'react';
import { Send, Smile } from 'lucide-react';

interface MessageInputProps {
  onSend: (message: string) => void;
}

export function MessageInput({ onSend }: MessageInputProps) {
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      onSend(message);
      setMessage('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border-t">
      <div className="flex space-x-2">
        <button
          type="button"
          className="p-2 text-gray-500 hover:text-gray-700"
        >
          <Smile className="w-5 h-5" />
        </button>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type a message..."
          className="flex-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-200 focus:border-indigo-400"
        />
        <button
          type="submit"
          className="p-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600"
          disabled={!message.trim()}
        >
          <Send className="w-5 h-5" />
        </button>
      </div>
    </form>
  );
}