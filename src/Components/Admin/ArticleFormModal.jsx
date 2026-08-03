import React, { useState, useEffect } from 'react';
import Modal from '../UI/Modal';
import Input from '../UI/Input';
import Button from '../UI/Button';
import ImageUploadModal from './ImageUploadModal';
import { CATEGORIES } from '../../data/mockArticles';
import {
  FiBold,
  FiItalic,
  FiUnderline,
  FiAlignLeft,
  FiAlignCenter,
  FiAlignRight,
  FiLink,
  FiImage,
  FiMessageSquare,
} from 'react-icons/fi';

const ArticleFormModal = ({ isOpen, onClose, onSave, articleToEdit }) => {
  const [formData, setFormData] = useState({
    title: '',
    category: CATEGORIES[1] || 'Disaster Response',
    excerpt: '',
    body: '',
    thumbnail: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=800&q=80',
    featured: false,
  });

  const [errors, setErrors] = useState({});
  const [isImageUploadOpen, setIsImageUploadOpen] = useState(false);

  useEffect(() => {
    if (articleToEdit) {
      setFormData({
        title: articleToEdit.title || '',
        category: articleToEdit.category || CATEGORIES[1],
        excerpt: articleToEdit.excerpt || '',
        body: articleToEdit.body || '',
        thumbnail: articleToEdit.thumbnail || 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=800&q=80',
        featured: articleToEdit.featured || false,
      });
    } else {
      setFormData({
        title: '',
        category: CATEGORIES[1] || 'Disaster Response',
        excerpt: '',
        body: '',
        thumbnail: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=800&q=80',
        featured: false,
      });
    }
    setErrors({});
  }, [articleToEdit, isOpen]);

  const validate = () => {
    const newErrors = {};
    if (!formData.title.trim()) newErrors.title = 'Content title is required';
    if (!formData.excerpt.trim()) newErrors.excerpt = 'Summary excerpt is required';
    if (!formData.body.trim()) newErrors.body = 'Content body is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    onSave(formData);
    onClose();
  };

  return (
    <>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        title={articleToEdit ? 'Edit Blog & News Content' : 'Create New Blog & News'}
        maxWidth="max-w-3xl"
      >
        <form onSubmit={handleSubmit} className="space-y-5">
          <Input
            label="Content Title"
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            maxLength={150}
            placeholder="Type article title..."
            error={errors.title}
          />

          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">
              Category / Target Area
            </label>
            <select
              value={formData.category}
              onChange={(e) => setFormData({ ...formData, category: e.target.value })}
              className="w-full bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 text-sm rounded-xl border border-slate-200 dark:border-slate-800 px-4 py-2.5 outline-none focus:ring-4 focus:ring-sky-500/20 focus:border-sky-500"
            >
              {CATEGORIES.filter(c => c !== 'All News & Articles' && c !== 'All News & Media').map((cat, i) => (
                <option key={i} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">
              Short Summary Excerpt
            </label>
            <textarea
              rows={2}
              value={formData.excerpt}
              onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
              placeholder="Brief summary of the article..."
              className="w-full bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 text-sm rounded-xl border border-slate-200 dark:border-slate-800 p-3 outline-none focus:ring-4 focus:ring-sky-500/20 focus:border-sky-500"
            />
            {errors.excerpt && <span className="text-xs text-red-500 font-medium">{errors.excerpt}</span>}
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">
              Content Body
            </label>

            <div className="border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden bg-white dark:bg-slate-900">
              <div className="flex items-center gap-1 p-2 bg-slate-50 dark:bg-slate-800/60 border-b border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 text-sm">
                <button type="button" className="p-1.5 rounded hover:bg-slate-200 dark:hover:bg-slate-700"><FiBold /></button>
                <button type="button" className="p-1.5 rounded hover:bg-slate-200 dark:hover:bg-slate-700"><FiItalic /></button>
                <button type="button" className="p-1.5 rounded hover:bg-slate-200 dark:hover:bg-slate-700"><FiUnderline /></button>
                <span className="h-4 w-px bg-slate-300 dark:bg-slate-700 mx-1" />
                <button type="button" className="p-1.5 rounded hover:bg-slate-200 dark:hover:bg-slate-700"><FiAlignLeft /></button>
                <button type="button" className="p-1.5 rounded hover:bg-slate-200 dark:hover:bg-slate-700"><FiAlignCenter /></button>
                <button type="button" className="p-1.5 rounded hover:bg-slate-200 dark:hover:bg-slate-700"><FiAlignRight /></button>
                <span className="h-4 w-px bg-slate-300 dark:bg-slate-700 mx-1" />
                <button type="button" className="p-1.5 rounded hover:bg-slate-200 dark:hover:bg-slate-700"><FiLink /></button>
                <button type="button" onClick={() => setIsImageUploadOpen(true)} className="p-1.5 rounded hover:bg-slate-200 dark:hover:bg-slate-700 text-sky-500"><FiImage /></button>
                <button type="button" className="p-1.5 rounded hover:bg-slate-200 dark:hover:bg-slate-700"><FiMessageSquare /></button>
              </div>

              <textarea
                rows={6}
                value={formData.body}
                onChange={(e) => setFormData({ ...formData, body: e.target.value })}
                placeholder="Type content body..."
                className="w-full p-4 bg-transparent text-slate-900 dark:text-slate-100 text-sm outline-none resize-y"
              />
            </div>
            {errors.body && <span className="text-xs text-red-500 font-medium">{errors.body}</span>}
          </div>

          <div className="space-y-2">
            <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">
              Article Thumbnail Image
            </label>
            <div className="flex items-center gap-4">
              <div className="w-24 h-16 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 shrink-0 bg-slate-100">
                <img src={formData.thumbnail} alt="Thumbnail preview" className="w-full h-full object-cover" />
              </div>
              <Button type="button" variant="outline" size="sm" onClick={() => setIsImageUploadOpen(true)}>
                Upload / Change Image
              </Button>
            </div>
          </div>

          <div className="flex items-center gap-2 pt-2">
            <input
              type="checkbox"
              id="featured-check"
              checked={formData.featured}
              onChange={(e) => setFormData({ ...formData, featured: e.target.checked })}
              className="w-4 h-4 rounded text-sky-500 focus:ring-sky-400"
            />
            <label htmlFor="featured-check" className="text-xs font-semibold text-slate-700 dark:text-slate-300">
              Set as Featured Article on Main Homepage
            </label>
          </div>

          <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-100 dark:border-slate-800">
            <Button type="button" variant="ghost" size="sm" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit" variant="primary" size="sm">
              {articleToEdit ? 'Save Changes' : 'Create Content'}
            </Button>
          </div>
        </form>
      </Modal>

      <ImageUploadModal
        isOpen={isImageUploadOpen}
        onClose={() => setIsImageUploadOpen(false)}
        onSelectImage={(url) => setFormData({ ...formData, thumbnail: url })}
      />
    </>
  );
};

export default ArticleFormModal;
