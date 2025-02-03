export type PersonRole = 'guest' | 'logged'

export const ROLE_GUEST = 'guest'
export const ROLE_LOGGED = 'logged'

export const PERSON_ROLES: Record<string, PersonRole> = {
  GUEST: ROLE_GUEST,
  LOGGED: ROLE_LOGGED
}
