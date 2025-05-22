import { create } from 'zustand'

type Profile = {
  name: string
  email: string
  phone: string

  isVerified: boolean

  lang: 'ru' | 'en'
  theme: 'light' | 'dark'
}

interface UseUserStore {
  profile: Profile | null
}

export const useUser = create<UseUserStore>(() => ({
  profile: null
}))
