import React, { useState } from 'react';
import { Link, useLocation } from 'react-router';
import { FiGlobe, FiMenu, FiX, FiChevronDown } from 'react-icons/fi';
import Button from '../UI/Button';

const Navbar = () => {
  const [lang, setLang] = useState('EN');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const toggleLang = (selectedLang) => {
    setLang(selectedLang);
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    {
      name: 'Donate',
      path: '/donate',
      submenu: [
        { name: 'Emergency Relief', path: '/donate/emergency' },
        { name: 'Sponsor an Orphan', path: '/donate/orphan' },
        { name: 'Sadqah & Zakat', path: '/donate/zakat' },
      ],
    },
    { name: 'Events', path: '/events' },
    {
      name: 'About Us',
      path: '/about',
      submenu: [
        { name: 'Our Mission', path: '/about/mission' },
        { name: 'Board of Directors', path: '/about/team' },
        { name: 'Financial Reports', path: '/about/reports' },
      ],
    },
    { name: 'Gallery', path: '/gallery' },
    {
      name: 'News & Articles',
      path: '/',
      active: true,
      submenu: [
        { name: 'Latest News', path: '/' },
        { name: 'Press Releases', path: '/' },
        { name: 'Blog Posts', path: '/' },
      ],
    },
    { name: 'Partnership', path: '/partnership' },
    { name: 'Admin Portal', path: '/admin' },
  ];

  return (
    <header className="w-full fixed top-0 left-0 right-0 z-50 px-4 pt-4 pb-2 transition-all">
      <div className="max-w-7xl mx-auto">
        <nav className="relative bg-slate-950/75 backdrop-blur-md border border-slate-700/60 rounded-full px-5 py-2.5 shadow-2xl flex items-center justify-between text-white">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-sky-500 to-indigo-600 p-0.5 shadow-md shadow-sky-500/20 group-hover:scale-105 transition-transform">
              <div className="w-full h-full bg-slate-900 rounded-full flex items-center justify-center font-black text-sky-400 text-sm">
                MH
              </div>
            </div>
            <div className="hidden sm:flex flex-col">
              <span className="font-bold text-sm leading-tight tracking-wide text-white">
                MaxValid
              </span>
              <span className="text-[10px] text-slate-400 font-medium tracking-wider uppercase">
                Foundation
              </span>
            </div>
          </Link>

          <ul className="hidden lg:flex items-center gap-1 xl:gap-2 text-xs font-medium">
            {navLinks.map((link, idx) => {
              const isActive = link.active || location.pathname === link.path;
              if (link.submenu) {
                return (
                  <li key={idx} className="relative group/dropdown">
                    <button
                      className={`flex items-center gap-1 px-3 py-2 rounded-full transition-colors ${
                        isActive
                          ? 'text-sky-400 font-semibold'
                          : 'text-slate-300 hover:text-white hover:bg-white/5'
                      }`}
                    >
                      {link.name}
                      <FiChevronDown className="w-3 h-3 group-hover/dropdown:rotate-180 transition-transform duration-200" />
                    </button>

                    <div className="absolute top-full left-0 mt-2 w-48 opacity-0 translate-y-2 pointer-events-none group-hover/dropdown:opacity-100 group-hover/dropdown:translate-y-0 group-hover/dropdown:pointer-events-auto transition-all duration-200 bg-slate-900/95 backdrop-blur-xl border border-slate-700/80 rounded-2xl p-2 shadow-2xl z-50">
                      {link.submenu.map((sub, sIdx) => (
                        <Link
                          key={sIdx}
                          to={sub.path}
                          className="block px-3 py-2 text-xs text-slate-300 hover:text-sky-400 hover:bg-white/5 rounded-xl transition-colors"
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  </li>
                );
              }

              return (
                <li key={idx}>
                  <Link
                    to={link.path}
                    className={`block px-3 py-2 rounded-full transition-colors ${
                      isActive
                        ? 'text-sky-400 font-semibold underline underline-offset-8 decoration-2 decoration-sky-400'
                        : 'text-slate-300 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="hidden lg:flex items-center gap-3">
            <div className="bg-white/10 p-1 rounded-full flex items-center border border-white/10 text-xs font-semibold">
              <button
                onClick={() => toggleLang('EN')}
                className={`px-3 py-1 rounded-full transition-all text-[11px] ${
                  lang === 'EN'
                    ? 'bg-sky-500 text-white shadow-sm'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                EN
              </button>
              <button
                onClick={() => toggleLang('BN')}
                className={`px-3 py-1 rounded-full transition-all text-[11px] ${
                  lang === 'BN'
                    ? 'bg-sky-500 text-white shadow-sm'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                BN
              </button>
            </div>

            <Link to="/admin">
              <Button variant="outline" size="sm" className="!rounded-full border-white/30 text-white hover:bg-white/10">
                Admin
              </Button>
            </Link>

            <Button variant="primary" size="sm" className="!rounded-full">
              Donate
            </Button>
          </div>

          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-sky-400 hover:text-white focus:outline-none rounded-full hover:bg-white/10"
              aria-label="Toggle Navigation Menu"
            >
              {isMobileMenuOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
            </button>
          </div>
        </nav>

        {isMobileMenuOpen && (
          <div className="lg:hidden mt-2 bg-slate-950/95 backdrop-blur-xl border border-slate-800 rounded-3xl p-5 shadow-2xl text-white flex flex-col gap-3 transition-all animate-fadeIn">
            <div className="flex flex-col gap-1">
              {navLinks.map((link, idx) => (
                <Link
                  key={idx}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                    link.active
                      ? 'bg-sky-500/20 text-sky-400 font-bold border border-sky-500/30'
                      : 'text-slate-300 hover:bg-white/5'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <div className="pt-3 border-t border-slate-800 flex flex-col gap-3">
              <div className="flex justify-between items-center bg-white/10 p-1 rounded-full">
                <button
                  onClick={() => toggleLang('EN')}
                  className={`flex-1 py-1.5 rounded-full text-xs font-semibold transition-all ${
                    lang === 'EN' ? 'bg-sky-500 text-white' : 'text-slate-300'
                  }`}
                >
                  English (EN)
                </button>
                <button
                  onClick={() => toggleLang('BN')}
                  className={`flex-1 py-1.5 rounded-full text-xs font-semibold transition-all ${
                    lang === 'BN' ? 'bg-sky-500 text-white' : 'text-slate-300'
                  }`}
                >
                  বাংলা (BN)
                </button>
              </div>

              <div className="grid grid-cols-2 gap-2 pt-1">
                <Link to="/admin" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button variant="outline" size="sm" fullWidth className="!rounded-full border-white/30 text-white">
                    Admin
                  </Button>
                </Link>
                <Button variant="primary" size="sm" fullWidth className="!rounded-full">
                  Donate
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;