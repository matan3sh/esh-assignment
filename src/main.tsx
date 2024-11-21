import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { ConfigProvider } from 'antd'
import { NuqsAdapter } from 'nuqs/adapters/react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

const queryClient = new QueryClient()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <NuqsAdapter>
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
      </NuqsAdapter>
      <ReactQueryDevtools />
    </QueryClientProvider>
  </StrictMode>
)
