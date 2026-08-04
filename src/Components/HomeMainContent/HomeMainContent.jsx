import React, { useState } from 'react';
import CategoryMenu from './CategoryManu';
import FeaturedArticle from './FeaturedArticle';
import ArticleGrid from './ArticleGrid';
import SearchBar from './SearchBar';
import Pagination from './Pagination';
import Modal from '../UI/Modal';
import Badge from '../UI/Badge';
import { FiCalendar, FiEye, FiUser, FiLoader, FiAlertCircle, FiRefreshCw } from 'react-icons/fi';

const HomeMainContent = ({ articleState }) => {
  const {
    filteredArticles,
    paginatedArticles,
    featuredArticle,
    searchQuery,
    setSearchQuery,
    selectedCategory,
    setSelectedCategory,
    currentPage,
    setCurrentPage,
    totalPages,
    articles,
    loading,
    error,
    refetch,
  } = articleState;

  const [selectedArticleModal, setSelectedArticleModal] = useState(null);

  if (loading) {
    return (
      <main className="w-full bg-slate-50 py-20 px-4 text-center flex flex-col items-center justify-center min-h-[400px]">
        <div className="w-12 h-12 rounded-full border-4 border-sky-200 border-t-sky-500 animate-spin mb-4" />
        <p className="text-sm font-semibold text-slate-700">Loading articles from server...</p>
      </main>
    );
  }

  if (error) {
    return (
      <main className="w-full bg-slate-50 py-20 px-4 text-center flex flex-col items-center justify-center min-h-[400px]">
        <div className="w-14 h-14 rounded-full bg-red-50 text-red-500 flex items-center justify-center mb-4">
          <FiAlertCircle className="w-8 h-8" />
        </div>
        <h3 className="text-lg font-bold text-slate-900 mb-1">Failed to load articles</h3>
        <p className="text-xs text-slate-500 max-w-md mb-4">{error}</p>
        <button
          onClick={refetch}
          className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-full bg-sky-500 text-white hover:bg-sky-600 transition-colors shadow-sm"
        >
          <FiRefreshCw className="w-3.5 h-3.5" />
          <span>Try Again</span>
        </button>
      </main>
    );
  }

  return (
    <main className="w-full bg-slate-50 py-6 sm:py-10 lg:py-14 px-3 sm:px-6 lg:px-8 text-slate-900">
      <div className="max-w-7xl mx-auto space-y-6 sm:space-y-8">
        <SearchBar
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          placeholder="Search by title, keywords, or content..."
        />

        {!searchQuery && selectedCategory === 'All News & Articles' && (
          <FeaturedArticle
            article={featuredArticle}
            onSelectArticle={(art) => setSelectedArticleModal(art)}
          />
        )}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          <div className="lg:col-span-3 w-full">
            <CategoryMenu
              selectedCategory={selectedCategory}
              onSelectCategory={setSelectedCategory}
              articles={articles}
            />
          </div>

          <div className="lg:col-span-9 flex flex-col justify-between w-full">
            <div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 sm:mb-6 pb-2 border-b border-slate-200 gap-2">
                <h2 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight">
                  {selectedCategory}
                </h2>
                <span className="text-xs text-slate-500 font-medium">
                  Showing {paginatedArticles.length} of {filteredArticles.length} articles
                </span>
              </div>

              <ArticleGrid
                articles={paginatedArticles}
                onSelectArticle={(art) => setSelectedArticleModal(art)}
              />
            </div>

            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          </div>
        </div>
      </div>

      <Modal
        isOpen={!!selectedArticleModal}
        onClose={() => setSelectedArticleModal(null)}
        maxWidth="max-w-3xl"
      >
        {selectedArticleModal && (
          <div className="space-y-5 sm:space-y-6">
            <div className="relative h-48 sm:h-72 md:h-80 w-full rounded-xl sm:rounded-2xl overflow-hidden">
              <img
                src={selectedArticleModal.thumbnail}
                alt={selectedArticleModal.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3 left-3 sm:top-4 sm:left-4">
                <Badge variant="sky" size="md" className="bg-sky-500 text-white font-bold border-none shadow-md text-xs">
                  {selectedArticleModal.category}
                </Badge>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs text-slate-500 font-medium border-b border-slate-100 pb-3">
                <span className="flex items-center gap-1.5">
                  <FiCalendar className="text-sky-500" />
                  {selectedArticleModal.publishedDate}
                </span>
                <span className="flex items-center gap-1.5">
                  <FiUser className="text-sky-500" />
                  {selectedArticleModal.author || 'As-Sunnah Team'}
                </span>
                <span className="flex items-center gap-1.5">
                  <FiEye className="text-sky-500" />
                  {selectedArticleModal.views || 0} views
                </span>
              </div>

              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 leading-tight">
                {selectedArticleModal.title}
              </h2>
            </div>

            <div className="prose max-w-none text-slate-700 text-xs sm:text-sm md:text-base leading-relaxed space-y-4">
              <p className="font-semibold text-slate-800">
                {selectedArticleModal.excerpt}
              </p>
              <p>
                {selectedArticleModal.body}
              </p>
            </div>
          </div>
        )}
      </Modal>
    </main>
  );
};

export default HomeMainContent;