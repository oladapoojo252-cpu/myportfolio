"use client";

import React from "react";
import Image from "next/image";
import { ExternalLinkIcon, GithubIcon, DownloadIcon } from "./Icons";

export interface ProjectItem {
  id: string;
  title: string;
  domain: string;
  link: string;
  githubUrl?: string;
  apkUrl?: string;
  snapshotUrl: string;
  type: "web" | "mobile";
  description: string;
  features: string[];
  tags: string[];
}

export default function ProjectCard({ project }: { project: ProjectItem }) {
  const isApk = Boolean(project.apkUrl);

  return (
    <div className="group bg-[#0b0b0d] border border-zinc-800 hover:border-zinc-700 rounded-2xl overflow-hidden transition-all duration-300 flex flex-col justify-between shadow-lg">
      
      {/* VERCEL-STYLE SNAPSHOT PREVIEW WINDOW */}
      <a
        href={isApk ? project.apkUrl : project.link}
        download={isApk ? "Daps-Browser.apk" : undefined}
        target={isApk ? undefined : "_blank"}
        rel={isApk ? undefined : "noopener noreferrer"}
        aria-label={isApk ? `Download ${project.title} APK` : `Open ${project.title} (${project.domain}) in a new tab`}
        className="block bg-zinc-950 border-b border-zinc-800 cursor-pointer group/preview"
      >
        {/* Top Minimal Chrome Bar */}
        <div className="h-9 px-4 bg-zinc-950 border-b border-zinc-800/80 flex items-center justify-between text-xs select-none">
          {/* Status Dot + Domain */}
          <div className="flex items-center gap-2 max-w-[75%] truncate">
            <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0" />
            <span className="font-mono text-[11px] text-zinc-300 truncate">
              {project.domain}
            </span>
          </div>

          {/* Action Trigger */}
          <div className="flex items-center gap-1.5 text-[11px] font-mono text-zinc-400 group-hover/preview:text-white transition-colors shrink-0">
            <span>{isApk ? "Download APK" : "Visit"}</span>
            {isApk ? (
              <DownloadIcon className="w-3.5 h-3.5 text-emerald-400" />
            ) : (
              <ExternalLinkIcon className="w-3.5 h-3.5" />
            )}
          </div>
        </div>

        {/* Real Landing Page Snapshot Frame */}
        <div className="relative w-full aspect-[16/10] overflow-hidden bg-zinc-950">
          <Image
            src={project.snapshotUrl}
            alt={`${project.title} landing page snapshot`}
            fill
            sizes="(max-width: 768px) 100vw, 500px"
            className="object-cover object-top group-hover/preview:scale-[1.02] transition-transform duration-500"
          />

          {/* Clean Hover Overlay */}
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/preview:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
            <span className="px-4 py-2 rounded-full bg-white text-black font-semibold text-xs tracking-wider uppercase flex items-center gap-1.5 shadow-2xl">
              <span>{isApk ? "Download APK" : "Open Site"}</span>
              {isApk ? (
                <DownloadIcon className="w-3.5 h-3.5" />
              ) : (
                <ExternalLinkIcon className="w-3.5 h-3.5" />
              )}
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
                className="p-1.5 text-zinc-400 hover:text-white bg-zinc-900 border border-zinc-800 rounded-lg transition-colors"
                title="View GitHub Repository"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
            )}
          </div>

          <p className="text-zinc-400 text-sm leading-relaxed mb-4">
            {project.description}
          </p>

          {/* Capabilities List */}
          <div className="space-y-1.5 pt-3 border-t border-zinc-800/80">
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

        {/* Footer: Tags & Action Buttons */}
        <div className="pt-4 border-t border-zinc-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-[11px] font-mono px-2.5 py-0.5 rounded-md bg-zinc-900 text-zinc-400 border border-zinc-800/80"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-2 shrink-0">
            {isApk ? (
              <>
                <a
                  href={project.apkUrl}
                  download="Daps-Browser.apk"
                  className="inline-flex items-center justify-center gap-1.5 px-4 py-2 bg-white text-zinc-950 text-xs font-semibold rounded-lg hover:bg-zinc-200 transition-colors"
                >
                  <span>Download APK</span>
                  <DownloadIcon className="w-3.5 h-3.5" />
                </a>
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 px-3 py-2 bg-zinc-900 border border-zinc-800 text-zinc-300 text-xs font-medium rounded-lg hover:text-white transition-colors"
                  >
                    <span>GitHub</span>
                    <GithubIcon className="w-3.5 h-3.5" />
                  </a>
                )}
              </>
            ) : (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 px-4 py-2 bg-white text-zinc-950 text-xs font-semibold rounded-lg hover:bg-zinc-200 transition-colors"
              >
                <span>Visit Website</span>
                <ExternalLinkIcon className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
        </div>

      </div>

    </div>
  );
}