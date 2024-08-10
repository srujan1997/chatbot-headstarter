'use client'

import React, { createContext, useState, useContext } from 'react';

interface ChatbotContextType {
  isThinking?: boolean;
  setIsThinking: (value: boolean) => void;
}

const ChatbotContext = createContext<ChatbotContextType | null>(null);

export const ChatbotProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isThinking, setIsThinking] = useState(false);

  return (
    <ChatbotContext.Provider value={{
      isThinking,
      setIsThinking
    }}>
      {children}
    </ChatbotContext.Provider>
  );
};

export const useChatbot = () => {
  const context = useContext(ChatbotContext);
  if (!context) throw new Error('useChatbot must be used within a ChatbotProvider');
  return context;
};
