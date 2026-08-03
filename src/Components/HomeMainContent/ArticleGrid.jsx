import React from 'react';
import ArticleCard from './ArticleCard';
import { FiInbox } from 'react-icons/fi';

const ArticleGrid = ({ articles = [], onSelectArticle }) => {
  if (!articles || articles.length === 0) {
    return (
      <div className="w-full bg-white rounded-3xl p-8 sm:p-12 text-center border border-slate-200 shadow-xs flex flex-col items-center justify-center gap-3">
        <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-slate-100 flex items-center justify-center text-slate-400">
          <FiInbox className="w-6 h-6 sm:w-7 sm:h-7" />
        </div>
        <h4 className="text-base sm:text-lg font-bold text-slate-900">No articles found</h4>
        <p className="text-xs sm:text-sm text-slate-500 max-w-md">
          We couldn't find any articles matching your search or category filter. Try clearing your search parameters.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
      {articles.map((article) => (
        <ArticleCard
          key={article.id}
          article={article}
          onSelectArticle={onSelectArticle}
        />
      ))}
    </div>
  );
};

export default ArticleGrid;
