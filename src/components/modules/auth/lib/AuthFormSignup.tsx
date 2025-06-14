import { useState } from 'react'
import { useNavigate } from 'react-router'
import { z } from 'zod'

import { useAuth } from '@/api/modules/auth'
import { Button } from '@/components/shared/button'
import { Checkbox } from '@/components/shared/checkbox'
import { Form, FormField, FormInput } from '@/components/shared/form'
import { Text, TextLink } from '@/components/shared/text'
import { useToast } from '@/providers/toast-provider'
import { ROUTES } from '@/shared/const'

const signupSchema = z.object({
  email: z.string().email('Невалидный email'),
  fullName: z.string().min(1, 'Значение обязательно'),
  password: z.string().min(6, 'Минимум 6 символов')
})

type FormSchema = z.infer<typeof signupSchema>

export function AuthFormSignUp() {
  const [formData] = useState<FormSchema>({
    email: '',
    fullName: '',
    password: ''
  })

  const navigate = useNavigate()
  const toast = useToast()
  const { signupMutation } = useAuth()
  const { mutateAsync: signUp, isPending } = signupMutation

  const handleSubmit = async (payload: FormSchema) => {
    const { error, data: _data } = await signUp({
      email: payload.email,
      fullName: payload.fullName,
      password: payload.password
    })

    if (error) {
      return toast.add({
        type: 'error',
        message: error.message
        // message: error.message,
        // detail: error.detail
      })
    }

    if (!error) {
      toast.add({
        type: 'success',
        message: 'Успешная регистрация'
        // message: error.message,
        // detail: error.detail
      })

      navigate(ROUTES.AUTH.SIGN_IN)
    }
  }

  return (
    <section>
      <Form
        schema={signupSchema}
        options={{ values: formData }}
        className="grid w-full max-w-sm grid-cols-1 gap-8"
        onSubmit={handleSubmit}
      >
        <FormField name="email" label="Email">
          <FormInput />
        </FormField>

        <FormField name="fullName" label="Имя">
          <FormInput />
        </FormField>

        <FormField name="password" label="Пароль">
          <FormInput type="password" />
        </FormField>

        <div className="flex justify-between">
          <Checkbox label="Подписаться на рассылку новостей" name="subscribe" />
        </div>

        <Button disabled={isPending} type="submit">
          Зарегистрироваться
        </Button>

        <Text>
          Уже есть аккаунт?{' '}
          <TextLink to={ROUTES.AUTH.SIGN_IN}>Войдите</TextLink>
        </Text>
      </Form>
    </section>
  )
}
