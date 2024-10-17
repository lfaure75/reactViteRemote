import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import {federation} from "@module-federation/vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'reactNewViteRemote',
      getPublicPath: 'return "http://localhost:4173/"',
      manifest : {
        filePath : './assets/',
        fileName: 'remoteReactViteManifest.json'
      },
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
