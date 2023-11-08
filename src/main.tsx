import '@/assets/styles/scss/index.scss'
import '@/assets/styles/scss/tailwind.scss'
import '@/assets/styles/scss/fonts.scss'
import '@/assets/styles/scss/custom-scrollbars.scss'

import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'

import router from '@/router/index.tsx'

ReactDOM.createRoot(document.querySelector('#root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
