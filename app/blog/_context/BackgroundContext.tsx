'use client';

import { createContext, useContext, useState } from 'react';

interface BackgroundContextValue {
  bgColor: string;
  setBgColor: (color: string) => void;
}

const BackgroundContext = createContext<BackgroundContextValue | undefined>(undefined);

export function BackgroundProvider({ children }: { children: React.ReactNode }) {
  const [bgColor, setBgColor] = useState('#0a0a0f');
  return (
    <BackgroundContext.Provider value={{ bgColor, setBgColor }}>
      {children}
    </BackgroundContext.Provider>
  );
}

export function useBackground() {
  const ctx = useContext(BackgroundContext);
  if (!ctx) throw new Error('useBackground must be used within a BackgroundProvider');
  return ctx;
}
