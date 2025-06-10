import { Outlet } from 'react-router-dom'

export function AuthLayout() {
  return (
    <>
      <main className="flex min-h-dvh flex-col p-2">
        <div className="lg:rounded-lg lg:shadow-xs flex grow items-center justify-center bg-zinc-950/5 p-6 lg:bg-white lg:p-10 lg:ring-1 lg:ring-zinc-950/5 dark:lg:bg-zinc-900 dark:lg:ring-white/10">
          <Outlet />
        </div>
      </main>
    </>
  )
}
