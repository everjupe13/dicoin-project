import { type InputProps as HeadlessInputProps } from '@headlessui/react'
import { useRef, useState } from 'react'

import { Input } from '@/components/shared/input'

export type InputOtpProps = {
  length?: number
  onChange?: (v: string) => void
} & Omit<HeadlessInputProps, 'as' | 'className' | 'onChange'>

export function InputOtp({ length = 5, onChange }: InputOtpProps) {
  const [values, setValues] = useState<string[]>(
    Array.from<''>({ length }).fill('')
  )
  const inputsRef = useRef<(HTMLInputElement | null)[]>([])

  const focusInput = (index: number) => {
    const input = inputsRef.current[index]
    if (input) input.focus()
  }

  const handleChange = (val: string, idx: number) => {
    if (!/^\d?$/.test(val)) return

    const updated = [...values]
    updated[idx] = val
    setValues(updated)
    onChange?.(updated.join(''))

    if (val && idx < length - 1) {
      focusInput(idx + 1)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent, idx: number) => {
    if (e.key === 'Backspace') {
      if (values[idx]) {
        const updated = [...values]
        updated[idx] = ''
        setValues(updated)
        onChange?.(updated.join(''))
      } else if (idx > 0) {
        focusInput(idx - 1)
      }
    } else if (e.key === 'ArrowLeft' && idx > 0) {
      focusInput(idx - 1)
    } else if (e.key === 'ArrowRight' && idx < length - 1) {
      focusInput(idx + 1)
    }
  }

  return (
    <div className="flex gap-x-3">
      {Array.from({ length }).map((_, i) => (
        <Input
          key={i}
          type="text"
          inputMode="numeric"
          maxLength={1}
          value={values[i]}
          ref={el => (inputsRef.current[i] = el)}
          onChange={e => handleChange(e.target.value, i)}
          onKeyDown={e => handleKeyDown(e, i)}
          className="w-10 text-center"
        />
      ))}
    </div>
  )
}
