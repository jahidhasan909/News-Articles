import { useState, useEffect, useMemo, useCallback } from 'react';

const STORAGE_KEY = 'maxvalid_news_articles';

export const useArticles = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All News & Articles');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(6);

  const fetchArticles = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          setArticles(parsed);
          setLoading(false);
          return;
        }
      }

      const response = await fetch('/data/articles.json');
      if (!response.ok) {
        throw new Error(`Failed to fetch articles (Status: ${response.status})`);
      }
      const data = await response.json();
      setArticles(data);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch (err) {
      console.error('Error loading articles:', err);
      setError(err.message || 'An error occurred while fetching articles');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchArticles();
  }, [fetchArticles]);

  useEffect(() => {
    if (!loading && articles.length > 0) {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(articles));
      } catch (err) {
        console.error('Error persisting articles:', err);
      }
    }
  }, [articles, loading]);

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

  const mainGridArticles = useMemo(() => {
    return filteredArticles;
  }, [filteredArticles]);

  const totalPages = Math.max(1, Math.ceil(mainGridArticles.length / itemsPerPage));

  const paginatedArticles = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return mainGridArticles.slice(startIndex, startIndex + itemsPerPage);
  }, [mainGridArticles, currentPage, itemsPerPage]);

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

  const resetToInitialData = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch('/data/articles.json');
      if (response.ok) {
        const data = await response.json();
        setArticles(data);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
      }
    } catch (err) {
      console.error('Reset error:', err);
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    articles,
    loading,
    error,
    filteredArticles: mainGridArticles,
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
    totalCount: mainGridArticles.length,
    addArticle,
    updateArticle,
    deleteArticle,
    getArticleById,
    resetToInitialData,
    refetch: fetchArticles,
  };
};
