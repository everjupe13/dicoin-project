import { ChevronUpIcon, UserIcon } from '@heroicons/react/16/solid'
import { useLocation } from 'react-router-dom'

import { DropdownMenu } from '@/components/shared/dropdown-menu'
import {
  Sidebar,
  SidebarBody,
  SidebarFooter,
  SidebarHeader,
  SidebarItem,
  SidebarSection,
  SidebarSpacer
} from '@/components/shared/sidebar'
import { ROUTES } from '@/shared/const'

const sidebarItems = [
  {
    label: 'Дашборд',
    link: ROUTES.HOME
  },
  // {
  //   label: 'О нас',
  //   link: ROUTES.ABOUT
  // },
  {
    label: 'Расходы',
    link: ROUTES.SPENDINGS
  }
]

const profileDropdown = [
  {
    label: 'Профиль',
    link: ROUTES.PROFILE,
    icon: <UserIcon />
  }
  // {
  //   label: 'Настройки',
  //   link: ROUTES.SETTINGS
  // }
]

export function PageSidebar() {
  // TODO заменить компонент на NavLink который умеет определять активный роут самостоятельно
  const location = useLocation()
  const isActiveRoute = (routePath?: string) =>
    routePath !== undefined && location.pathname === routePath

  return (
    <Sidebar>
      <SidebarHeader>
        <SidebarItem href="/search" current={isActiveRoute('/search')}>
          Поиск
        </SidebarItem>
      </SidebarHeader>
      <SidebarBody>
        <SidebarSection>
          {sidebarItems.map((item, itemIdx) => (
            <SidebarItem
              key={itemIdx}
              href={item.link}
              current={isActiveRoute(item.link)}
            >
              {item.label}
            </SidebarItem>
          ))}
        </SidebarSection>
        <SidebarSpacer />
        <SidebarSection>
          <SidebarItem href="/about" current={isActiveRoute('/about')}>
            О нас
          </SidebarItem>
        </SidebarSection>
      </SidebarBody>
      <SidebarFooter>
        <DropdownMenu items={profileDropdown}>
          <span className="flex min-w-0 items-center gap-3">
            {/* <Avatar
              src="/profile-photo.jpg"
              className="size-10"
              square
              alt=""
            /> */}
            <span className="min-w-0">
              <span className="block truncate text-sm/5 font-medium text-zinc-950 dark:text-white">
                Erica
              </span>
              <span className="block truncate text-xs/5 font-normal text-zinc-500 dark:text-zinc-400">
                erica@example.com
              </span>
            </span>
          </span>
          <ChevronUpIcon className="h-16 w-16" />
        </DropdownMenu>
      </SidebarFooter>
    </Sidebar>
  )
}
