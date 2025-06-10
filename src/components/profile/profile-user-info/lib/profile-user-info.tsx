// import { useAuthStore } from '@/providers/auth-provider'

export interface ProfileUserInfoProps {}

export function ProfileUserInfo() {
  // const { user } = useAuthStore()

  return (
    <div className="block h-[150px] w-[150px] overflow-hidden rounded-full">
      <img
        // src={user?.photoURL || ''}
        src=""
        className="pointer-events-none block rounded-full object-cover"
        width={200}
        height={200}
      />
    </div>
  )
}
