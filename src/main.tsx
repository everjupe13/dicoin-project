import '@/plugins/global-scripts'
import '@/plugins/global-styles'

import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { v4 } from 'uuid'

import router from '@/router/index.tsx'

ReactDOM.createRoot(document.querySelector('#root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)

Array.from({ length: 5 }).forEach(_ => {
  // eslint-disable-next-line no-console
  console.log(v4())
})
