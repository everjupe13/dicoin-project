import { zodResolver } from '@hookform/resolvers/zod'
import clsx from 'clsx'
import { type ReactNode } from 'react'
import {
  FormProvider,
  type SubmitHandler,
  useForm,
  type UseFormProps
} from 'react-hook-form'
import { infer as zodInfer, TypeOf, ZodTypeAny } from 'zod'

export interface FormProps<TSchema extends ZodTypeAny> {
  className?: string
  children?: ReactNode

  schema: TSchema
  options?: UseFormProps<zodInfer<TSchema>>
  onSubmit: SubmitHandler<zodInfer<TSchema>>
}

export function Form<TSchema extends ZodTypeAny>({
  className,
  children,

  schema,
  options,
  onSubmit
}: FormProps<TSchema>) {
  const methods = useForm<TypeOf<TSchema>>({
    resolver: zodResolver(schema),
    ...options,
    mode: options?.mode ?? 'onChange'
  })

  // TODO обновление данных формы из пропса
  // const formValues = methods.watch()

  // useEffect(() => {
  //   console.log(formValues)
  // }, [formValues])

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        className={clsx(className)}
      >
        {children}
      </form>
    </FormProvider>
  )
}
