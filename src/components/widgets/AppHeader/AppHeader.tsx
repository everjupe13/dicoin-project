import { clsx } from 'clsx'
import { FC, ReactNode } from 'react'
// import { NavLink } from 'react-router-dom'

// import LogoIconRaw from '@/assets/img/logo-main.svg'
// import { AppButton } from '@/components/shared/AppButton'

interface IAppHeader {
  children?: ReactNode
}

export const AppHeader: FC<IAppHeader> = () => {
  const imageUrl = ''
  return (
    <header className="flex w-full rounded-12 bg-[#1D232C] px-25 py-20">
      <div className="ml-auto">
        <div
          className={clsx(
            'flex h-40 w-40 items-center justify-center overflow-hidden rounded-full bg-lightgray',
            !imageUrl && 'animate-pulse'
          )}
        >
          <img
            src={imageUrl}
            alt=""
            className={clsx('block w-full object-cover', !imageUrl && 'hidden')}
          />
        </div>
      </div>
    </header>
  )
}
