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
        <nav className="relative bg-white/90 backdrop-blur-md border border-slate-200/80 rounded-full px-6 py-2.5 shadow-lg flex items-center justify-between text-slate-800">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full bg-sky-500 p-0.5 shadow-md group-hover:scale-105 transition-transform flex items-center justify-center font-black text-white text-sm">
              MH
            </div>
            <div className="hidden sm:flex flex-col">
              <span className="font-bold text-sm leading-tight text-slate-900">
                MaxValid
              </span>
              <span className="text-[10px] text-slate-500 font-medium uppercase">
                Foundation
              </span>
            </div>
          </Link>

          <ul className="hidden lg:flex items-center gap-1 xl:gap-2 text-xs font-semibold">
            {navLinks.map((link, idx) => {
              const isActive = link.active || location.pathname === link.path;
              if (link.submenu) {
                return (
                  <li key={idx} className="relative group/dropdown">
                    <button
                      className={`flex items-center gap-1 px-3 py-2 rounded-full transition-colors ${
                        isActive
                          ? 'text-sky-600 font-bold'
                          : 'text-slate-700 hover:text-sky-600 hover:bg-slate-100'
                      }`}
                    >
                      {link.name}
                      <FiChevronDown className="w-3 h-3 group-hover/dropdown:rotate-180 transition-transform duration-200" />
                    </button>

                    <div className="absolute top-full left-0 mt-2 w-48 opacity-0 translate-y-2 pointer-events-none group-hover/dropdown:opacity-100 group-hover/dropdown:translate-y-0 group-hover/dropdown:pointer-events-auto transition-all duration-200 bg-white border border-slate-200 rounded-2xl p-2 shadow-xl z-50">
                      {link.submenu.map((sub, sIdx) => (
                        <Link
                          key={sIdx}
                          to={sub.path}
                          className="block px-3 py-2 text-xs text-slate-700 hover:text-sky-600 hover:bg-slate-50 rounded-xl transition-colors"
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
                        ? 'text-sky-600 font-bold underline underline-offset-8 decoration-2 decoration-sky-500'
                        : 'text-slate-700 hover:text-sky-600 hover:bg-slate-100'
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="hidden lg:flex items-center gap-3">
            <div className="bg-slate-100 p-1 rounded-full flex items-center border border-slate-200 text-xs font-semibold">
              <button
                onClick={() => toggleLang('EN')}
                className={`px-3 py-1 rounded-full transition-all text-[11px] ${
                  lang === 'EN'
                    ? 'bg-sky-500 text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                EN
              </button>
              <button
                onClick={() => toggleLang('BN')}
                className={`px-3 py-1 rounded-full transition-all text-[11px] ${
                  lang === 'BN'
                    ? 'bg-sky-500 text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                BN
              </button>
            </div>

            <Link to="/admin">
              <Button variant="outline" size="sm" className="!rounded-full border-slate-300 text-slate-700 hover:bg-slate-100">
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
              className="p-2 text-slate-700 hover:text-sky-600 focus:outline-none rounded-full hover:bg-slate-100"
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
            </button>
          </div>
        </nav>

        {isMobileMenuOpen && (
          <div className="lg:hidden mt-2 bg-white border border-slate-200 rounded-3xl p-5 shadow-2xl text-slate-900 flex flex-col gap-3">
            <div className="flex flex-col gap-1">
              {navLinks.map((link, idx) => (
                <Link
                  key={idx}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`px-4 py-2.5 rounded-xl text-sm font-semibold transition-colors ${
                    link.active
                      ? 'bg-sky-50 text-sky-600 font-bold border border-sky-200'
                      : 'text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <div className="pt-3 border-t border-slate-200 flex flex-col gap-3">
              <div className="flex justify-between items-center bg-slate-100 p-1 rounded-full">
                <button
                  onClick={() => toggleLang('EN')}
                  className={`flex-1 py-1.5 rounded-full text-xs font-semibold ${
                    lang === 'EN' ? 'bg-sky-500 text-white' : 'text-slate-600'
                  }`}
                >
                  English (EN)
                </button>
                <button
                  onClick={() => toggleLang('BN')}
                  className={`flex-1 py-1.5 rounded-full text-xs font-semibold ${
                    lang === 'BN' ? 'bg-sky-500 text-white' : 'text-slate-600'
                  }`}
                >
                  বাংলা (BN)
                </button>
              </div>

              <div className="grid grid-cols-2 gap-2 pt-1">
                <Link to="/admin" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button variant="outline" size="sm" fullWidth className="!rounded-full border-slate-300 text-slate-700">
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