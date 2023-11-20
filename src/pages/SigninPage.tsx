import { FC } from 'react'
import { Link } from 'react-router-dom'

export const SigninPage: FC = () => {
  return (
    <>
      <p>signin</p>
      <Link to="/protected" className="underline">
        to protected
      </Link>
    </>
  )
}
