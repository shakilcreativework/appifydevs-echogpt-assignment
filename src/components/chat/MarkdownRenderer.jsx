"use client";

import React, { useState } from "react";
import { FiCopy, FiCheck } from "react-icons/fi";
import toast from "react-hot-toast";

/**
 * Format inline markdown tokens: **bold**, *italic*, `code`
 */
function renderInline(text) {
  if (!text) return null;

  // Split by inline code, bold, and italic tokens
  // Matches: `code`, **bold**, *italic*
  const tokens = [];
  const regex = /(`[^`]+`|\*\*[^*]+\*\*|\*[^*]+\*)/g;
  let lastIndex = 0;
  let match;

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      tokens.push(text.substring(lastIndex, match.index));
    }

    const token = match[0];
    if (token.startsWith("`") && token.endsWith("`")) {
      tokens.push(
        <code
          key={match.index}
          className="px-1.5 py-0.5 mx-0.5 rounded-md bg-slate-800/90 text-cyan-300 font-mono text-[11px] sm:text-xs border border-slate-700/60"
        >
          {token.slice(1, -1)}
        </code>
      );
    } else if (token.startsWith("**") && token.endsWith("**")) {
      tokens.push(
        <strong key={match.index} className="font-bold text-white tracking-wide">
          {token.slice(2, -2)}
        </strong>
      );
    } else if (token.startsWith("*") && token.endsWith("*")) {
      tokens.push(
        <em key={match.index} className="italic text-slate-300">
          {token.slice(1, -1)}
        </em>
      );
    }

    lastIndex = match.index + token.length;
  }

  if (lastIndex < text.length) {
    tokens.push(text.substring(lastIndex));
  }

  return tokens.length > 0 ? tokens : text;
}

/**
 * Code Block Component with Copy Action
 */
function CodeBlock({ language, code }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(code);
    }
    setCopied(true);
    toast.success("Code copied to clipboard!", { icon: "📋" });
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="my-3 rounded-xl border border-slate-700/80 bg-slate-950 overflow-hidden shadow-md">
      <div className="flex items-center justify-between px-3.5 py-1.5 bg-slate-900 border-b border-slate-800 text-[11px] text-slate-400 font-mono">
        <span className="uppercase text-[10px] tracking-wider text-cyan-400 font-semibold">
          {language || "code"}
        </span>
        <button
          type="button"
          onClick={handleCopy}
          className="hover:text-white flex items-center gap-1.5 transition-colors py-0.5 px-2 rounded hover:bg-slate-800"
        >
          {copied ? (
            <>
              <FiCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span className="text-emerald-400">Copied</span>
            </>
          ) : (
            <>
              <FiCopy className="w-3.5 h-3.5" />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>
      <pre className="p-3.5 overflow-x-auto text-emerald-300 font-mono text-xs leading-relaxed">
        <code>{code}</code>
      </pre>
    </div>
  );
}

/**
 * Professional AI Markdown Renderer
 * Converts Markdown headings, bold, code blocks, lists, and blockquotes into clean UI
 */
export default function MarkdownRenderer({ content, className = "" }) {
  if (!content) return null;

  // Split content by code blocks first
  const codeBlockRegex = /```([a-z0-9_-]*)\n([\s\S]*?)```/g;
  const sections = [];
  let lastIdx = 0;
  let blockMatch;

  while ((blockMatch = codeBlockRegex.exec(content)) !== null) {
    if (blockMatch.index > lastIdx) {
      sections.push({
        type: "markdown",
        text: content.substring(lastIdx, blockMatch.index),
      });
    }

    sections.push({
      type: "code",
      language: blockMatch[1] || "text",
      code: blockMatch[2].trim(),
    });

    lastIdx = blockMatch.index + blockMatch[0].length;
  }

  if (lastIdx < content.length) {
    sections.push({
      type: "markdown",
      text: content.substring(lastIdx),
    });
  }

  return (
    <div className={`space-y-3 leading-relaxed text-sm text-slate-200 ${className}`}>
      {sections.map((section, sIdx) => {
        if (section.type === "code") {
          return (
            <CodeBlock
              key={`cb-${sIdx}`}
              language={section.language}
              code={section.code}
            />
          );
        }

        // Process markdown block line-by-line
        const lines = section.text.split("\n");
        const renderedElements = [];
        let i = 0;

        while (i < lines.length) {
          const line = lines[i];
          const trimmed = line.trim();

          // Empty line
          if (!trimmed) {
            i++;
            continue;
          }

          // Headers
          if (trimmed.startsWith("### ")) {
            renderedElements.push(
              <h4
                key={`h3-${i}`}
                className="text-sm sm:text-base font-bold text-white mt-3 mb-1.5 flex items-center gap-2 tracking-tight"
              >
                {renderInline(trimmed.substring(4))}
              </h4>
            );
            i++;
            continue;
          }

          if (trimmed.startsWith("## ")) {
            renderedElements.push(
              <h3
                key={`h2-${i}`}
                className="text-base sm:text-lg font-bold text-white mt-4 mb-2 pb-1 border-b border-slate-800 tracking-tight"
              >
                {renderInline(trimmed.substring(3))}
              </h3>
            );
            i++;
            continue;
          }

          if (trimmed.startsWith("# ")) {
            renderedElements.push(
              <h2
                key={`h1-${i}`}
                className="text-lg sm:text-xl font-extrabold text-white mt-4 mb-2 tracking-tight"
              >
                {renderInline(trimmed.substring(2))}
              </h2>
            );
            i++;
            continue;
          }

          // Blockquotes
          if (trimmed.startsWith("> ")) {
            renderedElements.push(
              <blockquote
                key={`bq-${i}`}
                className="my-2.5 pl-3.5 py-1.5 border-l-2 border-indigo-500 bg-indigo-950/20 text-slate-300 text-xs sm:text-sm rounded-r-lg italic"
              >
                {renderInline(trimmed.substring(2))}
              </blockquote>
            );
            i++;
            continue;
          }

          // Ordered Lists (e.g. 1. Item, 2. Item)
          const olMatch = trimmed.match(/^(\d+)\.\s+(.*)/);
          if (olMatch) {
            const listItems = [];
            while (i < lines.length) {
              const currentTrimmed = lines[i].trim();
              const currentMatch = currentTrimmed.match(/^(\d+)\.\s+(.*)/);
              if (!currentMatch) break;

              listItems.push({
                num: currentMatch[1],
                text: currentMatch[2],
              });
              i++;
            }

            renderedElements.push(
              <ol key={`ol-${i}`} className="space-y-2 my-2 pl-1">
                {listItems.map((item, lIdx) => (
                  <li key={lIdx} className="flex items-start gap-2.5 text-xs sm:text-sm">
                    <span className="w-5 h-5 rounded-full bg-slate-800 text-cyan-400 font-semibold text-[11px] flex items-center justify-center shrink-0 mt-0.5">
                      {item.num}
                    </span>
                    <span className="text-slate-200 leading-relaxed flex-1">
                      {renderInline(item.text)}
                    </span>
                  </li>
                ))}
              </ol>
            );
            continue;
          }

          // Unordered Lists (e.g. - Item, * Item)
          const ulMatch = trimmed.match(/^[-*]\s+(.*)/);
          if (ulMatch) {
            const listItems = [];
            while (i < lines.length) {
              const currentTrimmed = lines[i].trim();
              const currentMatch = currentTrimmed.match(/^[-*]\s+(.*)/);
              if (!currentMatch) break;

              listItems.push(currentMatch[1]);
              i++;
            }

            renderedElements.push(
              <ul key={`ul-${i}`} className="space-y-1.5 my-2 pl-2">
                {listItems.map((item, lIdx) => (
                  <li key={lIdx} className="flex items-start gap-2 text-xs sm:text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 shrink-0 mt-2" />
                    <span className="text-slate-200 leading-relaxed flex-1">
                      {renderInline(item)}
                    </span>
                  </li>
                ))}
              </ul>
            );
            continue;
          }

          // Standard paragraph
          renderedElements.push(
            <p key={`p-${i}`} className="text-xs sm:text-sm leading-relaxed text-slate-200">
              {renderInline(trimmed)}
            </p>
          );
          i++;
        }

        return <div key={`s-${sIdx}`} className="space-y-2">{renderedElements}</div>;
      })}
    </div>
  );
}
