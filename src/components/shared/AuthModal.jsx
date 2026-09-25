"use client";

import React, { useState } from "react";
import Modal from "@/components/ui/Modal";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import { FiMail, FiLock, FiUser, FiArrowRight, FiCheckCircle } from "react-icons/fi";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { useApp } from "@/context/AppContext";
import toast from "react-hot-toast";

export default function AuthModal({ isOpen, onClose, initialMode = "signin" }) {
  const [mode, setMode] = useState(initialMode); // 'signin' | 'signup'
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { setUser } = useApp();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      toast.error("Please fill in all required fields");
      return;
    }

    setIsLoading(true);

    // Simulated Better Auth authentication flow
    setTimeout(() => {
      setIsLoading(false);
      const authenticatedUser = {
        id: `user-${Date.now()}`,
        name: name || email.split("@")[0],
        email: email,
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face",
        plan: "Pro",
      };
      setUser(authenticatedUser);
      toast.success(
        mode === "signin"
          ? `Welcome back, ${authenticatedUser.name}!`
          : `Account created successfully! Welcome to EchoGPT.`,
        { icon: "🎉" }
      );
      onClose();
    }, 900);
  };

  const handleOAuthDemo = (provider) => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      const oauthUser = {
        id: `user-${provider.toLowerCase()}`,
        name: `${provider} Explorer`,
        email: `explorer@${provider.toLowerCase()}.com`,
        avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop&crop=face",
        plan: "Pro",
      };
      setUser(oauthUser);
      toast.success(`Signed in with ${provider}!`);
      onClose();
    }, 700);
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={mode === "signin" ? "Sign in to EchoGPT" : "Create your EchoGPT Account"}
    >
      <div className="space-y-4">
        {/* Toggle Mode Pills */}
        <div className="flex bg-slate-950/80 p-1 rounded-xl border border-slate-800">
          <button
            type="button"
            onClick={() => setMode("signin")}
            className={`flex-1 py-1.5 text-xs font-medium rounded-lg transition-all ${
              mode === "signin"
                ? "bg-indigo-600 text-white shadow"
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            Sign In
          </button>
          <button
            type="button"
            onClick={() => setMode("signup")}
            className={`flex-1 py-1.5 text-xs font-medium rounded-lg transition-all ${
              mode === "signup"
                ? "bg-indigo-600 text-white shadow"
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            Create Account
          </button>
        </div>

        {/* OAuth Buttons */}
        <div className="grid grid-cols-2 gap-3 pt-1">
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={() => handleOAuthDemo("Google")}
            leftIcon={<FaGoogle className="text-red-400" />}
            className="w-full text-xs"
          >
            Google
          </Button>
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={() => handleOAuthDemo("GitHub")}
            leftIcon={<FaGithub className="text-slate-200" />}
            className="w-full text-xs"
          >
            GitHub
          </Button>
        </div>

        <div className="relative flex items-center justify-center my-2">
          <div className="border-t border-slate-800 w-full" />
          <span className="bg-slate-900 px-3 text-[11px] text-slate-500 uppercase tracking-wider absolute">
            or continue with email
          </span>
        </div>

        {/* Auth Form */}
        <form onSubmit={handleSubmit} className="space-y-3.5">
          {mode === "signup" && (
            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1.5">
                Full Name
              </label>
              <Input
                type="text"
                placeholder="e.g. Sarah Connor"
                value={name}
                onChange={(e) => setName(e.target.value)}
                leftIcon={<FiUser className="w-4 h-4" />}
                required={mode === "signup"}
              />
            </div>
          )}

          <div>
            <label className="block text-xs font-medium text-slate-300 mb-1.5">
              Email Address
            </label>
            <Input
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              leftIcon={<FiMail className="w-4 h-4" />}
              required
            />
          </div>

          <div>
            <div className="flex items-center justify-between mb-1.5">
              <label className="block text-xs font-medium text-slate-300">
                Password
              </label>
              {mode === "signin" && (
                <button
                  type="button"
                  onClick={() => toast("Password reset link sent to demo email")}
                  className="text-[11px] text-indigo-400 hover:text-indigo-300 transition-colors"
                >
                  Forgot password?
                </button>
              )}
            </div>
            <Input
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              leftIcon={<FiLock className="w-4 h-4" />}
              required
            />
          </div>

          <Button
            type="submit"
            variant="accent"
            size="md"
            className="w-full mt-2"
            isLoading={isLoading}
            rightIcon={<FiArrowRight />}
          >
            {mode === "signin" ? "Sign In to Workspace" : "Get Started Free"}
          </Button>
        </form>

        {/* Feature note */}
        <div className="flex items-center justify-center gap-2 pt-2 text-[11px] text-slate-400">
          <FiCheckCircle className="text-emerald-400 shrink-0" />
          <span>Powered by Better Auth with secure session encryption</span>
        </div>
      </div>
    </Modal>
  );
}
