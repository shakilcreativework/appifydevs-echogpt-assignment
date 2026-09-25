"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import { useApp } from "@/context/AppContext";
import {
  FiMail,
  FiLock,
  FiUser,
  FiArrowRight,
  FiCpu,
  FiCheckCircle,
} from "react-icons/fi";
import { FaGoogle, FaGithub } from "react-icons/fa";
import toast from "react-hot-toast";

export default function SignUpPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { setUser } = useApp();
  const router = useRouter();

  const handleSignUp = (e) => {
    e.preventDefault();
    if (!name || !email || !password) {
      toast.error("Please fill in all fields");
      return;
    }

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      const newUser = {
        id: `user-${Date.now()}`,
        name: name,
        email: email,
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face",
        plan: "Pro",
      };
      setUser(newUser);
      toast.success("Account created successfully! Welcome to EchoGPT.", {
        icon: "🎉",
      });
      router.push("/app");
    }, 900);
  };

  const handleOAuth = (provider) => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      const oauthUser = {
        id: `user-${provider.toLowerCase()}`,
        name: `${provider} Pioneer`,
        email: `pioneer@${provider.toLowerCase()}.com`,
        avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop&crop=face",
        plan: "Pro",
      };
      setUser(oauthUser);
      toast.success(`Account connected via ${provider}!`);
      router.push("/app");
    }, 700);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#090d16] text-slate-100">
      <Navbar />

      <main className="flex-1 flex items-center justify-center p-4 sm:p-8">
        <div className="w-full max-w-md space-y-6">
          <div className="text-center space-y-2">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-indigo-600 to-cyan-400 flex items-center justify-center mx-auto text-white shadow-xl shadow-indigo-600/30">
              <FiCpu className="w-6 h-6" />
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white">
              Create your EchoGPT Account
            </h1>
            <p className="text-xs sm:text-sm text-slate-400">
              Start chatting across GPT-4o, Claude 3.7, and DeepSeek in seconds.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 sm:p-8 shadow-2xl space-y-5">
            {/* OAuth Buttons */}
            <div className="grid grid-cols-2 gap-3">
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={() => handleOAuth("Google")}
                leftIcon={<FaGoogle className="text-red-400" />}
                className="w-full text-xs"
              >
                Google
              </Button>
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={() => handleOAuth("GitHub")}
                leftIcon={<FaGithub className="text-slate-200" />}
                className="w-full text-xs"
              >
                GitHub
              </Button>
            </div>

            <div className="relative flex items-center justify-center">
              <div className="border-t border-slate-800 w-full" />
              <span className="bg-slate-900 px-3 text-[11px] text-slate-500 uppercase tracking-wider absolute">
                or register with email
              </span>
            </div>

            <form onSubmit={handleSignUp} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                  Full Name
                </label>
                <Input
                  type="text"
                  placeholder="e.g. Alex Vance"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  leftIcon={<FiUser className="w-4 h-4" />}
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                  Email Address
                </label>
                <Input
                  type="email"
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  leftIcon={<FiMail className="w-4 h-4" />}
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                  Password
                </label>
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
                className="w-full"
                isLoading={isLoading}
                rightIcon={<FiArrowRight />}
              >
                Create Free Account
              </Button>
            </form>

            <div className="pt-2 text-center text-xs text-slate-400">
              Already have an account?{" "}
              <Link
                href="/login"
                className="text-cyan-400 font-semibold hover:text-cyan-300"
              >
                Sign In
              </Link>
            </div>

            <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-500 pt-2 border-t border-slate-800">
              <FiCheckCircle className="text-emerald-400" />
              <span>Free tier includes EchoGPT Turbo & DeepSeek R1</span>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
