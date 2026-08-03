import React from 'react';
import { FiSearch, FiX } from 'react-icons/fi';

const SearchBar = ({ searchQuery, setSearchQuery, placeholder = 'Search articles...' }) => {
  return (
    <div className="w-full mb-8">
      <div className="relative flex items-center w-full shadow-sm rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 transition-all focus-within:ring-4 focus-within:ring-sky-500/20 focus-within:border-sky-500">
        <div className="pl-4 text-slate-400">
          <FiSearch className="w-5 h-5" />
        </div>

        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder={placeholder}
          className="w-full py-3.5 px-3 text-slate-900 dark:text-slate-100 placeholder-slate-400 bg-transparent text-sm sm:text-base outline-none"
        />

        {searchQuery && (
          <button
            onClick={() => setSearchQuery('')}
            className="pr-4 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors"
            aria-label="Clear search"
          >
            <FiX className="w-5 h-5" />
          </button>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
