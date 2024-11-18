import { DrawerEntityRouter } from './DrawerEntityRouter'
import { DrawerEntityState, DrawerRouterListeners } from './types'

const DEFAULT_STATE: DrawerEntityState = {
  visibility: false,
  position: 'right',
  name: ''
}

class DrawerEntity implements DrawerRouterListeners {
  private state: DrawerEntityState
  private router = new DrawerEntityRouter()

  constructor(state?: Partial<DrawerEntityState>) {
    // set the default state
    this.state = { ...DEFAULT_STATE }

    if (state) {
      this.setState(state)
    }

    this.router.addAuthListener(this)
    // this.router.createRouter(this.state.name)
    // this.router.createUriBindings()
  }

  public onRouteChanged(): void {
    // this.updateView()
  }

  /**
   * Set the state to the provided DrawerEntityState.
   *
   * @throws {Error} if name have not provided or invalid
   *
   * @param {DrawerEntityState} toSettedState - the state to set
   * @return {void}
   */
  private setState(toSettedState: Partial<DrawerEntityState>) {
    if (!toSettedState.name || toSettedState.name.length < 2) {
      throw new Error('invalid name for Drawer is provided')
    }

    const state: DrawerEntityState = { ...DEFAULT_STATE }

    if (
      Object.prototype.hasOwnProperty.call(toSettedState, 'visibility') &&
      toSettedState.visibility
    ) {
      state.visibility = toSettedState.visibility
    }

    if (
      Object.prototype.hasOwnProperty.call(toSettedState, 'position') &&
      toSettedState.position
    ) {
      state.position = toSettedState.position
    }

    if (
      Object.prototype.hasOwnProperty.call(toSettedState, 'name') &&
      toSettedState.name
    ) {
      state.name = toSettedState.name
    }

    this.state = state
  }

  set name(e: string) {
    this.state.name = e
  }

  get name() {
    return this.state.name
  }

  get visibility() {
    return this.state.visibility
  }

  open() {
    this.setState({ ...this.state, visibility: true })
  }

  close() {
    this.setState({ ...this.state, visibility: false })
  }
}

const DrawerEntitySingleton = new DrawerEntity()
export { DrawerEntity, DrawerEntitySingleton }
