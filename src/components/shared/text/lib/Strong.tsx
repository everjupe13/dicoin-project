import clsx from 'clsx'

export function Strong({
  className,
  ...props
}: React.ComponentPropsWithoutRef<'strong'>) {
  return (
    <strong
      {...props}
      className={clsx(className, 'font-medium text-zinc-950 dark:text-white')}
    />
  )
}
