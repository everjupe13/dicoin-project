import { DataInteractive as HeadlessDataInteractive } from '@headlessui/react'
import { ComponentPropsWithoutRef, ForwardedRef, forwardRef } from 'react'
import {
  Link as RouterLink,
  LinkProps as RouterLinkProps
} from 'react-router-dom'

export type LinkProps = RouterLinkProps & ComponentPropsWithoutRef<'a'>

export const Link = forwardRef(function Link(
  props: LinkProps,
  ref: ForwardedRef<HTMLAnchorElement>
) {
  return (
    <HeadlessDataInteractive>
      <RouterLink {...props} to={props.to || props.href || ''} ref={ref} />
    </HeadlessDataInteractive>
  )
})
