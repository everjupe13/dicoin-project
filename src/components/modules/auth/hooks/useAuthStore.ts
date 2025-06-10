import { create } from 'zustand'

interface UseAuthStore {
  isAuthed: boolean
  isLoading: boolean
  isInited: boolean
  init: () => Promise<void>
}

export const useAuthStore = create<UseAuthStore>((set, get) => ({
  isAuthed: false,
  isLoading: false,
  isInited: false,

  init: async () => {
    set({ isLoading: true })

    if (get().isInited) {
      return set({ isLoading: false })
    }

    const accessToken = (await localStorage.getItem('accessToken')) || ''

    set({ isAuthed: Boolean(accessToken), isLoading: false, isInited: true })
  }
}))
