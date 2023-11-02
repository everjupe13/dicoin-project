import './HomeDivisionsList.scss'

import { FC } from 'react'
import { Link } from 'react-router-dom'

import LogoRepairIconRaw from '@/assets/img/logo-repair.svg'
import LogoSoftwareIconRaw from '@/assets/img/logo-software.svg'
import LogoStudioIconRaw from '@/assets/img/logo-studio.svg'
import { ArrowUpRightIcon } from '@/components/shared/icons/ArrowUpRightIcon'

export const HomeDivisionsList: FC = () => {
  return (
    <div className="flex flex-col gap-y-60">
      <div className="home-divisions-list-item flex items-center gap-x-[120px] text-lightgray hover:text-white">
        <div className="w-[200px] flex-shrink-0">
          <img src={LogoStudioIconRaw} alt="" className="" />
        </div>
        <div className="flex-grow-1 flex items-center">
          <p className="text-inherit max-w-[640px] cursor-default transition text-regular-18">
            Разработка веб-сайтов и мобильных приложений, дизайн и брендинг
          </p>
        </div>
        <div className="ml-auto w-64 flex-shrink-0">
          <div className="flex h-64 w-64 select-none items-center justify-center rounded-[100%] bg-white/10 !leading-none text-green text-medium-14">
            вы тут
          </div>
        </div>
      </div>

      <div className="home-divisions-list-item flex items-center gap-x-[120px] text-lightgray hover:text-white">
        <div className="w-[200px] flex-shrink-0">
          <img src={LogoSoftwareIconRaw} alt="" className="" />
        </div>
        <div className="flex-grow-1 flex items-center">
          <p className="text-inherit max-w-[640px] cursor-default transition text-regular-18">
            Разработка профильных (CRM, ERP) и осраслевых систем (для
            автосервиса, для сервисного цеха)
          </p>
        </div>
        <div className="ml-auto w-64 flex-shrink-0">
          <Link
            to="/"
            className="icon-box flex h-64 w-64 select-none items-center justify-center rounded-[100%] bg-[#D9D9D9] transition active:translate-y-2 active:!bg-green-button-pressed"
          >
            <ArrowUpRightIcon className="h-20 w-20 fill-[#1D2020]" />
          </Link>
        </div>
      </div>

      <div className="home-divisions-list-item flex items-center gap-x-[120px] text-lightgray hover:text-white">
        <div className="w-[200px] flex-shrink-0">
          <img src={LogoRepairIconRaw} alt="" className="" />
        </div>
        <div className="flex-grow-1 flex items-center">
          <p className="text-inherit max-w-[640px] cursor-default transition text-regular-18">
            Ремонт и обслуживание техники, системное администрирование
          </p>
        </div>
        <div className="ml-auto w-64 flex-shrink-0">
          <Link
            to="/"
            className="icon-box flex h-64 w-64 select-none items-center justify-center rounded-[100%] bg-[#D9D9D9] transition active:translate-y-2 active:!bg-green-button-pressed"
          >
            <ArrowUpRightIcon className="h-20 w-20 fill-[#1D2020]" />
          </Link>
        </div>
      </div>
    </div>
  )
}
