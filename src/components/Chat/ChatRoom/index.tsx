import React, { useState } from 'react';
import { MessageList } from '../MessageList';
import { MessageInput } from '../MessageInput';
import { Message } from '../../../types';
import { useChatMessages } from '../../../hooks/useChatMessages';

export default function ChatRoom() {
  const { messages, sendMessage } = useChatMessages();

  const handleSendMessage = (content: string) => {
    sendMessage(content);
  };

  return (
    <div className="bg-white rounded-lg shadow-md h-[calc(100vh-8rem)]">
      <div className="h-full flex flex-col">
        <div className="p-4 border-b">
          <h2 className="text-xl font-semibold">Community Chat</h2>
        </div>
        <MessageList messages={messages} />
        <MessageInput onSend={handleSendMessage} />
      </div>
    </div>
  );
}