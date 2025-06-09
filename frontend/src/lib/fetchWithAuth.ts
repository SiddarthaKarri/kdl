import { useAuthStore } from '../stores/authstore';

export async function fetchWithAuth(url: string, options: RequestInit = {}) {
  const currentStoreState = useAuthStore.getState();
  console.log('fetchWithAuth - Full store state from getState():', currentStoreState);

  let token = currentStoreState.token;

  // If no token at all, or if token is expired, try to refresh it
  if (!token || currentStoreState.isTokenExpired()) {
    console.log(!token ? "No token found, attempting refresh (fetchWithAuth)." : "Token expired, attempting refresh (fetchWithAuth).");
    token = await currentStoreState.refreshAccessToken();
    if (!token) {
      // No need to call logout() here if refreshAccessToken() already does it on failure
      // authStore.logout(); 
      console.error("fetchWithAuth: Failed to refresh token or no refresh token was available.");
      throw new Error('Authentication required. Please log in again.');
    }
  }
  
  // Add token to headers
  const headers = {
    ...options.headers,
    'Authorization': `Bearer ${token}`,
    'Content-Type': 'application/json',
  };
  
  try {
    let response = await fetch(url, { ...options, headers });
    
    if (response.status === 401) {
      console.log("fetchWithAuth: Received 401, attempting token refresh.");
      // Try to refresh the token again (e.g. if token was revoked server-side)
      token = await currentStoreState.refreshAccessToken();
      if (token) {
        // Retry the request with new token
        headers['Authorization'] = `Bearer ${token}`;
        console.log("fetchWithAuth: Retrying request with new token.");
        response = await fetch(url, { ...options, headers });
      } else {
        // authStore.logout(); // Ensure logout is handled in refreshAccessToken or here if not
        console.error("fetchWithAuth: Failed to refresh token after 401.");
        throw new Error('Authentication expired. Please log in again.');
      }
    }
    
    return response;
  } catch (error) {
    console.error("fetchWithAuth: Error during fetch operation:", error);
    if (error instanceof Error) {
      throw error; // Re-throw the original error or a more specific one
    }
    throw new Error('Network error or authentication issue.');
  }
}
