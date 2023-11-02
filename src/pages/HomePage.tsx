import { FC } from 'react'

import {
  HomeDivisionsList,
  HomePortfolioCards,
  HomeServicesCards,
  HomeTechnologiesCards
} from '@/components/screens/Home'
import { AppButton } from '@/components/shared/AppButton'
import { AppTitle } from '@/components/shared/AppTitle'

export const HomePage: FC = () => {
  // const as = ''

  return (
    <>
      <section className="section-paddings">
        <div className="container">
          <div className="mb-80 max-w-[1000px]">
            <p className="mb-24 leading-none text-medium-32">Кто мы?</p>
            <h1 className="mb-24 leading-none text-medium-48">
              <span className="text-green">Onside</span> – это креативная
              студия, которая оживляет бренды с помощью искусства, дизайна и
              технологий.
            </h1>
          </div>
          <HomePortfolioCards className="mb-80" />
          <div className="flex justify-center">
            <AppButton size="large">Все проекты</AppButton>
          </div>
        </div>
      </section>

      <section className="home-page-services main-border-style section-paddings border-t-2">
        <div className="container">
          <AppTitle className="mb-60">Услуги</AppTitle>
          <HomeServicesCards />
        </div>
      </section>

      <section className="main-border-style section-paddings border-t-2">
        <div className="container">
          <AppTitle className="mb-60">Преимущества</AppTitle>
        </div>
      </section>

      <section className="home-page-result bg-green py-[155px]">
        <div className="container">
          <div className="flex flex-col items-center gap-y-80">
            <div className="flex flex-col items-center gap-y-24">
              <h3 className="text-[40px] font-medium leading-none text-black">
                Не устроил результат?
              </h3>
              <h2 className="text-[72px] font-semibold leading-none text-black">
                Вёрнем Вам полную сумму
              </h2>
            </div>
            <AppButton size="large" variant="secondary">
              Работа
            </AppButton>
          </div>
        </div>
      </section>

      <section className="main-border-style section-paddings">
        <div className="container">
          <AppTitle className="mb-60">Наши технологии</AppTitle>
          <HomeTechnologiesCards />
        </div>
      </section>

      <section className="main-border-style section-paddings border-t-2">
        <div className="container">
          <AppTitle className="mb-60">Наши подразделения</AppTitle>
          <div className="mb-80 max-w-[640px]">
            <p className="text-medium-24">
              Мы большая компания, которая расширяется в своих полномочиях и
              оказывет разные услуги
            </p>
          </div>
          <HomeDivisionsList />
        </div>
      </section>
    </>
  )
}
