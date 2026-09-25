import React from "react";
import { cn } from "@/lib/utils";

export default function Badge({
  children,
  variant = "default",
  size = "md",
  className = "",
  dot = false,
  ...props
}) {
  const baseStyles =
    "inline-flex items-center font-medium rounded-full transition-colors select-none";

  const variants = {
    default: "bg-slate-800 text-slate-300 border border-slate-700/60",
    primary: "bg-indigo-500/10 text-indigo-400 border border-indigo-500/30",
    pro: "bg-gradient-to-r from-amber-500/20 to-orange-500/20 text-amber-300 border border-amber-500/40 font-semibold",
    success: "bg-emerald-500/10 text-emerald-400 border border-emerald-500/30",
    cyan: "bg-cyan-500/10 text-cyan-400 border border-cyan-500/30",
    purple: "bg-purple-500/10 text-purple-400 border border-purple-500/30",
    muted: "bg-slate-800/50 text-slate-400 border border-slate-800",
  };

  const sizes = {
    sm: "text-[10px] px-2 py-0.5 gap-1",
    md: "text-xs px-2.5 py-1 gap-1.5",
    lg: "text-sm px-3 py-1.5 gap-2",
  };

  return (
    <span className={cn(baseStyles, variants[variant], sizes[size], className)} {...props}>
      {dot && (
        <span
          className={cn(
            "w-1.5 h-1.5 rounded-full shrink-0",
            variant === "success"
              ? "bg-emerald-400"
              : variant === "pro"
              ? "bg-amber-400"
              : variant === "primary"
              ? "bg-indigo-400"
              : "bg-slate-400"
          )}
        />
      )}
      {children}
    </span>
  );
}
