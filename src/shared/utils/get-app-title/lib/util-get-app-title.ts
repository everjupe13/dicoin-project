import { getConfig } from '@/shared/const'

const DELIMITER = '|'

export const utilGetAppTitle = (title?: string) => {
  return [title, getConfig().appName].filter(Boolean).join(` ${DELIMITER} `)
}
