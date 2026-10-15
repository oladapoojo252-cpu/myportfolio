"use client";

import React from "react";
import Image from "next/image";
import { ExternalLinkIcon, GithubIcon } from "./Icons";

export interface ProjectItem {
  id: string;
  title: string;
  domain: string;
  link: string;
  githubUrl?: string;
  snapshotUrl: string;
  type: "web" | "mobile";
  description: string;
  features: string[];
  tags: string[];
}

export default function ProjectCard({ project }: { project: ProjectItem }) {
  return (
    <div className="group bg-[#0e0e11] border border-white/10 hover:border-white/25 rounded-2xl overflow-hidden transition-all duration-300 flex flex-col justify-between shadow-lg">
      
      {/* VERCEL-STYLE PRODUCTION DEPLOYMENT SNAPSHOT */}
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Open ${project.title} (${project.domain}) in a new tab`}
        className="block relative w-full aspect-[16/10] bg-zinc-950 border-b border-white/10 overflow-hidden cursor-pointer group/preview"
      >
        {/* Top Minimal Chrome Bar (Vercel Style) */}
        <div className="absolute top-0 left-0 right-0 z-20 h-9 px-3.5 bg-black/75 backdrop-blur-md border-b border-white/10 flex items-center justify-between text-xs select-none">
          {/* Status Dot + Domain */}
          <div className="flex items-center gap-2 max-w-[75%] truncate">
            <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0" />
            <span className="font-mono text-[11px] text-zinc-300 truncate">
              {project.domain}
            </span>
          </div>

          {/* Visit Trigger */}
          <div className="flex items-center gap-1.5 text-[11px] font-mono text-zinc-400 group-hover/preview:text-white transition-colors shrink-0">
            <span>Visit</span>
            <ExternalLinkIcon className="w-3.5 h-3.5" />
          </div>
        </div>

        {/* Real Landing Page Snapshot */}
        <div className="w-full h-full pt-9 relative overflow-hidden bg-zinc-950">
          <Image
            src={project.snapshotUrl}
            alt={`${project.title} landing page preview`}
            fill
            sizes="(max-width: 768px) 100vw, 500px"
            className="object-cover object-top group-hover/preview:scale-[1.02] transition-transform duration-500"
          />

          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/preview:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
            <span className="px-4 py-2 rounded-full bg-white text-black font-semibold text-xs tracking-wider uppercase flex items-center gap-1.5 shadow-2xl">
              <span>Open Site</span>
              <ExternalLinkIcon className="w-3.5 h-3.5" />
            </span>
          </div>
        </div>
      </a>

      {/* PROJECT DETAILS & EXPLANATION */}
      <div className="p-6 sm:p-7 flex flex-col justify-between flex-1 space-y-6">
        <div>
          <div className="flex items-start justify-between gap-4 mb-2">
            <h3 className="text-2xl font-bold text-white tracking-tight">
              {project.title}
            </h3>
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 text-zinc-400 hover:text-white bg-zinc-800/50 border border-white/10 rounded-lg transition-colors"
                title="View GitHub Repository"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
            )}
          </div>

          <p className="text-zinc-400 text-sm leading-relaxed mb-4">
            {project.description}
          </p>

          {/* Detailed Features */}
          <div className="space-y-1.5 pt-3 border-t border-white/5">
            <p className="text-[11px] font-mono uppercase tracking-wider text-zinc-500 font-semibold mb-2">
              Key Capabilities:
            </p>
            {project.features.map((feat, idx) => (
              <div key={idx} className="flex items-start gap-2 text-xs text-zinc-300">
                <span className="text-zinc-500">&bull;</span>
                <span>{feat}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Footer: Tags & Direct Action Button */}
        <div className="pt-4 border-t border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-[11px] font-mono px-2 py-0.5 rounded bg-zinc-800/60 text-zinc-400 border border-white/5"
              >
                {tag}
              </span>
            ))}
          </div>

          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-1.5 px-4 py-2 bg-white text-black text-xs font-semibold rounded-lg hover:bg-zinc-200 transition-colors shrink-0"
          >
            <span>{project.type === "mobile" ? "View on GitHub" : "Visit Website"}</span>
            <ExternalLinkIcon className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>

    </div>
  );
}