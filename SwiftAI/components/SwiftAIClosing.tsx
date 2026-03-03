import React from 'react';
import Link from 'next/link';

const GRADIENT_BLOB = 'https://framerusercontent.com/images/zSXIWZUZ70dcBomAGSlIXbL20Os.png?width=880&height=1168';
const GRAIN_TEXTURE = 'https://framerusercontent.com/images/6mcf62RlDfRfU61Yg5vb2pefpi4.png?width=256&height=256';

const SwiftAIAIClosing = () => {
  return (
    <section
      className="relative py-24 text-white overflow-hidden"
      style={{ backgroundColor: '#111838' }}
    >
      {/* Gradient blob — top (matches home FinalCTA) */}
      <div
        className="pointer-events-none absolute inset-0 z-0 overflow-visible"
        style={{
          WebkitMask: 'linear-gradient(transparent 3%, black 59%)',
          mask: 'linear-gradient(transparent 3%, black 59%)',
        }}
        aria-hidden="true"
      >
        <img
          src={GRADIENT_BLOB}
          alt=""
          className="w-full h-auto"
          style={{ transform: 'rotate(180deg)', objectFit: 'cover' }}
        />
      </div>

      {/* Gradient blob — bottom */}
      <div
        className="pointer-events-none absolute inset-0 z-0 overflow-visible"
        style={{
          WebkitMask: 'linear-gradient(black 18%, transparent 83%)',
          mask: 'linear-gradient(black 18%, transparent 83%)',
          top: 'auto',
          bottom: 0,
          height: '100%',
        }}
        aria-hidden="true"
      >
        <img
          src={GRADIENT_BLOB}
          alt=""
          className="w-full h-auto absolute bottom-0"
          style={{ transform: 'rotate(180deg)', objectFit: 'cover' }}
        />
      </div>

      {/* Film grain texture */}
      <div
        className="pointer-events-none absolute inset-0 z-[1]"
        style={{
          opacity: 0.12,
          backgroundImage: `url(${GRAIN_TEXTURE})`,
          backgroundRepeat: 'repeat',
          backgroundSize: '128px auto',
          backgroundPosition: 'left top',
          transform: 'rotate(-180deg)',
        }}
        aria-hidden="true"
      />

      {/* Glass card — matches home FinalCTA stats card styling */}
      <div className="relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto rounded-2xl border border-white/10 bg-[#111838]/90 backdrop-blur-xl shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6)] overflow-hidden">
          <div className="px-8 py-16 md:px-16 md:py-20 text-center space-y-8">
            <div className="inline-flex items-center gap-3">
              <div className="w-2 h-2 bg-white/80 rounded-full" />
              <span className="text-white/80 text-sm font-medium uppercase tracking-widest">Transform Your Enterprise</span>
              <div className="w-2 h-2 bg-white/80 rounded-full" />
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight">
              The path to transformation doesn't have to be <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-400">cluttered</span>.
            </h2>

            <p className="text-xl md:text-2xl text-white/70 leading-relaxed max-w-3xl mx-auto">
              With SWIFTAI, you move faster, reduce risk, and unlock clarity across your enterprise — from the front office to the back office, and everything in between.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 text-[13px] tracking-[0.08em] uppercase font-medium px-6 py-3 rounded-none bg-emerald-400 text-gray-900 hover:bg-emerald-300 hover:shadow-lg hover:shadow-emerald-400/25 transition-all duration-300"
              >
                Book a Demo
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </Link>
              <Link
                href="/products"
                className="inline-flex items-center justify-center gap-2 text-[13px] tracking-[0.08em] uppercase font-medium px-6 py-3 rounded-none border border-white/30 bg-white/[0.08] text-white hover:bg-white/[0.15] hover:border-white/40 transition-all duration-300 backdrop-blur-sm"
              >
                Explore SWIFTAI
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>

            <div className="flex justify-center gap-2 pt-8">
              <div className="w-2 h-2 rounded-full bg-white/40" />
              <div className="w-2 h-2 rounded-full bg-white/80" />
              <div className="w-2 h-2 rounded-full bg-white/40" />
              <div className="w-2 h-2 rounded-full bg-white/40" />
              <div className="w-2 h-2 rounded-full bg-white/40" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SwiftAIAIClosing;
