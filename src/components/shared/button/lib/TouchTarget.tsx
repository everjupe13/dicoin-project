import { ReactNode } from 'react'

export interface TouchTargetProps {
  children?: ReactNode
}

/**
 * Expand the hit area to at least 44×44px on touch devices
 */
export function TouchTarget({ children }: TouchTargetProps) {
  return (
    <>
      <span
        className="absolute left-1/2 top-1/2 size-[max(100%,44px)] -translate-x-1/2 -translate-y-1/2 [@media(pointer:fine)]:hidden"
        aria-hidden="true"
      />
      {children}
    </>
  )
}
