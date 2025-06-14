import { AxiosError } from 'axios'
import { useEffect, useState } from 'react'

import SubscribersCard from './SubscribersCard'

type SubscriberType = {
  id: string
  displayName: string
  name: string
  avatar: string
  email: string
  userDate: string
}

type SubscribersResponseType = {
  error: null | AxiosError
  data: SubscriberType[]
}

const SubscribersList = () => {
  const [subscribers, setSubscribers] = useState<
    SubscribersResponseType['data'] | null
  >(null)

  const [_fetchError, setFetchError] = useState<
    SubscribersResponseType['error'] | null
  >(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:4545/subscribers')
        const result = (await response.json()) as SubscribersResponseType

        setSubscribers(result.data)
      } catch (error) {
        setFetchError(error as AxiosError)
        // eslint-disable-next-line no-console
        console.error('Error fetching data:', error)
      }
    }

    fetchData()
  }, [])

  return (
    <div>
      {subscribers ? (
        <ul className="gap-30 flex flex-col">
          {subscribers.map(item => (
            <SubscribersCard
              key={item.id}
              id={item.id}
              avatar={item.avatar}
              displayName={item.displayName}
              name={item.name}
              email={item.email}
              userDate={item.userDate}
            />
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  )
}

export default SubscribersList
