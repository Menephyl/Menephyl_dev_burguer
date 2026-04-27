import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { RouterProvider } from 'react-router-dom'
import { router } from './routes'

import GlobalStyle from './styles/globalStyles'
import { ToastContainer } from 'react-toastify'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    <GlobalStyle />

    <ToastContainer autoClose={3000} theme='dark' />
  </StrictMode>,
)
