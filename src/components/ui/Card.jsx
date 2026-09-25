import React from "react";
import { cn } from "@/lib/utils";

export default function Card({
  children,
  className = "",
  hover = false,
  glass = false,
  glow = false,
  onClick,
  ...props
}) {
  return (
    <div
      onClick={onClick}
      className={cn(
        "rounded-2xl transition-all duration-200 border p-5",
        glass
          ? "glass-panel"
          : "bg-slate-900/70 border-slate-800/80 shadow-md",
        hover &&
          "hover:border-slate-700 hover:bg-slate-900/90 hover:shadow-xl hover:-translate-y-0.5 cursor-pointer",
        glow && "hover:border-indigo-500/40 hover:shadow-indigo-500/10",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
