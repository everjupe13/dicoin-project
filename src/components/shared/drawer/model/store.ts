import { useEffect } from 'react'
import { create } from 'zustand'

import { DrawerEntity } from './entity/DrawerEntity'

const drawer = new DrawerEntity({
  name: 'Drawer'
})

interface DrawerStore {
  visibility: boolean

  setName: (e: string) => void

  open: () => void
  close: () => void
}

const DEFAULT_STATE = {
  visibility: false
}

export interface UseDrawerViewModel {
  name: string
}

const useDrawerStore = create<DrawerStore>(set => ({
  visibility: drawer.visibility,

  open: () => {
    drawer.open()
    set({ visibility: drawer.visibility })
  },

  setName: (name: string) => {
    drawer.name = name
  },

  close: () => {
    drawer.close()
    set({ visibility: drawer.visibility })
  },

  // createRouter: () => {
  //   Drawer.setPages()
  // },

  reset: () => set({ ...DEFAULT_STATE })
}))

const useDrawerViewModel = (options: UseDrawerViewModel) => {
  const store = useDrawerStore()

  useEffect(() => {
    store.setName(options.name)
  }, [])

  return {
    viewModel: useDrawerStore()
  }
}

export { useDrawerViewModel }
