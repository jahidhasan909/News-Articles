import React from 'react';
import { Link } from 'react-router';
import {
  FiGrid,
  FiUsers,
  FiFileText,
  FiLayers,
  FiLogOut,
  FiChevronLeft,
} from 'react-icons/fi';

const AdminSidebar = ({ activeTab = 'blog' }) => {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: FiGrid, path: '/admin' },
    { id: 'user', label: 'User Management', icon: FiUsers, path: '/admin' },
    { id: 'blog', label: 'Blog & News Management', icon: FiFileText, path: '/admin', active: true },
    { id: 'testing', label: 'Testing Management', icon: FiLayers, path: '/admin' },
  ];

  return (
    <aside className="w-64 bg-slate-900 text-slate-300 min-h-screen p-5 flex flex-col justify-between border-r border-slate-800 shrink-0">
      <div className="space-y-8">
        <div className="flex items-center gap-3 px-2">
          <div className="w-9 h-9 rounded-xl bg-sky-500 flex items-center justify-center font-bold text-white shadow-md">
            MV
          </div>
          <div>
            <h3 className="font-bold text-white text-sm">MaxValid Admin</h3>
            <p className="text-[10px] text-slate-400">Content Portal</p>
          </div>
        </div>

        <nav className="space-y-1.5">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = item.active || item.id === activeTab;
            return (
              <Link
                key={item.id}
                to={item.path}
                className={`flex items-center gap-3 px-3.5 py-3 rounded-xl text-xs font-semibold transition-all ${
                  isActive
                    ? 'bg-sky-500 text-white shadow-md shadow-sky-500/20'
                    : 'text-slate-400 hover:bg-slate-800 hover:text-slate-200'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>
      </div>

      <div className="pt-6 border-t border-slate-800 space-y-3">
        <Link
          to="/"
          className="flex items-center gap-2 px-3 py-2 text-xs font-medium text-slate-400 hover:text-white transition-colors"
        >
          <FiChevronLeft className="w-4 h-4" />
          <span>Back to Public Site</span>
        </Link>

        <div className="flex items-center justify-between p-3 rounded-xl bg-slate-800/60 border border-slate-700/50">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-sky-500/20 text-sky-400 font-bold text-xs flex items-center justify-center">
              SA
            </div>
            <div>
              <p className="text-xs font-bold text-white leading-tight">Super Admin</p>
              <p className="text-[10px] text-slate-400">admin@maxvalid.com</p>
            </div>
          </div>
          <button className="text-slate-400 hover:text-red-400 transition-colors">
            <FiLogOut className="w-4 h-4" />
          </button>
        </div>
      </div>
    </aside>
  );
};

export default AdminSidebar;
