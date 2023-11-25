import { FC } from 'react'
import { Link } from 'react-router-dom'

import LogoIconSvg from '@/assets/svg/logo-frame.svg'

const Logo: FC = () => {
  return (
    <Link to="/" className="">
      <img src={LogoIconSvg} alt="dicoin" className="" />
    </Link>
  )
}

export default Logo
