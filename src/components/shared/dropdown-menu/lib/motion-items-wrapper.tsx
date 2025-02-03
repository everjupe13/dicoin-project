import { motion } from 'framer-motion'
import { forwardRef, ReactNode } from 'react'

export interface MotionItemsWrapperProps {
  children: ReactNode
  initial?: Record<string, number | string>
  animate?: Record<string, number | string>
  exit?: Record<string, number | string>
  className?: string
}
export const MotionItemsWrapper = forwardRef<
  HTMLDivElement,
  MotionItemsWrapperProps
>(function MotionItemsWrapper(props, ref) {
  return (
    <motion.div ref={ref} {...props} transition={{ duration: 0.15 }}>
      {props.children}
    </motion.div>
  )
})
