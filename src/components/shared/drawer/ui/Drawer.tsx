import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { forwardRef, Fragment, ReactNode, useCallback, useEffect } from 'react'

import { cn } from '@/app/utils'

import { UseDrawerViewModel, useDrawerViewModel } from '../model/store'
import DrawerOverlay from './DrawerOverlay'

type Props = UseDrawerViewModel & {
  className?: string
  children?: ReactNode
  visibility?: boolean
  onClose?: () => void
}

const Drawer = forwardRef<HTMLDivElement, Props>(
  ({ className, children, visibility, onClose, name }, ref) => {
    const { viewModel } = useDrawerViewModel({ name })
    const handleSidebarClose = useCallback(
      () => viewModel.close(),
      [viewModel.close]
    )

    console.log('wewer')
    useEffect(() => {
      setTimeout(() => {
        console.log('opened')
        viewModel.open()
      }, 1000)
    }, [])

    return (
      <>
        <Transition appear show={viewModel.visibility} as={Fragment}>
          <Dialog as="div" onClose={handleSidebarClose}>
            <DrawerOverlay />

            <div className="fixed inset-0 bottom-0 z-[100] xs:top-62">
              <div className={cn('flex h-full max-h-full justify-end')}>
                <Transition.Child
                  as={Fragment}
                  enter="duration-300 delay-100 xs:delay-0"
                  enterFrom="translate-x-[100%] xs:translate-x-0 xs:translate-y-16 xs:opacity-0"
                  enterTo="translate-x-0 xs:translate-y-0"
                  leave="duration-300"
                  leaveTo="translate-x-[100%] xs:translate-x-0 xs:translate-y-16 xs:opacity-0"
                >
                  <Dialog.Panel
                    className={cn(
                      'relative flex h-full w-[790px] max-w-full cursor-auto flex-col overflow-y-auto bg-white xl:w-[580px] xs:w-full',
                      className
                    )}
                  >
                    <div
                      ref={ref}
                      className={cn(
                        'flex w-full items-center px-20 pb-30 pt-20',
                        'lg:px-30 lg:pb-24 lg:pt-42',
                        'xs:p-16 xs:pt-32'
                      )}
                    >
                      <Dialog.Title className="font-bold text-36 lg:text-28 xs:text-20">
                        {/* {title} */}
                      </Dialog.Title>

                      <button
                        title="Закрыть"
                        className={cn(
                          'ml-auto flex h-40 w-40 items-center justify-center rounded-100 bg-[rgba(96,107,118,0.10)] p-8 transition-colors xs:p-4',
                          'xs:h-28 xs:w-28'
                        )}
                        onClick={handleSidebarClose}
                      >
                        <XMarkIcon className="h-24 w-24" />
                      </button>
                    </div>

                    <div
                      className={cn(
                        'flex grow flex-col overflow-y-scroll pl-44 pr-14 lg:pl-30 lg:pr-16 xs:pl-16 xs:pr-4'
                      )}
                    >
                      <div className="mb-45 flex grow flex-col xs:mb-32">
                        {children}
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
      </>
    )
  }
)

Drawer.displayName = 'AppDrawer'

export default Drawer
