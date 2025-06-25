// import { useTelegramConnectionLink } from '@/api/modules/telegram'
import { ProfileUserInfo } from '@/components/profile/profile-user-info'

export function ProfilePage() {
  // const a = useTelegramConnectionLink()

  return (
    <div>
      <h1>Профиль</h1>
      <div>
        <ProfileUserInfo />
      </div>
    </div>
  )
}
