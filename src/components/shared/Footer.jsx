import React from "react";
import Link from "next/link";
import { FiCpu, FiChrome, FiGithub, FiTwitter, FiGlobe, FiShield, FiHeart } from "react-icons/fi";
import { APP_CONFIG } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="w-full bg-[#070a11] border-t border-slate-800/80 text-slate-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-indigo-600 to-cyan-400 flex items-center justify-center shadow-md">
                <FiCpu className="w-4 h-4 text-white" />
              </div>
              <span className="font-bold text-lg tracking-tight text-white">
                Echo<span className="text-cyan-400">GPT</span>
              </span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              One unified AI workspace for chatting with multiple frontier AI models, understanding webpages in real time, and comparing perspectives without breaking your workflow.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href={APP_CONFIG.extensionStoreUrl}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white transition-colors"
                aria-label="Chrome Web Store"
              >
                <FiChrome className="w-4 h-4" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white transition-colors"
                aria-label="GitHub Repository"
              >
                <FiGithub className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white transition-colors"
                aria-label="Twitter / X"
              >
                <FiTwitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Product Column */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-200 mb-3.5">
              Product
            </h4>
            <ul className="space-y-2.5">
              <li>
                <Link href="/app" className="hover:text-white transition-colors">
                  Web App Workspace
                </Link>
              </li>
              <li>
                <Link href="/extension" className="hover:text-white transition-colors">
                  Chrome Extension Concept
                </Link>
              </li>
              <li>
                <a href="#models" className="hover:text-white transition-colors">
                  AI Model Catalog
                </a>
              </li>
              <li>
                <a href="#preview" className="hover:text-white transition-colors">
                  Interactive Preview
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-white transition-colors">
                  Pro Pricing ($9.99/mo)
                </a>
              </li>
            </ul>
          </div>

          {/* Supported Models */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-200 mb-3.5">
              Supported Models
            </h4>
            <ul className="space-y-2.5">
              <li className="text-slate-400">OpenAI GPT-4o</li>
              <li className="text-slate-400">Anthropic Claude 3.7</li>
              <li className="text-slate-400">Google Gemini 2.5 Pro</li>
              <li className="text-slate-400">DeepSeek R1 Reasoning</li>
              <li className="text-slate-400">Mistral Large 2</li>
              <li className="text-slate-400">EchoGPT Fast Turbo</li>
            </ul>
          </div>

          {/* Assignment / Legal */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-200 mb-3.5">
              Project & Legal
            </h4>
            <ul className="space-y-2.5">
              <li>
                <span className="text-indigo-400 font-medium block">
                  AppifyDevs Internship
                </span>
                <span className="text-xs text-slate-500">Frontend Redesign</span>
              </li>
              <li>
                <a
                  href="https://career.appifydevs.com/jobs/sei-frontend"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition-colors text-xs flex items-center gap-1 text-slate-400"
                >
                  <FiGlobe className="w-3.5 h-3.5" /> AppifyDevs Careers
                </a>
              </li>
              <li>
                <span className="text-xs text-slate-500 block pt-1">
                  Privacy First: Local simulated storage & context transparency
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 mt-10 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} EchoGPT Frontend Redesign. Crafted for AppifyDevs Software Engineering Internship.
          </p>
          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-1 text-slate-400">
              Built with Next.js <FiHeart className="w-3 h-3 text-rose-500 inline" /> JavaScript
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
