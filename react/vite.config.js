import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
    plugins: [
        react(),
        federation({
            name: 'host-app',
            remotes: {
                remoteApp: "http://localhost:3001/assets/S1.js",
                remoteApp2: "http://localhost:3002/assets/S2.js",
            },
            shared: ['react', 'react-dom']
        })
    ]
})

