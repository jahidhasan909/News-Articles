import { useEffect } from 'react';
import { FiAlertTriangle, FiX } from 'react-icons/fi';

const ConfirmModal = ({
  isOpen,
  onClose,
  onConfirm,
  title = 'Confirm Delete',
  message = 'Are you sure you want to delete this article? This action cannot be undone.',
  itemTitle,
  confirmText = 'Delete',
  cancelText = 'Cancel',
}) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleConfirm = () => {
    onConfirm();
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[99999] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal panel */}
      <div className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl border border-slate-200 z-10 overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-slate-100">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-red-50 border border-red-100 flex items-center justify-center shrink-0">
              <FiAlertTriangle className="w-4 h-4 text-red-500" />
            </div>
            <h3 className="text-base font-bold text-slate-900">{title}</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-600 rounded-full hover:bg-slate-100 transition-colors shrink-0 cursor-pointer"
            aria-label="Close"
          >
            <FiX className="w-4 h-4" />
          </button>
        </div>

        {/* Body */}
        <div className="px-5 py-5 space-y-3">
          <p className="text-sm text-slate-600 leading-relaxed">{message}</p>

          {itemTitle && (
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-3">
              <p className="text-[10px] uppercase tracking-wider font-bold text-slate-400 mb-0.5">
                Article
              </p>
              <p className="text-xs font-semibold text-slate-800 truncate">{itemTitle}</p>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-end gap-2.5 px-5 py-4 border-t border-slate-100 bg-slate-50/60">
          <button
            onClick={onClose}
            className="inline-flex items-center justify-center px-4 py-2 text-xs font-semibold rounded-full border border-slate-300 bg-white text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
          >
            {cancelText}
          </button>
          <button
            onClick={handleConfirm}
            className="inline-flex items-center justify-center px-4 py-2 text-xs font-semibold rounded-full bg-red-500 hover:bg-red-600 active:bg-red-700 text-white transition-colors shadow-md shadow-red-500/20 cursor-pointer"
          >
            {confirmText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmModal;
