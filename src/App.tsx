import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import Header from './components/Header/Header.tsx'
import CategoryPage from './pages/CategoryPage/CategoryPage.tsx'
import HomePage from './pages/HomePage.tsx'

const Layout = () => (
  <>
    <Header />
    <Outlet />
  </>
)

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/category/:categoryName', element: <CategoryPage /> },
    ],
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App
