import clsx from 'clsx'
import { type ComponentPropsWithoutRef } from 'react'

export function InputGroup({ children }: ComponentPropsWithoutRef<'span'>) {
  return (
    <span
      data-slot="control"
      className={clsx(
        'relative isolate block',
        '[&_input]:has-[[data-slot=icon]:first-child]:pl-40 [&_input]:has-[[data-slot=icon]:last-child]:pr-40 sm:[&_input]:has-[[data-slot=icon]:first-child]:pl-32 sm:[&_input]:has-[[data-slot=icon]:last-child]:pr-32',
        '[&>[data-slot=icon]]:pointer-events-none [&>[data-slot=icon]]:absolute [&>[data-slot=icon]]:top-12 [&>[data-slot=icon]]:z-10 [&>[data-slot=icon]]:size-5 sm:[&>[data-slot=icon]]:top-10 sm:[&>[data-slot=icon]]:size-16',
        '[&>[data-slot=icon]:first-child]:left-12 sm:[&>[data-slot=icon]:first-child]:left-10 [&>[data-slot=icon]:last-child]:right-12 sm:[&>[data-slot=icon]:last-child]:right-10',
        '[&>[data-slot=icon]]:text-zinc-500 dark:[&>[data-slot=icon]]:text-zinc-400'
      )}
    >
      {children}
    </span>
  )
}
