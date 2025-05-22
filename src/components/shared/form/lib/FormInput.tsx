import { InputHTMLAttributes } from 'react'
import { useFormContext } from 'react-hook-form'

import { Input, InputGroup } from '@/components/shared/input'

import { useFormField } from '../hooks/use-form-field'

export type FormInputProps = InputHTMLAttributes<HTMLInputElement>

export function FormInput(props: FormInputProps) {
  const { name } = useFormField()
  const { register } = useFormContext()

  return (
    <InputGroup>
      <Input id={name} {...register(name)} {...props} />
    </InputGroup>
  )
}
