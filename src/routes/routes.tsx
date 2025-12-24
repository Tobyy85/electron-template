import HomePage from '@/routes/Home'
import NotFoundPage from '@/routes/NotFound'

export const routes = [
    {
        path: '/',
        element: <HomePage />,
        errorElement: <NotFoundPage />,
    },
]
