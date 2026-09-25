"use client";

import React, { useState, useRef, useEffect } from "react";
import Sidebar from "@/components/dashboard/Sidebar";
import ChatHeader from "@/components/chat/ChatHeader";
import ChatMessage from "@/components/chat/ChatMessage";
import ChatComposer from "@/components/chat/ChatComposer";
import EmptyState from "@/components/chat/EmptyState";
import { useApp } from "@/context/AppContext";

export default function AppPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const messagesEndRef = useRef(null);
  const { activeConversation, sendMessage, isGenerating, selectedModel } = useApp();

  const messages = activeConversation?.messages || [];

  // Scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isGenerating]);

  const handleSendPrompt = (text) => {
    sendMessage(text);
  };

  const handleRegenerate = () => {
    if (messages.length > 0) {
      const lastUserMsg = [...messages].reverse().find((m) => m.sender === "user");
      if (lastUserMsg) {
        sendMessage(`[Regenerating with ${selectedModel.name}]: ${lastUserMsg.content}`);
      }
    }
  };

  return (
    <div className="h-screen flex bg-[#090d16] text-slate-100 overflow-hidden">
      {/* Sidebar */}
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      {/* Main Workspace Chat Area */}
      <div className="flex-1 flex flex-col min-w-0 h-full overflow-hidden bg-[#090d16]">
        {/* Chat Header */}
        <ChatHeader onToggleSidebar={() => setSidebarOpen(true)} />

        {/* Message Feed / Empty State */}
        <div className="flex-1 overflow-y-auto px-4 sm:px-6 py-4 space-y-4">
          {messages.length === 0 ? (
            <EmptyState onSelectPrompt={handleSendPrompt} />
          ) : (
            <div className="max-w-4xl mx-auto space-y-4">
              {messages.map((msg, idx) => (
                <ChatMessage
                  key={`${msg.id || "msg"}-${idx}`}
                  message={msg}
                  onRegenerate={msg.sender === "assistant" ? handleRegenerate : null}
                />
              ))}

              {/* Generating / Thinking indicator */}
              {isGenerating && (
                <div className="flex items-center gap-3 py-2 text-xs text-slate-400">
                  <div className="w-8 h-8 rounded-xl bg-indigo-600/30 border border-indigo-500/40 flex items-center justify-center text-indigo-300">
                    <span className="w-2 h-2 rounded-full bg-indigo-400 animate-ping" />
                  </div>
                  <div className="p-3.5 rounded-2xl bg-slate-900 border border-slate-800 text-slate-300 flex items-center gap-2">
                    <span className="font-semibold text-white">
                      {selectedModel.name}
                    </span>
                    <span>is synthesizing context and reasoning...</span>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>
          )}
        </div>

        {/* Prompt Composer */}
        <ChatComposer onSend={handleSendPrompt} />
      </div>
    </div>
  );
}
