"use client";

import React, { useState } from "react";
import Badge from "@/components/ui/Badge";
import MarkdownRenderer from "@/components/chat/MarkdownRenderer";
import {
  FiCopy,
  FiCheck,
  FiThumbsUp,
  FiThumbsDown,
  FiRefreshCw,
  FiCpu,
  FiFileText,
  FiUser,
} from "react-icons/fi";
import toast from "react-hot-toast";

export default function ChatMessage({ message, onRegenerate }) {
  const isUser = message.sender === "user";
  const [copied, setCopied] = useState(false);
  const [feedback, setFeedback] = useState(null); // 'up' | 'down' | null

  const handleCopy = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(message.content);
    }
    setCopied(true);
    toast.success("Response copied to clipboard!", { icon: "📋" });
    setTimeout(() => setCopied(false), 2000);
  };

  const handleFeedback = (type) => {
    setFeedback(type);
    toast.success(type === "up" ? "Thanks for your feedback!" : "Feedback recorded.", {
      icon: type === "up" ? "👍" : "👎",
    });
  };

  return (
    <div
      className={`flex gap-3 sm:gap-4 ${
        isUser ? "justify-end" : "justify-start"
      } py-2 group`}
    >
      {/* Assistant Avatar */}
      {!isUser && (
        <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-indigo-600 to-cyan-500 flex items-center justify-center text-white shrink-0 shadow-md mt-1">
          <FiCpu className="w-4 h-4" />
        </div>
      )}

      {/* Message Bubble Container */}
      <div
        className={`flex flex-col ${
          isUser ? "items-end max-w-2xl" : "items-start max-w-3xl"
        }`}
      >
        {/* Attached Context Header (if any) */}
        {message.contextAttached && (
          <div className="mb-1.5 flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-indigo-950/40 border border-indigo-500/20 text-[11px] text-indigo-300 max-w-full truncate">
            <FiFileText className="w-3.5 h-3.5 shrink-0 text-cyan-400" />
            <span className="font-medium shrink-0">Web Context:</span>
            <span className="truncate text-slate-300">
              {message.contextAttached.title || message.contextAttached.url}
            </span>
          </div>
        )}

        {/* Message Bubble */}
        <div
          className={`p-4 rounded-2xl shadow-sm ${
            isUser
              ? "bg-indigo-600 text-white rounded-tr-sm text-sm leading-relaxed whitespace-pre-wrap"
              : "bg-slate-900 border border-slate-800 text-slate-200 rounded-tl-sm w-full"
          }`}
        >
          {/* Assistant Header */}
          {!isUser && (
            <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-800 text-xs">
              <div className="flex items-center gap-2">
                <span className="font-semibold text-white">
                  {message.model || "EchoGPT"}
                </span>
                <span className="text-[10px] text-slate-400 font-mono">
                  {message.timestamp}
                </span>
              </div>
            </div>
          )}

          {/* Formatted Content using professional MarkdownRenderer */}
          {isUser ? (
            <div className="text-white">{message.content}</div>
          ) : (
            <MarkdownRenderer content={message.content} />
          )}
        </div>

        {/* Assistant Response Actions Toolbar */}
        {!isUser && (
          <div className="flex items-center gap-2 mt-2 px-1 text-xs text-slate-400">
            <button
              type="button"
              onClick={handleCopy}
              className="p-1 rounded hover:text-white hover:bg-slate-800 transition-colors flex items-center gap-1"
              title="Copy response"
            >
              {copied ? (
                <>
                  <FiCheck className="text-emerald-400 w-3.5 h-3.5" />
                  <span className="text-[11px] text-emerald-400">Copied</span>
                </>
              ) : (
                <>
                  <FiCopy className="w-3.5 h-3.5" />
                  <span className="text-[11px]">Copy</span>
                </>
              )}
            </button>

            <button
              type="button"
              onClick={() => handleFeedback("up")}
              className={`p-1 rounded hover:bg-slate-800 transition-colors ${
                feedback === "up" ? "text-emerald-400" : "hover:text-white"
              }`}
              title="Good response"
            >
              <FiThumbsUp className="w-3.5 h-3.5" />
            </button>

            <button
              type="button"
              onClick={() => handleFeedback("down")}
              className={`p-1 rounded hover:bg-slate-800 transition-colors ${
                feedback === "down" ? "text-rose-400" : "hover:text-white"
              }`}
              title="Poor response"
            >
              <FiThumbsDown className="w-3.5 h-3.5" />
            </button>

            {onRegenerate && (
              <button
                type="button"
                onClick={onRegenerate}
                className="p-1 rounded hover:text-white hover:bg-slate-800 transition-colors flex items-center gap-1 ml-1"
                title="Regenerate response"
              >
                <FiRefreshCw className="w-3.5 h-3.5" />
                <span className="text-[11px]">Regenerate</span>
              </button>
            )}
          </div>
        )}

        {/* User Timestamp */}
        {isUser && (
          <span className="text-[10px] text-slate-500 mt-1 mr-1 font-mono">
            {message.timestamp}
          </span>
        )}
      </div>

      {/* User Avatar */}
      {isUser && (
        <div className="w-8 h-8 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-300 shrink-0 mt-1">
          <FiUser className="w-4 h-4" />
        </div>
      )}
    </div>
  );
}
