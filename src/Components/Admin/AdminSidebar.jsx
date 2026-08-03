import React from 'react';
import { Link } from 'react-router';
import {
  FiGrid,
  FiUsers,
  FiFileText,
  FiLayers,
  FiLogOut,
  FiChevronLeft,
  FiX,
} from 'react-icons/fi';

const AdminSidebar = ({ activeTab = 'blog', isOpen = false, onClose }) => {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: FiGrid, path: '/admin' },
    { id: 'user', label: 'User Management', icon: FiUsers, path: '/admin' },
    { id: 'blog', label: 'Blog & News Management', icon: FiFileText, path: '/admin', active: true },
    { id: 'testing', label: 'Testing Management', icon: FiLayers, path: '/admin' },
  ];

  const sidebarContent = (
    <div className="h-full flex flex-col justify-between p-5 text-slate-700">
      <div className="space-y-6">
        <div className="flex items-center justify-between px-2">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-sky-500 flex items-center justify-center font-bold text-white shadow-sm">
              MV
            </div>
            <div>
              <h3 className="font-bold text-slate-900 text-sm">MaxValid Admin</h3>
              <p className="text-[10px] text-slate-400">Content Portal</p>
            </div>
          </div>

          {onClose && (
            <button
              onClick={onClose}
              className="lg:hidden p-2 text-slate-400 hover:text-slate-600 rounded-lg"
            >
              <FiX className="w-5 h-5" />
            </button>
          )}
        </div>

        <nav className="space-y-1.5">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = item.active || item.id === activeTab;
            return (
              <Link
                key={item.id}
                to={item.path}
                onClick={onClose}
                className={`flex items-center gap-3 px-3.5 py-3 rounded-xl text-xs font-bold transition-all ${
                  isActive
                    ? 'bg-sky-500 text-white shadow-md shadow-sky-500/20'
                    : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>
      </div>

      <div className="pt-6 border-t border-slate-200 space-y-3">
        <Link
          to="/"
          onClick={onClose}
          className="flex items-center gap-2 px-3 py-2 text-xs font-semibold text-slate-600 hover:text-sky-600 transition-colors"
        >
          <FiChevronLeft className="w-4 h-4" />
          <span>Back to Public Site</span>
        </Link>

        <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-200">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-sky-500/10 text-sky-600 font-bold text-xs flex items-center justify-center">
              SA
            </div>
            <div>
              <p className="text-xs font-bold text-slate-900 leading-tight">Super Admin</p>
              <p className="text-[10px] text-slate-500">admin@maxvalid.com</p>
            </div>
          </div>
          <button className="text-slate-400 hover:text-red-500 transition-colors">
            <FiLogOut className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <aside className="hidden lg:block w-64 bg-white border-r border-slate-200 shrink-0 min-h-screen">
        {sidebarContent}
      </aside>

      {isOpen && (
        <div className="fixed inset-0 z-[9999] lg:hidden flex">
          <div
            className="fixed inset-0 bg-slate-900/50 backdrop-blur-xs"
            onClick={onClose}
          />
          <aside className="relative w-72 bg-white h-full z-10 shadow-2xl overflow-y-auto">
            {sidebarContent}
          </aside>
        </div>
      )}
    </>
  );
};

export default AdminSidebar;
