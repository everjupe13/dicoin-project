import { Button } from '@/components/shared/button'
import { CheckBox } from '@/components/shared/checkbox'
import { Label } from '@/components/shared/fieldset'
import { Form, FormField } from '@/components/shared/form'
import { Input, InputGroup } from '@/components/shared/input'

export function AuthFormSignIn() {
  return (
    <section>
      <Form>
        <FormField>
          <InputGroup>
            <Label>Email</Label>
            <Input type="email" />
          </InputGroup>
          <InputGroup>
            <Label>Password</Label>
            <Input type="password" />
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
            <a href="/auth/signup" className="ml-5 text-white underline">
              Sign up
            </a>
          </div>
        </FormField>
      </Form>
    </section>
  )
}
