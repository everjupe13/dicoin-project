import {
  Checkbox as HeadlessCheckbox,
  type CheckboxProps as HeadlessCheckboxProps
} from '@headlessui/react'
import { clsx } from 'clsx'

const colors = {
  'dark/zinc': [
    '[--checkbox-check:var(--color-white)] [--checkbox-checked-bg:var(--tw-color-zinc-900)] [--checkbox-checked-border:var(--tw-color-zinc-950)]/90',
    'dark:[--checkbox-checked-bg:var(--tw-color-zinc-600)]'
  ],
  'dark/white': [
    '[--checkbox-check:var(--color-white)] [--checkbox-checked-bg:var(--tw-color-zinc-900)] [--checkbox-checked-border:var(--tw-color-zinc-950)]/90',
    'dark:[--checkbox-check:var(--tw-color-zinc-900)] dark:[--checkbox-checked-bg:var(--color-white)] dark:[--checkbox-checked-border:var(--tw-color-zinc-950)]/15'
  ],
  white:
    '[--checkbox-check:var(--tw-color-zinc-900)] [--checkbox-checked-bg:var(--color-white)] [--checkbox-checked-border:var(--tw-color-zinc-950)]/15',
  dark: '[--checkbox-check:var(--color-white)] [--checkbox-checked-bg:var(--tw-color-zinc-900)] [--checkbox-checked-border:var(--tw-color-zinc-950)]/90',
  zinc: '[--checkbox-check:var(--color-white)] [--checkbox-checked-bg:var(--tw-color-zinc-600)] [--checkbox-checked-border:var(--tw-color-zinc-700)]/90',
  red: '[--checkbox-check:var(--color-white)] [--checkbox-checked-bg:var(--tw-color-red-600)] [--checkbox-checked-border:var(--tw-color-red-700)]/90',
  orange:
    '[--checkbox-check:var(--color-white)] [--checkbox-checked-bg:var(--tw-color-orange-500)] [--checkbox-checked-border:var(--tw-color-orange-600)]/90',
  amber:
    '[--checkbox-check:var(--color-amber-950)] [--checkbox-checked-bg:var(--tw-color-amber-400)] [--checkbox-checked-border:var(--tw-color-amber-500)]/80',
  yellow:
    '[--checkbox-check:var(--color-yellow-950)] [--checkbox-checked-bg:var(--tw-color-yellow-300)] [--checkbox-checked-border:var(--tw-color-yellow-400)]/80',
  lime: '[--checkbox-check:var(--color-lime-950)] [--checkbox-checked-bg:var(--tw-color-lime-300)] [--checkbox-checked-border:var(--tw-color-lime-400)]/80',
  green:
    '[--checkbox-check:var(--color-white)] [--checkbox-checked-bg:var(--tw-color-green-600)] [--checkbox-checked-border:var(--tw-color-green-700)]/90',
  emerald:
    '[--checkbox-check:var(--color-white)] [--checkbox-checked-bg:var(--tw-color-emerald-600)] [--checkbox-checked-border:var(--tw-color-emerald-700)]/90',
  teal: '[--checkbox-check:var(--color-white)] [--checkbox-checked-bg:var(--tw-color-teal-600)] [--checkbox-checked-border:var(--tw-color-teal-700)]/90',
  cyan: '[--checkbox-check:var(--color-cyan-950)] [--checkbox-checked-bg:var(--tw-color-cyan-300)] [--checkbox-checked-border:var(--tw-color-cyan-400)]/80',
  sky: '[--checkbox-check:var(--color-white)] [--checkbox-checked-bg:var(--tw-color-sky-500)] [--checkbox-checked-border:var(--tw-color-sky-600)]/80',
  blue: '[--checkbox-check:var(--color-white)] [--checkbox-checked-bg:var(--tw-color-blue-600)] [--checkbox-checked-border:var(--tw-color-blue-700)]/90',
  indigo:
    '[--checkbox-check:var(--color-white)] [--checkbox-checked-bg:var(--tw-color-indigo-500)] [--checkbox-checked-border:var(--tw-color-indigo-600)]/90',
  violet:
    '[--checkbox-check:var(--color-white)] [--checkbox-checked-bg:var(--tw-color-violet-500)] [--checkbox-checked-border:var(--tw-color-violet-600)]/90',
  purple:
    '[--checkbox-check:var(--color-white)] [--checkbox-checked-bg:var(--tw-color-purple-500)] [--checkbox-checked-border:var(--tw-color-purple-600)]/90',
  fuchsia:
    '[--checkbox-check:var(--color-white)] [--checkbox-checked-bg:var(--tw-color-fuchsia-500)] [--checkbox-checked-border:var(--tw-color-fuchsia-600)]/90',
  pink: '[--checkbox-check:var(--color-white)] [--checkbox-checked-bg:var(--tw-color-pink-500)] [--checkbox-checked-border:var(--tw-color-pink-600)]/90',
  rose: '[--checkbox-check:var(--color-white)] [--checkbox-checked-bg:var(--tw-color-rose-500)] [--checkbox-checked-border:var(--tw-color-rose-600)]/90'
}

