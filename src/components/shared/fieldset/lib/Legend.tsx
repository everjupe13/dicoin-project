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
        'data-disabled:opacity-50 font-semibold text-text-strong text-14 sm:text-16'
      )}
    />
  )
}
