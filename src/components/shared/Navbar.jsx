"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import AuthModal from "@/components/shared/AuthModal";
import { useApp } from "@/context/AppContext";
import {
  FiCpu,
  FiMenu,
  FiX,
  FiArrowUpRight,
  FiSun,
  FiMoon,
  FiChrome,
  FiLayers,
} from "react-icons/fi";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState("signin");
  const { theme, toggleTheme, user } = useApp();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Features", href: "/#features" },
    { label: "Models", href: "/#models" },
    { label: "Preview", href: "/#preview" },
    { label: "Pricing", href: "/#pricing" },
    { label: "FAQ", href: "/#faq" },
  ];

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? "bg-[#090d16]/85 backdrop-blur-md border-b border-white/[0.08] shadow-lg shadow-black/20"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-cyan-400 flex items-center justify-center shadow-lg shadow-indigo-500/25 group-hover:scale-105 transition-transform duration-200">
              <FiCpu className="w-5 h-5 text-white" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-bold text-lg sm:text-xl tracking-tight text-white">
                  Echo<span className="text-cyan-400">GPT</span>
                </span>
                <Badge variant="cyan" size="sm" className="hidden sm:inline-flex">
                  Multi-AI
                </Badge>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-3 py-1.5 text-sm font-medium text-slate-300 hover:text-white rounded-lg hover:bg-white/[0.05] transition-colors"
              >
                {link.label}
              </a>
            ))}
            <Link
              href="/extension"
              className={`px-3 py-1.5 text-sm font-medium rounded-lg flex items-center gap-1.5 transition-colors ${
                pathname === "/extension"
                  ? "text-cyan-300 bg-cyan-500/10 border border-cyan-500/30"
                  : "text-slate-300 hover:text-cyan-300 hover:bg-white/[0.05]"
              }`}
            >
              <FiChrome className="w-4 h-4 text-cyan-400" />
              <span>Chrome Concept</span>
            </Link>
          </nav>

          {/* Actions & CTA */}
          <div className="hidden md:flex items-center gap-3">
            {/* Theme Toggle */}
            <button
              type="button"
              onClick={toggleTheme}
              className="p-2 rounded-xl text-slate-400 hover:text-slate-200 hover:bg-white/[0.06] transition-colors border border-transparent hover:border-white/10"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <FiSun className="w-4 h-4" />
              ) : (
                <FiMoon className="w-4 h-4" />
              )}
            </button>

            {/* Auth Button or User Avatar */}
            {user ? (
              <Link href="/app">
                <Button
                  variant="outline"
                  size="sm"
                  className="border-slate-700 bg-slate-900/60"
                >
                  <span className="w-2 h-2 rounded-full bg-emerald-400 mr-1.5 inline-block" />
                  {user.name.split(" ")[0]}
                </Button>
              </Link>
            ) : (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => {
                  setAuthMode("signin");
                  setAuthModalOpen(true);
                }}
              >
                Sign In
              </Button>
            )}

            {/* Main App CTA */}
            <Link href="/app">
              <Button
                variant="accent"
                size="sm"
                rightIcon={<FiArrowUpRight className="w-4 h-4" />}
                className="shadow-indigo-500/20"
              >
                Launch Workspace
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              type="button"
              onClick={toggleTheme}
              className="p-2 rounded-xl text-slate-400 hover:text-white"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <FiSun className="w-4 h-4" /> : <FiMoon className="w-4 h-4" />}
            </button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-300 hover:text-white rounded-lg focus:outline-none"
              aria-label="Open navigation menu"
            >
              {mobileMenuOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden border-b border-slate-800 bg-[#090d16]/95 backdrop-blur-xl px-4 pt-3 pb-6 space-y-3">
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 text-sm font-medium text-slate-300 hover:text-white hover:bg-white/[0.05] rounded-lg transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <Link
                href="/extension"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm font-medium text-cyan-300 hover:bg-cyan-500/10 rounded-lg flex items-center gap-2"
              >
                <FiChrome className="w-4 h-4 text-cyan-400" />
                Chrome Extension Concept
              </Link>
            </div>

            <div className="pt-3 border-t border-slate-800 flex flex-col gap-2">
              <Link href="/app" onClick={() => setMobileMenuOpen(false)}>
                <Button variant="accent" size="md" className="w-full">
                  Launch Web App
                </Button>
              </Link>
              <Button
                variant="outline"
                size="md"
                className="w-full"
                onClick={() => {
                  setMobileMenuOpen(false);
                  setAuthMode("signin");
                  setAuthModalOpen(true);
                }}
              >
                Sign In
              </Button>
            </div>
          </div>
        )}
      </header>

      {/* Auth Modal */}
      <AuthModal
        isOpen={authModalOpen}
        onClose={() => setAuthModalOpen(false)}
        initialMode={authMode}
      />
    </>
  );
}
