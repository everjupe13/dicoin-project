import { useState } from 'react'
import { z } from 'zod'

import { useAuth } from '@/api/modules/auth'
import { Button } from '@/components/shared/button'
import { Checkbox } from '@/components/shared/checkbox'
import { Form, FormField, FormInput } from '@/components/shared/form'
import { useToast } from '@/providers/toast-provider'

const signupSchema = z.object({
  email: z.string().email('Невалидный email'),
  fullName: z.string().min(1, 'Значение обязательно'),
  password: z.string().min(6, 'Минимум 6 символов')
})

type FormSchema = z.infer<typeof signupSchema>

export function AuthFormSingUp() {
  const [formData] = useState<FormSchema>({
    email: '',
    fullName: '',
    password: ''
  })

  const toast = useToast()
  const { loginMutation } = useAuth()
  const { mutateAsync: login } = loginMutation

  const handleSubmit = async (payload: FormSchema) => {
    const { error, data } = await login({
      email: payload.email,
      password: payload.password
    })

    if (error) {
      toast.add({
        type: 'error',
        message: error
        // message: error.message,
        // detail: error.detail
      })
    }

    console.log('Submit:', data)
  }

  return (
    <section>
      <Form
        schema={signupSchema}
        options={{ values: formData }}
        className="space-y-32"
        onSubmit={handleSubmit}
      >
        <div className="space-y-32">
          <FormField name="email" label="Email">
            <FormInput />
          </FormField>

          <FormField name="fullName" label="Ваше имя">
            <FormInput />
          </FormField>

          <FormField name="password" label="Пароль">
            <FormInput type="password" />
          </FormField>
        </div>

        <div className="flex justify-between">
          <div className="flex">
            <Checkbox label="Подписаться на рассылку" name="subscribe" />
          </div>
        </div>
        <Button>Create account</Button>
        <div>
          <span>Уже есть аккаунт?</span>
          <a href="/auth/signin" className="ml-5 text-white underline">
            Войдите
          </a>
        </div>
      </Form>
    </section>
  )
}
