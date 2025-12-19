import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import Login from './containers/Login'
import GlobalStyle from './styles/globalStyles'
import { ToastContainer } from 'react-toastify'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalStyle />

    <Login />
    <ToastContainer autoClose={3000} theme='dark' />
  </StrictMode>,
)
