import clsx from 'clsx'

import { Description, Label } from '@/components/shared/fieldset'

import { CheckboxField } from './CheckboxField'
import { CheckboxMark, type CheckboxMarkProps } from './CheckboxMark'

export type CheckboxProps = CheckboxMarkProps & {
  label?: string
  description?: string

  className?: string
  fieldClassName?: string
  labelClassName?: string
  descriptionClassName?: string
}

export function Checkbox({
  disabled,
  label,
  description,

  className,
  fieldClassName,
  labelClassName,
  descriptionClassName,

  ...props
}: CheckboxProps) {
  return (
    <CheckboxField disabled={disabled} className={clsx(fieldClassName)}>
      <CheckboxMark {...props} className={clsx(className)} />

      {label && <Label className={clsx(labelClassName)}>{label}</Label>}
      {description && (
        <Description className={clsx(descriptionClassName)}>
          {description}
        </Description>
      )}
    </CheckboxField>
  )
}
