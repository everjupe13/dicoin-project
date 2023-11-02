import { clsx } from 'clsx'
import { FC } from 'react'
import { Link } from 'react-router-dom'

interface IHomePortfolioCards {
  className?: string
}

export const HomePortfolioCards: FC<IHomePortfolioCards> = ({ className }) => {
  const PORTFOLIO_CARDS_DATA = [
    {
      id: 0,
      title: 'NFT Characters for one of big NFT project',
      tags: ['2d', 'Character'],
      img: new URL('@/assets/img/home-portfolio/1.png', import.meta.url).href
    },
    {
      id: 1,
      title: 'NFT Characters for one of big NFT project',
      tags: ['2d', 'Character'],
      img: new URL('@/assets/img/home-portfolio/2.png', import.meta.url).href
    },
    {
      id: 2,
      title: 'NFT Characters for one of big NFT project',
      tags: ['2d', 'Character'],
      img: new URL('@/assets/img/home-portfolio/3.png', import.meta.url).href
    },
    {
      id: 3,
      title: 'NFT Characters for one of big NFT project',
      tags: ['2d', 'Character'],
      img: new URL('@/assets/img/home-portfolio/4.png', import.meta.url).href
    },
    {
      id: 4,
      title: 'NFT Characters for one of big NFT project',
      tags: ['2d', 'Character'],
      img: new URL('@/assets/img/home-portfolio/5.png', import.meta.url).href
    },
    {
      id: 5,
      title: 'NFT Characters for one of big NFT project',
      tags: ['2d', 'Character'],
      img: new URL('@/assets/img/home-portfolio/6.png', import.meta.url).href
    }
  ]

  return (
    <div className={clsx('grid grid-cols-2 gap-x-20 gap-y-[140px]', className)}>
      {PORTFOLIO_CARDS_DATA &&
        PORTFOLIO_CARDS_DATA.map(card => (
          <div className="relative" key={card.id}>
            <div className="relative mb-20">
              <img className="z-1 relative" src={card.img} alt={card.title} />
              <Link
                to={'/case/' + card.id}
                className="z-2 absolute inset-0"
              ></Link>
            </div>
            <div className="relative">
              <h3 className="mb-20 text-medium-32">{card.title}</h3>
              <Link
                to={'/case/' + card.id}
                className="z-2 absolute inset-0"
              ></Link>
            </div>
            {card.tags && card.tags.length > 0 && (
              <div className="flex flex-wrap items-center gap-10">
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
        ))}
    </div>
  )
}
