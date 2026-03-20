import { create } from 'zustand'

type AuthState = {
  user: string | null
  login: (name: string) => void
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  login: (name) => set({ user: name }),
}))