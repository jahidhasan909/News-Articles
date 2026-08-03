import React, { useState } from 'react';
import CategoryMenu from './CategoryManu';
import FeaturedArticle from './FeaturedArticle';
import ArticleGrid from './ArticleGrid';
import SearchBar from './SearchBar';
import Pagination from './Pagination';
import Modal from '../UI/Modal';
import Badge from '../UI/Badge';
import { FiCalendar, FiEye, FiUser } from 'react-icons/fi';

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
  } = articleState;

  const [selectedArticleModal, setSelectedArticleModal] = useState(null);

  return (
    <main className="w-full bg-slate-50 py-12 px-4 sm:px-6 lg:px-8 text-slate-900">
      <div className="max-w-7xl mx-auto space-y-8">
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

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-3">
            <CategoryMenu
              selectedCategory={selectedCategory}
              onSelectCategory={setSelectedCategory}
              articles={articles}
            />
          </div>

          <div className="lg:col-span-9 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6 pb-2 border-b border-slate-200">
                <h2 className="text-xl font-bold text-slate-900 tracking-tight">
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
          <div className="space-y-6">
            <div className="relative h-64 sm:h-80 w-full rounded-2xl overflow-hidden">
              <img
                src={selectedArticleModal.thumbnail}
                alt={selectedArticleModal.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4">
                <Badge variant="sky" size="md" className="bg-sky-500 text-white font-bold border-none shadow-md">
                  {selectedArticleModal.category}
                </Badge>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 font-medium border-b border-slate-100 pb-3">
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

              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight">
                {selectedArticleModal.title}
              </h2>
            </div>

            <div className="prose max-w-none text-slate-700 text-sm sm:text-base leading-relaxed space-y-4">
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