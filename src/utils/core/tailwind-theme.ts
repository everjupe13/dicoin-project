import resolveConfig from 'tailwindcss/resolveConfig'

// import { TailwindTheme } from 'tailwindcss/tailwind-config'
import tailwindConfig from '../../../tailwind.config.js'

const fullConfig = resolveConfig(tailwindConfig as never)

export const tailwindTheme = fullConfig.theme as {
  colors: typeof tailwindConfig.theme.colors
  screens: typeof tailwindConfig.theme.screens
}

export const breakpoints = Object.fromEntries(
  Object.entries(tailwindTheme.screens).map(([name, value]) => [
    name,
    Number(value.max.slice(0, -2))
  ])
) as {
  xs: number
  sm: number
  md: number
  lg: number
  xl: number
  '2xl': number
}
