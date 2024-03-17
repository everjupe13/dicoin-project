import { FC } from 'react'

import { formadDate } from '@/utils/date-time'

type Props = {
  id: string
  avatar: string
  displayName: string
  name: string
  email: string
  userDate: string
}

const SubscribersCard: FC<Props> = props => {
  return (
    <li>
      <div className="flex gap-20">
        <div>
          <img className="h-100 w-100 rounded-full" src={props.avatar} alt="" />
        </div>
        <div>
          <div className="font-bold">{props.displayName}</div>
          <div>{props.name}</div>
          <div>{props.email}</div>
          <div>{formadDate(props.userDate)}</div>
        </div>
      </div>
    </li>
  )
}

export default SubscribersCard
