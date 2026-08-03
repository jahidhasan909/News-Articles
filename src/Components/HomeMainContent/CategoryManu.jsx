import React from 'react';
import { CATEGORIES } from '../../data/mockArticles';

const CategoryMenu = ({ selectedCategory, onSelectCategory, articles = [] }) => {
  const getCategoryCount = (categoryName) => {
    if (categoryName === 'All News & Articles' || categoryName === 'All News & Media') {
      return articles.length;
    }
    return articles.filter(
      (art) => art.category.toLowerCase() === categoryName.toLowerCase()
    ).length;
  };

  return (
    <aside className="w-full bg-white dark:bg-slate-900 rounded-3xl p-5 border border-slate-100 dark:border-slate-800 shadow-sm sticky top-28">
      <h3 className="text-base font-bold text-slate-900 dark:text-white mb-4 pb-3 border-b border-slate-100 dark:border-slate-800 tracking-tight">
        Categories
      </h3>

      <ul className="flex flex-col gap-1.5 max-h-[600px] overflow-y-auto pr-1 custom-scrollbar">
        {CATEGORIES.map((category, index) => {
          const isSelected =
            selectedCategory === category ||
            (selectedCategory === 'All News & Media' && category === 'All News & Articles');
          const count = getCategoryCount(category);

          return (
            <li key={index}>
              <button
                onClick={() => onSelectCategory && onSelectCategory(category)}
                className={`w-full flex items-center justify-between text-left px-3.5 py-2.5 rounded-xl text-xs font-medium transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? 'bg-sky-50 dark:bg-sky-950/60 text-sky-600 dark:text-sky-400 font-bold shadow-xs border border-sky-200 dark:border-sky-800/80'
                    : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800/50 hover:text-slate-900 dark:hover:text-slate-200'
                }`}
              >
                <span className="truncate pr-2">{category}</span>
                <span
                  className={`text-[10px] font-semibold px-2 py-0.5 rounded-full shrink-0 ${
                    isSelected
                      ? 'bg-sky-500 text-white'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400'
                  }`}
                >
                  {count}
                </span>
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default CategoryMenu;