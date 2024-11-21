import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import Breadcrumb from './components/Breadcrumb/Breadcrumb.tsx'
import Header from './components/Header/Header.tsx'
import CategoryPage from './pages/CategoryPage/CategoryPage.tsx'
import HomePage from './pages/HomePage.tsx'

const Layout = () => (
  <>
    <Header />
    <Breadcrumb />
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
