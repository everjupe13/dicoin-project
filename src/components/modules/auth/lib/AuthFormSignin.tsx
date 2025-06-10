import { useState } from 'react'
import { z } from 'zod'

import { useAuth } from '@/api/modules/auth'
import { Button } from '@/components/shared/button'
import { Checkbox } from '@/components/shared/checkbox'
import { Form, FormField, FormInput } from '@/components/shared/form'
import { Strong, Text, TextLink } from '@/components/shared/text'
import { useToast } from '@/providers/toast-provider'
import { ROUTES } from '@/shared/const'

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
  const { mutateAsync: login, isPending } = loginMutation

  const handleSubmit = async (payload: FormSchema) => {
    const { error, data, message } = await login({
      email: payload.email,
      password: payload.password
    })

    if (data?.access_token) {
      localStorage.setItem('accessToken', data.access_token)
      location.assign('/')

      return
    }

    if (error) {
      return toast.add({
        type: 'error',
        message: message
      })
    }
  }

  return (
    <section>
      <Form
        schema={loginSchema}
        options={{ values: formData }}
        className="grid w-full max-w-sm grid-cols-1 gap-8"
        onSubmit={handleSubmit}
      >
        <FormField name="email" label="Email">
          <FormInput />
        </FormField>

        <FormField name="password" label="Пароль">
          <FormInput type="password" />
        </FormField>

        <div className="flex items-center justify-between">
          <Checkbox label="Запомнить" name="remember" />
          <Text>
            <TextLink to={ROUTES.AUTH.RESET_PASSWORD}>
              <Strong>Забыли пароль?</Strong>
            </TextLink>
          </Text>
        </div>

        <Button disabled={isPending} type="submit">
          Вход
        </Button>

        <Text>
          Еще нет аккаунта?{' '}
          <TextLink to={ROUTES.AUTH.SIGN_UP}>Создайте</TextLink>
        </Text>
      </Form>
    </section>
  )
}
