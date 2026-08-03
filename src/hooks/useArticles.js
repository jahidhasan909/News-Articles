import { useState, useEffect, useMemo, useCallback } from 'react';
import { initialArticles } from '../data/mockArticles';

const STORAGE_KEY = 'maxvalid_news_articles';

export const useArticles = () => {
  const [articles, setArticles] = useState(() => {
    try {
      const savedArticles = localStorage.getItem(STORAGE_KEY);
      if (savedArticles) {
        const parsed = JSON.parse(savedArticles);
        if (Array.isArray(parsed) && parsed.length > 0) {
          return parsed;
        }
      }
    } catch (error) {
      console.error('Failed to load articles from localStorage:', error);
    }
    return initialArticles;
  });

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All News & Articles');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(6);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(articles));
    } catch (error) {
      console.error('Failed to persist articles to localStorage:', error);
    }
  }, [articles]);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, selectedCategory]);

  const filteredArticles = useMemo(() => {
    return articles.filter((article) => {
      const matchesCategory =
        selectedCategory === 'All News & Articles' ||
        selectedCategory === 'All News & Media' ||
        article.category.toLowerCase() === selectedCategory.toLowerCase();

      const query = searchQuery.trim().toLowerCase();
      const matchesSearch =
        query === '' ||
        article.title.toLowerCase().includes(query) ||
        article.excerpt.toLowerCase().includes(query) ||
        article.body.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [articles, selectedCategory, searchQuery]);

  const featuredArticle = useMemo(() => {
    return articles.find((a) => a.featured) || articles[0] || null;
  }, [articles]);

  const totalPages = Math.max(1, Math.ceil(filteredArticles.length / itemsPerPage));

  const paginatedArticles = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return filteredArticles.slice(startIndex, startIndex + itemsPerPage);
  }, [filteredArticles, currentPage, itemsPerPage]);

  const addArticle = useCallback((newArticleData) => {
    const newArticle = {
      id: `art-${Date.now()}`,
      slug: newArticleData.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, ''),
      publishedDate: new Date().toLocaleDateString('en-US', {
        month: 'short',
        day: '2-digit',
        year: 'numeric',
      }),
      views: 0,
      status: 'Published',
      featured: false,
      ...newArticleData,
    };

    setArticles((prev) => [newArticle, ...prev]);
    return newArticle;
  }, []);

  const updateArticle = useCallback((id, updatedFields) => {
    setArticles((prev) =>
      prev.map((article) =>
        article.id === id ? { ...article, ...updatedFields } : article
      )
    );
  }, []);

  const deleteArticle = useCallback((id) => {
    setArticles((prev) => prev.filter((article) => article.id !== id));
  }, []);

  const getArticleById = useCallback(
    (id) => {
      return articles.find((article) => article.id === id) || null;
    },
    [articles]
  );

  const resetToInitialData = useCallback(() => {
    setArticles(initialArticles);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(initialArticles));
  }, []);

  return {
    articles,
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
    itemsPerPage,
    setItemsPerPage,
    totalCount: filteredArticles.length,
    addArticle,
    updateArticle,
    deleteArticle,
    getArticleById,
    resetToInitialData,
  };
};
