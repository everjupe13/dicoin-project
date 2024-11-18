import {
  DrawerEntityCreateRouterDto,
  IDrawerEntityRouter,
  IDrawerEntityRouterRoute,
  IDrawerEntityRouterRouter
} from './types'

export interface DrawerRouterListeners {
  onRouteChanged(): void
}

const DEFAULT_ROUTER_STATE = {
  useUri: true,
  name: '',
  routes: []
}

export class DrawerEntityRouter implements IDrawerEntityRouter {
  private router: IDrawerEntityRouterRouter
  private currentRoute: IDrawerEntityRouterRoute
  private currentRouteIndex: number

  private routerListeners: DrawerRouterListeners[]

  constructor() {
    this.router = { ...DEFAULT_ROUTER_STATE }

    this.currentRouteIndex = 0

    this.routerListeners = []
  }

  private get routes(): IDrawerEntityRouterRoute[] {
    return this.router.routes
  }

  /**
   * Builds the router options by merging the provided options
   * with the default router state.
   *
   * @param {Omit<DrawerEntityRouterType, 'routes'>} options - The options to build the router with.
   * @returns {Omit<DrawerEntityRouterType, 'routes'>} - The built router options.
   */
  private buildRouterOptions(
    options: Omit<IDrawerEntityRouterRouter, 'routes'> = {}
  ) {
    const routerOptions: Omit<IDrawerEntityRouterRouter, 'routes'> = {}

    if (Object.prototype.hasOwnProperty.call(options, 'useUri')) {
      routerOptions.useUri = options.useUri || DEFAULT_ROUTER_STATE.useUri
    }

    if (Object.prototype.hasOwnProperty.call(options, 'name')) {
      routerOptions.name = options.name || DEFAULT_ROUTER_STATE.name
    }

    return routerOptions
  }

  createRouter(dto: DrawerEntityCreateRouterDto) {
    const routerBaseOptions: Omit<IDrawerEntityRouterRouter, 'routes'> =
      this.buildRouterOptions(dto.options)

    this.router = {
      ...routerBaseOptions,
      ...((dto.routes
        ? { routes: Array.isArray(dto.routes) ? dto.routes : [dto.routes] }
        : {}) as { routes: IDrawerEntityRouterRoute[] })
    }

    this.currentRouteIndex = 0
    this.currentRoute = this.routes[this.currentRouteIndex]
  }

  get route(): IDrawerEntityRouterRoute {
    return this.currentRoute
  }

  prev(): void {
    this.currentRouteIndex =
      this.routes.indexOf(this.currentRoute) > 0
        ? this.currentRouteIndex - 1
        : 0

    this.notifyListeners()
  }

  next(): void {
    this.currentRouteIndex =
      this.routes.indexOf(this.currentRoute) < this.routes.length
        ? this.currentRouteIndex + 1
        : this.routes.length - 1

    this.notifyListeners()
  }

  public addAuthListener(authListener: DrawerRouterListeners): void {
    this.routerListeners.push(authListener)
  }

  public removeAuthListener(authListener: DrawerRouterListeners): void {
    this.routerListeners.splice(this.routerListeners.indexOf(authListener), 1)
  }

  private notifyListeners(): void {
    this.routerListeners.forEach(listener => listener.onRouteChanged())
  }
}
