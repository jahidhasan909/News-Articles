import React from 'react';
import { FiCalendar, FiArrowRight, FiEye } from 'react-icons/fi';
import Badge from '../UI/Badge';

const FeaturedArticle = ({ article, onSelectArticle }) => {
  if (!article) return null;

  return (
    <div className="w-full mb-10">
      <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4 tracking-tight">
        Featured News & Articles
      </h2>

      <div
        onClick={() => onSelectArticle && onSelectArticle(article)}
        className="group relative bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl border border-slate-200 transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-0 cursor-pointer"
      >
        <div className="lg:col-span-6 relative h-64 sm:h-80 lg:h-auto overflow-hidden">
          <img
            src={article.thumbnail}
            alt={article.title}
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute top-4 left-4 z-10">
            <Badge variant="sky" size="md" className="shadow-md bg-sky-500 text-white border-none font-bold">
              {article.category}
            </Badge>
          </div>
        </div>

        <div className="lg:col-span-6 p-6 sm:p-8 flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <div className="flex items-center gap-4 text-xs text-slate-500 font-medium">
              <span className="flex items-center gap-1.5">
                <FiCalendar className="w-3.5 h-3.5 text-sky-500" />
                {article.publishedDate}
              </span>
              <span className="flex items-center gap-1.5">
                <FiEye className="w-3.5 h-3.5 text-sky-500" />
                {article.views || 1420} views
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 group-hover:text-sky-600 transition-colors leading-tight">
              {article.title}
            </h3>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed line-clamp-3">
              {article.excerpt}
            </p>
          </div>

          <div className="pt-2 flex items-center text-sky-600 font-bold text-sm gap-2 group-hover:gap-3 transition-all">
            <span>Read Full Story</span>
            <FiArrowRight className="w-4 h-4" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedArticle;
