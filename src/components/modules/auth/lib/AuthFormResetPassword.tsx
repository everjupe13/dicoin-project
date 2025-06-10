import { useState } from 'react'
import { z } from 'zod'

// import { useAuth } from '@/api/modules/auth'
import { Button } from '@/components/shared/button'
import { Form, FormField, FormInput } from '@/components/shared/form'
import { Text, TextLink } from '@/components/shared/text'
import { useToast } from '@/providers/toast-provider'
import { ROUTES } from '@/shared/const'

const schema = z.object({
  email: z.string().email('Невалидный email')
})

type FormSchema = z.infer<typeof schema>

export function AuthFormResetPassword() {
  const [formData] = useState<FormSchema>({
    email: ''
  })

  const toast = useToast()
  // const { loginMutation } = useAuth()
  // const { mutateAsync: login, isPending } = loginMutation

  const handleSubmit = async (_payload: FormSchema) => {
    // const { error, data, message } = await login({
    //   email: payload.email,
    // })

    // if (data?.access_token) {
    //   localStorage.setItem('accessToken', data.access_token)
    //   location.assign('/')

    //   return
    // }

    // if (error) {
    //   return toast.add({
    //     type: 'error',
    //     message: message
    //   })
    // }

    return toast.add({
      type: 'error',
      message: 'Что-то пошло не так'
    })
  }

  return (
    <section>
      <Form
        schema={schema}
        options={{ values: formData }}
        className="grid w-full max-w-sm grid-cols-1 gap-8"
        onSubmit={handleSubmit}
      >
        <Text>
          Введите почту, которая привязана к вашему аккаунту и мы отправим вам
          ссылку на восстановление пароля
        </Text>

        <FormField name="email" label="Email">
          <FormInput />
        </FormField>

        <Button
          // disabled={isPending}
          type="submit"
        >
          Восстановить пароль
        </Button>

        <Text>
          Еще нет аккаунта?{' '}
          <TextLink to={ROUTES.AUTH.SIGN_UP}>Создайте</TextLink>
        </Text>
      </Form>
    </section>
  )
}
