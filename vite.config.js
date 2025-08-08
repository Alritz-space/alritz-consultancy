import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  // Set correct base path for GitHub Pages deployment
  base: '/alritz-consultancy/',

  // Include React plugin for JSX support and HMR
  plugins: [react()],

  // Optional: Externalize packages if needed during CI build
  build: {
    rollupOptions: {
      external: ["react-icons/fa"],
    },
  },
});
