import {
  Button as HeadlessButton,
  ButtonProps as HeadlessButtonProps
} from '@headlessui/react'
import { clsx } from 'clsx'
import { motion } from 'framer-motion'
import {
  ComponentPropsWithoutRef,
  ForwardedRef,
  forwardRef,
  ReactNode
} from 'react'

import { TouchTarget } from '@/components/shared/button'
import { Link } from '@/components/shared/link'

export type NavbarItemProps = {
  current?: boolean
  className?: string
  children?: ReactNode
} & (
  | Omit<HeadlessButtonProps, 'as' | 'className'>
  | Omit<ComponentPropsWithoutRef<typeof Link>, 'className'>
)

export const NavbarItem = forwardRef(function NavbarItem(
  { current, className, children, ...props }: NavbarItemProps,
  ref: ForwardedRef<HTMLAnchorElement | HTMLButtonElement>
) {
  const classes = clsx(
    // Base
    'relative flex min-w-0 items-center gap-12 rounded-8 p-8 text-left text-sm/5 font-medium text-zinc-950 sm:text-base/6',
    // Leading icon/icon-only
    'data-[slot=icon]:*:size-20 data-[slot=icon]:*:shrink-0 data-[slot=icon]:*:fill-zinc-500 sm:data-[slot=icon]:*:size-24',
    // Trailing icon (down chevron or similar)
    'data-[slot=icon]:last:[&:not(:nth-child(2))]:*:ml-auto data-[slot=icon]:last:[&:not(:nth-child(2))]:*:size-16 sm:data-[slot=icon]:last:[&:not(:nth-child(2))]:*:size-20',
    // Avatar
    'data-[slot=avatar]:*:-m-2 data-[slot=avatar]:*:size-24 data-[slot=avatar]:*:[--avatar-radius:theme(borderRadius.full)] data-[slot=avatar]:*:[--ring-opacity:10%] sm:data-[slot=avatar]:*:size-28',
    // Hover
    'data-[hover]:bg-zinc-950/5 data-[slot=icon]:*:data-[hover]:fill-zinc-950',
    // Active
    'data-[active]:bg-zinc-950/5 data-[slot=icon]:*:data-[active]:fill-zinc-950',
    // Dark mode
    'dark:text-white dark:data-[slot=icon]:*:fill-zinc-400',
    'dark:data-[hover]:bg-white/5 dark:data-[slot=icon]:*:data-[hover]:fill-white',
    'dark:data-[active]:bg-white/5 dark:data-[slot=icon]:*:data-[active]:fill-white'
  )

  return (
    <span className={clsx(className, 'relative')}>
      {current && (
        <motion.span
          layoutId="current-indicator"
          className="absolute inset-x-8 -bottom-10 h-2 rounded-full bg-zinc-950 dark:bg-white"
        />
      )}
      {'href' in props ? (
        <Link
          {...props}
          className={classes}
          data-current={current ? 'true' : undefined}
          ref={ref as ForwardedRef<HTMLAnchorElement>}
        >
          <TouchTarget>{children}</TouchTarget>
        </Link>
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
