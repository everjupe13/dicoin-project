import { useCallback, useState } from 'react'

interface UseDisclosureInterface {
  isOpen: boolean
  open: () => void
  close: () => void
  toggle: () => void
}

export function useDisclosure(initial = false): UseDisclosureInterface {
  const [isOpen, setIsOpen] = useState(initial)

  const open = useCallback(() => setIsOpen(true), [])
  const close = useCallback(() => setIsOpen(false), [])
  const toggle = useCallback(() => setIsOpen(state => !state), [])

  return { isOpen, open, close, toggle }
}
