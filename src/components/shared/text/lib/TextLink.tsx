import clsx from 'clsx'

import { Link } from '@/components/shared/link'

export function TextLink({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof Link>) {
  return (
    <Link
      {...props}
      className={clsx(
        className,
        'data-hover:decoration-zinc-950 dark:data-hover:decoration-white text-zinc-950 underline decoration-zinc-950/50 dark:text-white dark:decoration-white/50'
      )}
    />
  )
}
