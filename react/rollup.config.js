// rollup.config.js
import federation from '@originjs/vite-plugin-federation'
export default {
    input: 'src/S1.js',
    plugins: [
        federation({
            name: 'host-app',
            remotes: {
                remote_app: "http://localhost:3001/assets/S1.jsx",
            },
            shared: ['react']
        })
    ]
}