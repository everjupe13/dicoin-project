import { useState } from 'react'
import { z } from 'zod'

import { useAuth } from '@/api/modules/auth'
import { Button } from '@/components/shared/button'
import { Form, FormField, FormInput } from '@/components/shared/form'
import { useToast } from '@/providers/toast-provider'

const loginSchema = z.object({
  email: z.string().email('Невалидный email'),
  password: z.string().min(6, 'Минимум 6 символов')
})

type FormSchema = z.infer<typeof loginSchema>

export function AuthFormSignIn() {
  const [formData] = useState<FormSchema>({
    email: '',
    password: ''
  })

  const toast = useToast()
  const { loginMutation } = useAuth()
  const { mutateAsync: login } = loginMutation

  const handleSubmit = async (payload: FormSchema) => {
    const {
      error,
      data: _data,
      message
    } = await login({
      email: payload.email,
      password: payload.password
    })

    if (error) {
      toast.add({
        type: 'error',
        message: message
      })
    }

    console.log('procceed login')
  }

  return (
    <section>
      <Form
        schema={loginSchema}
        options={{ values: formData }}
        className="space-y-32"
        onSubmit={handleSubmit}
      >
        <div className="space-y-32">
          <FormField name="email" label="Email">
            <FormInput />
          </FormField>

          <FormField name="password" label="Пароль">
            <FormInput type="password" />
          </FormField>
        </div>

        <Button type="submit">Вход</Button>

        <div>
          <span>Нет аккаунта?</span>
          <a href="/auth/signup" className="ml-5 text-white underline">
            Создайте
          </a>
        </div>
      </Form>
    </section>
  )
}
