import { create } from 'zustand';
import { persist } from 'zustand/middleware';

// Define a basic user structure for the auth store
interface AuthUser {
  id: string; // Or number, depending on your user ID type
  email: string;
  name: string;
  role: string;
  // Add any other user properties you want to store from the login response
}

interface AuthState {
  isLoggedIn: boolean;
  token: string | null;
  user: AuthUser | null;
  login: (token: string, userData: AuthUser) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      isLoggedIn: false,
      token: null,
      user: null,
      login: (token: string, userData: AuthUser) => {
        // Set localStorage (persist) and also cookie for middleware if still needed
        // The cookie logic might need to be re-evaluated based on how you use it.
        // For now, focusing on Zustand state for token and user.
        document.cookie = `auth-store=${encodeURIComponent(JSON.stringify({ state: { isLoggedIn: true, token, user: userData } }))}; path=/`;
        set({ isLoggedIn: true, token, user: userData });
      },
      logout: () => {
        // Clear cookie
        document.cookie = `auth-store=; path=/; max-age=0`;
        // Clear Zustand state & localStorage via persist
        set({ isLoggedIn: false, token: null, user: null });
      },
    }),
    {
      name: 'auth-store', // Name of the item in localStorage
      // Optionally, specify which parts of the store to persist if not all
      // partialize: (state) => ({ token: state.token, user: state.user, isLoggedIn: state.isLoggedIn }),
    }
  )
);