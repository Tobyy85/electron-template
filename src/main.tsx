import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/tailwind.css'
import { createBrowserRouter, createHashRouter, RouterProvider } from 'react-router-dom'

const routes = [
    {
        path: '/',
        element: <></>,
        errorElement: <></>,
    },
]

const router = import.meta.env.DEV ? createBrowserRouter(routes, { basename: '/' }) : createHashRouter(routes)

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
)
