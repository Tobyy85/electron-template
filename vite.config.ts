import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
    plugins: [react(), tailwindcss()],
    base: '/VAR_BASE_URL',
    resolve: {
        alias: {
            '@': '/src',
            '@components': '/src/components',
            '@pages': '/src/pages',
            '@hooks': '/src/hooks',
            '@utils': '/src/utils',
            '@types_': '/src/types', //! to avoid conflict with @types
            '@assets': '/src/assets',
        },
    },
})
