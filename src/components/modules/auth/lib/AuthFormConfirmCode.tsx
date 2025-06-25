import { useState } from 'react'
import z from 'zod'

import { Button } from '@/components/shared/button'
import {
  Dialog,
  DialogBody,
  DialogDescription,
  DialogTitle
} from '@/components/shared/dialog'
import { Form, FormField, FormInputOtp } from '@/components/shared/form'
import { Strong, Text, TextLink } from '@/components/shared/text'
import { ROUTES } from '@/shared/const'

import { AuthFormWrapper } from './AuthFormWrapper'

const schema = z.object({
  code: z.string().email('Введите код')
})

type FormSchema = z.infer<typeof schema>

export function AuthFormConfirmCode() {
  const [isTelegramDialogOpen, setIsTelegramDialogOpen] = useState(true)
  const [formData] = useState<FormSchema>({
    code: ''
  })

  const handleTelegramDialogOpen = () => {
    setIsTelegramDialogOpen(true)
  }

  const handleSubmit = () => {}

  return (
    <AuthFormWrapper title="Проверочный код">
      <section>
        <Form
          schema={schema}
          options={{ values: formData }}
          className="grid w-full max-w-sm grid-cols-1 gap-8"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col gap-y-2">
            <Text>
              Для продолжения введите код, который пришел в{' '}
              <TextLink to={'#'} onClick={handleTelegramDialogOpen}>
                Telegram
              </TextLink>
            </Text>
          </div>

          <FormField name="code" label="Код">
            <FormInputOtp />
          </FormField>

          {/* <div className="flex items-center justify-end">
              <Text>
                <TextLink to={ROUTES.AUTH.RESET_PASSWORD}>
                  <Strong>Получить код</Strong>
                </TextLink>
              </Text>
            </div> */}

          <Button
            // disabled={isPending}
            type="submit"
          >
            Подтвердить
          </Button>

          <Text>
            Попали сюда случайно?{' '}
            <TextLink to={ROUTES.AUTH.SIGN_UP}>Вернитесь назад</TextLink>
          </Text>
        </Form>
      </section>

      <Dialog open={isTelegramDialogOpen} onClose={setIsTelegramDialogOpen}>
        <DialogTitle>Telegram</DialogTitle>
        <DialogDescription>
          <section className="flex flex-col gap-y-3">
            <Text>
              Чтобы начать управлять своими финасами необходимо привязать
              Telegram аккаунт. Это необходимо для использования приложения.
            </Text>

            <Text>
              <Strong>
                Получите проверочный код привязав свой аккаунт к нашему боту
              </Strong>
            </Text>
          </section>
        </DialogDescription>
        <DialogBody>
          <Button
            className="w-full"
            outline
            onClick={() => setIsTelegramDialogOpen(false)}
          >
            Привязать
          </Button>
        </DialogBody>
      </Dialog>
    </AuthFormWrapper>
  )
}
