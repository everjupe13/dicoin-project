import { utilLocaleString } from '@/shared/utils/locale-string'

interface titleAuth {
  ru: string
  en: string
}

export interface AuthProps {
  title?: titleAuth
  children?: React.ReactNode
  className?: string
}

export function AuthFormWrapper(_props: AuthProps) {
  return (
    <section className="w-full max-w-[380px] p-2">
      <div>
        <h1 className="font-semibold text-text text-24 dark:text-white">
          {utilLocaleString(_props.title)}
        </h1>
        {_props.children}
      </div>
    </section>
  )
}
