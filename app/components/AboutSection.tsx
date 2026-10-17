"use client";

import React from "react";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section id="about" className="py-24 px-6 border-t border-zinc-800/80">
      <div className="max-w-5xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-3">
            About Me
          </h2>
          <p className="text-zinc-400 text-base">
            Software engineer dedicated to clean architecture, high performance, and building intuitive digital products.
          </p>
        </div>

        {/* Narrative and Cohesive Photo Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          
          {/* Left Side: The Personal Story & Tech Stack */}
          <div className="md:col-span-7 space-y-8">
            <div className="space-y-5 text-zinc-400 text-base sm:text-lg leading-relaxed">
              <p>
                Hello, I am Ojo Oladapo. I build web applications and mobile software from the ground up, prioritizing clean code, solid architecture, and fast, responsive user experiences.
              </p>

              <p>
                My approach to software engineering is grounded in craftsmanship and discipline. I don&apos;t just assemble disparate libraries &mdash; I dive deep into how systems work, whether that means engineering custom WebView ad shields and background file managers in React Native, or building fraud-resistant gate QR pass verification and Paystack automated settlements for Bookly.ng.
              </p>

              <p>
                I focus on building for scale, reliability, and long-term maintainability. Every interaction, sub-second response time, and edge case matters. My goal is always to deliver products that are robust under the hood and a genuine pleasure to use.
              </p>
            </div>

            {/* Technical Stack Box */}
            <div className="bg-[#0b0b0d] border border-zinc-800 p-6 rounded-2xl space-y-5">
              <h3 className="text-lg font-bold text-white">Technical Stack & Tools</h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono">
                <div>
                  <span className="text-zinc-500 uppercase tracking-wider block mb-2 font-bold">
                    Web Systems
                  </span>
                  <ul className="space-y-1.5 text-zinc-300">
                    <li>React / Next.js</li>
                    <li>TypeScript</li>
                    <li>Tailwind CSS</li>
                    <li>Framer Motion</li>
                  </ul>
                </div>

                <div>
                  <span className="text-zinc-500 uppercase tracking-wider block mb-2 font-bold">
                    Mobile & APIs
                  </span>
                  <ul className="space-y-1.5 text-zinc-300">
                    <li>React Native / Expo</li>
                    <li>Mobile WebViews</li>
                    <li>Paystack Payments</li>
                    <li>RESTful Services</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Structured Editorial Photo Story */}
          <div className="md:col-span-5 space-y-6">
            
            {/* Photo 1: Focus & Craft */}
            <div className="border border-zinc-800 bg-[#0b0b0d] rounded-2xl overflow-hidden shadow-xl group">
              <div className="relative aspect-[4/5] w-full bg-zinc-950 overflow-hidden">
                <Image
                  src="/images/oladapo-tree.jpg"
                  alt="Ojo Oladapo"
                  fill
                  sizes="(max-width: 768px) 100vw, 380px"
                  className="object-cover object-center filter grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
              <div className="p-4 border-t border-zinc-800/80 bg-[#0b0b0d]">
                <div className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider font-semibold">
                  Focus & Craft
                </div>
                <p className="text-xs text-zinc-500 mt-1">
                  Building resilient systems with patience, deep focus, and architectural intent.
                </p>
              </div>
            </div>

            {/* Photo 2: Drive & Perspective */}
            <div className="border border-zinc-800 bg-[#0b0b0d] rounded-2xl overflow-hidden shadow-xl group">
              <div className="relative aspect-[4/5] w-full bg-zinc-950 overflow-hidden">
                <Image
                  src="/images/oladapo-car.jpg"
                  alt="Ojo Oladapo"
                  fill
                  sizes="(max-width: 768px) 100vw, 380px"
                  className="object-cover object-center filter grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
              <div className="p-4 border-t border-zinc-800/80 bg-[#0b0b0d]">
                <div className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider font-semibold">
                  Drive & Perspective
                </div>
                <p className="text-xs text-zinc-500 mt-1">
                  Relentless improvement, curiosity, and genuine human connection.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
