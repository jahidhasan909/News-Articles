import React, { useState } from 'react';
import { Link, useLocation } from 'react-router';
import { FiChevronDown, FiMenu, FiX } from 'react-icons/fi';
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
    <header className="w-full fixed top-0 left-0 right-0 z-50 px-4 pt-4 pb-2">
      <div className="max-w-7xl mx-auto">
        <nav className="relative bg-slate-900/60 backdrop-blur-md border border-white/20 rounded-full px-6 py-2.5 shadow-xl flex items-center justify-between text-white">
          <Link to="/admin" className="flex items-center group bg-white/20 px-1 py-1 rounded-full">
            <div className="w-10 h-10 rounded-full shadow-md overflow-hidden ring-2 ring-white/30 group-hover:scale-105 transition-transform">
              <img className="w-full h-full object-cover" src="https://i.ibb.co.com/BVjMGXbP/jahidhasan.jpg" alt="Logo" />
            </div>
          </Link>

          <ul className="hidden lg:flex items-center gap-1 xl:gap-2 text-xs font-semibold">
            {navLinks.map((link, idx) => {
              const isActive = link.active || location.pathname === link.path;
              if (link.submenu) {
                return (
                  <li key={idx} className="relative group/dropdown py-1">
                    <button
                      className={`flex items-center gap-1 px-3.5 py-2 rounded-full transition-all cursor-pointer ${
                        isActive
                          ? 'text-sky-400 font-bold bg-white/10'
                          : 'text-slate-100 hover:text-sky-400 hover:bg-white/10'
                      }`}
                    >
                      {link.name}
                      <FiChevronDown className="w-3 h-3 group-hover/dropdown:rotate-180 transition-transform duration-200" />
                    </button>

                    <div className="absolute top-full left-0 pt-2 w-48 opacity-0 translate-y-1 pointer-events-none group-hover/dropdown:opacity-100 group-hover/dropdown:translate-y-0 group-hover/dropdown:pointer-events-auto transition-all duration-200 z-50">
                      <div className="bg-slate-900/95 backdrop-blur-xl border border-slate-700/80 rounded-2xl p-2 shadow-2xl space-y-0.5">
                        {link.submenu.map((sub, sIdx) => (
                          <Link
                            key={sIdx}
                            to={sub.path}
                            className="block px-3 py-2 text-xs text-slate-200 hover:text-sky-400 hover:bg-white/10 rounded-xl transition-colors"
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </li>
                );
              }

              return (
                <li key={idx}>
                  <Link
                    to={link.path}
                    className={`block px-3.5 py-2 rounded-full transition-all ${
                      isActive
                        ? 'text-sky-400 font-bold underline underline-offset-8 decoration-2 decoration-sky-400 bg-white/10'
                        : 'text-slate-100 hover:text-sky-400 hover:bg-white/10'
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="hidden lg:flex items-center gap-3">
            <div className="bg-white/10 p-1 rounded-full flex items-center border border-white/20 text-xs font-semibold backdrop-blur-xs">
              <button
                onClick={() => toggleLang('EN')}
                className={`px-3 py-1 rounded-full transition-all text-[11px] ${
                  lang === 'EN'
                    ? 'bg-sky-500 text-white shadow-sm'
                    : 'text-slate-200 hover:text-white'
                }`}
              >
                EN
              </button>
              <button
                onClick={() => toggleLang('BN')}
                className={`px-3 py-1 rounded-full transition-all text-[11px] ${
                  lang === 'BN'
                    ? 'bg-sky-500 text-white shadow-sm'
                    : 'text-slate-200 hover:text-white'
                }`}
              >
                BN
              </button>
            </div>

            <Link to="/">
              <Button variant="outline" size="sm" className="!rounded-full border-white/30 text-white hover:bg-white/15">
                Sign In
              </Button>
            </Link>

            <Button variant="primary" size="sm" className="!rounded-full shadow-md shadow-sky-500/30">
              Donate
            </Button>
          </div>

          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-white hover:text-sky-400 focus:outline-none rounded-full hover:bg-white/10 transition-colors"
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
            </button>
          </div>
        </nav>

        {isMobileMenuOpen && (
          <div className="lg:hidden mt-2 bg-slate-900/95 backdrop-blur-xl border border-slate-800 rounded-3xl p-5 shadow-2xl text-white flex flex-col gap-3">
            <div className="flex flex-col gap-1">
              {navLinks.map((link, idx) => (
                <Link
                  key={idx}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`px-4 py-2.5 rounded-xl text-sm font-semibold transition-colors ${
                    link.active
                      ? 'bg-sky-500/20 text-sky-400 font-bold border border-sky-500/30'
                      : 'text-slate-200 hover:bg-white/10'
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
                  className={`flex-1 py-1.5 hover:cursor-pointer rounded-full text-xs font-semibold transition-all ${
                    lang === 'EN' ? 'bg-sky-500 text-white' : 'text-slate-300'
                  }`}
                >
                  English (EN)
                </button>
                <button
                  onClick={() => toggleLang('BN')}
                  className={`flex-1 py-1.5 hover:cursor-pointer rounded-full text-xs font-semibold transition-all ${
                    lang === 'BN' ? 'bg-sky-500 text-white' : 'text-slate-300'
                  }`}
                >
                  বাংলা (BN)
                </button>
              </div>

              <div className="grid grid-cols-2 gap-2 pt-1">
                <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button variant="outline" size="sm" fullWidth className="!rounded-full border-white/30 text-white">
                    Sign In
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