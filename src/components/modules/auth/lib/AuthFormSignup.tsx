import { useState } from 'react'
import { z } from 'zod'

// import { useAuth } from '@/api/modules/auth'
import { Button } from '@/components/shared/button'
import { Checkbox } from '@/components/shared/checkbox'
import { Form, FormField, FormInput } from '@/components/shared/form'

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

  // const { mutateAsync: login } = useAuth()

  const handleSubmit = async (_data: FormSchema) => {
    // const { error } = await login()
    // if (error) {
    //   toast.add({
    //     type: 'error',
    //     message: error.message,
    //     detail: error.detail
    //   })
    // }
    // console.log('Submit:', data)
  }

  return (
    <section>
      <Form
        onSubmit={handleSubmit}
        schema={signupSchema}
        options={{ values: formData }}
        className="space-y-32"
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
