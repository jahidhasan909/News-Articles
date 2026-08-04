import React, { useState } from 'react';
import AdminSidebar from '../Components/Admin/AdminSidebar';
import { FiMenu, FiChevronRight, FiCheckCircle } from 'react-icons/fi';
import Button from '../Components/UI/Button';
import { Link } from 'react-router';

const AdminPlaceholderPage = ({ title, activeTab, description }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-slate-50 text-slate-900 font-sans relative">
      <AdminSidebar
        activeTab={activeTab}
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />

      <main className="flex-1 w-full p-4 sm:p-6 lg:p-8 overflow-y-auto max-w-7xl mx-auto">
        <div className="flex items-center gap-3 pb-6 border-b border-slate-200">
          <button
            onClick={() => setIsSidebarOpen(true)}
            className="lg:hidden p-2 text-slate-600 hover:text-sky-600 bg-white border border-slate-200 rounded-xl shadow-xs"
            aria-label="Open Navigation Menu"
          >
            <FiMenu className="w-5 h-5" />
          </button>

          <div>
            <div className="flex items-center gap-2 text-xs text-slate-500 mb-1">
              <span>Admin</span>
              <FiChevronRight className="w-3 h-3" />
              <span className="text-sky-600 font-semibold">{title}</span>
            </div>
            <h1 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
              {title}
            </h1>
          </div>
        </div>

        <div className="my-10 bg-white border border-slate-200 rounded-3xl p-8 sm:p-12 shadow-xs text-center space-y-6 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-50 text-sky-600 text-xs font-bold border border-sky-200">
            <FiCheckCircle className="w-4 h-4" />
            <span>Admin Control Panel</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            {title} Module
          </h2>

          <p className="text-slate-600 text-xs sm:text-sm max-w-md mx-auto leading-relaxed">
            {description || `The ${title} module is configured and fully integrated into the routing system. Management controls are ready.`}
          </p>

          <div className="pt-4 flex items-center justify-center gap-3">
            <Link to="/admin">
              <Button variant="primary" size="sm">
                Blog & News Management
              </Button>
            </Link>
            <Link to="/">
              <Button variant="outline" size="sm">
                Public Home Page
              </Button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminPlaceholderPage;
