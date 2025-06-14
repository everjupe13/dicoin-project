import {
  Button as HeadlessButton,
  ButtonProps as HeadlessButtonProps,
  CloseButton as HeadlessCloseButton
} from '@headlessui/react'
import { clsx } from 'clsx'
import { motion } from 'framer-motion'
import { ForwardedRef, forwardRef, ReactNode } from 'react'

import { TouchTarget } from '@/components/shared/button'
import { Link } from '@/components/shared/link'

export type SidebarItemProps = {
  current?: boolean
  className?: string
  children: ReactNode
} & (
  | Omit<HeadlessButtonProps, 'as' | 'className'>
  | Omit<HeadlessButtonProps<typeof Link>, 'as' | 'className'>
)

export const SidebarItem = forwardRef(function SidebarItem(
  { current, className, children, ...props }: SidebarItemProps,
  ref: ForwardedRef<HTMLAnchorElement | HTMLButtonElement>
) {
  const classes = clsx(
    // Base
    'rounded-lg flex w-full items-center gap-3 px-2 py-2.5 text-left text-base/6 font-medium text-zinc-950 sm:py-2 sm:text-sm/5',
    // Leading icon/icon-only
    '*:data-[slot=icon]:size-6 *:data-[slot=icon]:shrink-0 *:data-[slot=icon]:fill-zinc-500 sm:*:data-[slot=icon]:size-5',
    // Trailing icon (down chevron or similar)
    '*:last:data-[slot=icon]:ml-auto *:last:data-[slot=icon]:size-5 sm:*:last:data-[slot=icon]:size-4',
    // Avatar
    '*:data-[slot=avatar]:-m-0.5 *:data-[slot=avatar]:size-7 sm:*:data-[slot=avatar]:size-6',
    // Hover
    'data-hover:bg-zinc-950/5 data-hover:*:data-[slot=icon]:fill-zinc-950',
    // Active
    'data-active:bg-zinc-950/5 data-active:*:data-[slot=icon]:fill-zinc-950',
    // Current
    'data-current:*:data-[slot=icon]:fill-zinc-950',
    // Dark mode
    'dark:text-white dark:*:data-[slot=icon]:fill-zinc-400',
    'dark:data-hover:bg-white/5 dark:data-hover:*:data-[slot=icon]:fill-white',
    'dark:data-active:bg-white/5 dark:data-active:*:data-[slot=icon]:fill-white',
    'dark:data-current:*:data-[slot=icon]:fill-white'
  )

  return (
    <span className={clsx(className, 'relative')}>
      {current && (
        <motion.span
          layoutId="current-indicator"
          className="absolute inset-y-2 -left-4 w-0.5 rounded-full bg-zinc-950 dark:bg-white"
        />
      )}
      {'href' in props ? (
        <HeadlessCloseButton
          as={Link}
          {...props}
          className={classes}
          data-current={current ? 'true' : undefined}
          ref={ref}
        >
          <TouchTarget>{children}</TouchTarget>
        </HeadlessCloseButton>
      ) : (
        <HeadlessButton
          {...(props as Omit<HeadlessButtonProps, 'as' | 'className'>)}
          className={clsx('cursor-default', classes)}
          data-current={current ? 'true' : undefined}
          ref={ref}
        >
          <TouchTarget>{children}</TouchTarget>
        </HeadlessButton>
      )}
    </span>
  )
})
