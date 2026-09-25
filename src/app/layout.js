import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AppProvider } from "@/context/AppContext";
import { Toaster } from "react-hot-toast";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "EchoGPT — One AI Workspace. Every Perspective.",
  description:
    "Chat with multiple frontier AI models, understand webpages in real time, compare responses, and access AI seamlessly via Web App or Chrome Side Panel.",
  keywords: [
    "EchoGPT",
    "Multi-AI",
    "Claude 3.7",
    "GPT-4o",
    "DeepSeek R1",
    "Chrome Extension AI",
    "Webpage summarizer",
    "AI Workspace",
  ],
  authors: [{ name: "AppifyDevs & EchoGPT Team" }],
  openGraph: {
    title: "EchoGPT — One AI Workspace. Every Perspective.",
    description:
      "One unified workspace for chatting with multiple AI models and analyzing webpages with contextual assistance.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#090d16] text-slate-100 selection:bg-indigo-500/30 selection:text-indigo-200">
        <AppProvider>
          {children}
          <Toaster
            position="bottom-right"
            toastOptions={{
              duration: 3000,
              style: {
                background: "#0f172a",
                color: "#f8fafc",
                border: "1px solid rgba(255, 255, 255, 0.12)",
                boxShadow: "0 10px 30px -10px rgba(0, 0, 0, 0.5)",
                borderRadius: "12px",
                fontSize: "13px",
              },
              success: {
                iconTheme: {
                  primary: "#10b981",
                  secondary: "#0f172a",
                },
              },
            }}
          />
        </AppProvider>
      </body>
    </html>
  );
}
