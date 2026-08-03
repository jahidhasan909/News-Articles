import React from 'react';
import { FiHome, FiChevronRight } from 'react-icons/fi';

const HeroBanner = () => {
  return (
    <section className="relative w-full h-[320px] sm:h-[400px] md:h-[480px] bg-slate-900 overflow-hidden flex items-center justify-center pt-16">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1920&q=80"
          alt="News and Articles Hero Background"
          className="w-full h-full object-cover object-center scale-105 filter brightness-75 transition-all duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-slate-900/40" />
      </div>

      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto flex flex-col items-center gap-4">
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight drop-shadow-md text-white">
          News & Articles
        </h1>

        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs sm:text-sm font-medium bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/15 text-slate-200">
          <span className="flex items-center gap-1 hover:text-white transition-colors cursor-pointer">
            <FiHome className="w-3.5 h-3.5" />
            <span>Home</span>
          </span>
          <FiChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-sky-400 font-semibold">News & Articles</span>
        </nav>
      </div>
    </section>
  );
};

export default HeroBanner;