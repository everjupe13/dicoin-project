import { Button } from '@/components/shared/button'
import { CheckBox } from '@/components/shared/checkbox'
import { Label } from '@/components/shared/fieldset'
import { Form, FormField } from '@/components/shared/form'
import { Input, InputGroup } from '@/components/shared/input'
import { textAuthFormTitle } from '@/shared/const'
import { utilLocaleString } from '@/shared/utils/locale-string'

export interface AuthProps {
  /**
   *
   * @deprecated
   * @defaultValue `undefined`
   * @description This prop is deprecated and will be removed in the next major release. Use `children` instead.
   * @see {@link AuthProps.children}
   */
  title?: string
  /**
   * @description The content of the component.
   * @defaultValue `undefined`
   * @example
   * ```tsx
   * <Auth>
   *   <h1>Welcome to the Auth component!</h1>
   * </Auth>
   * ```
   * @see {@link AuthProps.title}
   */
  children?: React.ReactNode
  /**
   * @description The class name for the component.
   * @defaultValue `undefined`
   * @example
   * ```tsx
   * <Auth className="bg-red-500">
   *   <h1>Welcome to the Auth component!</h1>
   * </Auth>
   * ```
   * @see {@link AuthProps.className}
   */
  className?: string
}

export function Auth(_props: AuthProps) {
  return (
    <section className="w-full max-w-[380px] p-2">
      <div>
        <h1 className="font-semibold text-text text-24 dark:text-white">
          {utilLocaleString(textAuthFormTitle)}
        </h1>
      </div>

      <Form>
        <FormField>
          <InputGroup>
            <Label>Email</Label>
            <Input />
          </InputGroup>
          <InputGroup>
            <Label>Password</Label>
            <Input />
          </InputGroup>
          <div className="flex justify-between">
            <div className="flex">
              <CheckBox />
              <span>Remember me</span>
            </div>
            <a href="#" className=" text-white underline">
              Forgot password?
            </a>
          </div>
          <Button>Login</Button>
          <div>
            <span>Don’t have an account?</span>
            <a href="#" className="ml-5 text-white underline">
              Sign up
            </a>
          </div>
        </FormField>
      </Form>
      {/* <p>signin</p> */}
      {/* <Button
        variant="secondary"
        size="normal"
        className="mb-10"
        onClick={handleAuth}
      >
        Google
      </Button> */}
      {/* <Link to="/protected" className="underline">
        to protected
      </Link> */}
    </section>
  )
}
