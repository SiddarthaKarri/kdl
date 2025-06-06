import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface AuthState {
  isLoggedIn: boolean;
  login: () => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      isLoggedIn: false,
      login: () => {
        // Set localStorage (persist) and also cookie for middleware
        document.cookie = `auth-store=${encodeURIComponent(JSON.stringify({ state: { isLoggedIn: true } }))}; path=/`;
        set({ isLoggedIn: true });
      },
      logout: () => {
        // Clear cookie
        document.cookie = `auth-store=; path=/; max-age=0`;
        // Clear Zustand state & localStorage via persist
        set({ isLoggedIn: false });
      },
    }),
    {
      name: 'auth-store',
    }
  )
);