import { clsx } from 'clsx'
import { FC } from 'react'

import { AppButton } from '@/components/shared/AppButton'

interface IHomeServicesCards {
  className?: string
}

export const HomeServicesCards: FC<IHomeServicesCards> = ({ className }) => {
  const SERVICES_CARDS_DATA = [
    {
      id: 0,
      title: 'Разработка веб-сайтов',
      costRaw: 'от 2000$  /  1 месяц',
      description:
        'Lorem ipsum dolor sit amet consectetur. Laoreet facilisis sed fames sed aliquam. Leo odio nulla a metus fringilla sollicitudin habitasse tellus.',
      tags: ['Лендинг', 'Корпоративный сайт', 'Интернет-магазин', 'Портал'],
      icon: new URL('@/assets/img/home-services-icon.svg', import.meta.url).href
    },
    {
      id: 1,
      title: 'Разработка мобильных приложений',
      costRaw: 'от 2000$  /  1 месяц',
      description:
        'Lorem ipsum dolor sit amet consectetur. Laoreet facilisis sed fames sed aliquam. Leo odio nulla a metus fringilla sollicitudin .',
      tags: ['PWA приложение (Android)', 'Нативное приложение (IOS, Android)'],
      icon: new URL('@/assets/img/home-services-icon.svg', import.meta.url).href
    },
    {
      id: 2,
      title: 'Дизайн',
      costRaw: 'от 2000$  /  1 месяц',
      description:
        'Lorem ipsum dolor sit amet consectetur. Laoreet facilisis sed fames sed aliquam. Leo odio nulla a metus fringilla sollicitudin .',
      tags: ['Логотип', 'Брендинг', '3D Моделирование', 'Анимации'],
      icon: new URL('@/assets/img/home-services-icon.svg', import.meta.url).href
    },
    {
      id: 3,
      title: 'Проекты на заказ',
      costRaw: 'от 2000$  /  1 месяц',
      description:
        'Lorem ipsum dolor sit amet consectetur. Laoreet facilisis sed fames sed aliquam. Leo odio nulla a metus fringilla sollicitudin habitasse tellus.',
      tags: ['Социальная сеть', 'Маркетплейс', 'Аукцион', 'Казино'],
      icon: new URL('@/assets/img/home-services-icon.svg', import.meta.url).href
    }
  ]

  return (
    <div className={clsx('grid grid-cols-2 gap-20', className)}>
      {SERVICES_CARDS_DATA &&
        SERVICES_CARDS_DATA.map(card => (
          <div
            className="relative flex flex-col justify-between rounded-t-24 bg-gray p-40"
            key={card.id}
          >
            <div className="mb-60">
              <div className="mb-30">
                <img className="" src={card.icon} alt="icon" />
              </div>
              <div className="relative mb-32">
                <h3 className="mb-15 text-medium-32">{card.title}</h3>
                <p className="mb-32 text-medium-16">{card.costRaw}</p>
                <p className="max-w-[460px] text-lightgray text-medium-16">
                  {card.description}
                </p>
              </div>
              {card.tags && card.tags.length > 0 && (
                <div className="flex flex-wrap items-center gap-8">
                  {card.tags.map(tag => (
                    <div
                      className="cursor-pointer rounded-full bg-gray-second px-16 py-8 leading-none text-lightgray text-medium-16 hover:text-green"
                      key={tag}
                      tabIndex={0}
                    >
                      {tag}
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div className="mt-auto">
              <AppButton
                variant="outlined"
                size="normal"
                className="w-full"
                link={true}
                to={'/service/' + card.id}
              >
                Перейти к услуге
              </AppButton>
            </div>
            {/* <Link
              to={'/service/' + card.id}
              className="z-2 absolute inset-0"
            ></Link> */}
          </div>
        ))}
    </div>
  )
}
