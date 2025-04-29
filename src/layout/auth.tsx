import { Outlet } from 'react-router-dom'

export function AuthLayout() {
  return (
    <>
      {/* <main className="relatvie main z-[1]">
        <div className="container">
          <Outlet />
        </div>
      </main> */}

      <main className="flex min-h-dvh flex-col p-8">
        <div className="lg:ring-1ring-zinc-950/5 flex grow items-center justify-center  rounded-10 p-6 lg:p-10 dark:bg-zinc-900 dark:ring-white/10">
          <Outlet />
        </div>
      </main>
    </>
  )
}
