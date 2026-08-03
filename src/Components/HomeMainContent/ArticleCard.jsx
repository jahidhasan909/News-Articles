import React from 'react';
import { FiCalendar, FiEye, FiArrowRight } from 'react-icons/fi';
import Badge from '../UI/Badge';

const ArticleCard = ({ article, onSelectArticle }) => {
  if (!article) return null;

  return (
    <article
      onClick={() => onSelectArticle && onSelectArticle(article)}
      className="group bg-white dark:bg-slate-900 rounded-3xl overflow-hidden border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between cursor-pointer transform hover:-translate-y-1"
    >
      <div>
        <div className="relative h-48 sm:h-52 w-full overflow-hidden">
          <img
            src={article.thumbnail}
            alt={article.title}
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute top-3 left-3 z-10">
            <Badge variant="sky" size="sm" className="shadow-xs font-semibold backdrop-blur-md bg-white/90 dark:bg-slate-900/90">
              {article.category}
            </Badge>
          </div>
        </div>

        <div className="p-5 sm:p-6 space-y-3">
          <div className="flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400 font-medium">
            <span className="flex items-center gap-1.5">
              <FiCalendar className="w-3.5 h-3.5 text-sky-500" />
              {article.publishedDate}
            </span>
            <span className="flex items-center gap-1">
              <FiEye className="w-3.5 h-3.5 text-sky-500" />
              {article.views || 0}
            </span>
          </div>

          <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white group-hover:text-sky-500 transition-colors leading-snug line-clamp-2">
            {article.title}
          </h3>

          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 line-clamp-3 leading-relaxed">
            {article.excerpt}
          </p>
        </div>
      </div>

      <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-2 border-t border-slate-50 dark:border-slate-800/50 flex items-center justify-between">
        <span className="text-xs font-semibold text-sky-500 group-hover:underline flex items-center gap-1">
          Read details
          <FiArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
        </span>
        <span className="text-[10px] text-slate-400 font-mono">
          {article.author || 'As-Sunnah'}
        </span>
      </div>
    </article>
  );
};

export default ArticleCard;
