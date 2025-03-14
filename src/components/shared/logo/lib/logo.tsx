import { Link } from 'react-router-dom'

import LogoIconSvg from '@/assets/icons/logo-frame.svg'
import { getConfig } from '@/shared/const'

export interface LogoProps {
  width?: number | string
  height?: number | string
}

export function Logo({ width = 55, height = 17 }: LogoProps) {
  return (
    <Link to="/">
      <img
        src={LogoIconSvg}
        alt={getConfig().appName}
        className="pointer-events-none"
        width={width}
        height={height}
      />
    </Link>
  )
}
