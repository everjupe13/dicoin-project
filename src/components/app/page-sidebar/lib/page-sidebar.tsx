import { useLocation } from 'react-router-dom'

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
      <SidebarFooter></SidebarFooter>
    </Sidebar>
  )
}
