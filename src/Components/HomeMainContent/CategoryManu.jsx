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
    <aside className="w-full bg-white rounded-3xl p-5 border border-slate-200 shadow-xs sticky top-28">
      <h3 className="text-base font-bold text-slate-900 mb-4 pb-3 border-b border-slate-100 tracking-tight">
        Categories
      </h3>

      <ul className="flex flex-col gap-1.5 max-h-[600px] overflow-y-auto pr-1">
        {CATEGORIES.map((category, index) => {
          const isSelected =
            selectedCategory === category ||
            (selectedCategory === 'All News & Media' && category === 'All News & Articles');
          const count = getCategoryCount(category);

          return (
            <li key={index}>
              <button
                onClick={() => onSelectCategory && onSelectCategory(category)}
                className={`w-full flex items-center justify-between text-left px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? 'bg-sky-50 text-sky-600 font-bold border border-sky-200'
                    : 'text-slate-700 hover:bg-slate-50 hover:text-slate-900'
                }`}
              >
                <span className="truncate pr-2">{category}</span>
                <span
                  className={`text-[10px] font-semibold px-2 py-0.5 rounded-full shrink-0 ${
                    isSelected
                      ? 'bg-sky-500 text-white'
                      : 'bg-slate-100 text-slate-500'
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