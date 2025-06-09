'use client';

import React, { createContext, useState, useEffect, useContext } from 'react';

interface Setting {
  id: string;
  slug: string;
  value: string;
}

interface SettingContextType {
  settings: Setting[];
  loading: boolean;
  error: string | null; // Added error state
}

const SettingContext = createContext<SettingContextType | undefined>(undefined);

export const SettingProvider = ({ children }: { children: React.ReactNode }) => {
  const [settings, setSettings] = useState<Setting[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null); // Initialize error state

  const fetchSettings = async () => {
    setLoading(true);
    setError(null); // Clear previous errors
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/settings`);
      if (!res.ok) {
        throw new Error(`Failed to fetch settings: ${res.status}`);
      }
      const data = await res.json();
      // Validate data structure
      if (Array.isArray(data) && data.every(item => item && typeof item.id === 'string' && typeof item.slug === 'string' && typeof item.value === 'string')) {
        setSettings(data);
      } else {
        // Handle cases where data might be an object with a settings key, e.g. { settings: [] }
        if (data && Array.isArray(data.settings) && data.settings.every((item: Setting) => item && typeof item.id === 'string' && typeof item.slug === 'string' && typeof item.value === 'string')) {
          setSettings(data.settings);
        } else {
          console.error('Invalid settings data structure:', data);
          throw new Error('Invalid settings data format received from API.');
        }
      }
    } catch (err) {
      if (err instanceof Error) {
        console.error('Error fetching settings:', err.message);
        setError(err.message);
      } else {
        console.error('An unknown error occurred while fetching settings:', err);
        setError('An unknown error occurred while fetching settings.');
      }
      setSettings([]); // Clear settings on error
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSettings();
  }, []);

  return (
    <SettingContext.Provider value={{ settings, loading, error }}>
      {children}
    </SettingContext.Provider>
  );
};

export const useSettings = () => {
  const context = useContext(SettingContext);
  if (!context) {
    throw new Error('useSettings must be used within a SettingProvider');
  }
  return context; // Now returns settings, loading, and error
};