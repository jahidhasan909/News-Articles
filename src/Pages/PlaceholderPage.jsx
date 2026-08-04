import React from 'react';
import { Link } from 'react-router';
import { FiHome, FiChevronRight, FiCheckCircle } from 'react-icons/fi';
import Button from '../Components/UI/Button';

const PlaceholderPage = ({ title, category = 'MaxValid Foundation' }) => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 pt-24 pb-16 px-4">
      <div className="max-w-4xl mx-auto space-y-8 text-center">
        <div className="bg-white border border-slate-200 rounded-3xl p-8 sm:p-12 shadow-sm space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-50 text-sky-600 text-xs font-bold border border-sky-200">
            <FiCheckCircle className="w-4 h-4" />
            <span>{category}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            {title}
          </h1>

          <p className="text-slate-600 text-sm sm:text-base max-w-lg mx-auto leading-relaxed">
            Welcome to the {title} portal. This section is currently under active development as part of our foundation's initiative.
          </p>

          <div className="pt-4 flex items-center justify-center gap-3">
            <Link to="/">
              <Button variant="primary" size="md">
                Return to Home
              </Button>
            </Link>
            <Link to="/admin">
              <Button variant="outline" size="md">
                Go to Admin Dashboard
              </Button>
            </Link>
          </div>
        </div>

        <nav aria-label="Breadcrumb" className="inline-flex items-center gap-2 text-xs font-semibold text-slate-500 bg-white px-4 py-2 rounded-full border border-slate-200">
          <Link to="/" className="flex items-center gap-1 hover:text-sky-600 transition-colors">
            <FiHome className="w-3.5 h-3.5" />
            <span>Home</span>
          </Link>
          <FiChevronRight className="w-3 h-3 text-slate-400" />
          <span className="text-sky-600">{title}</span>
        </nav>
      </div>
    </div>
  );
};

export default PlaceholderPage;
