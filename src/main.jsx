/*import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes'
import AppProvider from './hooks'
import GlobalStyle from './styles/globalStyles'
import { ToastContainer } from 'react-toastify'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppProvider>
      <RouterProvider router={router} />
      <GlobalStyle />
      <ToastContainer autoClose={3000} theme='dark' />
    </AppProvider>
  </StrictMode>,
)
*/

import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

import AppProvider from './hooks'
import { router } from './routes';
import GlobalStyles from './styles/globalStyles';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppProvider>
      <RouterProvider router={router} />
      <GlobalStyles />
      <ToastContainer autoClose={3000} theme={'dark'} />
    </AppProvider>
  </React.StrictMode>,
)