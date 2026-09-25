"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useApp } from "@/context/AppContext";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import Input from "@/components/ui/Input";
import {
  FiCpu,
  FiPlus,
  FiSearch,
  FiStar,
  FiTrash2,
  FiSettings,
  FiClock,
  FiSun,
  FiMoon,
  FiX,
  FiChevronRight,
  FiChrome,
  FiHome,
} from "react-icons/fi";
import { formatRelativeTime } from "@/lib/utils";

export default function Sidebar({ isOpen, onClose }) {
  const pathname = usePathname();
  const {
    conversations,
    activeConversationId,
    setActiveConversationId,
    createNewChat,
    toggleFavorite,
    deleteConversation,
    theme,
    toggleTheme,
    user,
    searchQuery,
    setSearchQuery,
  } = useApp();

  const filteredConversations = conversations.filter((c) =>
    c.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const favoriteChats = filteredConversations.filter((c) => c.isFavorite);
  const recentChats = filteredConversations.filter((c) => !c.isFavorite);

  const handleSelectChat = (id) => {
    setActiveConversationId(id);
    if (onClose) onClose();
  };

  return (
    <>
      {/* Mobile Backdrop */}
      {isOpen && (
        <div
          onClick={onClose}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
        />
      )}

      <aside
        className={`fixed md:static inset-y-0 left-0 z-50 w-72 sm:w-80 bg-slate-950 border-r border-slate-800/80 flex flex-col justify-between transition-transform duration-300 md:translate-x-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Top Header */}
        <div className="p-4 border-b border-slate-800/80 space-y-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-cyan-400 flex items-center justify-center text-white shadow-md">
                <FiCpu className="w-4 h-4" />
              </div>
              <span className="font-bold text-base text-white">
                Echo<span className="text-cyan-400">GPT</span>
              </span>
              <Badge variant="cyan" size="sm">
                Pro
              </Badge>
            </Link>

            <button
              type="button"
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white md:hidden"
              aria-label="Close sidebar"
            >
              <FiX className="w-5 h-5" />
            </button>
          </div>

          {/* New Chat Button */}
          <Button
            variant="accent"
            size="md"
            onClick={createNewChat}
            leftIcon={<FiPlus className="w-4 h-4" />}
            className="w-full text-xs sm:text-sm font-semibold shadow-indigo-600/20"
          >
            New Conversation
          </Button>

          {/* Search Box */}
          <Input
            type="text"
            placeholder="Search conversations..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            leftIcon={<FiSearch className="w-3.5 h-3.5" />}
            className="py-1.5 text-xs bg-slate-900 border-slate-800"
          />
        </div>

        {/* Scrollable Conversation List */}
        <div className="flex-1 overflow-y-auto p-3 space-y-6">
          {/* Favorites */}
          {favoriteChats.length > 0 && (
            <div className="space-y-1.5">
              <span className="text-[10px] font-semibold uppercase tracking-wider text-amber-400/90 px-2 flex items-center gap-1.5">
                <FiStar className="w-3 h-3 fill-amber-400/50" /> Pinned Chats
              </span>
              {favoriteChats.map((conv) => {
                const isActive = conv.id === activeConversationId;
                return (
                  <div
                    key={conv.id}
                    onClick={() => handleSelectChat(conv.id)}
                    className={`group relative flex items-center justify-between p-2.5 rounded-xl text-xs cursor-pointer transition-all ${
                      isActive
                        ? "bg-indigo-600/20 text-white border border-indigo-500/40 shadow-sm"
                        : "text-slate-300 hover:bg-slate-900 hover:text-white"
                    }`}
                  >
                    <div className="flex-1 min-w-0 pr-2">
                      <p className="font-medium truncate">{conv.title}</p>
                      <span className="text-[10px] text-slate-500 font-mono">
                        {formatRelativeTime(conv.updatedAt)}
                      </span>
                    </div>

                    <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button
                        onClick={(e) => toggleFavorite(conv.id, e)}
                        className="p-1 rounded text-amber-400 hover:bg-slate-800"
                        title="Unpin chat"
                      >
                        <FiStar className="w-3.5 h-3.5 fill-amber-400" />
                      </button>
                      <button
                        onClick={(e) => deleteConversation(conv.id, e)}
                        className="p-1 rounded text-slate-400 hover:text-rose-400 hover:bg-slate-800"
                        title="Delete chat"
                      >
                        <FiTrash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {/* Recent Chats */}
          <div className="space-y-1.5">
            <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-400 px-2 flex items-center gap-1.5">
              <FiClock className="w-3 h-3" /> Recent Chats
            </span>

            {recentChats.length === 0 && favoriteChats.length === 0 ? (
              <p className="text-xs text-slate-400 px-2 py-4 italic">
                No conversations found.
              </p>
            ) : (
              recentChats.map((conv) => {
                const isActive = conv.id === activeConversationId;
                return (
                  <div
                    key={conv.id}
                    onClick={() => handleSelectChat(conv.id)}
                    className={`group relative flex items-center justify-between p-2.5 rounded-xl text-xs cursor-pointer transition-all ${
                      isActive
                        ? "bg-indigo-600/20 text-white border border-indigo-500/40 shadow-sm"
                        : "text-slate-300 hover:bg-slate-900 hover:text-white"
                    }`}
                  >
                    <div className="flex-1 min-w-0 pr-2">
                      <p className="font-medium truncate">{conv.title}</p>
                      <span className="text-[10px] text-slate-400 font-mono">
                        {formatRelativeTime(conv.updatedAt)}
                      </span>
                    </div>

                    <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button
                        onClick={(e) => toggleFavorite(conv.id, e)}
                        className="p-1 rounded text-slate-400 hover:text-amber-400 hover:bg-slate-800"
                        title="Favorite chat"
                      >
                        <FiStar className="w-3.5 h-3.5" />
                      </button>
                      <button
                        onClick={(e) => deleteConversation(conv.id, e)}
                        className="p-1 rounded text-slate-400 hover:text-rose-400 hover:bg-slate-800"
                        title="Delete chat"
                      >
                        <FiTrash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>

        {/* Quick Navigation Links */}
        <div className="px-3 py-2 border-t border-slate-800/80 space-y-1">
          <Link
            href="/"
            className="flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs text-slate-400 hover:text-white hover:bg-slate-900 transition-colors"
          >
            <FiHome className="w-4 h-4 text-slate-400" />
            <span>Landing Page</span>
          </Link>
          <Link
            href="/extension"
            className="flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs text-cyan-400 hover:bg-cyan-500/10 transition-colors"
          >
            <FiChrome className="w-4 h-4" />
            <span>Chrome Side Panel Concept</span>
          </Link>
          <Link
            href="/app/settings"
            className={`flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs transition-colors ${
              pathname === "/app/settings"
                ? "bg-slate-800 text-white font-medium"
                : "text-slate-400 hover:text-white hover:bg-slate-900"
            }`}
          >
            <FiSettings className="w-4 h-4" />
            <span>Workspace Settings</span>
          </Link>
        </div>

        {/* Bottom User Area */}
        <div className="p-3 border-t border-slate-800/80 bg-slate-950 flex items-center justify-between">
          <div className="flex items-center gap-2.5 min-w-0">
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-600 flex items-center justify-center text-white text-xs font-bold shrink-0">
              {user ? user.name.slice(0, 2).toUpperCase() : "US"}
            </div>
            <div className="min-w-0">
              <p className="text-xs font-semibold text-white truncate">
                {user ? user.name : "Guest User"}
              </p>
              <span className="text-[10px] text-slate-400 block truncate">
                {user ? user.email : "guest@echogpt.live"}
              </span>
            </div>
          </div>

          <button
            type="button"
            onClick={toggleTheme}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            title="Toggle theme"
          >
            {theme === "dark" ? (
              <FiSun className="w-4 h-4 text-amber-400" />
            ) : (
              <FiMoon className="w-4 h-4" />
            )}
          </button>
        </div>
      </aside>
    </>
  );
}
