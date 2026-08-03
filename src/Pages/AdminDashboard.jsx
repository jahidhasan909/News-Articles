import React, { useState } from 'react';
import AdminSidebar from '../Components/Admin/AdminSidebar';
import ArticleFormModal from '../Components/Admin/ArticleFormModal';
import Button from '../Components/UI/Button';
import Badge from '../Components/UI/Badge';
import Pagination from '../Components/HomeMainContent/Pagination';
import { useArticles } from '../hooks/useArticles';
import {
  FiPlus,
  FiSearch,
  FiEdit2,
  FiTrash2,
  FiShare2,
  FiChevronRight,
  FiRefreshCw,
} from 'react-icons/fi';

const AdminDashboard = () => {
  const {
    paginatedArticles,
    filteredArticles,
    searchQuery,
    setSearchQuery,
    currentPage,
    setCurrentPage,
    totalPages,
    addArticle,
    updateArticle,
    deleteArticle,
    resetToInitialData,
  } = useArticles();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [articleToEdit, setArticleToEdit] = useState(null);

  const handleOpenCreate = () => {
    setArticleToEdit(null);
    setIsModalOpen(true);
  };

  const handleOpenEdit = (article) => {
    setArticleToEdit(article);
    setIsModalOpen(true);
  };

  const handleSaveArticle = (data) => {
    if (articleToEdit) {
      updateArticle(articleToEdit.id, data);
    } else {
      addArticle(data);
    }
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this article?')) {
      deleteArticle(id);
    }
  };

  return (
    <div className="flex min-h-screen bg-slate-50 text-slate-900 font-sans">
      <AdminSidebar activeTab="blog" />

      <main className="flex-1 p-6 sm:p-8 overflow-y-auto max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200">
          <div>
            <div className="flex items-center gap-2 text-xs text-slate-500 mb-1">
              <span>Admin</span>
              <FiChevronRight className="w-3 h-3" />
              <span className="text-sky-600 font-semibold">Blog & News Management</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Blog & News Management
            </h1>
          </div>

          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              size="sm"
              icon={FiRefreshCw}
              onClick={resetToInitialData}
              className="border-slate-300 text-slate-700 hover:bg-slate-100"
            >
              Reset Mock Data
            </Button>

            <Button
              variant="primary"
              size="sm"
              icon={FiPlus}
              onClick={handleOpenCreate}
            >
              Create New Content
            </Button>
          </div>
        </div>

        <div className="my-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="relative w-full sm:w-80">
            <FiSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search content..."
              className="w-full bg-white border border-slate-200 text-slate-900 placeholder-slate-400 text-xs rounded-xl pl-10 pr-4 py-2.5 outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20"
            />
          </div>

          <span className="text-xs text-slate-500 font-medium self-end sm:self-center">
            Total Articles: <strong className="text-slate-900">{filteredArticles.length}</strong>
          </span>
        </div>

        <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-50 text-slate-700 uppercase tracking-wider font-bold border-b border-slate-200">
                <tr>
                  <th scope="col" className="px-6 py-4">Content Title</th>
                  <th scope="col" className="px-6 py-4">Published Date</th>
                  <th scope="col" className="px-6 py-4">Social Share</th>
                  <th scope="col" className="px-6 py-4 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {paginatedArticles.length === 0 ? (
                  <tr>
                    <td colSpan={4} className="px-6 py-12 text-center text-slate-400">
                      No matching content found in database.
                    </td>
                  </tr>
                ) : (
                  paginatedArticles.map((article) => (
                    <tr key={article.id} className="hover:bg-slate-50 transition-colors">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <img
                            src={article.thumbnail}
                            alt=""
                            className="w-10 h-10 rounded-lg object-cover shrink-0 border border-slate-200"
                          />
                          <div className="space-y-0.5">
                            <p className="font-bold text-slate-900 max-w-md truncate">
                              {article.title}
                            </p>
                            <Badge variant="sky" size="sm" className="!text-[10px]">
                              {article.category}
                            </Badge>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-slate-600 font-medium whitespace-nowrap">
                        {article.publishedDate}
                      </td>
                      <td className="px-6 py-4 text-slate-700 font-bold whitespace-nowrap">
                        <div className="flex items-center gap-1.5 text-sky-600">
                          <FiShare2 className="w-3.5 h-3.5" />
                          <span>{article.views ? Math.floor(article.views / 10) : 12}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-right whitespace-nowrap">
                        <div className="flex items-center justify-end gap-2">
                          <button
                            onClick={() => handleOpenEdit(article)}
                            className="p-2 text-slate-500 hover:text-sky-600 hover:bg-slate-100 rounded-lg transition-colors"
                            title="Edit content"
                          >
                            <FiEdit2 className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => handleDelete(article.id)}
                            className="p-2 text-slate-500 hover:text-red-500 hover:bg-slate-100 rounded-lg transition-colors"
                            title="Delete content"
                          >
                            <FiTrash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>

          <div className="p-4 border-t border-slate-100 flex justify-center">
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          </div>
        </div>
      </main>

      <ArticleFormModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleSaveArticle}
        articleToEdit={articleToEdit}
      />
    </div>
  );
};

export default AdminDashboard;
