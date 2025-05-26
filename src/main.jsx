import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './base.scss'
import { RouterProvider } from 'react-router'
import router from './router.jsx'
import { QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import queryClient from './QueryClient.js'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />
    <ReactQueryDevtools initialIsOpen={false}/>
      </QueryClientProvider>
  </StrictMode>,
)
