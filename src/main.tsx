import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { ConfigProvider } from 'antd'
import App from './App.tsx'

const queryClient = new QueryClient()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: '#485563',
            borderRadius: 2,
          },
        }}
      >
        <App />
      </ConfigProvider>
      <ReactQueryDevtools />
    </QueryClientProvider>
  </StrictMode>
)
