import { useState } from 'react'

import { Button } from '../../button'
import { Input, InputGroup } from '../../input/index'

interface DataFormProps {
  id: number
  head: string
  placeholder: string
  type:
    | 'email'
    | 'number'
    | 'password'
    | 'search'
    | 'tel'
    | 'text'
    | 'url'
    | 'date'
}

export function Form() {
  const [value, setValue] = useState<{ [key: number]: string }>({})
  const [errors, setErrors] = useState<{ [key: number]: string }>({})

  const DataForm: DataFormProps[] = [
    { id: 1, type: 'text', head: 'Название', placeholder: 'Введите название' },
    {
      id: 2,
      type: 'number',
      head: 'Сумма оплаты',
      placeholder: 'Введите сумму'
    },
    { id: 3, type: 'date', head: 'Дата оплаты', placeholder: 'Введите дату' },
    {
      id: 4,
      type: 'text',
      head: 'Тип списания',
      placeholder: 'Повторяющееся, Единоразовое'
    }
  ]

  function onChange(id: number, value: string) {
    setValue(prev => ({ ...prev, [id]: value }))
    setErrors(prev => ({ ...prev, [id]: '' }))
  }

  function validateForm() {
    const newErrors: { [key: number]: string } = {}

    DataForm.forEach(input => {
      const val = value[input.id] || ''

      if (!val.trim()) {
        newErrors[input.id] = 'Поле не может быть пустым'
      } else if (input.type === 'email' && !/^\S+@\S+\.\S+$/.test(val)) {
        newErrors[input.id] = 'Некорректный email'
      } else if (input.type === 'number' && Number.isNaN(Number(val))) {
        newErrors[input.id] = 'Введите число'
      }
    })

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  function handleSubmit() {
    if (validateForm()) {
      console.log('Отправленные данные:', value)
    } else {
      console.log('Форма содержит ошибки')
    }
  }
  return (
    <>
      <InputGroup>
        {DataForm.map(input => (
          <div key={input.id} className="mt-20">
            <p>{input.head}</p>
            <Input
              className="invalid mt-8"
              type={input.type}
              placeholder={input.placeholder}
              value={value[input.id] || ''}
              onChange={e => onChange(input.id, e.target.value)}
              data-invalid={errors[input.id] ? true : undefined}
            />
            {errors[input.id] && (
              <p className="mt-2 text-red-500">{errors[input.id]}</p>
            )}
          </div>
        ))}
      </InputGroup>
      <div className="mt-20">
        <Button onClick={handleSubmit}>Отправить</Button>
      </div>
    </>
  )
}
