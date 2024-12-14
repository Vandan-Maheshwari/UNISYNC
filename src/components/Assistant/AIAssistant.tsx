import React, { useState } from 'react';
import { Bot, Send } from 'lucide-react';

export default function AIAssistant() {
  const [messages, setMessages] = useState<Array<{ text: string; isBot: boolean }>>([
    { text: "Hi! I'm your VIT Bhopal assistant. How can I help you today?", isBot: true }
  ]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;
    
    setMessages([...messages, { text: input, isBot: false }]);
    // Simulate AI response
    setTimeout(() => {
      setMessages(prev => [...prev, {
        text: "I'm processing your request. This is a prototype version of the AI assistant.",
        isBot: true
      }]);
    }, 1000);
    setInput('');
  };

  return (
    <div className="bg-white rounded-lg shadow-md h-[calc(100vh-8rem)]">
      <div className="h-full flex flex-col">
        <div className="p-4 border-b flex items-center">
          <Bot className="w-6 h-6 mr-2 text-indigo-600" />
          <h2 className="text-xl font-semibold">AI Assistant</h2>
        </div>
        
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`flex ${msg.isBot ? 'justify-start' : 'justify-end'}`}
            >
              <div
                className={`max-w-[70%] rounded-lg p-3 ${
                  msg.isBot ? 'bg-gray-100' : 'bg-indigo-500 text-white'
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}
        </div>

        <div className="p-4 border-t">
          <div className="flex space-x-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask anything..."
              className="flex-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-200 focus:border-indigo-400"
            />
            <button
              onClick={handleSend}
              className="px-4 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600"
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}