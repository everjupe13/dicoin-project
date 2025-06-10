import {
  Legend as HeadlessLegend,
  type LegendProps as HeadlessLegendProps
} from '@headlessui/react'
import clsx from 'clsx'

export type LegendProps = { className?: string } & Omit<
  HeadlessLegendProps,
  'as' | 'className'
>

export function Legend({ className, ...props }: LegendProps) {
  return (
    <HeadlessLegend
      data-slot="legend"
      {...props}
      className={clsx(
        className,
        'data-disabled:opacity-50 text-base/6 font-semibold text-zinc-950 sm:text-sm/6 dark:text-white'
      )}
    />
  )
}
