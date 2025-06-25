import { InputHTMLAttributes } from 'react'
import { useController, useFormContext } from 'react-hook-form'

import { InputGroup } from '@/components/shared/input'
import { InputOtp, InputOtpProps } from '@/components/shared/input-otp'

import { useFormField } from '../hooks/use-form-field'

export type FormInputOtpProps = InputHTMLAttributes<HTMLInputElement> &
  InputOtpProps

export function FormInputOtp({ length = 5, ...props }: FormInputOtpProps) {
  const { name } = useFormField()
  const { control, setValue, formState } = useFormContext()

  const { field, fieldState } = useController({
    control,
    name
  })

  const handleChange = (e: string) => {
    // Если значение совпадает по длине с OTP кодом, то сохраняем значение
    if (e.length === length) {
      return setValue(name, e)
    }

    // Если не значение не совпадает по длине с OTP кодом, то сбрасываем значение
    if (formState.defaultValues?.[name] !== field.value) {
      setValue(name, formState.defaultValues?.[name] ?? '')
    }
  }

  return (
    <InputGroup>
      <InputOtp
        id={name}
        {...props}
        length={length}
        value={field.value}
        disabled={field.disabled}
        invalid={fieldState.invalid}
        onChange={handleChange}
      />
    </InputGroup>
  )
}
