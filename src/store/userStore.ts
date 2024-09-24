import { create } from 'zustand';
import api from '../utils/api';

interface UserState {
  user: any | null;
  fetchUser: () => Promise<void>;
  updateUser: (userData: any) => Promise<void>;
}

const useUserStore = create<UserState>((set) => ({
  user: null,
  fetchUser: async () => {
    const response = await api.get('/api/accounts/current-user/');
    set({ user: response.data });
  },
  updateUser: async (userData) => {
    const response = await api.put('/api/accounts/current-user/', userData);
    set({ user: response.data });
  },
}));

export default useUserStore;