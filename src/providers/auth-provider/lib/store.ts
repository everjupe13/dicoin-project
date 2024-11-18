import { create } from 'zustand'

import type { User } from '@/types/user'

type AuthStateType = {
  user: User | null
  setUser: (e: User) => void

  reset: () => void
}

const initialStore = {
  user: null
}

export const useAuthStore = create<AuthStateType>()(set => ({
  user: null,
  setUser: (e: User) =>
    set(() => ({
      user: e
    })),

  reset: () => set({ ...initialStore })
}))
