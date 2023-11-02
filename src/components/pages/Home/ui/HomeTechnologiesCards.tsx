import { clsx } from 'clsx'
import { FC } from 'react'

interface IHomeTechnologiesCards {
  className?: string
}

export const HomeTechnologiesCards: FC<IHomeTechnologiesCards> = ({
  className
}) => {
  const TECHNOLOGIES_CARDS_DATA = [
    {
      id: 0,
      title: 'Python',
      icon: new URL(
        '@/assets/img/home-technologies/python.svg',
        import.meta.url
      ).href
    },
    {
      id: 1,
      title: 'React',
      icon: new URL('@/assets/img/home-technologies/react.svg', import.meta.url)
        .href
    },
    {
      id: 2,
      title: 'Gatsby',
      icon: new URL(
        '@/assets/img/home-technologies/gatsby.svg',
        import.meta.url
      ).href
    },
    {
      id: 3,
      title: 'Tnw',
      icon: new URL('@/assets/img/home-technologies/tnw.svg', import.meta.url)
        .href
    }
  ]

  return (
    <div className={clsx('grid grid-cols-4 gap-x-20', className)}>
      {TECHNOLOGIES_CARDS_DATA &&
        TECHNOLOGIES_CARDS_DATA.map(card => (
          <div
            className="relative h-[345px] rounded-t-24 bg-gray p-40 text-lightgray transition hover:bg-green hover:text-black"
            key={card.id}
          >
            <div className="flex h-full items-center justify-center">
              <img src={card.icon} alt={card.title} />
            </div>
            <p className="text-inherit absolute bottom-40 left-40 text-medium-24">
              {card.title}
            </p>
          </div>
        ))}
    </div>
  )
}
