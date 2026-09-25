"use client";

import React, { useState, useRef, useEffect } from "react";
import { useApp } from "@/context/AppContext";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import { AI_MODELS } from "@/data/models";
import {
  FiChevronDown,
  FiCpu,
  FiFileText,
  FiShare2,
  FiTrash2,
  FiMenu,
  FiCheck,
  FiExternalLink,
  FiZap,
} from "react-icons/fi";
import toast from "react-hot-toast";

export default function ChatHeader({ onToggleSidebar }) {
  const {
    activeConversation,
    selectedModel,
    selectModel,
    webContextEnabled,
    setWebContextEnabled,
    activeWebpage,
    deleteConversation,
    activeConversationId,
  } = useApp();

  const [modelDropdownOpen, setModelDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setModelDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      toast.success("Workspace link copied to clipboard!", { icon: "🔗" });
    } else {
      toast.success("Conversation shared!");
    }
  };

  return (
    <header className="h-16 px-4 sm:px-6 bg-slate-950/80 border-b border-slate-800/80 backdrop-blur-md flex items-center justify-between z-20">
      {/* Left: Sidebar Toggle & Title */}
      <div className="flex items-center gap-3 min-w-0">
        <button
          type="button"
          onClick={onToggleSidebar}
          className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 md:hidden"
          aria-label="Open sidebar"
        >
          <FiMenu className="w-5 h-5" />
        </button>

        <div className="min-w-0">
          <h2 className="text-sm sm:text-base font-bold text-white truncate">
            {activeConversation ? activeConversation.title : "EchoGPT Workspace"}
          </h2>
          <div className="flex items-center gap-2 text-xs text-slate-400">
            <span className="hidden sm:inline font-mono">
              {activeConversation?.messages?.length || 0} messages
            </span>
            <span className="hidden sm:inline">•</span>
            <span className="truncate text-[11px] text-slate-400">
              Active model:{" "}
              <strong className="text-indigo-400 font-semibold">
                {selectedModel.name}
              </strong>
            </span>
          </div>
        </div>
      </div>

      {/* Right Controls: Model Selector, Web Context Toggle, Actions */}
      <div className="flex items-center gap-2 sm:gap-3">
        {/* Model Selector Dropdown */}
        <div className="relative" ref={dropdownRef}>
          <button
            type="button"
            onClick={() => setModelDropdownOpen(!modelDropdownOpen)}
            className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-700/80 hover:border-indigo-500/50 text-xs font-semibold text-slate-200 hover:text-white transition-all shadow-sm"
          >
            <div
              className={`w-3.5 h-3.5 rounded-md ${selectedModel.avatarBg} flex items-center justify-center text-white`}
            >
              <FiCpu className="w-2.5 h-2.5" />
            </div>
            <span className="max-w-[110px] sm:max-w-none truncate">
              {selectedModel.name}
            </span>
            <Badge
              variant={selectedModel.plan === "Pro" ? "pro" : "default"}
              size="sm"
              className="hidden lg:inline-flex text-[10px]"
            >
              {selectedModel.plan}
            </Badge>
            <FiChevronDown className="w-3.5 h-3.5 text-slate-400" />
          </button>

          {/* Dropdown Menu */}
          {modelDropdownOpen && (
            <div className="absolute right-0 mt-2 w-72 sm:w-80 rounded-2xl glass-dropdown border border-slate-700/90 p-2 z-50 shadow-2xl space-y-1">
              <div className="px-3 py-2 border-b border-slate-800 text-[11px] font-semibold uppercase tracking-wider text-slate-400 flex items-center justify-between">
                <span>Select Model</span>
                <span className="text-cyan-400">Multi-Model Active</span>
              </div>

              <div className="max-h-72 overflow-y-auto space-y-1 p-1">
                {AI_MODELS.map((model) => {
                  const isSelected = selectedModel.id === model.id;
                  return (
                    <button
                      key={model.id}
                      type="button"
                      onClick={() => {
                        selectModel(model);
                        setModelDropdownOpen(false);
                      }}
                      className={`w-full text-left p-2.5 rounded-xl transition-all flex items-start justify-between gap-2.5 ${
                        isSelected
                          ? "bg-indigo-600/20 border border-indigo-500/40 text-white"
                          : "hover:bg-slate-800/80 text-slate-300"
                      }`}
                    >
                      <div className="flex items-start gap-2.5 min-w-0">
                        <div
                          className={`w-7 h-7 rounded-lg ${model.avatarBg} flex items-center justify-center text-white shrink-0 mt-0.5`}
                        >
                          <FiCpu className="w-3.5 h-3.5" />
                        </div>
                        <div className="min-w-0">
                          <div className="flex items-center gap-1.5">
                            <span className="font-semibold text-xs text-white truncate">
                              {model.name}
                            </span>
                            <Badge
                              variant={model.plan === "Pro" ? "pro" : "default"}
                              size="sm"
                              className="text-[9px] py-0 px-1.5"
                            >
                              {model.plan}
                            </Badge>
                          </div>
                          <p className="text-[11px] text-slate-400 truncate mt-0.5">
                            {model.category} • {model.provider}
                          </p>
                        </div>
                      </div>

                      {isSelected && (
                        <FiCheck className="w-4 h-4 text-cyan-400 shrink-0 mt-1" />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        {/* Web Context Switcher */}
        <button
          type="button"
          onClick={() => {
            const next = !webContextEnabled;
            setWebContextEnabled(next);
            toast(next ? "Web Context: Enabled" : "Web Context: Disabled", {
              icon: next ? "🌐" : "⚪",
            });
          }}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl border text-xs font-medium transition-all ${
            webContextEnabled
              ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-300 shadow-sm"
              : "bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-200"
          }`}
          title={
            webContextEnabled
              ? `Context active: ${activeWebpage.url}`
              : "Click to enable webpage context"
          }
        >
          <span
            className={`w-2 h-2 rounded-full ${
              webContextEnabled ? "bg-emerald-400 animate-pulse" : "bg-slate-600"
            }`}
          />
          <span className="hidden sm:inline">Web Context:</span>
          <span>{webContextEnabled ? "On" : "Off"}</span>
        </button>

        {/* Share Button */}
        <button
          type="button"
          onClick={handleShare}
          className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800/80 transition-colors"
          title="Share conversation"
        >
          <FiShare2 className="w-4 h-4" />
        </button>

        {/* Delete Chat */}
        <button
          type="button"
          onClick={() => deleteConversation(activeConversationId)}
          className="p-2 rounded-xl text-slate-400 hover:text-rose-400 hover:bg-slate-800/80 transition-colors hidden sm:inline-flex"
          title="Delete this conversation"
        >
          <FiTrash2 className="w-4 h-4" />
        </button>
      </div>
    </header>
  );
}
