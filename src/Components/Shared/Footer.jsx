import React from 'react';
import { Link } from 'react-router';

const Footer = () => {
  return (
    <footer className="w-full bg-slate-950 text-slate-400 pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-3">
              <img className="w-10 h-10 rounded-full shadow-md overflow-hidden ring-2 ring-white/30" src="https://i.ibb.co.com/BVjMGXbP/jahidhasan.jpg" alt="Logo" />
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

        <div className="pt-8  text-xs text-slate-500 text-center">
          <p>© 2026 MaxValid Foundation. All rights reserved.</p>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;