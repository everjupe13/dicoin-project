import { ReactNode } from 'react'

export interface DrawerEntityState {
  name: string
  visibility: boolean
  position: 'right' | 'left'
}

export interface IDrawerEntity extends DrawerRouterListeners {
  setState(state: Partial<DrawerEntityState>): void

  open(): void
  close(): void
}

export interface IDrawerEntityRouter {
  createRouter(options: DrawerEntityCreateRouterDto): void
  addAuthListener(listener: DrawerRouterListeners): void
}

export interface DrawerRouterListeners {
  onRouteChanged(): void
}

export interface IDrawerEntityRouterRoute {
  key: string
  name?: string
  component: ReactNode
}

export interface IDrawerEntityRouterRouter {
  useUri?: boolean
  name: string

  routes: IDrawerEntityRouterRoute[]
}

export type DrawerEntityCreateRouterDto = {
  name: string
  routes?: IDrawerEntityRouterRoute | IDrawerEntityRouterRoute[]

  options?: Omit<IDrawerEntityRouterRouter, 'routes'>
}
