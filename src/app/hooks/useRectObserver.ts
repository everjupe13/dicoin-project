import { once } from 'lodash-es'
import { useEffect, useState } from 'react'

interface useRectObserver<T> {
  elementRef: T | null
  setElementRef: (e: (T & HTMLElement) | null) => void

  elementWidth: number
  elementHeight: number

  ping: () => void
}

export function useRectObserver<T>(): useRectObserver<T> {
  const [elementWidth, setElementWidth] = useState(0)
  const [elementHeight, setElementHeight] = useState(0)
  const [elementRef, setElementRef] = useState<(T & HTMLElement) | null>(null)

  useEffect(() => {
    const listenerFn = () => {
      if (elementRef) {
        setElementHeight(elementRef.clientHeight ?? 0)
        setElementWidth(elementRef.clientWidth ?? 0)
      }
    }

    once(listenerFn)()
    window.addEventListener('resize', listenerFn)

    return () => {
      window.removeEventListener('resize', listenerFn)
    }
  }, [elementRef])

  const handlePing = () => {
    const listenerFn = () => {
      if (elementRef) {
        setElementHeight(elementRef.clientHeight ?? 0)
        setElementWidth(elementRef.clientWidth ?? 0)
      }
    }

    once(listenerFn)()
  }

  return {
    elementRef,
    setElementRef,

    elementWidth,
    elementHeight,

    ping: handlePing
  }
}
