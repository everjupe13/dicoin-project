import { Transition } from '@headlessui/react'
import { FC } from 'react'

const SidebarOverlay: FC = () => {
  return (
    <Transition.Child
      enter="duration-75 xs:duration-300"
      enterFrom="opacity-0"
      leave="duration-75 delay-300 xs:duration-300 xs:delay-0"
      leaveTo="opacity-0"
    >
      <div className="fixed inset-0 bg-black/50 xs:bg-transparent" />
    </Transition.Child>
  )
}

export default SidebarOverlay
