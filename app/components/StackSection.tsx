"use client";

import React from "react";
import { motion } from "framer-motion";

const stackGroups = [
  {
    category: "Web Engineering",
    description: "High-performance frontend systems, server-side rendering, and responsive architectures.",
    skills: [
      { name: "React 19 / Next.js", level: "Production Core", note: "App Router, SSR, Server Actions" },
      { name: "TypeScript", level: "Strict Typing", note: "Type safety, generics, interfaces" },
      { name: "Tailwind CSS v4", level: "Design Systems", note: "Modern CSS variables, responsive grids" },
      { name: "Framer Motion", level: "Micro-interactions", note: "Gestures, kinetic reveals, 60fps" },
    ],
  },
  {
    category: "Mobile Architecture",
    description: "Native-grade cross-platform apps with offline resilience and hardware integration.",
    skills: [
      { name: "React Native", level: "Core Runtime", note: "Native components, performance profiling" },
      { name: "Expo / EAS", level: "Release Engineering", note: "EAS builds, OTA updates, credentials" },
      { name: "WebView & Native Bridges", level: "Browser Engine", note: "Custom script injection, AdShields" },
      { name: "Offline Persistence", level: "Storage API", note: "AsyncStorage, expo-file-system" },
    ],
  },
  {
    category: "APIs & Financial Integration",
    description: "Transaction processing, access verification, and backend orchestration.",
    skills: [
      { name: "Paystack API & Webhooks", level: "Payment Gateway", note: "Split accounts, verification, invoices" },
      { name: "Dynamic QR Validation", level: "Auth / Gate Access", note: "Cryptographic passes, camera scanners" },
      { name: "Node.js & REST APIs", level: "Backend Services", note: "Routing, middleware, rate-limiting" },
      { name: "Database Integration", level: "Data Modeling", note: "PostgreSQL, Supabase, data integrity" },
    ],
  },
  {
    category: "DevOps & Engineering Tooling",
    description: "Continuous integration, version control, and automated deployments.",
    skills: [
      { name: "Git & GitHub", level: "Workflow", note: "Branch management, PRs, semantic versioning" },
      { name: "Vercel Platform", level: "CI/CD", note: "Edge deployment, preview pipelines, analytics" },
      { name: "Postman & API Testing", level: "Verification", note: "Endpoint testing, webhook simulators" },
      { name: "Terminal / Unix & Win", level: "Environment", note: "Bash, PowerShell, build scripting" },
    ],
  },
];

export default function StackSection() {
  return (
    <section id="stack" className="py-24 px-6 border-b border-white/10 relative">
      <div className="max-w-6xl mx-auto space-y-16">
        
        {/* Header */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 uppercase tracking-widest">
            <span className="w-2 h-2 rounded-full bg-zinc-500" />
            <span>03 // Technical Arsenal</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
            Core Technologies & Capabilities
          </h2>
          <p className="text-zinc-400 text-base max-w-2xl font-mono">
            Focused, battle-tested tools selected for production stability and speed.
          </p>
        </div>

        {/* Stack Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {stackGroups.map((group, idx) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="bg-[#0c0c0e] border border-white/10 rounded-2xl p-6 sm:p-8 space-y-6 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-white tracking-tight">
                    {group.category}
                  </h3>
                  <span className="text-xs font-mono text-zinc-500">
                    0{idx + 1}
                  </span>
                </div>
                <p className="text-xs text-zinc-400 leading-relaxed mb-6 font-mono">
                  {group.description}
                </p>

                <div className="space-y-3">
                  {group.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="p-3 rounded-lg bg-zinc-950/80 border border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-xs"
                    >
                      <div className="font-medium text-zinc-200">
                        {skill.name}
                        <span className="block sm:inline sm:ml-2 text-zinc-500 text-[11px] font-mono">
                          {skill.note}
                        </span>
                      </div>
                      <span className="text-[10px] font-mono text-zinc-400 px-2 py-0.5 rounded bg-zinc-900 border border-white/5 shrink-0 self-start sm:self-auto">
                        {skill.level}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-white/5 text-[11px] font-mono text-zinc-500">
                VERIFIED IN PRODUCTION CODEBASES
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
