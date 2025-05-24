"use client";

import { useEffect, useRef } from "react";
import ReactDOM from "react-dom";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  const overlayRef = useRef<HTMLDivElement | null>(null);
  const modalRef = useRef<HTMLDivElement | null>(null);

  // Prevent background scroll
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  // ESC key closes modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onClose, isOpen]);

  // Auto focus on first focusable element
  useEffect(() => {
    if (isOpen && modalRef.current) {
      const focusable = modalRef.current.querySelector<HTMLElement>(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      focusable?.focus();
    }
  }, [isOpen]);

  // Handle click outside modal to close
  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === overlayRef.current) {
      onClose();
    }
  };

  if (!isOpen) return null;
  
  return ReactDOM.createPortal(
    <div
      ref={overlayRef}
      onClick={handleOverlayClick}
      className="fixed inset-0 bg-black/10 backdrop-blur-3xl bg-opacity-50 flex justify-center items-center z-50"
      role="dialog"
      aria-modal="true"
    >
      <div
        ref={modalRef}
        className="bg-neutral-950/50 max-h-screen overflow-hidden  backdrop-blur-3xl p-6 rounded-xl shadow-lg max-w-md w-full animate-fadeIn"
      >
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-3 right-4 cursor-pointer text-gray-500 hover:text-neutral-400 text-2xl font-bold"
        >
          &times;
        </button>
        {children}
      </div>
    </div>,
    document.body
  );
};

export default Modal;
