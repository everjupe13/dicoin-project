import { Outlet } from 'react-router-dom'

export function AuthLayout() {
  return (
    <>
      <main className="relatvie main z-[1] ml-[240px] mt-[100px]">
        <div className="container">
          <Outlet />
        </div>
      </main>
    </>
  )
}
