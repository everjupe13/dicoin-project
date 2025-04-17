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
        <div className="lg:rounded-lg lg:shadow-xs flex grow items-center justify-center p-40 lg:bg-white lg:ring-1 lg:ring-zinc-950/5 md:p-24 dark:lg:bg-zinc-900 dark:lg:ring-white/10">
          <Outlet />
        </div>
      </main>
    </>
  )
}