type Color = keyof typeof colors

export interface CheckboxMarkProps
  extends Omit<HeadlessCheckboxProps, 'as' | 'className'> {
  color?: Color
  className?: string
}

export function CheckboxMark({
  color = 'dark/zinc',
  className,
  ...props
}: CheckboxMarkProps) {
  return (
    <>
      <HeadlessCheckbox
        data-slot="control"
        {...props}
        className={clsx(className, 'group inline-flex focus:outline-none')}
      >
        <span
          className={clsx(
            // Basic layout
            'relative isolate flex size-16 items-center justify-center rounded-5 sm:size-18',
            // Background color + shadow applied to inset pseudo element, so shadow blends with border in light mode
            'before:absolute before:inset-0 before:-z-10 before:rounded-4 before:bg-white before:shadow-sm',
            // Background color when checked
            'group-[&[data-checked]]:before:bg-[var(--checkbox-checked-bg)]',
            // Background color is moved to control and shadow is removed in dark mode so hide `before` pseudo
            'dark:before:hidden',
            // Background color applied to control in dark mode
            'dark:bg-white/5 dark:group-[&[data-checked]]:bg-[var(--checkbox-checked-bg)]',
            // Border
            'border border-zinc-950/15 group-[&[data-checked]]:border-transparent group-[&[data-hover]]:border-zinc-950/30 group-[&[data-hover]]:group-[&[data-checked]]:border-transparent group-[&[data-checked]]:bg-[var(--checkbox-checked-border)]',
            'dark:border-white/15 dark:group-[&[data-checked]]:border-white/5 dark:group-[&[data-hover]]:border-white/30 dark:group-[&[data-hover]]:group-[&[data-checked]]:border-white/5',
            // Inner highlight shadow
            'after:absolute after:inset-0 after:rounded-4 after:shadow-[inset_0_1px_--theme(--color-white/15%)]',
            'dark:after:-inset-px dark:after:hidden dark:after:rounded-5 dark:group-[&[data-checked]]:after:block',
            // Focus ring
            'group-[&[data-focus]]:outline group-[&[data-focus]]:outline-2 group-[&[data-focus]]:outline-offset-2 group-[&[data-focus]]:outline-blue-500',
            // Disabled state
            'group-[&[data-disabled]]:opacity-50',
            'group-[&[data-disabled]]:border-zinc-950/25 group-[&[data-disabled]]:bg-zinc-950/5 group-[&[data-disabled]]:[--checkbox-check:var(--tw-color-zinc-950)/50] group-[&[data-disabled]]:before:bg-transparent',
            'dark:group-[&[data-disabled]]:border-white/20 dark:group-[&[data-disabled]]:bg-white/[2.5%] dark:group-[&[data-disabled]]:[--checkbox-check:var(--color-white)/50] dark:group-[&[data-checked]]:group-[&[data-disabled]]:after:hidden',

            colors[color]
          )}
        >
          <svg
            className="h-14 w-14 stroke-[var(--checkbox-check)] opacity-0 group-[&[data-checked]]:opacity-100 sm:size-16"
            viewBox="0 0 14 14"
            fill="none"
          >
            {/* Checkmark icon */}
            <path
              className="opacity-100 group-[&[data-indeterminate]]:opacity-0"
              d="M3 8L6 11L11 3.5"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* Indeterminate icon */}
            <path
              className="opacity-0 group-[&[data-indeterminate]]:opacity-100"
              d="M3 7H11"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </HeadlessCheckbox>
    </>
  )
}
