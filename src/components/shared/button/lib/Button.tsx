import {
  Button as HeadlessButton,
  ButtonProps as HeadlessButtonProps
} from '@headlessui/react'
import clsx from 'clsx'
import { ComponentPropsWithoutRef, ReactNode } from 'react'

import { Link } from '@/components/shared/link'

import { TouchTarget } from './TouchTarget'

const styles = {
  base: [
    // Base
    'relative isolate inline-flex items-baseline justify-center gap-x-8 rounded-8 border text-14 leading-[24px] font-semibold',
    // Sizing
    'px-11 py-5 sm:px-13 sm:py-9 sm:text-16',
    // Focus
    'focus:outline-hidden [data-focus]:outline [data-focus]:outline-2 [data-focus]:outline-offset-2 [data-focus]:outline-blue-500',
    // Disabled
    '[data-disabled]:opacity-50',
    // Icon
    '&>:[data-slot=icon]:-mx-4 *:data-[slot=icon]:my-4 *:data-[slot=icon]:size-16 *:data-[slot=icon]:shrink-0 *:data-[slot=icon]:self-center *:data-[slot=icon]:text-(--btn-icon) sm:*:data-[slot=icon]:my-2 sm:*:data-[slot=icon]:size-20'
  ],
  solid: [
    // Optical border, implemented as the button background to avoid corner artifacts
    'border-transparent bg-[var(--btn-border)]',
    // Dark mode: border is rendered on `after` so background is set to button background
    'dark:bg-[var(--btn-bg)]',
    // Button background, implemented as foreground layer to stack on top of pseudo-border layer
    'before:absolute before:inset-0 before:-z-10 before:rounded-[7px] before:bg-[var(--btn-bg)]',
    // Drop shadow, applied to the inset `before` layer so it blends with the border
    'before:shadow-sm',
    // Background color is moved to control and shadow is removed in dark mode so hide `before` pseudo
    'dark:before:hidden',
    // Dark mode: Subtle white outline is applied using a border
    'dark:border-white/5',
    // Shim/overlay, inset to match button foreground and used for hover state + highlight shadow
    'after:absolute after:inset-0 after:-z-10 after:rounded-[7px]',
    // Inner highlight shadow
    'after:shadow-[shadow:inset_0_1px_--theme(--tw-color-white/15%)]',
    // White overlay on hover
    '[data-active]:after:bg-(--btn-hover-overlay) [data-hover]:after:bg-(--btn-hover-overlay)',
    // Dark mode: `after` layer expands to cover entire button
    'dark:after:-inset-px dark:after:rounded-lg',
    // Disabled
    'data-disabled:before:shadow-none data-disabled:after:shadow-none'
  ],
  outline: [
    // Base
    'border-zinc-950/10 text-zinc-950 data-active:bg-zinc-950/[2.5%] data-hover:bg-zinc-950/[2.5%]',
    // Dark mode
    'dark:border-white/15 dark:text-white dark:[--btn-bg:transparent] dark:data-active:bg-white/5 dark:data-hover:bg-white/5',
    // Icon
    '[--btn-icon:var(--tw-color-zinc-500)] data-active:[--btn-icon:var(--tw-color-zinc-700)] data-hover:[--btn-icon:var(--tw-color-zinc-700)] dark:data-active:[--btn-icon:var(--tw-color-zinc-400)] dark:data-hover:[--btn-icon:var(--tw-color-zinc-400)]'
  ],
  plain: [
    // Base
    'border-transparent text-zinc-950 data-active:bg-zinc-950/5 data-hover:bg-zinc-950/5',
    // Dark mode
    'dark:text-white dark:data-active:bg-white/10 dark:data-hover:bg-white/10',
    // Icon
    '[--btn-icon:var(--tw-color-zinc-500)] data-active:[--btn-icon:var(--tw-color-zinc-700)] data-hover:[--btn-icon:var(--tw-color-zinc-700)] dark:[--btn-icon:var(--tw-color-zinc-500)] dark:data-active:[--btn-icon:var(--tw-color-zinc-400)] dark:data-hover:[--btn-icon:var(--tw-color-zinc-400)]'
  ],
  colors: {
    'dark/zinc': [
      'text-white [--btn-bg:var(--tw-color-zinc-900)] [--btn-border:var(--tw-color-zinc-950)]/90 [--btn-hover-overlay:var(--tw-color-white)]/10',
      'dark:text-white dark:[--btn-bg:var(--tw-color-zinc-600)] dark:[--btn-hover-overlay:var(--tw-color-white)]/5',
      '[--btn-icon:var(--tw-color-zinc-400)] data-active:[--btn-icon:var(--tw-color-zinc-300)] data-hover:[--btn-icon:var(--tw-color-zinc-300)]'
    ],
    light: [
      'text-zinc-950 [--btn-bg:white] [--btn-border:var(--tw-color-zinc-950)]/10 [--btn-hover-overlay:var(--tw-color-zinc-950)]/[2.5%] data-active:[--btn-border:var(--tw-color-zinc-950)]/15 data-hover:[--btn-border:var(--tw-color-zinc-950)]/15',
      'dark:text-white dark:[--btn-hover-overlay:var(--tw-color-white)]/5 dark:[--btn-bg:var(--tw-color-zinc-800)]',
      '[--btn-icon:var(--tw-color-zinc-500)] data-active:[--btn-icon:var(--tw-color-zinc-700)] data-hover:[--btn-icon:var(--tw-color-zinc-700)] dark:[--btn-icon:var(--tw-color-zinc-500)] dark:data-active:[--btn-icon:var(--tw-color-zinc-400)] dark:data-hover:[--btn-icon:var(--tw-color-zinc-400)]'
    ],
    'dark/white': [
      'text-white [--btn-bg:var(--tw-color-zinc-900)] [--btn-border:var(--tw-color-zinc-950)]/90 [--btn-hover-overlay:var(--tw-color-white)]/10',
      'dark:text-zinc-950 dark:[--btn-bg:white] dark:[--btn-hover-overlay:var(--tw-color-zinc-950)]/5',
      '[--btn-icon:var(--tw-color-zinc-400)] data-active:[--btn-icon:var(--tw-color-zinc-300)] data-hover:[--btn-icon:var(--tw-color-zinc-300)] dark:[--btn-icon:var(--tw-color-zinc-500)] dark:data-active:[--btn-icon:var(--tw-color-zinc-400)] dark:data-hover:[--btn-icon:var(--tw-color-zinc-400)]'
    ],
    dark: [
      'text-white [--btn-bg:var(--tw-color-zinc-900)] [--btn-border:var(--tw-color-zinc-950)]/90 [--btn-hover-overlay:var(--tw-color-white)]/10',
      'dark:[--btn-hover-overlay:var(--tw-color-white)]/5 dark:[--btn-bg:var(--tw-color-zinc-800)]',
      '[--btn-icon:var(--tw-color-zinc-400)] data-active:[--btn-icon:var(--tw-color-zinc-300)] data-hover:[--btn-icon:var(--tw-color-zinc-300)]'
    ],
    white: [
      'text-zinc-950 [--btn-bg:white] [--btn-border:var(--tw-color-zinc-950)]/10 [--btn-hover-overlay:var(--tw-color-zinc-950)]/[2.5%] data-active:[--btn-border:var(--tw-color-zinc-950)]/15 data-hover:[--btn-border:var(--tw-color-zinc-950)]/15',
      'dark:[--btn-hover-overlay:var(--tw-color-zinc-950)]/5',
      '[--btn-icon:var(--tw-color-zinc-400)] data-active:[--btn-icon:var(--tw-color-zinc-500)] data-hover:[--btn-icon:var(--tw-color-zinc-500)]'
    ],
    zinc: [
      'text-white [--btn-hover-overlay:var(--tw-color-white)]/10 [--btn-bg:var(--tw-color-zinc-600)] [--btn-border:var(--tw-color-zinc-700)]/90',
      'dark:[--btn-hover-overlay:var(--tw-color-white)]/5',
      '[--btn-icon:var(--tw-color-zinc-400)] data-active:[--btn-icon:var(--tw-color-zinc-300)] data-hover:[--btn-icon:var(--tw-color-zinc-300)]'
    ],
    indigo: [
      'text-white [--btn-hover-overlay:var(--tw-color-white)]/10 [--btn-bg:var(--tw-color-indigo-500)] [--btn-border:var(--tw-color-indigo-600)]/90',
      '[--btn-icon:var(--tw-color-indigo-300)] data-active:[--btn-icon:var(--tw-color-indigo-200)] data-hover:[--btn-icon:var(--tw-color-indigo-200)]'
    ],
    cyan: [
      'text-cyan-950 [--btn-bg:var(--tw-color-cyan-300)] [--btn-border:var(--tw-color-cyan-400)]/80 [--btn-hover-overlay:var(--tw-color-white)]/25',
      '[--btn-icon:var(--tw-color-cyan-500)]'
    ],
    red: [
      'text-white [--btn-hover-overlay:var(--tw-color-white)]/10 [--btn-bg:var(--tw-color-red-600)] [--btn-border:var(--tw-color-red-700)]/90',
      '[--btn-icon:var(--tw-color-red-300)] data-active:[--btn-icon:var(--tw-color-red-200)] data-hover:[--btn-icon:var(--tw-color-red-200)]'
    ],
    orange: [
      'text-white [--btn-hover-overlay:var(--tw-color-white)]/10 [--btn-bg:var(--tw-color-orange-500)] [--btn-border:var(--tw-color-orange-600)]/90',
      '[--btn-icon:var(--tw-color-orange-300)] data-active:[--btn-icon:var(--tw-color-orange-200)] data-hover:[--btn-icon:var(--tw-color-orange-200)]'
    ],
    amber: [
      'text-amber-950 [--btn-hover-overlay:var(--tw-color-white)]/25 [--btn-bg:var(--tw-color-amber-400)] [--btn-border:var(--tw-color-amber-500)]/80',
      '[--btn-icon:var(--tw-color-amber-600)]'
    ],
    yellow: [
      'text-yellow-950 [--btn-hover-overlay:var(--tw-color-white)]/25 [--btn-bg:var(--tw-color-yellow-300)] [--btn-border:var(--tw-color-yellow-400)]/80',
      '[--btn-icon:var(--tw-color-yellow-600)] data-active:[--btn-icon:var(--tw-color-yellow-700)] data-hover:[--btn-icon:var(--tw-color-yellow-700)]'
    ],
    lime: [
      'text-lime-950 [--btn-hover-overlay:var(--tw-color-white)]/25 [--btn-bg:var(--tw-color-lime-300)] [--btn-border:var(--tw-color-lime-400)]/80',
      '[--btn-icon:var(--tw-color-lime-600)] data-active:[--btn-icon:var(--tw-color-lime-700)] data-hover:[--btn-icon:var(--tw-color-lime-700)]'
    ],
    green: [
      'text-white [--btn-hover-overlay:var(--tw-color-white)]/10 [--btn-bg:var(--tw-color-green-600)] [--btn-border:var(--tw-color-green-700)]/90',
      '[--btn-icon:var(--tw-color-white)]/60 data-active:[--btn-icon:var(--tw-color-white)]/80 data-hover:[--btn-icon:var(--tw-color-white)]/80'
    ],
    emerald: [
      'text-white [--btn-hover-overlay:var(--tw-color-white)]/10 [--btn-bg:var(--tw-color-emerald-600)] [--btn-border:var(--tw-color-emerald-700)]/90',
      '[--btn-icon:var(--tw-color-white)]/60 data-active:[--btn-icon:var(--tw-color-white)]/80 data-hover:[--btn-icon:var(--tw-color-white)]/80'
    ],
    teal: [
      'text-white [--btn-hover-overlay:var(--tw-color-white)]/10 [--btn-bg:var(--tw-color-teal-600)] [--btn-border:var(--tw-color-teal-700)]/90',
      '[--btn-icon:var(--tw-color-white)]/60 data-active:[--btn-icon:var(--tw-color-white)]/80 data-hover:[--btn-icon:var(--tw-color-white)]/80'
    ],
    sky: [
      'text-white [--btn-hover-overlay:var(--tw-color-white)]/10 [--btn-bg:var(--tw-color-sky-500)] [--btn-border:var(--tw-color-sky-600)]/80',
      '[--btn-icon:var(--tw-color-white)]/60 data-active:[--btn-icon:var(--tw-color-white)]/80 data-hover:[--btn-icon:var(--tw-color-white)]/80'
    ],
    blue: [
      'text-white [--btn-hover-overlay:var(--tw-color-white)]/10 [--btn-bg:var(--tw-color-blue-600)] [--btn-border:var(--tw-color-blue-700)]/90',
      '[--btn-icon:var(--tw-color-blue-400)] data-active:[--btn-icon:var(--tw-color-blue-300)] data-hover:[--btn-icon:var(--tw-color-blue-300)]'
    ],
    violet: [
      'text-white [--btn-hover-overlay:var(--tw-color-white)]/10 [--btn-bg:var(--tw-color-violet-500)] [--btn-border:var(--tw-color-violet-600)]/90',
      '[--btn-icon:var(--tw-color-violet-300)] data-active:[--btn-icon:var(--tw-color-violet-200)] data-hover:[--btn-icon:var(--tw-color-violet-200)]'
    ],
    purple: [
      'text-white [--btn-hover-overlay:var(--tw-color-white)]/10 [--btn-bg:var(--tw-color-purple-500)] [--btn-border:var(--tw-color-purple-600)]/90',
      '[--btn-icon:var(--tw-color-purple-300)] data-active:[--btn-icon:var(--tw-color-purple-200)] data-hover:[--btn-icon:var(--tw-color-purple-200)]'
    ],
    fuchsia: [
      'text-white [--btn-hover-overlay:var(--tw-color-white)]/10 [--btn-bg:var(--tw-color-fuchsia-500)] [--btn-border:var(--tw-color-fuchsia-600)]/90',
      '[--btn-icon:var(--tw-color-fuchsia-300)] data-active:[--btn-icon:var(--tw-color-fuchsia-200)] data-hover:[--btn-icon:var(--tw-color-fuchsia-200)]'
    ],
    pink: [
      'text-white [--btn-hover-overlay:var(--tw-color-white)]/10 [--btn-bg:var(--tw-color-pink-500)] [--btn-border:var(--tw-color-pink-600)]/90',
      '[--btn-icon:var(--tw-color-pink-300)] data-active:[--btn-icon:var(--tw-color-pink-200)] data-hover:[--btn-icon:var(--tw-color-pink-200)]'
    ],
    rose: [
      'text-white [--btn-hover-overlay:var(--tw-color-white)]/10 [--btn-bg:var(--tw-color-rose-500)] [--btn-border:var(--tw-color-rose-600)]/90',
      '[--btn-icon:var(--tw-color-rose-300)] data-active:[--btn-icon:var(--tw-color-rose-200)] data-hover:[--btn-icon:var(--tw-color-rose-200)]'
    ]
  }
}

export type ButtonProps = (
  | { color?: keyof typeof styles.colors; outline?: never; plain?: never }
  | { color?: never; outline: true; plain?: never }
  | { color?: never; outline?: never; plain: true }
) & { className?: string; children: ReactNode } & (
    | Omit<HeadlessButtonProps, 'as' | 'className'>
    | Omit<ComponentPropsWithoutRef<typeof Link>, 'className'>
  )

export function Button({
  color = 'dark/zinc',
  outline,
  plain,
  className,
  children,
  ...props
}: ButtonProps) {
  const classes = clsx(
    className,
    styles.base,
    outline
      ? styles.outline
      : plain
      ? styles.plain
      : clsx(styles.solid, styles.colors[color])
  )

  return 'href' in props ? (
    <Link {...props} className={classes}>
      <TouchTarget>{children}</TouchTarget>
    </Link>
  ) : (
    <HeadlessButton
      {...(props as Omit<HeadlessButtonProps, 'as' | 'className'>)}
      className={clsx(classes, 'cursor-default')}
    >
      <TouchTarget>{children}</TouchTarget>
    </HeadlessButton>
  )
}
