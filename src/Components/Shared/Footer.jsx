import React from 'react';
import { Link } from 'react-router';

const Footer = () => {
  return (
    <footer className="w-full bg-slate-950 text-slate-400 pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-sky-500 to-indigo-600 p-0.5 shadow-md">
                <div className="w-full h-full bg-slate-900 rounded-full flex items-center justify-center font-black text-sky-400 text-sm">
                  MH
                </div>
              </div>
              <span className="font-bold text-lg text-white tracking-tight">
                MaxValid Foundation
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 max-w-md leading-relaxed">
              This foundation is working to build a welfare service by following the foundation of the Prophet (Peace Be Upon Him). As the Messenger of Allah (Peace and Blessings Be Upon Him) said: the best of human beings is the servant of humanity.
            </p>
          </div>

          <div className="md:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Company
            </h4>
            <ul className="space-y-2 text-xs font-medium">
              <li><Link to="/" className="hover:text-sky-400 transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-sky-400 transition-colors">About Us</Link></li>
              <li><Link to="/gallery" className="hover:text-sky-400 transition-colors">Our Work</Link></li>
              <li><Link to="/donate" className="hover:text-sky-400 transition-colors">Donate</Link></li>
              <li><Link to="/" className="hover:text-sky-400 transition-colors">Blog & News</Link></li>
            </ul>
          </div>

          <div className="md:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Issues
            </h4>
            <ul className="space-y-2 text-xs font-medium">
              <li><Link to="/events" className="hover:text-sky-400 transition-colors">Events</Link></li>
              <li><Link to="/blood" className="hover:text-sky-400 transition-colors">Blood Donation</Link></li>
              <li><Link to="/blood-request" className="hover:text-sky-400 transition-colors">Blood Request</Link></li>
            </ul>
          </div>

          <div className="md:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Others
            </h4>
            <ul className="space-y-2 text-xs font-medium">
              <li><Link to="/contact" className="hover:text-sky-400 transition-colors">Contact</Link></li>
              <li><Link to="/terms" className="hover:text-sky-400 transition-colors">Terms of Conditions</Link></li>
              <li><Link to="/privacy" className="hover:text-sky-400 transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2026 MaxValid Foundation. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link to="/privacy" className="hover:text-slate-400">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-slate-400">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;