import React from 'react';
import ArticleCard from './ArticleCard';
import { FiInbox } from 'react-icons/fi';

const ArticleGrid = ({ articles = [], onSelectArticle }) => {
  if (!articles || articles.length === 0) {
    return (
      <div className="w-full bg-white dark:bg-slate-900 rounded-3xl p-12 text-center border border-slate-100 dark:border-slate-800 shadow-sm flex flex-col items-center justify-center gap-3">
        <div className="w-14 h-14 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-400">
          <FiInbox className="w-7 h-7" />
        </div>
        <h4 className="text-lg font-bold text-slate-900 dark:text-white">No articles found</h4>
        <p className="text-sm text-slate-500 max-w-md">
          We couldn't find any articles matching your search or category filter. Try clearing your search parameters.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
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
