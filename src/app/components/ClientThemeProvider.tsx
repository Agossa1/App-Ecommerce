'use client'

import { ThemeProvider, useTheme } from "next-themes";
import { useState, useEffect } from "react";

function ThemeChanger() {
  const { theme, setTheme } = useTheme();

  return (
    <button 
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="fixed bottom-4 right-4 bg-primary text-primary-foreground p-2 rounded"
    >
      Toggle theme (current: {theme})
    </button>
  );
}

export function ClientThemeProvider({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <>{children}</>;
  }

  return (
    <ThemeProvider attribute="class" defaultTheme="systme" enableSystem>
      {children}
      <ThemeChanger />
    </ThemeProvider>
  );
}