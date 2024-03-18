import clsx from 'clsx'
import { FC, ReactNode } from 'react'
import { Link } from 'react-router-dom'

type Props = {
  className?: string
  children?: ReactNode
  href?: string
}

const SidebarNavListItem: FC<Props> = ({ className, children, href }) => {
  return (
    <li
      className={clsx(
        'flex items-center p-10 font-semibold text-white transition duration-200 text-16 hover:opacity-90 active:opacity-80',
        className
      )}
    >
      {href ? (
        <Link to={href} className="block flex-grow">
          {children}
        </Link>
      ) : (
        children
      )}
    </li>
  )
}

export default SidebarNavListItem
