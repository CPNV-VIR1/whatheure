import { resolve } from 'path'
import { defineConfig } from 'vite'

const root = resolve('./')
const outDir = resolve(__dirname, 'public')

export default defineConfig({
    root,
    server: {
        host: '0.0.0.0',
        port: 5173,
    },
    assetsInclude: ['**/*.json'],
    build: {
        outDir,
        emptyOutDir: true,
        rollupOptions: {
            input: {
                main: resolve(root, 'index.html'),
            },
        },
    },
})