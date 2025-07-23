import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/tailwind.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'


const router = createBrowserRouter(
    [
        {
            path: '/',
            element: <></>,
            errorElement: <></>,
        },
    ],
    { basename: import.meta.env.BASE_URL || '/' }
)

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>,
)
