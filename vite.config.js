import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import {federation} from "@module-federation/vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'reactNewViteRemote',
      filename: 'remoteReactNewViteEntry.js',
      // Modules to expose
      exposes: {
        './Module': './src/App.jsx',
      },
      shared: ['react', 'react-dom']
    }),
  ],
  build: {
    target: 'esnext',
    minify: false,
    cssCodeSplit: false,
  },
})
