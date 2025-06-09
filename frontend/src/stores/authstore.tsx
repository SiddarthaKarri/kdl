import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { jwtDecode } from 'jwt-decode'; // Added jwt-decode import

interface User {
  id: string;
  name: string;
  email: string;
  role: string;
}

interface AuthState {
  isLoggedIn: boolean;
  token: string | null;
  refreshToken: string | null;
  user: User | null;
  login: (token: string, refreshToken: string, user: User) => void;
  logout: () => void;
  getToken: () => string | null;
  isTokenExpired: () => boolean;
  refreshAccessToken: () => Promise<string | null>;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      isLoggedIn: false,
      token: null,
      refreshToken: null,
      user: null,
      login: (token, refreshToken, user) => {
        set({ isLoggedIn: true, token, refreshToken, user });
        console.log('AuthStore after login set:', get()); // Log the state after set
        // Store token in cookies or local storage if needed for persistence
        if (typeof window !== 'undefined') {
          document.cookie = `auth-token=${token}; path=/; SameSite=Lax`; // Example for cookie
          // localStorage.setItem('auth-token', token);
        }
      },
      logout: () => {
        set({ isLoggedIn: false, token: null, refreshToken: null, user: null });
        if (typeof window !== 'undefined') {
          document.cookie = 'auth-token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT; SameSite=Lax'; // Clear cookie
          // localStorage.removeItem('auth-token');
        }
      },
      getToken: () => get().token,
      isTokenExpired: () => {
        const token = get().token;
        if (!token) {
          return true;
        }
        try {
          const decodedToken: { exp: number } = jwtDecode(token);
          const currentTime = Date.now() / 1000; // Convert to seconds
          return decodedToken.exp < currentTime;
        } catch (error) {
          console.error('Failed to decode token:', error);
          return true; // Treat as expired if decoding fails
        }
      },
      refreshAccessToken: async () => {
        const currentRefreshToken = get().refreshToken;
        console.log('AuthStore refreshAccessToken - current refreshToken:', currentRefreshToken); // Log current refresh token
        if (!currentRefreshToken) {
          console.log('No refresh token available.');
          get().logout(); // Logout if no refresh token
          return null;
        }
        try {
          console.log('Attempting to refresh access token...');
          const response = await fetch(
            `\${process.env.NEXT_PUBLIC_API_URL}/auth/refresh-token`,
            {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ refreshToken: currentRefreshToken }),
            }
          );

          if (!response.ok) {
            const errorData = await response.json().catch(() => ({ message: 'Refresh token failed' }));
            console.error('Refresh token request failed:', response.status, errorData);
            get().logout(); // Logout on refresh failure
            throw new Error(errorData.message || 'Failed to refresh token');
          }

          const data = await response.json();
          if (data.token && data.user) {
            console.log('New access token obtained.');
            // Update token and user details, refreshToken might also be updated by backend
            set({
              token: data.token,
              user: data.user,
              // Optionally update refreshToken if backend sends a new one
              ...(data.refreshToken && { refreshToken: data.refreshToken }),
            });
            if (typeof window !== 'undefined') {
              document.cookie = `auth-token=${data.token}; path=/; SameSite=Lax`;
            }
            return data.token;
          } else {
            console.error('Refresh token response did not contain new token or user data.');
            get().logout();
            return null;
          }
        } catch (error) {
          console.error('Error refreshing access token:', error);
          get().logout(); // Logout on error
          return null;
        }
      },
    }),
    {
      name: 'auth-store',
      partialize: (state) => {
        const partialState = {
          token: state.token,
          refreshToken: state.refreshToken,
          user: state.user,
          isLoggedIn: state.isLoggedIn,
        };
        console.log('AuthStore partialize is called, returning:', partialState);
        return partialState;
      },
      onRehydrateStorage: () => (state, error) => {
        if (error) {
          console.error('AuthStore: An error occurred during hydration:', error);
        } else {
          console.log('AuthStore: Hydration finished. Rehydrated state:', state);
        }
      },
      // getStorage: () => localStorage, // Optional: explicitly define storage if needed
    }
  )
);