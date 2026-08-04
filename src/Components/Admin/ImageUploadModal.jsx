import React, { useState } from 'react';
import Modal from '../UI/Modal';
import Button from '../UI/Button';
import { FiUploadCloud, FiImage, FiCheck } from 'react-icons/fi';

const ImageUploadModal = ({ isOpen, onClose, onSelectImage }) => {
  const [previewUrl, setPreviewUrl] = useState('');
  const [fileName, setFileName] = useState('');

  const sampleImages = [
    'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1516253593875-bd7ba052fbc5?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=800&q=80',
  ];

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFileName(file.name);
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
    }
  };

  const handleConfirm = () => {
    if (previewUrl) {
      onSelectImage(previewUrl);
      onClose();
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Upload Image" maxWidth="max-w-lg">
      <div className="space-y-6">
        <div className="border-2 border-dashed border-slate-300 dark:border-slate-700 rounded-2xl p-8 text-center bg-slate-50 dark:bg-slate-800/40 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors flex flex-col items-center justify-center gap-3">
          <div className="w-14 h-14 rounded-full bg-sky-500/10 text-sky-500 flex items-center justify-center">
            <FiUploadCloud className="w-8 h-8" />
          </div>

          <div>
            <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">
              Browse or Drag and Drop files to upload
            </p>
            <p className="text-xs text-slate-400 mt-1">
              JPEG, PNG, SVG (Max 5MB)
            </p>
          </div>

          <label className="cursor-pointer mt-2">
            <input
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleFileChange}
            />
            <span className="inline-flex items-center justify-center px-4 py-2 text-xs font-semibold rounded-full bg-sky-500 text-white hover:bg-sky-600 transition-colors shadow-sm">
              Choose File
            </span>
          </label>

          {fileName && (
            <p className="text-xs font-medium text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
              <FiCheck /> Selected: {fileName}
            </p>
          )}
        </div>

        <div>
          <p className="text-xs font-bold text-slate-700 dark:text-slate-300 mb-2">
            Or select from sample media library:
          </p>
          <div className="grid grid-cols-3 gap-2.5">
            {sampleImages.map((img, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => {
                  setPreviewUrl(img);
                  setFileName(`Sample Image ${idx + 1}`);
                }}
                className={`relative h-20 rounded-xl overflow-hidden border-2 transition-all ${previewUrl === img
                    ? 'border-sky-500 ring-2 ring-sky-400/40 scale-95'
                    : 'border-transparent hover:opacity-80'
                  }`}
              >
                <img src={img} alt={`Sample ${idx}`} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        {previewUrl && (
          <div className="p-3 bg-slate-100 dark:bg-slate-800 rounded-xl flex items-center gap-3">
            <img src={previewUrl} alt="Preview" className="w-12 h-12 rounded-lg object-cover" />
            <div className="flex-1 truncate">
              <p className="text-xs font-bold text-slate-900 dark:text-white truncate">Image Preview Loaded</p>
              <p className="text-[10px] text-slate-400">Ready to assign to article thumbnail</p>
            </div>
          </div>
        )}

        <div className="flex items-center justify-end gap-3 pt-3 border-t border-slate-100 dark:border-slate-800">
          <Button variant="ghost" size="sm" onClick={onClose}>
            Cancel
          </Button>
          <Button variant="primary" size="sm" onClick={handleConfirm} disabled={!previewUrl}>
            Insert Image
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default ImageUploadModal;
