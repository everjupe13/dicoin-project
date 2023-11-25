import { APP_NAME } from '../constants'

const DELIMITER = '|'

export const appTitle = (title?: string) => {
  return [title, APP_NAME].filter(Boolean).join(` ${DELIMITER} `)
}
