"use client";

import React, { useState } from "react";
import { GithubIcon, XIcon, InstagramIcon, WhatsAppIcon, CheckIcon } from "./Icons";

export default function ContactSection() {
  const [copied, setCopied] = useState(false);
  const email = "oladapoojo252@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-24 px-6 border-t border-zinc-800/80 text-center">
      <div className="max-w-3xl mx-auto space-y-8">
        <div>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-white mb-4">
            Let&apos;s Connect
          </h2>
          <p className="text-zinc-400 text-lg">
            Open for software engineering opportunities, product builds, and technical collaboration worldwide.
          </p>
        </div>

        {/* Primary Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="https://wa.me/+2349021789494"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3 bg-white text-black font-semibold rounded-full hover:bg-zinc-200 transition-all text-sm"
          >
            <WhatsAppIcon className="w-4 h-4 text-emerald-600" />
            <span>Chat on WhatsApp</span>
          </a>

          <button
            onClick={handleCopyEmail}
            className="inline-flex items-center gap-2 px-7 py-3 bg-zinc-900 text-white font-medium rounded-full border border-zinc-700 hover:bg-zinc-800 transition-all text-sm"
          >
            {copied ? (
              <>
                <CheckIcon className="w-4 h-4 text-emerald-400" />
                <span>Email Copied!</span>
              </>
            ) : (
              <span>Copy Email ({email})</span>
            )}
          </button>
        </div>

        {/* Social Channels Strip */}
        <div className="pt-6 border-t border-zinc-800/80 flex items-center justify-center gap-8 text-sm text-zinc-400">
          <a
            href="https://x.com/Oladapothefirst"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-white transition-colors"
          >
            <XIcon className="w-4 h-4" />
            <span>@Oladapothefirst</span>
          </a>

          <a
            href="https://instagram.com/O_L_A_D_A_P_O"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-white transition-colors"
          >
            <InstagramIcon className="w-4 h-4" />
            <span>@O_L_A_D_A_P_O</span>
          </a>

          <a
            href="https://github.com/oladapoojo252-cpu"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-white transition-colors"
          >
            <GithubIcon className="w-4 h-4" />
            <span>GitHub</span>
          </a>
        </div>

        {/* Footer */}
        <div className="pt-8 text-xs font-mono text-zinc-600">
          Ojo Oladapo &bull; Software Engineer
        </div>
      </div>
    </section>
  );
}
