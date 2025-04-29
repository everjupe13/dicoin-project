import { Button } from '@/components/shared/button'
import { CheckBox } from '@/components/shared/checkbox'
import { Label } from '@/components/shared/fieldset'
import { Form, FormField } from '@/components/shared/form'
import { Input, InputGroup } from '@/components/shared/input'

export function AuthFormSingUp() {
  return (
    <section>
      <Form>
        <FormField>
          <InputGroup>
            <Label>Email</Label>
            <Input type="email" />
          </InputGroup>
          <InputGroup>
            <Label>Full name</Label>
            <Input type="text" />
          </InputGroup>
          <InputGroup>
            <Label>Password</Label>
            <Input type="password" />
          </InputGroup>
          <div className="flex justify-between">
            <div className="flex">
              <CheckBox />
              <span>Get emails about product updates and news.</span>
            </div>
          </div>
          <Button>Create account</Button>
          <div>
            <span>Already have an account?</span>
            <a href="/auth/signin" className="ml-5 text-white underline">
              Sign up
            </a>
          </div>
        </FormField>
      </Form>
    </section>
  )
}
