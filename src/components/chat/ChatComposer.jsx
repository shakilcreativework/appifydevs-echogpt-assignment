"use client";

import React, { useState, useRef, useEffect } from "react";
import { useApp } from "@/context/AppContext";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import { QUICK_ACTIONS } from "@/lib/constants";
import {
  FiSend,
  FiFileText,
  FiX,
  FiZap,
  FiEdit3,
  FiHelpCircle,
  FiLayers,
  FiCode,
} from "react-icons/fi";

const actionIcons = {
  FiFileText: FiFileText,
  FiHelpCircle: FiHelpCircle,
  FiEdit3: FiEdit3,
  FiLayers: FiLayers,
  FiCode: FiCode,
};

export default function ChatComposer({ onSend }) {
  const [input, setInput] = useState("");
  const textareaRef = useRef(null);
  const {
    selectedModel,
    isGenerating,
    webContextEnabled,
    setWebContextEnabled,
    activeWebpage,
  } = useApp();

  // Auto-resize textarea height
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${Math.min(
        textareaRef.current.scrollHeight,
        200
      )}px`;
    }
  }, [input]);

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleSend = () => {
    if (!input.trim() || isGenerating) return;
    onSend(input);
    setInput("");
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
    }
  };

  const handleQuickAction = (action) => {
    setInput(action.prompt);
    if (textareaRef.current) {
      textareaRef.current.focus();
    }
  };

  return (
    <div className="p-3 sm:p-4 bg-slate-950/90 border-t border-slate-800/80 backdrop-blur-lg">
      <div className="max-w-4xl mx-auto space-y-2.5">
        {/* Quick Action Suggestions Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-1">
          <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider shrink-0 mr-1 hidden sm:inline">
            Quick Prompts:
          </span>
          {QUICK_ACTIONS.map((action) => {
            const Icon = actionIcons[action.icon] || FiZap;
            return (
              <button
                key={action.id}
                type="button"
                onClick={() => handleQuickAction(action)}
                className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-900 hover:bg-slate-800 text-[11px] text-slate-300 hover:text-white border border-slate-800/90 transition-all shrink-0 active:scale-95"
              >
                <Icon className="w-3 h-3 text-cyan-400" />
                <span>{action.label}</span>
              </button>
            );
          })}
        </div>

        {/* Input Box Card */}
        <div className="relative rounded-2xl bg-slate-900 border border-slate-700/80 focus-within:border-indigo-500 focus-within:ring-2 focus-within:ring-indigo-500/20 transition-all shadow-lg p-2.5 sm:p-3">
          {/* Web Context Attached Chip (if active) */}
          {webContextEnabled && (
            <div className="mb-2 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-xs text-emerald-300">
              <FiFileText className="w-3.5 h-3.5 text-emerald-400" />
              <span className="font-medium truncate max-w-xs sm:max-w-md">
                Using Context: {activeWebpage.title}
              </span>
              <button
                type="button"
                onClick={() => setWebContextEnabled(false)}
                className="p-0.5 hover:text-white text-emerald-400 ml-1"
                title="Remove context from this prompt"
              >
                <FiX className="w-3.5 h-3.5" />
              </button>
            </div>
          )}

          {/* Textarea */}
          <textarea
            ref={textareaRef}
            rows={1}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            disabled={isGenerating}
            placeholder={`Ask ${selectedModel.name} anything... (Enter to send, Shift+Enter for new line)`}
            className="w-full bg-transparent text-sm text-slate-100 placeholder-slate-500 resize-none focus:outline-none max-h-48 leading-relaxed"
          />

          {/* Bottom Bar inside Composer */}
          <div className="flex items-center justify-between pt-2 mt-1 border-t border-slate-800/80">
            <div className="flex items-center gap-2 text-[11px] text-slate-400">
              <Badge variant="primary" size="sm">
                {selectedModel.name}
              </Badge>
              <span className="hidden sm:inline font-mono">
                Press Enter ↵ to send
              </span>
            </div>

            <Button
              type="button"
              variant="accent"
              size="sm"
              onClick={handleSend}
              disabled={!input.trim() || isGenerating}
              isLoading={isGenerating}
              rightIcon={!isGenerating && <FiSend className="w-3.5 h-3.5" />}
              className="px-4 py-1.5 text-xs shadow-md"
            >
              {isGenerating ? "Reasoning..." : "Send"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
