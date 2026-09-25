"use client";

import React, { useState } from "react";
import Link from "next/link";
import Sidebar from "@/components/dashboard/Sidebar";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import Input from "@/components/ui/Input";
import { useApp } from "@/context/AppContext";
import { AI_MODELS } from "@/data/models";
import {
  FiArrowLeft,
  FiUser,
  FiMoon,
  FiSun,
  FiGlobe,
  FiShield,
  FiCheck,
  FiCpu,
  FiLogOut,
  FiMenu,
} from "react-icons/fi";
import toast from "react-hot-toast";

export default function SettingsPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const {
    theme,
    toggleTheme,
    selectedModel,
    selectModel,
    webContextEnabled,
    setWebContextEnabled,
    activeWebpage,
    setActiveWebpage,
    user,
    setUser,
  } = useApp();

  const [urlInput, setUrlInput] = useState(activeWebpage.url);
  const [enterToSend, setEnterToSend] = useState(true);

  const handleSaveUrl = (e) => {
    e.preventDefault();
    setActiveWebpage((prev) => ({
      ...prev,
      url: urlInput,
    }));
    toast.success("Active webpage context updated!");
  };

  const handleSignOut = () => {
    setUser(null);
    toast("Signed out of demo session");
  };

  return (
    <div className="h-screen flex bg-[#090d16] text-slate-100 overflow-hidden">
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div className="flex-1 flex flex-col min-w-0 h-full overflow-y-auto bg-[#090d16]">
        {/* Settings Header */}
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
              Workspace Settings
            </h1>
          </div>

          <Link href="/app">
            <Button variant="secondary" size="sm">
              Return to Chat
            </Button>
          </Link>
        </header>

        {/* Settings Form Body */}
        <div className="max-w-3xl mx-auto w-full p-4 sm:p-8 space-y-8 pb-16">
          {/* Section 1: General Preferences */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 sm:p-6 space-y-6">
            <h2 className="text-sm font-bold uppercase tracking-wider text-slate-400">
              General Preferences
            </h2>

            {/* Theme */}
            <div className="flex items-center justify-between pt-2">
              <div>
                <p className="text-sm font-semibold text-white">Interface Theme</p>
                <p className="text-xs text-slate-400">
                  Toggle between dark slate and light appearance.
                </p>
              </div>
              <button
                type="button"
                onClick={toggleTheme}
                className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-200 border border-slate-700 transition-all"
              >
                {theme === "dark" ? (
                  <>
                    <FiMoon className="text-indigo-400" /> Dark Mode
                  </>
                ) : (
                  <>
                    <FiSun className="text-amber-400" /> Light Mode
                  </>
                )}
              </button>
            </div>

            {/* Default Model */}
            <div className="pt-4 border-t border-slate-800/80 space-y-2">
              <label className="text-sm font-semibold text-white block">
                Default AI Model
              </label>
              <p className="text-xs text-slate-400">
                The primary model preselected when initiating new conversations.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2">
                {AI_MODELS.map((model) => (
                  <button
                    key={model.id}
                    type="button"
                    onClick={() => selectModel(model)}
                    className={`p-3 rounded-xl border text-left flex items-center justify-between transition-all ${
                      selectedModel.id === model.id
                        ? "bg-indigo-600/20 border-indigo-500/50 text-white"
                        : "bg-slate-950/60 border-slate-800 text-slate-300 hover:bg-slate-800/40"
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <div
                        className={`w-6 h-6 rounded-md ${model.avatarBg} flex items-center justify-center text-white text-xs`}
                      >
                        <FiCpu />
                      </div>
                      <span className="text-xs font-medium">{model.name}</span>
                    </div>
                    {selectedModel.id === model.id && (
                      <FiCheck className="text-cyan-400 w-4 h-4" />
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Section 2: Browser & Web Context */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 sm:p-6 space-y-6">
            <h2 className="text-sm font-bold uppercase tracking-wider text-slate-400">
              Browser Context & Companion Settings
            </h2>

            {/* Context Switch */}
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-white">
                  Automatic Webpage Context
                </p>
                <p className="text-xs text-slate-400">
                  When enabled, questions factor in metadata from the active browser tab.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setWebContextEnabled(!webContextEnabled)}
                className={`w-12 h-6 rounded-full transition-colors relative p-0.5 ${
                  webContextEnabled ? "bg-indigo-600" : "bg-slate-700"
                }`}
              >
                <div
                  className={`w-5 h-5 rounded-full bg-white transition-transform ${
                    webContextEnabled ? "translate-x-6" : "translate-x-0"
                  }`}
                />
              </button>
            </div>

            {/* Active URL */}
            <form onSubmit={handleSaveUrl} className="space-y-2 pt-3 border-t border-slate-800/80">
              <label className="text-xs font-semibold text-white block">
                Simulated Active Webpage URL
              </label>
              <div className="flex gap-2">
                <Input
                  type="url"
                  value={urlInput}
                  onChange={(e) => setUrlInput(e.target.value)}
                  placeholder="https://example.com"
                  className="text-xs py-2 bg-slate-950"
                />
                <Button type="submit" variant="secondary" size="sm">
                  Update
                </Button>
              </div>
            </form>
          </div>

          {/* Section 3: Account & Session */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 sm:p-6 space-y-4">
            <h2 className="text-sm font-bold uppercase tracking-wider text-slate-400">
              Account & Authentication
            </h2>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold">
                  {user ? user.name.slice(0, 2).toUpperCase() : "GU"}
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">
                    {user ? user.name : "Guest User"}
                  </p>
                  <p className="text-xs text-slate-400">
                    {user ? user.email : "Not signed in"}
                  </p>
                </div>
              </div>

              <Badge variant="pro" size="md">
                {user ? user.plan : "Free"}
              </Badge>
            </div>

            {user && (
              <div className="pt-4 border-t border-slate-800/80 flex justify-end">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleSignOut}
                  leftIcon={<FiLogOut />}
                  className="text-xs border-slate-700 text-rose-300 hover:bg-rose-500/10"
                >
                  Sign Out
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
