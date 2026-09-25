"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Sidebar from "@/components/dashboard/Sidebar";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import Input from "@/components/ui/Input";
import { useApp } from "@/context/AppContext";
import {
  FiArrowLeft,
  FiSearch,
  FiStar,
  FiTrash2,
  FiClock,
  FiCpu,
  FiMessageSquare,
  FiMenu,
  FiExternalLink,
} from "react-icons/fi";
import { formatRelativeTime } from "@/lib/utils";

export default function HistoryPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [filter, setFilter] = useState("all"); // 'all' | 'favorites'
  const [searchTerm, setSearchTerm] = useState("");
  const {
    conversations,
    setActiveConversationId,
    toggleFavorite,
    deleteConversation,
  } = useApp();
  const router = useRouter();

  const filtered = conversations
    .filter((c) => {
      if (filter === "favorites") return c.isFavorite;
      return true;
    })
    .filter((c) =>
      c.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.preview?.toLowerCase().includes(searchTerm.toLowerCase())
    );

  const handleOpenConversation = (id) => {
    setActiveConversationId(id);
    router.push("/app");
  };

  return (
    <div className="h-screen flex bg-[#090d16] text-slate-100 overflow-hidden">
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div className="flex-1 flex flex-col min-w-0 h-full overflow-y-auto bg-[#090d16]">
        {/* Header */}
        <header className="h-16 px-4 sm:px-8 border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-md flex items-center justify-between sticky top-0 z-20">
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setSidebarOpen(true)}
              className="p-2 rounded-xl text-slate-400 hover:text-white md:hidden"
            >
              <FiMenu className="w-5 h-5" />
            </button>
            <Link
              href="/app"
              className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            >
              <FiArrowLeft className="w-5 h-5" />
            </Link>
            <h1 className="text-base sm:text-lg font-bold text-white">
              Conversation History
            </h1>
          </div>

          <Link href="/app">
            <Button variant="accent" size="sm">
              New Chat
            </Button>
          </Link>
        </header>

        {/* Content */}
        <div className="max-w-4xl mx-auto w-full p-4 sm:p-8 space-y-6 pb-16">
          {/* Filter Bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="w-full sm:w-72">
              <Input
                type="text"
                placeholder="Search history..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                leftIcon={<FiSearch className="w-4 h-4" />}
                className="bg-slate-900 border-slate-800 text-xs py-2"
              />
            </div>

            <div className="flex items-center gap-2 self-start sm:self-auto">
              <button
                type="button"
                onClick={() => setFilter("all")}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                  filter === "all"
                    ? "bg-indigo-600 text-white shadow-sm"
                    : "bg-slate-900 text-slate-400 hover:text-white border border-slate-800"
                }`}
              >
                All Conversations ({conversations.length})
              </button>
              <button
                type="button"
                onClick={() => setFilter("favorites")}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all ${
                  filter === "favorites"
                    ? "bg-amber-500/20 text-amber-300 border border-amber-500/40"
                    : "bg-slate-900 text-slate-400 hover:text-white border border-slate-800"
                }`}
              >
                <FiStar className="w-3.5 h-3.5 fill-amber-400/50" />
                <span>Favorites</span>
              </button>
            </div>
          </div>

          {/* History List */}
          <div className="space-y-3">
            {filtered.length === 0 ? (
              <div className="text-center py-16 border border-dashed border-slate-800 rounded-2xl p-8 space-y-3">
                <FiMessageSquare className="w-8 h-8 text-slate-600 mx-auto" />
                <p className="text-sm font-semibold text-slate-300">
                  No conversations match your filter
                </p>
                <p className="text-xs text-slate-500">
                  Try adjusting your search terms or start a new chat.
                </p>
              </div>
            ) : (
              filtered.map((conv) => (
                <div
                  key={conv.id}
                  onClick={() => handleOpenConversation(conv.id)}
                  className="group p-4 sm:p-5 rounded-2xl border border-slate-800/80 bg-slate-900/60 hover:bg-slate-800/60 hover:border-slate-700 transition-all cursor-pointer flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-sm"
                >
                  <div className="space-y-1.5 flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <h3 className="text-sm font-bold text-white group-hover:text-indigo-300 transition-colors truncate">
                        {conv.title}
                      </h3>
                      {conv.isFavorite && (
                        <FiStar className="w-3.5 h-3.5 text-amber-400 fill-amber-400 shrink-0" />
                      )}
                    </div>
                    <p className="text-xs text-slate-400 line-clamp-1">
                      {conv.preview || "No preview available"}
                    </p>
                    <div className="flex items-center gap-3 text-[11px] text-slate-500 font-mono">
                      <span>{formatRelativeTime(conv.updatedAt)}</span>
                      <span>•</span>
                      <span>{conv.messages?.length || 0} messages</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 self-end sm:self-center">
                    <button
                      type="button"
                      onClick={(e) => toggleFavorite(conv.id, e)}
                      className="p-2 rounded-xl text-slate-400 hover:text-amber-400 hover:bg-slate-800 transition-colors"
                      title="Favorite"
                    >
                      <FiStar
                        className={`w-4 h-4 ${
                          conv.isFavorite ? "text-amber-400 fill-amber-400" : ""
                        }`}
                      />
                    </button>
                    <button
                      type="button"
                      onClick={(e) => deleteConversation(conv.id, e)}
                      className="p-2 rounded-xl text-slate-400 hover:text-rose-400 hover:bg-slate-800 transition-colors"
                      title="Delete"
                    >
                      <FiTrash2 className="w-4 h-4" />
                    </button>
                    <Button variant="secondary" size="sm" className="text-xs">
                      Resume <FiExternalLink className="w-3 h-3 ml-1" />
                    </Button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
