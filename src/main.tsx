import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import './styles/tailwind.css'

import HomePage from '@/pages/HomePage'
import NotFoundPage from '@/pages/NotFoundPage'

const router = createBrowserRouter(
    [
        {
            path: '/',
            element: <HomePage />,
            errorElement: <NotFoundPage />,
        },
    ],
    { basename: import.meta.env.BASE_URL || '/' }
)

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
)
