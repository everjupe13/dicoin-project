import { FC } from 'react'

import { FormContext } from './AppForm.store'
import { AppFormView } from './AppFormView'

export const AppForm: FC = () => {
  return (
    <>
      <FormContext.Provider value={'dark'}>
        <AppFormView></AppFormView>
      </FormContext.Provider>
    </>
  )
}
