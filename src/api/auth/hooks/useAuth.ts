export interface UseAuthInterface {
  // TODO реализовать функционал авторизации через бэк
  // с логином и паролем
  // authByLogin: () => Promise<void>

  authByPopup: () => Promise<void>
  logout: () => Promise<void>
}

export function useAuth(): UseAuthInterface {
  const logout = () => {}

  return {}
}
