import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import api from '../utils/api';

interface AuthState {
  token: string | null;
  isAuthenticated: boolean;
  isEmailVerified: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  setEmailVerified: (value: boolean) => void;
}

const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      token: null,
      isAuthenticated: false,
      isEmailVerified: false,
      login: async (email, password) => {
        const response = await api.post('/api/accounts/login/', { email, password });
        set({ token: response.data.access, isAuthenticated: true });
      },
      logout: () => set({ token: null, isAuthenticated: false, isEmailVerified: false }),
      setEmailVerified: (value) => set({ isEmailVerified: value }),
    }),
    {
      name: 'auth-storage',
    }
  )
);

export default useAuthStore;