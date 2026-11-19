import React, { useEffect } from 'react';
import { X } from 'lucide-react';

export default function Modal({ isOpen, onClose, title, children, size = 'lg' }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="modal fade show d-block"
      tabIndex="-1"
      style={{ backgroundColor: 'rgba(7, 31, 61, 0.7)', zIndex: 1060 }}
      onClick={onClose}
    >
      <div
        className={`modal-dialog modal-dialog-centered ${size === 'lg' ? 'modal-lg' : size === 'xl' ? 'modal-xl' : ''}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-content modal-content-custom bg-white">
          <div className="modal-header border-bottom border-light px-4 py-3 bg-light-blue align-items-center">
            <h5 className="modal-title fw-bold text-navy mb-0">{title}</h5>
            <button
              type="button"
              className="btn btn-sm btn-light rounded-circle p-1 d-flex align-items-center justify-content-center"
              onClick={onClose}
              aria-label="Close"
              style={{ width: '36px', height: '36px' }}
            >
              <X size={20} className="text-navy" />
            </button>
          </div>
          <div className="modal-body p-4">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
