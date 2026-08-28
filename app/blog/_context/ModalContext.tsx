'use client';

import { createContext, useCallback, useContext, useMemo, useState } from 'react';
import { Articles } from './types';
import { getArticleById } from './articles';

interface ModalContextValue {
  activeArticle: Articles | null;
  isOpen: boolean;
  openArticle: (id: number) => void;
  closeArticle: () => void;
}

const ModalContext = createContext<ModalContextValue | undefined>(undefined);

export function ModalProvider({ children }: { children: React.ReactNode }) {
  const [activeArticle, setActiveArticle] = useState<Articles | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const openArticle = useCallback((id: number) => {
    const article = getArticleById(id);
    if (!article) return;
    setActiveArticle(article);
    setIsOpen(true);
    document.body.style.overflow = 'hidden';
  }, []);

  const closeArticle = useCallback(() => {
    setIsOpen(false);
    document.body.style.overflow = '';
  }, []);

  const value = useMemo(
    () => ({ activeArticle, isOpen, openArticle, closeArticle }),
    [activeArticle, isOpen, openArticle, closeArticle]
  );

  return <ModalContext.Provider value={value}>{children}</ModalContext.Provider>;
}

export function useModal() {
  const ctx = useContext(ModalContext);
  if (!ctx) throw new Error('useModal must be used within a ModalProvider');
  return ctx;
}
