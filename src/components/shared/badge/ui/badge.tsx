import clsx from 'clsx'
import { ReactNode } from 'react'

import { utilGetCapitalizeString } from '@/shared/utils/get-capitalize-string'

import type { BadgeVariant } from '../types/enums'
import styles from './badge.module.scss'

export interface BadgeProps {
  text?: string
  children?: ReactNode
  variant?: BadgeVariant
}

export function Badge({ text, children, variant = 'primary' }: BadgeProps) {
  const content = text || children

  if (content === undefined) {
    return null
  }

  return (
    <div
      className={clsx(
        'inline-flex max-w-max rounded-6 px-10 py-7',
        styles[`variant${utilGetCapitalizeString(variant)}`]
      )}
    >
      <p className="font-inter font-medium text-10">{content}</p>
    </div>
  )
}
