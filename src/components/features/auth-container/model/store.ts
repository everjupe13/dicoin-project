import { User as FirebaseUser } from 'firebase/auth'
import { create } from 'zustand'

export type UserDataType = FirebaseUser

type AuthStateType = {
  isAuth: boolean
  userData: UserDataType | null
  setUserData: (e: UserDataType) => void
}

export const useAuthStore = create<AuthStateType>()((set, get) => ({
  userData: null,
  isAuth: get()?.userData !== null,
  setUserData: (e: UserDataType) =>
    set(() => ({
      userData: e
    }))
}))
