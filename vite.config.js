import { resolve } from 'path'
import { defineConfig } from 'vite'

const root = resolve('./public/')
const outDir = resolve(__dirname, 'public')

export default defineConfig({
    root,
    server: {
        host: true,
        port: 8888,
    },
    assetsInclude: ['frontend/public/**'],
    build: {
        outDir,
        emptyOutDir: true,
        rollupOptions: {
            input: {
                main: resolve(root, 'index.ejs'),
            },
        },
    },
})
