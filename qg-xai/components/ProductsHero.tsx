import React from 'react';
import Link from 'next/link';

const GRADIENT_BLOB = 'https://framerusercontent.com/images/zSXIWZUZ70dcBomAGSlIXbL20Os.png?width=880&height=1168';
const GRAIN_TEXTURE = 'https://framerusercontent.com/images/6mcf62RlDfRfU61Yg5vb2pefpi4.png?width=256&height=256';

const ProductsHero = () => {
  return (
    <section
      className="relative py-24 md:py-32 overflow-hidden text-white"
      style={{ backgroundColor: '#111838' }}
    >
      {/* Gradient blob — top */}
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
          className="w-full h-auto opacity-60"
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
          className="w-full h-auto absolute bottom-0 opacity-60"
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
      <div className="container px-4 mx-auto relative z-10">
        <div className="max-w-5xl mx-auto text-center space-y-12">
          {/* Main Heading with enhanced typography */}
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight tracking-tight text-white">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400">Products</span>
            </h1>
            
            {/* Subheadline */}
            <p className="text-2xl md:text-3xl text-white/90 leading-relaxed font-medium max-w-4xl mx-auto">
              Intelligence that accelerates transformation.
            </p>
            
            {/* Description */}
            <p className="text-xl md:text-2xl text-white/70 leading-relaxed max-w-4xl mx-auto">
              At SwiftAI, we don't just design strategies and orchestrate transformations — we also build intelligent products that bring them to life.
            </p>
            
            {/* Animated underline */}
            <div className="w-32 h-1.5 bg-gradient-to-r from-teal-400 to-cyan-400 mx-auto rounded-full animate-pulse"></div>
          </div>
          
          {/* CTA Buttons - match SCHEDULE DEMO styling */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
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
              className="inline-flex items-center justify-center gap-2 text-[13px] tracking-[0.08em] uppercase font-medium px-6 py-3 rounded-none border-2 border-white/40 text-white hover:bg-white/10 hover:border-white/60 transition-all duration-300"
            >
              Explore SWIFTAI
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsHero;
