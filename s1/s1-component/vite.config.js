import { defineConfig } from 'vite'
import federation from "@originjs/vite-plugin-federation";
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/

export default defineConfig({
    plugins: [
        react(),
        federation({
            name: 'remote-app',
            filename: 'S1.js',
            // Modules to expose
            exposes: {
                './S1': './src/S1',
            },
            shared: ['react', 'react-dom']
        })
    ],
    build: {
      target: 'esnext', //browsers can handle the latest ES features
    }
})