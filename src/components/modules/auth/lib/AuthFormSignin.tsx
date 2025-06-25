import { useState } from 'react'
import { z } from 'zod'

import { useAuthLoginMutation } from '@/api/modules/auth'
import { Button } from '@/components/shared/button'
import { Checkbox } from '@/components/shared/checkbox'
import { Form, FormField, FormInput } from '@/components/shared/form'
import { Strong, Text, TextLink } from '@/components/shared/text'
import { useToast } from '@/providers/toast-provider'
import { ROUTES } from '@/shared/const'
import { textSignIn } from '@/shared/const'
import { utilLocaleString } from '@/shared/utils/locale-string'

import { AuthFormWrapper } from './AuthFormWrapper'

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
  const { mutateAsync: login, isPending } = useAuthLoginMutation()

  const handleSubmit = async (payload: FormSchema) => {
    const { error, data } = await login({
      email: payload.email,
      password: payload.password
    })

    if (data?.accessToken) {
      location.assign('/')

      return
    }

    if (error) {
      return toast.add({
        type: 'error',
        message: error.message
      })
    }
  }

  return (
    <AuthFormWrapper title={utilLocaleString(textSignIn)}>
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
    </AuthFormWrapper>
  )
}
