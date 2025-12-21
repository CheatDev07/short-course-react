// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App'
import AboutPage from './pages/About'
import ContactPage from './pages/Contact'
import NotFoundPage from './pages/NotFound'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>
  },
  {
    path:'/about',
    element:<AboutPage/>
  },
  {
    path:'/contact',
    element: <ContactPage/>
  },
  {
    path: '*',
    element: <NotFoundPage/>
  }
])

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  //   <App />
  // </StrictMode>,
  <RouterProvider router={router}/>
)
