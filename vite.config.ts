import { defineConfig } from 'vite'

export default defineConfig({
    base: '/ahmed-ayob-portofolio-with-ts/',
    build: {
        rollupOptions: {
            input: {
                main: './index.html',
                about: './src/pages/aboutPage/index.html',
                works: './src/pages/works/index.html',
                contact: './src/pages/contactPage/index.html',
            },
        },
    },
})
