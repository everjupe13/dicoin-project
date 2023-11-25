import useBreakpoint from 'use-breakpoint'

import { breakpoints } from '../core/tailwind-config'

export const useCurrentBreakpoint = () => useBreakpoint(breakpoints, 'xs')
